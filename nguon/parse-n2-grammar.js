/**
 * Parse scraped Riki N2 grammar markdown into draft entries.
 * Usage: node nguon/parse-n2-grammar.js
 */
const fs = require("fs");
const path = require("path");

const md = fs.readFileSync(path.join(__dirname, "..", "ngu_phap_n2.md"), "utf8");
const lines = md.split(/\r?\n/);
let start = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("Từ vựng trong bài")) {
    start = i + 1;
    break;
  }
}

const raw = lines
  .slice(start)
  .map((l) => l.trim())
  .filter((l) => l && !/^[\.。]+$/.test(l));

function hasJp(s) {
  return /[ぁ-んァ-ン一-龯]/.test(s);
}
function isViMeaning(s) {
  if (hasJp(s) && /[～~VＮN]/.test(s) && s.length < 40) return false;
  return /^(không|chỉ|dù|cho dù|sau khi|tuy|mặc dù|nếu|có |đạt |nhấn|đưa|điều|một |vừa |hay |như |chắc|đáng|ý nghĩa|cấu trúc|diễn tả|dùng khi|thường|hoàn toàn|nhân tiện|mặt khác|giả sử|buộc|khó|tốt nhất|hơn nữa|tức là|hoặc|kể từ|nhờ|sắp|đúng|vốn|chính vì|so với|đằng nào|nghe nói|thay vì|đối với|dành cho|nhằm|đành|tự nhiên|luôn|thường xuyên|suốt|theo |dưới )/i.test(
    s
  );
}
function isExampleJa(s) {
  if (!hasJp(s)) return false;
  if (/^[～~]/.test(s) && s.length < 25 && !/。/.test(s)) return false;
  return /。/.test(s) || s.length >= 12;
}
function isPattern(line) {
  if (!line || line.startsWith("→") || line.startsWith("→")) return false;
  if (/^Ý nghĩa:|^Cấu trúc:|^＝/.test(line)) return false;
  if (/^[0-9]+[\.\、）)]\s*/.test(line) && !/^[0-9]+[\.\、）)].*[～~]/.test(line)) {
    // numbered sense like "1. Khoảng" — not a pattern head
    if (!hasJp(line) || line.length > 50) return false;
  }
  if (/^[①②③④⑤１２]/.test(line) && !hasJp(line.slice(0, 3))) return false;
  if (line.startsWith("→")) return false;

  // clear pattern markers
  if (/^[～~]/.test(line)) return true;
  if (/^(V|N|A|Ａ)[０-９0-9１-２]?/.test(line) && line.length <= 45) return true;
  if (/^(Động từ|普通|N \+|A は)/.test(line)) return true;

  // short JP/grammar-looking head without sentence end
  if (hasJp(line) && line.length <= 40 && !/。/.test(line) && !isViMeaning(line)) {
    // exclude pure example fragments
    if (/^(彼|彼女|私|今日|明日|この|その|あの|日本|会社|仕事|会議)/.test(line) && line.length > 15)
      return false;
    return true;
  }

  // latin/katakana short heads like そもそも mixed — skip pure VI
  if (!hasJp(line) && line.length <= 30 && /[A-Za-z]/.test(line) && !isViMeaning(line)) {
    // e.g. "OK" unlikely; skip
    return false;
  }
  return false;
}

const entries = [];
let cur = null;
function push() {
  if (cur && cur.pattern) entries.push(cur);
  cur = null;
}

for (let i = 0; i < raw.length; i++) {
  const line = raw[i];
  if (isPattern(line)) {
    // avoid treating continuation structure lines as new if previous just started
    push();
    cur = {
      pattern: line.replace(/^~/, "～"),
      meanings: [],
      structures: [],
      examples: [],
      notes: [],
    };
    continue;
  }
  if (!cur) continue;

  if (/^Cấu trúc:/i.test(line) || /^Cấu trúc：/i.test(line)) {
    cur.structures.push(line.replace(/^Cấu trúc[:：]\s*/i, ""));
    continue;
  }
  if (/^Ý nghĩa:/i.test(line) || /^Ý nghĩa：/i.test(line)) {
    cur.meanings.push(line.replace(/^Ý nghĩa[:：]\s*/i, ""));
    continue;
  }
  if (line.startsWith("→") || line.startsWith("→")) {
    const vi = line.replace(/^[→→]\s*/, "");
    if (cur.examples.length) {
      const last = cur.examples[cur.examples.length - 1];
      if (!last.vi) last.vi = vi;
      else cur.notes.push(vi);
    } else {
      cur.meanings.push(vi);
    }
    continue;
  }
  if (isExampleJa(line)) {
    cur.examples.push({ ja: line, vi: "" });
    continue;
  }
  if (isViMeaning(line) || (!hasJp(line) && line.length > 2)) {
    cur.meanings.push(line);
    continue;
  }
  if (hasJp(line) && line.length <= 50) {
    cur.structures.push(line);
  } else {
    cur.notes.push(line);
  }
}
push();

// dedupe by pattern (keep richer)
const map = new Map();
for (const e of entries) {
  const key = e.pattern.replace(/\s+/g, "");
  const prev = map.get(key);
  if (!prev) {
    map.set(key, e);
    continue;
  }
  if (e.examples.length > prev.examples.length || e.meanings.join("").length > prev.meanings.join("").length) {
    map.set(key, e);
  }
}
const unique = [...map.values()];

const outDir = path.join(__dirname, "n2-grammar-chunks");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "parsed-raw.json"), JSON.stringify(unique, null, 2));

const size = 35;
const chunks = [];
for (let i = 0; i < unique.length; i += size) {
  const chunk = unique.slice(i, i + size).map((e, idx) => ({
    draftId: i + idx + 1,
    pattern: e.pattern,
    meaningDraft: e.meanings.join(" / ").slice(0, 400),
    structureDraft: e.structures.join(" ; ").slice(0, 200),
    exampleDrafts: e.examples.slice(0, 4),
    notes: e.notes.slice(0, 3),
  }));
  const idx = String(chunks.length + 1).padStart(2, "0");
  const p = path.join(outDir, `input-${idx}.json`);
  fs.writeFileSync(p, JSON.stringify(chunk, null, 2));
  chunks.push({ idx, path: p, count: chunk.length });
}
fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(chunks, null, 2));
console.log("parsed unique", unique.length, "chunks", chunks.length);
console.log(
  "sample",
  JSON.stringify(unique.slice(0, 3), null, 2)
);
console.log(
  "with examples",
  unique.filter((e) => e.examples.length).length,
  "with meaning",
  unique.filter((e) => e.meanings.length).length
);

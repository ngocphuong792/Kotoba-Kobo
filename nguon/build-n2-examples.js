/**
 * Merge HQ N2 example chunks into examples-data.js
 * and strip N2 collocation seeds from vocab-data.js.
 *
 * Usage: node nguon/build-n2-examples.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dir = path.join(__dirname, "n2-example-chunks");
const files = fs
  .readdirSync(dir)
  .filter((f) => f.startsWith("output-") && f.endsWith(".json"))
  .sort();

const merged = {};
const problems = [];
for (const f of files) {
  let obj;
  try {
    obj = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  } catch (e) {
    problems.push(f + ": " + e.message);
    continue;
  }
  for (const [id, arr] of Object.entries(obj)) {
    if (!Array.isArray(arr) || arr.length !== 5) {
      problems.push(f + ":" + id + " length");
      continue;
    }
    merged[id] = arr.map((x) => ({ ja: String(x.ja).trim(), vi: String(x.vi).trim() }));
  }
}

global.window = {};
eval(fs.readFileSync(path.join(root, "vocab-data.js"), "utf8"));
const n2 = window.VOCAB_DATA.items.filter((i) => i.t === "n2");
const missing = n2.filter((i) => !merged[i.id]).map((i) => i.id);
if (missing.length) {
  console.error("Missing examples for", missing.length, "ids", missing.slice(0, 10));
  process.exit(1);
}

for (const item of window.VOCAB_DATA.items) {
  if (item.t === "n2" && item.seed) delete item.seed;
}

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(window.VOCAB_DATA) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(merged) + ";\n");
console.log("Merged", Object.keys(merged).length, "N2 words × 5 examples");
if (problems.length) console.log("Problems:", problems);

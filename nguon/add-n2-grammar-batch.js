/**
 * Add grammar points from ngu_phap_n2.md into theme n2_grammar.
 * Usage: node nguon/add-n2-grammar-batch.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(root, "vocab-data.js"), "utf8"));
eval(fs.readFileSync(path.join(root, "examples-data.js"), "utf8"));

const data = window.VOCAB_DATA;
const EXAMPLES = window.EXAMPLES_DATA;
const theme = data.themes.find((t) => t.id === "n2_grammar");
if (!theme) throw new Error("n2_grammar theme missing");

const NEW = [
  {
    w: "～かえって",
    r: "文の途中・文頭で用いる（期待と逆の結果）",
    m: "Trái lại, ngược lại (kết quả trái với kỳ vọng, thường xấu hơn hoặc bất ngờ).",
    examples: [
      { ja: "薬を飲んだら、かえって体調が悪くなった。", vi: "Uống thuốc xong, trái lại còn thấy người tệ hơn." },
      { ja: "近道のつもりだったが、かえって時間がかかった。", vi: "Định đi đường tắt, trái lại còn mất nhiều thời gian hơn." },
    ],
  },
  {
    w: "～を前にして",
    r: "N＋を前にして",
    m: "Trước (sự kiện/thời điểm sắp tới); khi đối diện với…",
    examples: [
      { ja: "面接を前にして、とても緊張している。", vi: "Trước buổi phỏng vấn, tôi đang rất căng thẳng." },
      { ja: "試合を前にして、選手たちは集中力を高めている。", vi: "Trước trận đấu, các vận động viên đang nâng cao sự tập trung." },
    ],
  },
  {
    w: "～を基にして",
    r: "N＋を基（もと）にして",
    m: "Dựa trên…, lấy… làm cơ sở để làm việc gì.",
    examples: [
      { ja: "アンケート結果を基にして改善策を考えた。", vi: "Chúng tôi dựa trên kết quả khảo sát để nghĩ biện pháp cải thiện." },
      { ja: "このドラマは実話を基にして作られた。", vi: "Bộ drama này được làm dựa trên câu chuyện có thật." },
    ],
  },
  {
    w: "～一方だ",
    r: "Vる＋一方だ",
    m: "Cứ ngày càng… (biến đổi một chiều, thường tăng/giảm liên tục theo hướng nhất định).",
    examples: [
      { ja: "物価は上がる一方だ。", vi: "Giá cả cứ ngày càng tăng." },
      { ja: "最近、体調が悪くなる一方だ。", vi: "Gần đây sức khỏe cứ ngày càng tệ đi." },
    ],
  },
  {
    w: "～がち",
    r: "N／Vます（ます形の語幹）＋がち",
    m: "Dễ…, hay…, có xu hướng… (thường là xu hướng không mong muốn).",
    examples: [
      { ja: "冬は風邪を引きがちだ。", vi: "Mùa đông dễ bị cảm." },
      { ja: "忙しいと食事を抜きがちになる。", vi: "Khi bận thì dễ bỏ bữa." },
    ],
  },
  {
    w: "～ぐらいなら",
    r: "普通形＋ぐらいなら（くらいなら）",
    m: "Nếu phải… đến mức đó thì thà…; thà… còn hơn…",
    examples: [
      { ja: "そんなに謝るぐらいなら、最初から丁寧にやればよかった。", vi: "Nếu phải xin lỗi đến thế thì thà từ đầu làm cẩn thận còn hơn." },
      { ja: "電車で2時間もかかるぐらいなら、ホテルに泊まったほうがいい。", vi: "Nếu đi tàu mất tới 2 tiếng thì thà ở khách sạn còn hơn." },
    ],
  },
  {
    w: "～うえに",
    r: "普通形＋うえに",
    m: "Hơn nữa, thêm vào đó… (bổ sung thêm yếu tố cùng chiều).",
    examples: [
      { ja: "このレストランはおいしいうえに、値段も安い。", vi: "Nhà hàng này ngon, hơn nữa giá cũng rẻ." },
      { ja: "道に迷ったうえに、雨まで降ってきた。", vi: "Lạc đường, hơn nữa trời còn đổ mưa." },
    ],
  },
];

const added = [];
const skipped = [];

for (const e of NEW) {
  const key = e.w.replace(/\s/g, "");
  const exists = data.items.find((i) => i.t === "n2_grammar" && i.w.replace(/\s/g, "") === key);
  if (exists) {
    skipped.push(e.w);
    continue;
  }
  const id = "v" + String(data.items.length + 1).padStart(4, "0");
  data.items.push({
    id,
    w: e.w,
    r: e.r,
    m: e.m,
    t: "n2_grammar",
    s: "Ngữ pháp N2",
  });
  EXAMPLES[id] = e.examples.map((x) => ({ ja: x.ja, vi: x.vi }));
  added.push({ id, w: e.w });
}

theme.count = data.items.filter((i) => i.t === "n2_grammar").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");

// append to nguon/n2-grammar.json if present
const grammarPath = path.join(root, "nguon", "n2-grammar.json");
if (fs.existsSync(grammarPath)) {
  const gjson = JSON.parse(fs.readFileSync(grammarPath, "utf8"));
  for (const a of added) {
    const e = NEW.find((x) => x.w === a.w);
    gjson.items.push({
      id: a.id,
      pattern: e.w,
      structure: e.r,
      meaning: e.m,
      examples: e.examples,
    });
  }
  gjson.total = gjson.items.length;
  fs.writeFileSync(grammarPath, JSON.stringify(gjson, null, 2) + "\n");
}

console.log(JSON.stringify({ added, skipped, themeCount: theme.count, total: data.total }, null, 2));

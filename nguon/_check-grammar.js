const fs = require("fs");
const path = require("path");
global.window = {};
eval(fs.readFileSync(path.join(__dirname, "..", "vocab-data.js"), "utf8"));
const keys = [
  "につき",
  "にしたって",
  "お",
  "かな",
  "というように",
  "このように",
  "それには",
  "つもり",
  "というものだ",
  "ほうがよかった",
  "もしかしたら",
  "それなら",
  "ようではないか",
  "かというと",
  "いまにも",
  "今にも",
  "いつのまに",
  "いつの間に",
  "向け",
  "きり",
  "たがる",
  "というだけで",
  "てみては",
  "次第に",
  "のようだ",
  "ようだ",
];
const g = window.VOCAB_DATA.items.filter((i) => i.t === "n2_grammar");
console.log("n2_grammar", g.length, "total", window.VOCAB_DATA.total);
for (const k of keys) {
  const hits = g.filter((i) => (i.w + i.r).includes(k));
  if (hits.length) hits.forEach((h) => console.log("HIT", k, "=>", h.id, h.w));
  else console.log("NEW?", k);
}

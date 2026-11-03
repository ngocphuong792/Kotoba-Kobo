/**
 * Add grammar from ngu_phap_n2.md (batch 6) into n2_grammar. Luôn thêm mới, không check trùng.
 * Usage: node nguon/add-n2-grammar-batch6.js
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
if (!theme) throw new Error("n2_grammar missing");

const NEW = [
  {
    w: "～なしには",
    r: "N／Vる＋なしには～ない",
    m: "[N2] Nếu không có…, nếu thiếu… thì không thể… (N là điều kiện bắt buộc).",
    examples: [
      { ja: "努力なしには、成功はありえない。", vi: "Nếu không nỗ lực thì không thể thành công." },
      { ja: "彼女の協力なしには、この計画は進まなかった。", vi: "Nếu không có sự hợp tác của cô ấy thì kế hoạch này đã không tiến triển." },
      { ja: "この映画は、涙なしには見られない。", vi: "Bộ phim này không thể xem mà không rơi nước mắt." },
    ],
  },
  {
    w: "ちっとも",
    r: "ちっとも＋Vない／Aくない",
    m: "[N2] Một chút cũng không…, chẳng… chút nào (phủ định mạnh; văn nói, thân mật hơn 少しも).",
    examples: [
      { ja: "この問題はちっともわからない。", vi: "Bài này tôi chẳng hiểu chút nào." },
      { ja: "彼はちっとも反省していない。", vi: "Anh ta chẳng hề hối lỗi chút nào." },
      { ja: "待っていたのに、ちっとも来なかった。", vi: "Đã đợi mà chẳng thấy đến chút nào." },
    ],
  },
  {
    w: "～にかかわらず",
    r: "N／Vる・Vない／A／反対語＋にかかわらず",
    m: "[N2] Bất kể…, dù… hay không… (không phụ thuộc vào).",
    examples: [
      { ja: "天候にかかわらず、試合は行われる。", vi: "Bất kể thời tiết, trận đấu vẫn diễn ra." },
      { ja: "経験の有無にかかわらず、誰でも応募できる。", vi: "Dù có kinh nghiệm hay không, ai cũng có thể ứng tuyển." },
      { ja: "好き嫌いにかかわらず、野菜は食べるべきだ。", vi: "Dù thích hay không, vẫn nên ăn rau." },
    ],
  },
  {
    w: "～に限って",
    r: "N＋に限って",
    m: "[N2] Chỉ riêng…, chính…thì (lại) — chỉ đúng trong tình huống đó; hoặc: người như… thì không thể…",
    examples: [
      { ja: "急いでいる日に限って、電車が遅れる。", vi: "Cứ đúng hôm vội là tàu lại trễ." },
      { ja: "うちの子に限って、うそをつくはずがない。", vi: "Riêng con tôi thì không thể nói dối." },
      { ja: "傘を持っていない日に限って、雨が降る。", vi: "Cứ đúng hôm không mang dù là trời mưa." },
    ],
  },
  {
    w: "～ことに",
    r: "Vた／Aい／Aな＋ことに",
    m: "[N2] Thật là…, điều…là… (bày tỏ cảm xúc của người nói trước nội dung tiếp theo).",
    examples: [
      { ja: "驚いたことに、彼は百歳だった。", vi: "Điều đáng ngạc nhiên là ông ấy đã một trăm tuổi." },
      { ja: "残念なことに、試合は中止になった。", vi: "Thật đáng tiếc, trận đấu bị hủy." },
      { ja: "うれしいことに、第一志望に合格した。", vi: "Thật vui, tôi đã đỗ nguyện vọng một." },
    ],
  },
  {
    w: "二度と～ない",
    r: "二度と＋Vない",
    m: "[N2] Không bao giờ… nữa, tuyệt đối không… lần nữa.",
    examples: [
      { ja: "あんな失敗は二度としません。", vi: "Tôi sẽ không bao giờ mắc lỗi như thế nữa." },
      { ja: "二度とこの店には来ない。", vi: "Tôi sẽ không bao giờ đến quán này nữa." },
      { ja: "彼とは二度と会いたくない。", vi: "Tôi không muốn gặp lại anh ta lần nào nữa." },
    ],
  },
  {
    w: "まさか～とは思わなかった",
    r: "まさか＋普通形＋とは思わなかった",
    m: "[N2] Không ngờ lại…, không thể nghĩ là… (bất ngờ trước điều ngoài dự đoán).",
    examples: [
      { ja: "まさか彼が犯人だとは思わなかった。", vi: "Không ngờ anh ấy lại là thủ phạm." },
      { ja: "まさか合格するとは思わなかった。", vi: "Tôi không ngờ mình lại đỗ." },
      { ja: "まさかこんなところで会うとは思わなかった。", vi: "Không ngờ lại gặp nhau ở chỗ thế này." },
    ],
  },
  {
    w: "いつの間にか",
    r: "いつの間にか＋文",
    m: "[N2] Không biết từ lúc nào…, chẳng hay từ bao giờ… (thay đổi diễn ra mà không để ý).",
    examples: [
      { ja: "いつの間にか、外は暗くなっていた。", vi: "Chẳng biết từ lúc nào bên ngoài đã tối." },
      { ja: "いつの間にか、子どもが大きくなった。", vi: "Không biết từ khi nào con đã lớn." },
      { ja: "読んでいるうちに、いつの間にか眠ってしまった。", vi: "Đọc một hồi, tôi ngủ quên lúc nào không hay." },
    ],
  },
  {
    w: "いずれ",
    r: "いずれ＋文／いずれの＋N／いずれにしても",
    m: "[N2] 1) Sớm muộn gì, rồi sẽ… 2) Cái nào, dù là cái nào (いずれにしても: dù sao đi nữa).",
    examples: [
      { ja: "いずれ彼にもわかる日が来るだろう。", vi: "Rồi sẽ có ngày anh ấy cũng hiểu." },
      { ja: "いずれまた、ゆっくりお話ししましょう。", vi: "Rồi sẽ có dịp, chúng ta nói chuyện thong thả nhé." },
      { ja: "いずれにしても、明日までに決めなければならない。", vi: "Dù sao đi nữa, phải quyết định trước ngày mai." },
    ],
  },
  {
    w: "～に伴って",
    r: "N／Vる＋に伴って（に伴い）",
    m: "[N2] Cùng với…, kéo theo… (một sự thay đổi dẫn đến sự thay đổi khác).",
    examples: [
      { ja: "人口の増加に伴って、交通渋滞が深刻になった。", vi: "Cùng với việc dân số tăng, tắc đường trở nên nghiêm trọng." },
      { ja: "技術の進歩に伴い、生活が便利になった。", vi: "Cùng với tiến bộ kỹ thuật, cuộc sống trở nên tiện lợi." },
      { ja: "景気の回復に伴って、求人が増えている。", vi: "Cùng với kinh tế phục hồi, tin tuyển dụng tăng lên." },
    ],
  },
  {
    w: "～ことがある",
    r: "Vる／Vない＋ことがある；Vた＋ことがある",
    m: "[N3–N2] 1) Vる/Vない: đôi khi, có lúc… 2) Vた: đã từng… (kinh nghiệm).",
    examples: [
      { ja: "私は朝ご飯を食べないことがある。", vi: "Có lúc tôi không ăn sáng." },
      { ja: "彼は時々会議に遅れることがある。", vi: "Thỉnh thoảng anh ấy đến muộn cuộc họp." },
      { ja: "富士山に登ったことがある。", vi: "Tôi đã từng leo núi Phú Sĩ." },
    ],
  },
];

const added = [];

for (const e of NEW) {
  const id = "v" + String(data.items.length + 1).padStart(4, "0");
  data.items.push({ id, w: e.w, r: e.r, m: e.m, t: "n2_grammar", s: "Ngữ pháp N2" });
  EXAMPLES[id] = e.examples.map((x) => ({ ja: x.ja, vi: x.vi }));
  added.push({ id, w: e.w, ex: e.examples.length });
}

theme.count = data.items.filter((i) => i.t === "n2_grammar").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");

const grammarPath = path.join(root, "nguon", "n2-grammar.json");
if (fs.existsSync(grammarPath)) {
  const gjson = JSON.parse(fs.readFileSync(grammarPath, "utf8"));
  for (const a of added) {
    const e = NEW.find((x) => x.w === a.w);
    gjson.items.push({ id: a.id, pattern: e.w, structure: e.r, meaning: e.m, examples: e.examples });
  }
  gjson.total = gjson.items.length;
  fs.writeFileSync(grammarPath, JSON.stringify(gjson, null, 2) + "\n");
}

console.log(JSON.stringify({ added: added.length, themeCount: theme.count, total: data.total, first: added[0].id, last: added[added.length - 1].id }, null, 2));

/**
 * Add grammar from ngu_phap_n2.md into n2_grammar.
 * Usage: node nguon/add-n2-grammar-batch3.js
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

function norm(w) {
  return String(w)
    .replace(/[～~]/g, "～")
    .replace(/／/g, "/")
    .replace(/\s+/g, "")
    .replace(/（.*?）/g, "")
    .replace(/\(.*?\)/g, "");
}

const existing = new Set(
  data.items.filter((i) => i.t === "n2_grammar").map((i) => norm(i.w))
);

const NEW = [
  {
    w: "～に従って／～に従い",
    r: "N＋に従って／に従い",
    m: "[N2–N3] Theo…, tuân theo…; thay đổi tương ứng với…",
    examples: [
      { ja: "規則に従って行動してください。", vi: "Xin hãy hành động theo quy tắc." },
      { ja: "マニュアルに従って設定を進めました。", vi: "Tôi tiến hành cài đặt theo hướng dẫn." },
      { ja: "指示に従い、すぐに修正しました。", vi: "Theo chỉ thị, tôi đã sửa ngay." },
      { ja: "気温の変化に従って服装を変える。", vi: "Thay đổi trang phục theo sự thay đổi nhiệt độ." },
    ],
  },
  {
    w: "ついに",
    r: "ついに＋Vた／Vない",
    m: "[N3–N2] 1) Cuối cùng thì… (sau chờ đợi lâu). 2) Cuối cùng cũng không… (với phủ định).",
    examples: [
      { ja: "ついに試験に合格した。", vi: "Cuối cùng tôi cũng đậu kỳ thi." },
      { ja: "長い議論の末、ついに合意に達した。", vi: "Sau tranh luận dài, cuối cùng đạt thỏa thuận." },
      { ja: "彼はついに現れなかった。", vi: "Cuối cùng anh ấy cũng không xuất hiện." },
    ],
  },
  {
    w: "なかなか",
    r: "なかなか＋Vない／イA／上手だ など",
    m: "[N4–N2] 1) Khá…, tương đối… (khẳng định). 2) Mãi mà không… (với phủ định).",
    examples: [
      { ja: "この店はなかなかおいしい。", vi: "Quán này khá ngon." },
      { ja: "彼はなかなか優秀な社員だ。", vi: "Anh ấy là nhân viên khá xuất sắc." },
      { ja: "忙しくてなかなか休めない。", vi: "Bận đến mức mãi mà không nghỉ được." },
      { ja: "鍵がなかなか見つからない。", vi: "Mãi mà không tìm thấy chìa khóa." },
    ],
  },
  {
    w: "～きり／～っきり",
    r: "Vた＋きり／っきり；数量＋きり",
    m: "[N2–N3] 1) Từ khi… rồi không… nữa (Vたきり). 2) Chỉ có bấy nhiêu… (数量きり).",
    examples: [
      { ja: "彼は朝出かけたきり、戻ってこない。", vi: "Anh ấy đi từ sáng rồi không về." },
      { ja: "一度会ったきりだ。", vi: "Chỉ gặp có một lần thôi." },
      { ja: "二人きりで話したい。", vi: "Muốn nói chuyện chỉ hai người thôi." },
      { ja: "今月はこれっきりのお金しかない。", vi: "Tháng này chỉ còn bấy nhiêu tiền này thôi." },
    ],
  },
  {
    w: "～かねる",
    r: "Vます（ます形の語幹）＋かねる／かねない",
    m: "[N2] 1) ～かねる: khó lòng…, không thể… (lịch sự, từ chối). 2) ～かねない: có nguy cơ sẽ… (xấu).",
    examples: [
      { ja: "そのご要望にはお答えしかねます。", vi: "Tôi khó lòng đáp ứng yêu cầu đó." },
      { ja: "私には判断しかねる問題です。", vi: "Đây là vấn đề tôi khó lòng phán đoán." },
      { ja: "このままでは事故が起こりかねない。", vi: "Cứ thế này thì có nguy cơ xảy ra tai nạn." },
      { ja: "言い方を間違えると誤解を招きかねない。", vi: "Nói sai cách thì có nguy cơ gây hiểu lầm." },
    ],
  },
  {
    w: "～くせに",
    r: "普通形＋くせに（ナA／Nは＋のくせに）",
    m: "[N2–N3] Thế mà…; vậy mà… (trách móc, coi thường, bất mãn).",
    examples: [
      { ja: "知っているくせに教えてくれない。", vi: "Biết thế mà không dạy cho tôi." },
      { ja: "学生のくせに生意気だ。", vi: "Còn là sinh viên thế mà lên mặt." },
      { ja: "お金がないくせに高いものばかり欲しがる。", vi: "Không có tiền thế mà cứ thèm đồ đắt." },
    ],
  },
  {
    w: "～ようにしてほしい",
    r: "Vる／Vない＋ようにしてほしい",
    m: "[N3–N2] Mong (ai đó) hãy làm… theo cách…; muốn người khác chú ý làm / không làm gì.",
    examples: [
      { ja: "もう少し早く来るようにしてほしい。", vi: "Mong bạn hãy cố đến sớm hơn một chút." },
      { ja: "夜は静かにするようにしてほしい。", vi: "Mong mọi người giữ yên lặng vào ban đêm." },
      { ja: "期限を守るようにしてほしいです。", vi: "Mong anh/chị hãy giữ đúng hạn." },
    ],
  },
  {
    w: "～ようになりたい",
    r: "Vる＋ようになりたい",
    m: "[N4–N3] Muốn trở thành người có thể…; muốn đạt đến trạng thái…",
    examples: [
      { ja: "日本語で自由に話せるようになりたい。", vi: "Tôi muốn nói tiếng Nhật tự do được." },
      { ja: "一人で出張できるようになりたい。", vi: "Tôi muốn có thể đi công tác một mình." },
      { ja: "早起きできるようになりたい。", vi: "Tôi muốn trở thành người dậy sớm được." },
    ],
  },
  {
    w: "まず～ない",
    r: "まず＋Vない",
    m: "[N2] Hầu như không…; gần như chẳng… (độ chắc chắn cao về phủ định).",
    examples: [
      { ja: "こんな難しい問題は、まず解けない。", vi: "Bài khó như vậy hầu như không giải được." },
      { ja: "彼が遅刻することはまずない。", vi: "Anh ấy hầu như không bao giờ đến muộn." },
      { ja: "この条件なら、まず問題ないだろう。", vi: "Với điều kiện này thì hầu như không thành vấn đề." },
    ],
  },
  {
    w: "こういう／そういう／ああいう／どういう",
    r: "こういう＋N など",
    m: "[N4–N3] Kiểu như thế này / thế đó / thế kia / như thế nào (chỉ loại, cách thức).",
    examples: [
      { ja: "こういう場合はどうすればいいですか。", vi: "Trường hợp như thế này thì nên làm sao?" },
      { ja: "そういう話は初めて聞いた。", vi: "Tôi mới nghe chuyện kiểu đó lần đầu." },
      { ja: "どういう理由で欠席したのですか。", vi: "Vì lý do như thế nào mà vắng mặt?" },
      { ja: "ああいう人と一緒に働きたい。", vi: "Muốn làm việc với người kiểu như thế kia." },
    ],
  },
  {
    w: "～としよう／～ことにしよう",
    r: "普通形＋としよう／Vる＋ことにしよう",
    m: "[N4–N3] Thôi… vậy; quyết định… vậy (đề xuất / tự quyết nhẹ).",
    examples: [
      { ja: "今日はもう帰るとしよう。", vi: "Hôm nay thôi về vậy." },
      { ja: "詳しくは明日話すことにしよう。", vi: "Chi tiết thôi để ngày mai nói vậy." },
      { ja: "コーヒーにしよう。", vi: "Thôi lấy cà phê vậy." },
    ],
  },
  {
    w: "ただ",
    r: "ただ＋文／N；ただ～だけ",
    m: "[N4–N2] 1) Chỉ…; chỉ là… 2) Nhưng mà… (nối ý ngược nhẹ). 3) Chỉ cần… thôi.",
    examples: [
      { ja: "ただの風邪だと思います。", vi: "Tôi nghĩ chỉ là cảm thông thường." },
      { ja: "行きたい。ただ、お金がない。", vi: "Muốn đi. Nhưng mà không có tiền." },
      { ja: "ただ署名するだけでいいです。", vi: "Chỉ cần ký tên là được." },
      { ja: "ただ見ているだけでは分からない。", vi: "Chỉ đứng nhìn thôi thì không hiểu được." },
    ],
  },
  {
    w: "～かける／～かけだ",
    r: "Vます（ます形の語幹）＋かける／かけだ／かけの",
    m: "[N3–N2] Đang làm dở…; bắt đầu… nhưng chưa xong; suýt…",
    examples: [
      { ja: "読みかけの本が机の上にある。", vi: "Cuốn sách đang đọc dở nằm trên bàn." },
      { ja: "言いかけてやめた。", vi: "Định nói rồi thôi." },
      { ja: "食べかけのケーキを冷蔵庫に入れた。", vi: "Tôi cho bánh đang ăn dở vào tủ lạnh." },
      { ja: "忘れかけていた約束を思い出した。", vi: "Tôi nhớ ra lời hứa suýt quên." },
    ],
  },
  {
    w: "～に加えて",
    r: "N＋に加えて",
    m: "[N2–N3] Thêm vào đó…; ngoài… ra còn…",
    examples: [
      { ja: "経験に加えて、語学力も必要だ。", vi: "Ngoài kinh nghiệm ra còn cần năng lực ngoại ngữ." },
      { ja: "給料に加えて、手当も出る。", vi: "Ngoài lương còn có phụ cấp." },
      { ja: "雨に加えて風も強くなってきた。", vi: "Ngoài mưa, gió cũng mạnh hơn." },
    ],
  },
  {
    w: "そのうち",
    r: "そのうち（に）",
    m: "[N4–N3] Chẳng bao lâu nữa; một lúc nào đó; trong lúc đó",
    examples: [
      { ja: "そのうち慣れるよ。", vi: "Chẳng bao lâu là quen thôi." },
      { ja: "そのうち連絡します。", vi: "Tôi sẽ liên lạc sau / chẳng bao lâu nữa." },
      { ja: "そのうち雨もやむでしょう。", vi: "Chẳng bao lâu mưa cũng tạnh thôi." },
    ],
  },
  {
    w: "必ずしも～ない",
    r: "必ずしも＋～ない／とは限らない",
    m: "[N2–N3] Không nhất thiết…; chưa chắc đã…",
    examples: [
      { ja: "高いものが必ずしも良いとは限らない。", vi: "Đồ đắt chưa chắc đã tốt." },
      { ja: "経験者が必ずしも成功するわけではない。", vi: "Người có kinh nghiệm không nhất thiết sẽ thành công." },
      { ja: "必ずしもそうとは言えない。", vi: "Không nhất thiết nói được như vậy." },
    ],
  },
  {
    w: "～かのように／～かのようだ",
    r: "普通形＋かのように／かのようだ",
    m: "[N2] Như thể…; cứ như là… (so sánh giả định).",
    examples: [
      { ja: "彼は何も知らなかったかのように振る舞った。", vi: "Anh ấy cư xử như thể chẳng biết gì." },
      { ja: "夢を見ているかのようだ。", vi: "Cứ như đang nằm mơ." },
      { ja: "冬が戻ってきたかのように寒い。", vi: "Lạnh như thể mùa đông đã quay lại." },
    ],
  },
  {
    w: "～すると（すると接続）",
    r: "文。すると、文。",
    m: "[N3–N2] Thế rồi…; khi ấy thì… (nêu việc xảy ra tiếp theo / kết quả quan sát).",
    examples: [
      { ja: "ドアを開けた。すると、猫が出てきた。", vi: "Mở cửa. Thế rồi con mèo chạy ra." },
      { ja: "調べてみた。すると、原因が分かった。", vi: "Thử kiểm tra. Thế là tìm ra nguyên nhân." },
      { ja: "呼びかけてみた。すると、相手が振り返った。", vi: "Thử gọi. Thế rồi đối phương quay lại." },
    ],
  },
  {
    w: "～ことになってしまう",
    r: "Vる＋ことになってしまう",
    m: "[N2–N3] Rốt cuộc thành ra phải…; bị đưa đến kết quả… (thường ngoài ý muốn).",
    examples: [
      { ja: "ミスが重なって、やり直しをすることになってしまった。", vi: "Lỗi chồng chất nên rốt cuộc phải làm lại." },
      { ja: "電車が止まって、徒歩で帰ることになってしまった。", vi: "Tàu dừng nên đành phải đi bộ về." },
      { ja: "予定が変わって、出張することになってしまった。", vi: "Lịch đổi nên rốt cuộc phải đi công tác." },
    ],
  },
  {
    w: "～ながら（逆接）",
    r: "Vます語幹／イA／ナA語幹／N＋ながら（も）",
    m: "[N2] Tuy… nhưng…; mặc dù… (nghĩa đối lập; khác với ながら “vừa… vừa…”).",
    examples: [
      { ja: "狭いながらも快適な部屋だ。", vi: "Dù chật nhưng là căn phòng dễ chịu." },
      { ja: "残念ながら、今回は見送ります。", vi: "Thật đáng tiếc, lần này chúng tôi xin rút." },
      { ja: "知っていながら教えてくれなかった。", vi: "Biết thế mà không nói cho tôi." },
      { ja: "子供ながら立派な判断だ。", vi: "Dù còn trẻ con nhưng là phán đoán rất đứng đắn." },
    ],
  },
];

const added = [];
const skipped = [];

for (const e of NEW) {
  const key = norm(e.w);
  if (existing.has(key)) {
    skipped.push(e.w);
    continue;
  }
  // near-duplicate checks
  if (e.w === "必ずしも～ない" && [...existing].some((x) => x.includes("必ずしも"))) {
    // still add — form title differs and focuses 必ずしも～ない
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
  existing.add(key);
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

console.log(JSON.stringify({ added: added.length, skipped, themeCount: theme.count, total: data.total, items: added }, null, 2));

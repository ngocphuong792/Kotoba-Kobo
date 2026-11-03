/**
 * Add grammar from ngu_phap_n2.md (batch 7) into n2_grammar. Luôn thêm mới, không check trùng.
 * (Dòng 1–10 và 12 của file đã được thêm ở batch 6 nên không đưa vào đây.)
 * Usage: node nguon/add-n2-grammar-batch7.js
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
    w: "なるべく",
    r: "なるべく＋V／Vない／Vてください",
    m: "[N2] Cố gắng hết mức có thể, càng… càng tốt (＝できるだけ).",
    examples: [
      { ja: "なるべく早く返事をください。", vi: "Xin hãy trả lời càng sớm càng tốt." },
      { ja: "なるべく残業はしないようにしている。", vi: "Tôi cố gắng hết mức để không tăng ca." },
      { ja: "このことは、なるべく人に言わないでね。", vi: "Chuyện này cố gắng đừng nói với ai nhé." },
    ],
  },
  {
    w: "～たら？",
    r: "Vたら？／Vたらどう？／Vたらいかが？",
    m: "[N3–N2] Sao không…?, thử… xem sao? (gợi ý, khuyên nhủ thân mật).",
    examples: [
      { ja: "疲れているなら、少し休んだら？", vi: "Nếu mệt thì nghỉ một chút đi?" },
      { ja: "直接先生に聞いてみたら？", vi: "Sao cậu không hỏi trực tiếp thầy giáo?" },
      { ja: "思い切って留学したらどう？", vi: "Sao không mạnh dạn đi du học đi?" },
    ],
  },
  {
    w: "～そうになる",
    r: "Vます（bỏ ます）＋そうになる",
    m: "[N2] Suýt nữa thì…, sắp sửa… (chưa xảy ra nhưng rất gần).",
    examples: [
      { ja: "階段で転びそうになった。", vi: "Tôi suýt ngã ở cầu thang." },
      { ja: "あまりの悲しさに、泣きそうになった。", vi: "Buồn quá, tôi suýt bật khóc." },
      { ja: "バスに乗り遅れそうになって、走った。", vi: "Suýt lỡ xe buýt nên tôi đã chạy." },
    ],
  },
  {
    w: "～というのは",
    r: "N／普通形＋というのは",
    m: "[N2] 1) Nghĩa là…, cái gọi là… (giải thích, định nghĩa). 2) Bởi vì… (nêu lý do).",
    examples: [
      { ja: "「勘定」というのは、お金を計算することだ。", vi: "“Kanjou” có nghĩa là tính tiền." },
      { ja: "彼は来られない。というのは、急な出張が入ったからだ。", vi: "Anh ấy không đến được. Bởi vì có chuyến công tác đột xuất." },
      { ja: "ボランティアというのは、自分の意思で社会に貢献する人のことだ。", vi: "Tình nguyện viên là người tự nguyện đóng góp cho xã hội." },
    ],
  },
  {
    w: "～てはいかがでしょうか",
    r: "Vて＋はいかがでしょうか（＝Vたらどうですか）",
    m: "[N2] Anh/chị thử… xem sao ạ? (lời khuyên, đề nghị lịch sự; ＝～たらどうですか).",
    examples: [
      { ja: "少し休憩されてはいかがでしょうか。", vi: "Anh/chị nghỉ một chút thì sao ạ?" },
      { ja: "こちらの商品を試してみてはいかがでしょうか。", vi: "Quý khách dùng thử sản phẩm này xem sao ạ?" },
      { ja: "一度、医者に相談してはいかがでしょうか。", vi: "Hay là anh/chị thử hỏi ý kiến bác sĩ một lần xem sao ạ?" },
    ],
  },
  {
    w: "～あげくに",
    r: "Vた／Nの＋あげく（に）",
    m: "[N2] Rốt cuộc sau khi… (làm gì lâu/vất vả) thì…; thường dẫn đến kết quả xấu.",
    examples: [
      { ja: "さんざん迷ったあげく、買わないことにした。", vi: "Sau khi do dự mãi, rốt cuộc tôi quyết định không mua." },
      { ja: "長い議論のあげくに、結論は出なかった。", vi: "Sau cuộc tranh luận dài, rốt cuộc không đưa ra được kết luận." },
      { ja: "働きすぎたあげく、病気になってしまった。", vi: "Làm việc quá sức, cuối cùng tôi đổ bệnh." },
    ],
  },
  {
    w: "～とされる",
    r: "普通形／N＋とされる（＝と言われる）",
    m: "[N2] Được cho là…, được coi là… (quan niệm chung, quy định).",
    examples: [
      { ja: "この寺は千年前に建てられたとされている。", vi: "Ngôi chùa này được cho là xây từ một nghìn năm trước." },
      { ja: "日本では、お辞儀は礼儀正しい行為とされる。", vi: "Ở Nhật, cúi chào được coi là hành vi lịch sự." },
      { ja: "この薬は子どもには危険とされている。", vi: "Loại thuốc này được cho là nguy hiểm với trẻ em." },
    ],
  },
  {
    w: "～恐れがある",
    r: "Vる／Nの＋恐れがある（おそれがある）",
    m: "[N2] Có nguy cơ…, e rằng sẽ… (khả năng xảy ra điều xấu).",
    examples: [
      { ja: "台風で川が氾濫する恐れがある。", vi: "Có nguy cơ sông tràn bờ vì bão." },
      { ja: "このまま放置すると、悪化する恐れがある。", vi: "Nếu cứ để vậy thì e rằng sẽ trở nặng." },
      { ja: "強い余震が起こる恐れがあるので、注意してください。", vi: "Có nguy cơ xảy ra dư chấn mạnh nên xin hãy cẩn thận." },
    ],
  },
  {
    w: "ちなみに",
    r: "ちなみに＋文",
    m: "[N2] Nhân tiện, tiện thể nói thêm (bổ sung thông tin liên quan).",
    examples: [
      { ja: "ちなみに、私の誕生日は来週です。", vi: "Nhân tiện nói thêm, sinh nhật tôi là tuần sau." },
      { ja: "明日は会議です。ちなみに場所は三階の会議室です。", vi: "Ngày mai có họp. Tiện nói luôn, địa điểm là phòng họp tầng ba." },
      { ja: "ちなみに、この店は創業百年だそうです。", vi: "Nhân tiện, nghe nói cửa hàng này đã mở được một trăm năm." },
    ],
  },
  {
    w: "一度～てしまうと",
    r: "一度＋Vて＋しまうと／しまったら",
    m: "[N2] Một khi đã… thì (khó quay lại, không thể cứu vãn).",
    examples: [
      { ja: "一度信用を失ってしまうと、取り戻すのは難しい。", vi: "Một khi đã mất lòng tin thì rất khó lấy lại." },
      { ja: "一度ゲームを始めてしまうと、やめられない。", vi: "Một khi bắt đầu chơi game là không dừng được." },
      { ja: "一度言ってしまったことは取り消せない。", vi: "Lời đã nói ra một lần thì không thể rút lại." },
    ],
  },
  {
    w: "どれほど～か",
    r: "どれほど＋V／A＋か（～ことか）",
    m: "[N2] Biết bao…, đến mức nào… (nhấn mạnh mức độ lớn, cảm xúc mạnh).",
    examples: [
      { ja: "あなたに会えて、どれほどうれしかったか。", vi: "Gặp được bạn tôi vui biết bao." },
      { ja: "どれほど努力してきたか、私はよく知っている。", vi: "Tôi biết rõ anh ấy đã nỗ lực đến mức nào." },
      { ja: "母がどれほど心配したことか。", vi: "Mẹ đã lo lắng biết bao." },
    ],
  },
  {
    w: "～までになった",
    r: "Vる／N＋までになった",
    m: "[N2] Đã trở nên đến mức…, đạt tới mức… (sau quá trình thay đổi).",
    examples: [
      { ja: "練習を重ねて、一人で歌えるまでになった。", vi: "Luyện tập nhiều, tôi đã đạt đến mức hát được một mình." },
      { ja: "小さな店が全国に支店を持つまでになった。", vi: "Cửa hàng nhỏ đã phát triển đến mức có chi nhánh toàn quốc." },
      { ja: "日本語で冗談が言えるまでになった。", vi: "Tôi đã đến mức nói đùa được bằng tiếng Nhật." },
    ],
  },
  {
    w: "～ほかなかった",
    r: "Vる＋ほかなかった（ほかない）",
    m: "[N2] Đành phải…, chẳng còn cách nào khác ngoài… (không có lựa chọn).",
    examples: [
      { ja: "電車が止まったので、歩いて帰るほかなかった。", vi: "Tàu dừng nên tôi đành phải đi bộ về." },
      { ja: "資金がなくなり、計画をあきらめるほかなかった。", vi: "Hết vốn nên đành bỏ kế hoạch." },
      { ja: "誰も助けてくれず、自分でやるほかなかった。", vi: "Không ai giúp nên tôi đành tự làm." },
    ],
  },
  {
    w: "～べきだった",
    r: "Vる＋べきだった／Vなかった＋べきだった→Vない＋べきではなかった",
    m: "[N2] Lẽ ra nên…, đáng lẽ phải… (tiếc nuối, tự trách vì đã không làm).",
    examples: [
      { ja: "もっと早く謝るべきだった。", vi: "Lẽ ra tôi nên xin lỗi sớm hơn." },
      { ja: "あのとき、先生に相談するべきだった。", vi: "Lúc đó lẽ ra tôi nên hỏi ý kiến thầy giáo." },
      { ja: "あんなことを言うべきではなかった。", vi: "Lẽ ra tôi không nên nói những lời như thế." },
    ],
  },
  {
    w: "～ばよかった",
    r: "Vば＋よかった／Vなければ＋よかった",
    m: "[N2] Giá mà đã…, biết thế… thì tốt (hối tiếc về việc đã làm hoặc không làm).",
    examples: [
      { ja: "もっと勉強しておけばよかった。", vi: "Giá mà tôi đã học nhiều hơn." },
      { ja: "傘を持ってくればよかった。", vi: "Biết thế mang theo dù rồi." },
      { ja: "あんなに食べなければよかった。", vi: "Giá mà tôi đừng ăn nhiều thế." },
    ],
  },
  {
    w: "いくらも～ない",
    r: "いくらも＋Vない／Aくない",
    m: "[N2] Chẳng được bao nhiêu, chẳng còn mấy… (số lượng/mức độ ít).",
    examples: [
      { ja: "給料日まで、もういくらも残っていない。", vi: "Đến ngày lĩnh lương chẳng còn bao nhiêu ngày nữa." },
      { ja: "財布にはいくらもお金が入っていない。", vi: "Trong ví chẳng còn bao nhiêu tiền." },
      { ja: "この仕事を始めて、まだいくらも経っていない。", vi: "Bắt đầu công việc này chưa được bao lâu." },
    ],
  },
  {
    w: "～ところがある",
    r: "Vる／Aい／Aな／Nの＋ところがある",
    m: "[N2] Có điểm…, có chỗ… (nói về một mặt/đặc điểm của người hoặc vật).",
    examples: [
      { ja: "彼には子どもっぽいところがある。", vi: "Anh ấy có chỗ trẻ con." },
      { ja: "この製品には改善すべきところがある。", vi: "Sản phẩm này có những điểm cần cải thiện." },
      { ja: "彼女には人を引きつけるところがある。", vi: "Cô ấy có nét thu hút người khác." },
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

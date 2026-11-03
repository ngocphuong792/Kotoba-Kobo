/**
 * Add grammar from ngu_phap_n2.md (batch 5) into n2_grammar.
 * Usage: node nguon/add-n2-grammar-batch5.js
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
    w: "～にほかならない",
    r: "N＋にほかならない",
    m: "[N2] Chính là…, không gì khác ngoài… (khẳng định mạnh về nguyên nhân/bản chất).",
    examples: [
      { ja: "成功できたのは、努力の結果にほかならない。", vi: "Thành công được chính là kết quả của nỗ lực." },
      { ja: "彼の行動は、愛情にほかならない。", vi: "Hành động của anh ấy chẳng gì khác ngoài tình yêu." },
      { ja: "この事故は人為的ミスにほかならない。", vi: "Vụ tai nạn này chính là do lỗi của con người." },
    ],
  },
  {
    w: "～ままにせず",
    r: "Vた／Vない／N＋ままにせず",
    m: "[N2] Không để nguyên như vậy mà…, không bỏ mặc… (rồi làm gì đó).",
    examples: [
      { ja: "問題をそのままにせず、すぐに解決しましょう。", vi: "Đừng để nguyên vấn đề như vậy, hãy giải quyết ngay." },
      { ja: "疑問を疑問のままにせず、先生に質問した。", vi: "Tôi không để thắc mắc nằm đó mà đã hỏi thầy giáo." },
      { ja: "ごみを散らかしたままにせず、片付けてください。", vi: "Đừng để rác vương vãi như thế, hãy dọn dẹp." },
    ],
  },
  {
    w: "～だらけ",
    r: "N＋だらけ",
    m: "[N2] Đầy, toàn là… (nhiều thứ không tốt phủ khắp; sắc thái tiêu cực).",
    examples: [
      { ja: "服が泥だらけになった。", vi: "Quần áo dính đầy bùn." },
      { ja: "彼の部屋はごみだらけだ。", vi: "Phòng anh ấy toàn là rác." },
      { ja: "この文章は間違いだらけだ。", vi: "Bài viết này toàn lỗi sai." },
    ],
  },
  {
    w: "～からって",
    r: "普通形＋からって（～とは限らない／～ない）",
    m: "[N2] Dù là vì… thì cũng (không) — văn nói của ～からといって.",
    examples: [
      { ja: "高いからって、いい物とは限らない。", vi: "Đắt không có nghĩa là hàng tốt." },
      { ja: "子どもだからって、何でも許されるわけじゃない。", vi: "Dù là trẻ con cũng không phải cái gì cũng được tha thứ." },
      { ja: "怒られたからって、落ち込むことはない。", vi: "Bị mắng cũng không cần phải buồn." },
    ],
  },
  {
    w: "～にあたって",
    r: "N／Vる＋にあたって（にあたり）",
    m: "[N2] Nhân dịp…, khi (bắt đầu việc quan trọng)…; dùng trong văn trang trọng.",
    examples: [
      { ja: "新しい生活を始めるにあたって、目標を立てた。", vi: "Khi bắt đầu cuộc sống mới, tôi đã đặt ra mục tiêu." },
      { ja: "入学にあたり、制服を買った。", vi: "Nhân dịp nhập học, tôi đã mua đồng phục." },
      { ja: "契約にあたって、書類をよくご確認ください。", vi: "Khi ký hợp đồng, xin hãy kiểm tra kỹ hồ sơ." },
    ],
  },
  {
    w: "好きで好きでたまらない",
    r: "Aくて／Nで（lặp lại）＋たまらない",
    m: "[N2] Thích đến mức không chịu nổi, thích không thể tả (lặp 好きで để nhấn mạnh).",
    examples: [
      { ja: "彼女のことが好きで好きでたまらない。", vi: "Tôi thích cô ấy đến mức không chịu nổi." },
      { ja: "この歌手が好きで好きでたまらなくて、コンサートに毎回行っている。", vi: "Tôi mê ca sĩ này không chịu nổi nên lần nào cũng đi xem hòa nhạc." },
      { ja: "犬が好きで好きでたまらず、三匹も飼っている。", vi: "Tôi mê chó đến nỗi nuôi tận ba con." },
    ],
  },
  {
    w: "そんなに",
    r: "そんなに＋Aい／Aな／V",
    m: "[N3–N2] Đến mức như thế, đến thế (chỉ mức độ; đi với tính từ và động từ).",
    examples: [
      { ja: "そんなに急がなくてもいいよ。", vi: "Không cần phải vội đến thế đâu." },
      { ja: "そんなに高いなら、買わない。", vi: "Nếu đắt đến thế thì tôi không mua." },
      { ja: "そんなに食べると、お腹を壊すよ。", vi: "Ăn nhiều như thế sẽ đau bụng đấy." },
    ],
  },
  {
    w: "そういう",
    r: "そういう＋N",
    m: "[N3–N2] N như thế, loại N như vậy (đi với danh từ).",
    examples: [
      { ja: "そういう話は聞きたくない。", vi: "Tôi không muốn nghe chuyện như thế." },
      { ja: "私はそういう人が苦手だ。", vi: "Tôi không hợp với kiểu người như thế." },
      { ja: "そういうことなら、手伝うよ。", vi: "Nếu là chuyện như vậy thì tôi giúp." },
    ],
  },
  {
    w: "どうか～ように",
    r: "どうか＋Vますように／Vてくださいますように",
    m: "[N2] Xin hãy…, mong sao… (cầu nguyện, thỉnh cầu tha thiết).",
    examples: [
      { ja: "どうか試験に合格できますように。", vi: "Xin hãy cho con thi đỗ." },
      { ja: "どうか無事に帰ってきますように。", vi: "Mong sao anh ấy trở về bình an." },
      { ja: "どうか皆さんが幸せでありますように。", vi: "Cầu mong mọi người được hạnh phúc." },
    ],
  },
  {
    w: "～ことから",
    r: "普通形＋ことから",
    m: "[N2] Vì…, từ việc… mà… (nêu căn cứ/lý do dẫn tới kết luận hoặc tên gọi).",
    examples: [
      { ja: "足跡が残っていたことから、犯人が男だとわかった。", vi: "Từ việc còn dấu chân, người ta biết thủ phạm là đàn ông." },
      { ja: "この道は桜並木があることから、「桜通り」と呼ばれている。", vi: "Con đường này có hàng anh đào nên được gọi là “phố Anh Đào”." },
      { ja: "電気がついていることから、まだ誰かいると思った。", vi: "Thấy đèn còn sáng nên tôi nghĩ vẫn còn ai đó." },
    ],
  },
  {
    w: "Vてある",
    r: "他動詞のVて＋ある",
    m: "[N3–N2] Đã được làm sẵn (trạng thái còn lại do hành động có chủ ý của ai đó).",
    examples: [
      { ja: "壁に絵が掛けてある。", vi: "Trên tường có treo sẵn một bức tranh." },
      { ja: "ホテルはもう予約してあります。", vi: "Khách sạn đã được đặt sẵn rồi." },
      { ja: "机の上に鍵が置いてあった。", vi: "Trên bàn có chìa khóa được đặt sẵn." },
    ],
  },
  {
    w: "～次第で",
    r: "N＋次第で（次第だ）",
    m: "[N2] Tùy vào…, phụ thuộc vào… (kết quả thay đổi theo N).",
    examples: [
      { ja: "努力次第で、結果は変わる。", vi: "Kết quả thay đổi tùy vào nỗ lực." },
      { ja: "天気次第で、遠足は中止になる。", vi: "Tùy thời tiết mà chuyến dã ngoại có thể bị hủy." },
      { ja: "考え方次第で、人生は楽しくなる。", vi: "Tùy vào cách nghĩ mà cuộc sống sẽ trở nên vui vẻ." },
    ],
  },
  {
    w: "～は別として",
    r: "N／疑問詞～か＋は別として",
    m: "[N2] Trừ…, chưa bàn đến…, còn… thì lại khác (gác một vấn đề sang bên).",
    examples: [
      { ja: "味は別として、見た目はきれいだ。", vi: "Chưa nói đến vị, vẻ ngoài thì đẹp." },
      { ja: "好き嫌いは別として、彼の才能は認めざるを得ない。", vi: "Dù thích hay không, tôi buộc phải công nhận tài năng của anh ấy." },
      { ja: "冗談は別として、真剣に考えてください。", vi: "Đùa gác sang một bên, hãy suy nghĩ nghiêm túc." },
    ],
  },
  {
    w: "もともと",
    r: "もともと＋文",
    m: "[N2] Vốn dĩ, ban đầu, xưa nay vốn (trạng thái/nguyên trạng ban đầu).",
    examples: [
      { ja: "私はもともと甘い物が好きではない。", vi: "Tôi vốn dĩ không thích đồ ngọt." },
      { ja: "この建物はもともと工場だった。", vi: "Tòa nhà này ban đầu là nhà máy." },
      { ja: "もともと無理な計画だったのだ。", vi: "Vốn dĩ đó là một kế hoạch bất khả thi." },
    ],
  },
  {
    w: "まるで～ようだ",
    r: "まるで＋N／V普通形／Nの＋ようだ",
    m: "[N3–N2] Cứ như là…, giống hệt như… (so sánh ví von).",
    examples: [
      { ja: "まるで夢を見ているようだ。", vi: "Cứ như là đang mơ vậy." },
      { ja: "彼はまるで子どものようにはしゃいでいる。", vi: "Anh ấy nô đùa cứ như một đứa trẻ." },
      { ja: "この部屋はまるで冷蔵庫のように寒い。", vi: "Căn phòng này lạnh như cái tủ lạnh." },
    ],
  },
  {
    w: "おそらく",
    r: "おそらく＋普通形＋だろう／でしょう",
    m: "[N2] Có lẽ, chắc là… (phỏng đoán với độ chắc chắn khá cao).",
    examples: [
      { ja: "明日はおそらく雨が降るだろう。", vi: "Ngày mai có lẽ sẽ mưa." },
      { ja: "彼はおそらく来ないでしょう。", vi: "Chắc là anh ấy sẽ không đến." },
      { ja: "おそらくこれが最後のチャンスだ。", vi: "Có lẽ đây là cơ hội cuối cùng." },
    ],
  },
  {
    w: "～に応じて",
    r: "N＋に応じて／に応じた＋N",
    m: "[N2] Tùy theo…, ứng với…, phù hợp với… (thay đổi theo mức độ/tình huống).",
    examples: [
      { ja: "収入に応じて、税金が決まる。", vi: "Thuế được quy định tùy theo thu nhập." },
      { ja: "状況に応じて、対応を変える。", vi: "Thay đổi cách ứng phó tùy theo tình huống." },
      { ja: "年齢に応じた運動を選びましょう。", vi: "Hãy chọn môn vận động phù hợp với độ tuổi." },
    ],
  },
  {
    w: "～に備えて",
    r: "N／Vる＋に備えて",
    m: "[N2] Để chuẩn bị cho…, đề phòng… (làm trước cho việc sẽ xảy ra).",
    examples: [
      { ja: "地震に備えて、水と食料を用意している。", vi: "Tôi chuẩn bị nước và thức ăn đề phòng động đất." },
      { ja: "試験に備えて、毎日復習している。", vi: "Tôi ôn bài mỗi ngày để chuẩn bị cho kỳ thi." },
      { ja: "老後に備えて貯金を始めた。", vi: "Tôi bắt đầu tiết kiệm để chuẩn bị cho tuổi già." },
    ],
  },
  {
    w: "よほど",
    r: "よほど＋Aい／V／N／～のだろう；よほどの＋N",
    m: "[N2] Khá, rất, hẳn là… (mức độ cao hơn thông thường); よほど～でなければ: nếu không thật sự… thì không.",
    examples: [
      { ja: "よほど疲れていたのか、彼は帰ってすぐ寝てしまった。", vi: "Chắc hẳn rất mệt nên anh ấy về đến nơi là ngủ ngay." },
      { ja: "よほどの理由がない限り、欠席は認められない。", vi: "Nếu không có lý do thật đặc biệt thì không được phép vắng mặt." },
      { ja: "今日はよほど暑いのか、みんな上着を脱いでいる。", vi: "Hôm nay chắc nóng lắm, ai cũng cởi áo khoác." },
    ],
  },
  {
    w: "～てからでないと",
    r: "Vて＋からでないと～ない／からでなければ～ない",
    m: "[N2] Nếu chưa… thì không thể… (phải làm xong việc trước thì mới làm được việc sau).",
    examples: [
      { ja: "診察を受けてからでないと、薬は出せません。", vi: "Nếu chưa khám thì chúng tôi không thể kê thuốc." },
      { ja: "親に相談してからでないと、決められない。", vi: "Chưa bàn với bố mẹ thì tôi không thể quyết định." },
      { ja: "全部読んでからでないと、感想は言えない。", vi: "Chưa đọc hết thì tôi không thể nói cảm tưởng." },
    ],
  },
  {
    w: "～ぶりに",
    r: "N（thời gian）＋ぶりに",
    m: "[N2] Sau (khoảng thời gian)…, lần đầu tiên sau…",
    examples: [
      { ja: "十年ぶりに、友達に会った。", vi: "Tôi gặp lại bạn sau mười năm." },
      { ja: "久しぶりに、故郷へ帰った。", vi: "Lâu lắm rồi tôi mới về quê." },
      { ja: "三日ぶりに雨が止んだ。", vi: "Sau ba ngày, mưa đã tạnh." },
    ],
  },
  {
    w: "あとは～だけだ",
    r: "あとは＋V／N＋だけだ／のみだ",
    m: "[N2] Còn lại chỉ là…, chỉ còn…, phần còn lại thì…",
    examples: [
      { ja: "準備はできた。あとは本番を待つだけだ。", vi: "Chuẩn bị xong rồi. Chỉ còn đợi đến buổi thật." },
      { ja: "あとはお湯を注ぐだけで食べられます。", vi: "Chỉ cần rót nước nóng vào nữa là ăn được." },
      { ja: "あとは天気だけが心配だ。", vi: "Chỉ còn lo mỗi chuyện thời tiết." },
    ],
  },
  {
    w: "少しも～ない",
    r: "少しも＋Vない／Aくない／ナAではない",
    m: "[N3–N2] Một chút cũng không…, hoàn toàn không… (phủ định mạnh).",
    examples: [
      { ja: "彼の話は少しも面白くない。", vi: "Câu chuyện của anh ấy chẳng thú vị chút nào." },
      { ja: "少しも疲れていません。", vi: "Tôi không mệt chút nào." },
      { ja: "少しも悪いと思っていない。", vi: "Anh ta không hề thấy mình có lỗi." },
    ],
  },
  {
    w: "～抜きには",
    r: "N＋抜きには（～ない）",
    m: "[N2] Nếu không có…, bỏ… thì không thể… (N là yếu tố không thể thiếu).",
    examples: [
      { ja: "彼の協力抜きには、このプロジェクトは成功しなかった。", vi: "Nếu không có sự hợp tác của anh ấy thì dự án này đã không thành công." },
      { ja: "この問題は、お金の話抜きには語れない。", vi: "Vấn đề này không thể bàn mà bỏ qua chuyện tiền bạc." },
      { ja: "日本の歴史は、仏教抜きには語れない。", vi: "Không thể nói về lịch sử Nhật Bản mà thiếu Phật giáo." },
    ],
  },
  {
    w: "そのうえ",
    r: "文。そのうえ、＋文",
    m: "[N2] Hơn nữa, ngoài ra, thêm vào đó (bổ sung thông tin cùng chiều).",
    examples: [
      { ja: "この店は安い。そのうえ、料理もおいしい。", vi: "Quán này rẻ. Hơn nữa, đồ ăn còn ngon." },
      { ja: "彼は頭がいい。そのうえ、性格もいい。", vi: "Anh ấy thông minh. Thêm nữa, tính cách cũng tốt." },
      { ja: "道に迷った。そのうえ、雨まで降ってきた。", vi: "Tôi bị lạc đường. Chưa hết, trời còn đổ mưa." },
    ],
  },
  {
    w: "そういえば",
    r: "そういえば＋文",
    m: "[N2] À, nhắc mới nhớ…, nói mới nhớ… (chợt nhớ ra điều liên quan khi nghe câu chuyện).",
    examples: [
      { ja: "そういえば、今日は田中さんの誕生日だ。", vi: "À, nhắc mới nhớ, hôm nay là sinh nhật anh Tanaka." },
      { ja: "そういえば、最近山田さんを見ないね。", vi: "Nói mới nhớ, dạo này không thấy anh Yamada nhỉ." },
      { ja: "そういえば、昨日の宿題はやった？", vi: "À mà, bài tập hôm qua cậu làm chưa?" },
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

console.log(JSON.stringify({ added: added.length, skipped, themeCount: theme.count, total: data.total, first: added[0] && added[0].id, last: added.length && added[added.length - 1].id }, null, 2));

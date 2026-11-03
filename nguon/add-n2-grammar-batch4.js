/**
 * Add grammar from ngu_phap_n2.md into n2_grammar.
 * Usage: node nguon/add-n2-grammar-batch4.js
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
    w: "～につき",
    r: "N＋につき",
    m: "[N2] 1) Vì…, do… (thông báo, biển báo trang trọng). 2) Mỗi…, cho mỗi… (đơn vị).",
    examples: [
      { ja: "本日は定休日につき、休業いたします。", vi: "Hôm nay là ngày nghỉ định kỳ nên cửa hàng đóng cửa." },
      { ja: "工事中につき、通行止め。", vi: "Đang thi công nên cấm lưu thông." },
      { ja: "参加費は一人につき三千円です。", vi: "Phí tham gia là 3.000 yên mỗi người." },
    ],
  },
  {
    w: "～にしたって",
    r: "N／疑問詞＋にしたって；V普通形＋にしたって",
    m: "[N2] Ngay cả…, dù là… thì cũng… (văn nói của ～にしても).",
    examples: [
      { ja: "先生にしたって、全部わかるわけではない。", vi: "Ngay cả thầy giáo cũng đâu phải biết hết." },
      { ja: "遅れるにしたって、連絡ぐらいしてよ。", vi: "Dù có đến muộn thì ít nhất cũng phải báo một tiếng chứ." },
      { ja: "誰にしたって、失敗はある。", vi: "Dù là ai thì cũng có lúc thất bại." },
    ],
  },
  {
    w: "お～です",
    r: "お＋Vます（bỏ ます）＋です",
    m: "[N2–N3] Kính ngữ (尊敬語) chỉ hành động/trạng thái của người trên đang diễn ra; tương đương ～ている／～する.",
    examples: [
      { ja: "社長がお待ちです。", vi: "Giám đốc đang chờ ạ." },
      { ja: "何をお探しですか。", vi: "Quý khách đang tìm gì ạ?" },
      { ja: "部長は明日お休みです。", vi: "Trưởng phòng ngày mai nghỉ ạ." },
    ],
  },
  {
    w: "Vない＋かな",
    r: "Vない形＋かな（あ）",
    m: "[N3–N2] Mong là…, ước gì… (mong muốn, tự nhủ); cũng dùng để nhờ vả nhẹ nhàng (～てくれないかな).",
    examples: [
      { ja: "早く夏休みにならないかな。", vi: "Mong sao nghỉ hè đến nhanh." },
      { ja: "バス、早く来ないかなあ。", vi: "Xe buýt mau đến đi chứ." },
      { ja: "誰か手伝ってくれないかな。", vi: "Ước gì có ai giúp mình nhỉ." },
    ],
  },
  {
    w: "～というように",
    r: "N／文＋というように",
    m: "[N2] Như là…, chẳng hạn… (liệt kê ví dụ); theo kiểu…",
    examples: [
      { ja: "月曜は英語、火曜は数学というように、毎日勉強する科目を決めている。", vi: "Thứ hai tiếng Anh, thứ ba toán… tôi định sẵn môn học mỗi ngày như vậy." },
      { ja: "北は北海道、南は沖縄というように、全国から人が集まった。", vi: "Từ Hokkaido ở phía bắc đến Okinawa ở phía nam, người khắp cả nước đã tụ họp." },
      { ja: "一人一品というように、料理を持ち寄った。", vi: "Mỗi người một món, chúng tôi mang đồ ăn đến góp." },
    ],
  },
  {
    w: "このように",
    r: "このように＋文",
    m: "[N3–N2] Như thế này, như vậy (tóm tắt, kết luận nội dung vừa trình bày).",
    examples: [
      { ja: "このように、環境問題は私たちの生活と深く関わっている。", vi: "Như vậy, vấn đề môi trường liên quan sâu sắc đến cuộc sống của chúng ta." },
      { ja: "このようにすれば、早く終わります。", vi: "Làm theo cách này thì sẽ xong nhanh." },
      { ja: "結果はこのようになりました。", vi: "Kết quả đã ra như thế này." },
    ],
  },
  {
    w: "それには",
    r: "文。それには＋文",
    m: "[N2] Để làm được điều đó thì… (nêu điều kiện/cách thức cần thiết cho mục tiêu vừa nói).",
    examples: [
      { ja: "N2に合格したい。それには毎日の勉強が欠かせない。", vi: "Tôi muốn đỗ N2. Để làm được điều đó thì không thể thiếu việc học mỗi ngày." },
      { ja: "家を買いたいが、それにはお金が必要だ。", vi: "Tôi muốn mua nhà, nhưng để làm vậy thì cần tiền." },
      { ja: "健康でいたい。それには運動が一番だ。", vi: "Tôi muốn khỏe mạnh. Muốn vậy thì vận động là tốt nhất." },
    ],
  },
  {
    w: "～つもりだ",
    r: "V辞書形／Vない＋つもりだ；Vた／Aい／Nの＋つもりだ",
    m: "[N4–N2] 1) Định…, dự định… 2) Vたつもり: cứ tưởng là đã…, coi như đã… (nhưng thực tế khác).",
    examples: [
      { ja: "来年、日本で働くつもりだ。", vi: "Năm sau tôi định làm việc ở Nhật." },
      { ja: "鍵をかけたつもりだったが、開いていた。", vi: "Tôi cứ tưởng đã khóa cửa, vậy mà vẫn mở." },
      { ja: "旅行したつもりで、そのお金を貯金した。", vi: "Coi như đã đi du lịch, tôi để dành số tiền đó." },
    ],
  },
  {
    w: "Vた＋ほうがよかった",
    r: "Vた／Vない＋ほうがよかった",
    m: "[N3–N2] Lẽ ra nên… (thì tốt hơn) — hối tiếc hoặc nhận xét việc đã qua.",
    examples: [
      { ja: "もっと早く出発したほうがよかった。", vi: "Lẽ ra nên xuất phát sớm hơn." },
      { ja: "あんなこと、言わないほうがよかった。", vi: "Lẽ ra không nên nói điều như thế." },
      { ja: "先に予約したほうがよかったね。", vi: "Lẽ ra nên đặt chỗ trước nhỉ." },
    ],
  },
  {
    w: "もしかしたら",
    r: "もしかしたら＋～かもしれない",
    m: "[N3–N2] Không chừng…, biết đâu…, có lẽ… (thường đi với かもしれない).",
    examples: [
      { ja: "もしかしたら、明日は雨かもしれない。", vi: "Không chừng mai trời mưa." },
      { ja: "もしかしたら、彼はもう帰ったのかもしれない。", vi: "Biết đâu anh ấy đã về rồi." },
      { ja: "もしかしたら、あの人を知っているかも。", vi: "Có khi tôi biết người đó đấy." },
    ],
  },
  {
    w: "～ようではないか",
    r: "Vよう（意向形）＋ではないか／じゃないか",
    m: "[N2] Chúng ta hãy cùng…! (kêu gọi mạnh mẽ, trang trọng, thường dùng trong diễn thuyết).",
    examples: [
      { ja: "みんなで力を合わせて頑張ろうではないか。", vi: "Tất cả chúng ta hãy cùng chung sức cố gắng!" },
      { ja: "環境を守るために行動しようではないか。", vi: "Hãy cùng hành động để bảo vệ môi trường!" },
      { ja: "もう一度挑戦してみようじゃないか。", vi: "Hãy thử thách thêm một lần nữa nào!" },
    ],
  },
  {
    w: "～かというと",
    r: "疑問詞＋普通形＋かというと；普通形＋かというと",
    m: "[N2] Nếu hỏi là… thì… (nêu câu hỏi rồi giải thích); ～かというと…ない: không hẳn là….",
    examples: [
      { ja: "なぜ遅れたかというと、電車が止まったからだ。", vi: "Nếu hỏi vì sao tôi đến muộn thì là vì tàu bị dừng." },
      { ja: "どこが好きかというと、静かなところだ。", vi: "Nếu hỏi thích ở đâu thì là chỗ yên tĩnh." },
      { ja: "高いからおいしいかというと、そうでもない。", vi: "Đắt thì có ngon không ư, cũng không hẳn vậy." },
    ],
  },
  {
    w: "いつのまに（か）",
    r: "いつのまに＋文？／いつのまにか＋文",
    m: "[N3–N2] Từ lúc nào (mà)… (ngạc nhiên); いつのまにか: lúc nào không hay, chẳng biết từ lúc nào.",
    examples: [
      { ja: "いつのまにそんなに背が伸びたの？", vi: "Con cao lên như thế từ lúc nào vậy?" },
      { ja: "いつのまにか外は暗くなっていた。", vi: "Chẳng biết từ lúc nào bên ngoài đã tối." },
      { ja: "いつのまにか眠ってしまった。", vi: "Tôi ngủ thiếp đi lúc nào không hay." },
    ],
  },
  {
    w: "～向け",
    r: "N＋向けだ／向けの＋N／向けに",
    m: "[N2] Dành cho…, hướng đến đối tượng… (được làm ra cho đối tượng đó).",
    examples: [
      { ja: "これは子ども向けの本です。", vi: "Đây là sách dành cho trẻ em." },
      { ja: "外国人向けに説明会を開いた。", vi: "Đã tổ chức buổi giới thiệu dành cho người nước ngoài." },
      { ja: "この番組は若者向けだ。", vi: "Chương trình này dành cho giới trẻ." },
    ],
  },
  {
    w: "～たがる",
    r: "Vます（bỏ ます）＋たがる／たがっている",
    m: "[N3–N2] (Người thứ ba) muốn…, thích…, hay đòi… (biểu hiện mong muốn ra bên ngoài).",
    examples: [
      { ja: "子どもは何でも自分でやりたがる。", vi: "Trẻ con cái gì cũng muốn tự làm." },
      { ja: "弟が新しいゲームを欲しがっている。", vi: "Em trai tôi đang muốn có trò chơi mới." },
      { ja: "彼はその話をしたがらない。", vi: "Anh ấy không muốn nói về chuyện đó." },
    ],
  },
  {
    w: "～というだけで",
    r: "普通形（Nだ／ナAだ）＋というだけで",
    m: "[N2] Chỉ vì… (mà đã…) — chỉ với một lý do đơn giản đó mà dẫn tới kết quả/đánh giá.",
    examples: [
      { ja: "外国人だというだけで、部屋を借りられなかった。", vi: "Chỉ vì là người nước ngoài mà tôi không thuê được phòng." },
      { ja: "有名だというだけで、その店に行列ができる。", vi: "Chỉ vì nổi tiếng mà quán đó có hàng dài người xếp." },
      { ja: "若いというだけで、意見を聞いてもらえない。", vi: "Chỉ vì còn trẻ mà ý kiến không được lắng nghe." },
    ],
  },
  {
    w: "～てみてはどうかと思います",
    r: "Vて＋みてはどうかと思います／みてはいかがでしょうか",
    m: "[N2] Tôi nghĩ… thử… xem sao (đề xuất, khuyên một cách lịch sự, mềm mỏng).",
    examples: [
      { ja: "一度専門家に相談してみてはどうかと思います。", vi: "Tôi nghĩ anh thử hỏi ý kiến chuyên gia một lần xem sao." },
      { ja: "やり方を変えてみてはどうかと思います。", vi: "Tôi nghĩ ta thử thay đổi cách làm xem sao." },
      { ja: "新しい案を試してみてはいかがでしょうか。", vi: "Thử áp dụng phương án mới xem sao ạ?" },
    ],
  },
  {
    w: "次第に",
    r: "次第に＋V（変化）",
    m: "[N2] Dần dần, từ từ (thay đổi diễn ra từng chút một).",
    examples: [
      { ja: "雨は次第に強くなった。", vi: "Mưa dần dần nặng hạt hơn." },
      { ja: "新しい仕事にも次第に慣れてきた。", vi: "Tôi dần quen với công việc mới." },
      { ja: "病状は次第に回復している。", vi: "Bệnh tình đang dần hồi phục." },
    ],
  },
  {
    w: "～のようだ",
    r: "Nの／普通形（ナAな）＋ようだ",
    m: "[N3–N2] 1) Hình như…, có vẻ… (suy đoán dựa trên quan sát). 2) Giống như… (so sánh).",
    examples: [
      { ja: "電気が消えている。留守のようだ。", vi: "Đèn tắt rồi. Hình như không có ai ở nhà." },
      { ja: "彼は風邪のようだ。", vi: "Hình như anh ấy bị cảm." },
      { ja: "今日は春のような暖かさだ。", vi: "Hôm nay ấm áp như mùa xuân." },
    ],
  },
  {
    w: "～もしないで",
    r: "Vます（bỏ ます）＋もしないで",
    m: "[N2] Đến cả… cũng không… (mà đã…) — phê phán việc không làm điều tối thiểu.",
    examples: [
      { ja: "彼は勉強もしないで試験を受けた。", vi: "Cậu ấy chẳng học gì cả mà đi thi." },
      { ja: "よく調べもしないで決めてしまった。", vi: "Chẳng tìm hiểu kỹ gì mà đã quyết định." },
      { ja: "食べもしないで、まずいと言うな。", vi: "Ăn còn chưa ăn thì đừng nói là dở." },
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

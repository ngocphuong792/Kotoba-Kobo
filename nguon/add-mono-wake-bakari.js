/**
 * Add もの / わけ / ばかり / 限り / ところ forms (N5–N2) into n2_grammar.
 * Each form = 1 item. Skip exact existing patterns.
 * Usage: node nguon/add-mono-wake-bakari.js
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

/** @type {Array<{w:string,r:string,m:string,level:string,examples:Array<{ja:string,vi:string}>}>} */
const NEW = [
  // ========== もの ==========
  {
    w: "～ものだ（回想）",
    r: "Vた＋ものだ",
    level: "N3–N2",
    m: "Ngày xưa thường…; hồi ấy hay… (nhớ lại thói quen / trạng thái trong quá khứ).",
    examples: [
      { ja: "子供のころは、よく川で遊んだものだ。", vi: "Hồi nhỏ tôi thường hay chơi ở sông." },
      { ja: "学生時代は毎日遅くまで勉強したものだ。", vi: "Thời sinh viên tôi từng học đến tận khuya mỗi ngày." },
    ],
  },
  {
    w: "～ものか／～もんか",
    r: "普通形＋ものか／もんか",
    level: "N2",
    m: "Làm gì mà…; sao lại… được (phủ định mạnh, phản đối, không đời nào).",
    examples: [
      { ja: "そんな話、信じるものか。", vi: "Chuyện như vậy làm gì có chuyện tin được." },
      { ja: "二度とあいつに会うもんか。", vi: "Không đời nào gặp lại hắn nữa." },
    ],
  },
  {
    w: "～ものを",
    r: "普通形＋ものを",
    level: "N2",
    m: "Thế mà…; đáng lẽ… (tiếc nuối, trách móc vì không làm điều lẽ ra nên làm).",
    examples: [
      { ja: "聞けばすぐ分かったものを、黙っていた。", vi: "Hỏi là biết ngay thế mà lại im." },
      { ja: "連絡してくれればよかったものを。", vi: "Đáng lẽ liên lạc với tôi thì tốt rồi thế mà…" },
    ],
  },
  {
    w: "～ものだから／～もので",
    r: "普通形＋ものだから／もので",
    level: "N2",
    m: "Vì… mà… (đưa lý do, thường mang sắc thái biện hộ / giải thích).",
    examples: [
      { ja: "道が混んでいたものだから、遅くなりました。", vi: "Vì đường đông nên tôi đến muộn." },
      { ja: "初めてなもので、緊張しています。", vi: "Vì là lần đầu nên tôi đang căng thẳng." },
    ],
  },
  {
    w: "～ものがある",
    r: "普通形＋ものがある",
    level: "N2",
    m: "Có điều gì đó khiến…; mang cảm giác… (nhấn mạnh ấn tượng mạnh).",
    examples: [
      { ja: "彼の話には説得力のあるものがある。", vi: "Lời anh ấy có điều gì đó rất thuyết phục." },
      { ja: "この絵には心を打つものがある。", vi: "Bức tranh này có điều gì đó đánh động lòng người." },
    ],
  },
  {
    w: "～というものだ",
    r: "普通形＋というものだ",
    level: "N2",
    m: "Đó mới đúng là…; gọi là… mới phải (đánh giá / kết luận theo lẽ thường).",
    examples: [
      { ja: "約束を守るのが大人というものだ。", vi: "Giữ lời hứa mới đúng là người lớn." },
      { ja: "失敗してこそ成長するというものだ。", vi: "Thất bại rồi mới trưởng thành — đó mới là lẽ thường." },
    ],
  },
  {
    w: "～ないものでもない",
    r: "Vない＋ものでもない",
    level: "N2",
    m: "Không phải là không thể…; cũng có thể… (phủ định nhẹ, mở khả năng).",
    examples: [
      { ja: "条件次第では、引き受けないものでもない。", vi: "Tùy điều kiện, cũng không phải là không nhận." },
      { ja: "努力すればできないものでもない。", vi: "Nếu cố gắng thì cũng không phải là không làm được." },
    ],
  },
  {
    w: "～ないものか",
    r: "Vない＋ものか",
    level: "N2",
    m: "Không thể nào… được sao?; ước gì có thể… (mong muốn mạnh).",
    examples: [
      { ja: "なんとか解決できないものか。", vi: "Không biết có cách nào giải quyết được không?" },
      { ja: "もう少し安くならないものかと思って探している。", vi: "Tôi đang tìm với hy vọng không thể nào rẻ hơn một chút sao." },
    ],
  },
  {
    w: "～ものとして",
    r: "普通形＋ものとして",
    level: "N2",
    m: "Coi như…; với tư cách là…; giả định rằng…",
    examples: [
      { ja: "この話は聞かなかったものとしてください。", vi: "Hãy coi như chưa từng nghe chuyện này." },
      { ja: "彼はすでに退職したものとして手続きを進めた。", vi: "Chúng tôi tiến hành thủ tục với giả định anh ấy đã nghỉ việc." },
    ],
  },
  {
    w: "～んだもの／～だもの",
    r: "普通形＋んだもの／だもの（口語）",
    level: "N2–N3",
    m: "Vì… mà (lý do cảm tính, thân mật, thường dùng trong nói).",
    examples: [
      { ja: "疲れたんだもの、休ませてよ。", vi: "Vì mệt rồi, cho mình nghỉ đi." },
      { ja: "好きだもの、仕方ないよ。", vi: "Vì thích mà, biết sao được." },
    ],
  },

  // ========== わけ ==========
  {
    w: "～というわけだ",
    r: "普通形＋というわけだ",
    level: "N2–N3",
    m: "Tức là…; hóa ra là…; vậy nên… (tóm lại kết luận từ tình huống).",
    examples: [
      { ja: "電車が止まっていた。遅れたというわけだ。", vi: "Tàu dừng. Tức là vì thế mà đến muộn." },
      { ja: "彼は転勤になった。来月から大阪だというわけだ。", vi: "Anh ấy bị điều chuyển. Tức là từ tháng sau sẽ ở Osaka." },
    ],
  },
  {
    w: "～わけでもない",
    r: "普通形＋わけでもない",
    level: "N2",
    m: "Cũng không hẳn là…; không phải là… (phủ định mềm một kết luận).",
    examples: [
      { ja: "毎日忙しいわけでもないが、自由な時間は少ない。", vi: "Cũng không hẳn mỗi ngày đều bận, nhưng thời gian rảnh ít." },
      { ja: "嫌いなわけでもないが、得意ではない。", vi: "Không phải là ghét, nhưng cũng không giỏi." },
    ],
  },
  {
    w: "～わけにはいかない（再掲整理）",
    r: "Vる＋わけにはいかない",
    level: "N2",
    m: "Không thể… được (vì trách nhiệm, quy tắc, đạo đức, hoàn cảnh).",
    examples: [
      { ja: "ここで諦めるわけにはいかない。", vi: "Không thể bỏ cuộc ở đây được." },
      { ja: "約束を破るわけにはいきません。", vi: "Không thể thất hứa được." },
    ],
  },

  // ========== ばかり ==========
  {
    w: "～ばかりか／～ばかりでなく",
    r: "普通形／N＋ばかりか／ばかりでなく＋も",
    level: "N2",
    m: "Không chỉ… mà còn… (nhấn mạnh thêm yếu tố bất ngờ hoặc mạnh hơn).",
    examples: [
      { ja: "彼は英語ばかりか、中国語も話せる。", vi: "Anh ấy không chỉ nói được tiếng Anh mà cả tiếng Trung." },
      { ja: "この店は安いばかりでなく、味もいい。", vi: "Quán này không chỉ rẻ mà vị cũng ngon." },
    ],
  },
  {
    w: "～ばかりに",
    r: "普通形＋ばかりに",
    level: "N2",
    m: "Chỉ vì… mà (dẫn đến kết quả xấu / ngoài ý muốn).",
    examples: [
      { ja: "油断したばかりに、試合に負けてしまった。", vi: "Chỉ vì lơ là mà thua trận." },
      { ja: "一言言いすぎたばかりに、誤解を招いた。", vi: "Chỉ vì nói thừa một câu mà gây hiểu lầm." },
    ],
  },
  {
    w: "～とばかりに",
    r: "文／節＋とばかりに",
    level: "N2",
    m: "Như thể muốn nói rằng…; ra vẻ như… (hành động thể hiện thái độ rõ).",
    examples: [
      { ja: "彼は待ってましたとばかりに手を挙げた。", vi: "Anh ấy giơ tay như thể muốn nói “đợi mãi mới tới”." },
      { ja: "帰れとばかりにドアを開けた。", vi: "Anh ấy mở cửa như muốn bảo “về đi”." },
    ],
  },
  {
    w: "～んばかりだ／～んばかりに",
    r: "Vない（ないをん）＋ばかりだ／ばかりに",
    level: "N2",
    m: "Suýt nữa như…; như sắp…; đến mức như sắp…",
    examples: [
      { ja: "彼は泣き出さんばかりの顔をしていた。", vi: "Anh ấy gương mặt như sắp khóc òa." },
      { ja: "割れんばかりの拍手に包まれた。", vi: "Được bao quanh bởi tiếng vỗ tay như sắp làm vỡ cả không gian." },
    ],
  },
  {
    w: "～ばかりになっている",
    r: "Vる＋ばかりになっている",
    level: "N2–N3",
    m: "Chỉ còn chờ…; đã sẵn sàng đến mức chỉ còn…",
    examples: [
      { ja: "荷物はもう送るばかりになっている。", vi: "Hành lý đã sẵn sàng, chỉ còn chờ gửi đi." },
      { ja: "発表するばかりになっている資料を見直した。", vi: "Tôi xem lại tài liệu gần như chỉ còn chờ công bố." },
    ],
  },
  {
    w: "～ばかりで",
    r: "普通形／N＋ばかりで",
    level: "N3–N2",
    m: "Chỉ toàn… mà (không có yếu tố khác mong đợi); chỉ có… thôi.",
    examples: [
      { ja: "文句ばかりで、提案がない。", vi: "Chỉ toàn phàn nàn chứ không có đề xuất." },
      { ja: "楽しいばかりで、勉強になっていない。", vi: "Chỉ vui thôi chứ chưa học được gì." },
    ],
  },

  // ========== 限り ==========
  {
    w: "～できる限り",
    r: "できる限り＋V／N",
    level: "N3–N2",
    m: "Càng… càng tốt; trong khả năng tốt nhất có thể.",
    examples: [
      { ja: "できる限り早く返信します。", vi: "Tôi sẽ trả lời sớm nhất có thể." },
      { ja: "できる限りのサポートをいたします。", vi: "Chúng tôi sẽ hỗ trợ trong phạm vi tốt nhất có thể." },
    ],
  },
  {
    w: "～限りだ",
    r: "イA／感情を表す表現＋限りだ",
    level: "N2",
    m: "Thật là… vô cùng… (bộc lộ cảm xúc mạnh).",
    examples: [
      { ja: "ご協力いただけるとは、心強い限りです。", vi: "Được hỗ trợ như vậy thật là vững dạ biết bao." },
      { ja: "家族と離れて暮らすのは寂しい限りだ。", vi: "Sống xa gia đình thật cô đơn biết nhường nào." },
    ],
  },
  {
    w: "～に限る",
    r: "N／普通形＋に限る",
    level: "N2–N3",
    m: "1) Tốt nhất là…; 2) Chỉ giới hạn ở… (cũng gặp dạng に限り).",
    examples: [
      { ja: "疲れたときは寝るに限る。", vi: "Khi mệt thì tốt nhất là ngủ." },
      { ja: "この割引は会員に限る。", vi: "Ưu đãi này chỉ dành cho hội viên." },
    ],
  },
  {
    w: "～ない限り返し確認",
    r: "Vない＋限り",
    level: "N2",
    m: "Trừ khi…; nếu không… thì không… (điều kiện phủ định làm giới hạn).",
    examples: [
      { ja: "許可がない限り、入室できません。", vi: "Trừ khi có phép, không thể vào phòng." },
      { ja: "雨がやまない限り、試合は中止です。", vi: "Miễn là mưa chưa tạnh thì trận đấu vẫn hủy." },
    ],
  },

  // ========== ところ ==========
  {
    w: "～るところだ",
    r: "Vる＋ところだ",
    level: "N4–N3",
    m: "Đúng lúc sắp…; chuẩn bị / sắp làm…",
    examples: [
      { ja: "これから出かけるところです。", vi: "Tôi đúng lúc sắp ra ngoài." },
      { ja: "報告書を提出するところだ。", vi: "Tôi sắp nộp báo cáo." },
    ],
  },
  {
    w: "～ているところだ",
    r: "Vている＋ところだ",
    level: "N4–N3",
    m: "Đúng lúc đang…",
    examples: [
      { ja: "今、資料を確認しているところです。", vi: "Hiện tôi đúng lúc đang kiểm tra tài liệu." },
      { ja: "ちょうど電話しているところに来客があった。", vi: "Đúng lúc đang gọi điện thì có khách đến." },
    ],
  },
  {
    w: "～たところだ",
    r: "Vた＋ところだ",
    level: "N4–N3",
    m: "Vừa mới… xong (nhấn mạnh hành động vừa hoàn tất).",
    examples: [
      { ja: "今、着いたところです。", vi: "Tôi vừa mới đến nơi." },
      { ja: "食事が終わったところだ。", vi: "Tôi vừa ăn xong." },
    ],
  },
  {
    w: "～ところだった",
    r: "Vる／Vない＋ところだった",
    level: "N2–N3",
    m: "Suýt nữa thì… (thường là việc xấu đã suýt xảy ra).",
    examples: [
      { ja: "もう少しで電車に乗り遅れるところだった。", vi: "Suýt nữa thì lỡ tàu." },
      { ja: "注意されなかったら、忘れるところだった。", vi: "Nếu không được nhắc thì suýt nữa đã quên." },
    ],
  },
  {
    w: "～たところで",
    r: "Vた＋ところで",
    level: "N2",
    m: "Cho dù đã… thì cũng (không thay đổi kết quả); dù… đi nữa.",
    examples: [
      { ja: "今から急いだところで、間に合わない。", vi: "Dù bây giờ có gấp rút thì cũng không kịp." },
      { ja: "謝ったところで、信頼はすぐ戻らない。", vi: "Dù xin lỗi thì niềm tin cũng không trở lại ngay." },
    ],
  },
  {
    w: "～ところを",
    r: "普通形＋ところを",
    level: "N2",
    m: "Trong lúc… / giữa tình huống… (thường lịch sự khi nhờ vả, hoặc nêu hoàn cảnh đặc biệt).",
    examples: [
      { ja: "お忙しいところをありがとうございます。", vi: "Xin cảm ơn anh/chị dù đang bận." },
      { ja: "お休みのところを失礼します。", vi: "Xin phép làm phiền trong lúc anh/chị đang nghỉ." },
    ],
  },
  {
    w: "～どころか",
    r: "普通形／N＋どころか",
    level: "N2",
    m: "Đâu chỉ…; trái lại còn…; nói gì đến… (phủ nhận mạnh, đưa sự việc mức cao hơn).",
    examples: [
      { ja: "休みどころか、残業続きだ。", vi: "Đâu có nghỉ, trái lại còn tăng ca liên tục." },
      { ja: "日本語が話せるどころか、まだ五十音も怪しい。", vi: "Nói gì đến nói được tiếng Nhật, fifty-sound còn chưa vững." },
    ],
  },
  {
    w: "～どころではない／～どころじゃない",
    r: "普通形／N＋どころではない",
    level: "N2",
    m: "Đâu phải lúc…; không đến nỗi để… (không có tâm trí / điều kiện cho việc đó).",
    examples: [
      { ja: "忙しくて旅行どころではない。", vi: "Bận đến mức đâu phải lúc đi du lịch." },
      { ja: "体調が悪くて食事どころじゃなかった。", vi: "Người mệt đến mức chẳng phải lúc ăn uống." },
    ],
  },
  {
    w: "～ところによると／～ところによれば",
    r: "聞いた／見た＋ところによると／によれば",
    level: "N2–N3",
    m: "Theo những gì… thì… (dẫn nguồn thông tin).",
    examples: [
      { ja: "ニュースのところによると、台風が近づいている。", vi: "Theo tin tức thì bão đang đến gần." },
      { ja: "彼の話によれば、会議は来週に延期だそうだ。", vi: "Theo lời anh ấy thì cuộc họp dời sang tuần sau." },
    ],
  },
  {
    w: "～ところを見ると",
    r: "普通形＋ところを見ると",
    level: "N2",
    m: "Nhìn vào… thì có thể đoán…; xét theo… thì…",
    examples: [
      { ja: "鞄を持っているところを見ると、これから出かけるらしい。", vi: "Nhìn thấy đang cầm túi thì hình như sắp ra ngoài." },
      { ja: "笑顔のところを見ると、うまくいったようだ。", vi: "Nhìn nụ cười thì có vẻ chuyện đã ổn." },
    ],
  },
  {
    w: "～たところ（発見）",
    r: "Vた＋ところ、～",
    level: "N2–N3",
    m: "Sau khi làm… thì phát hiện / kết quả là… (thường là kết quả ngoài dự kiến một chút).",
    examples: [
      { ja: "問い合わせてみたところ、在庫があるとのことだった。", vi: "Thử hỏi thì được biết vẫn còn hàng." },
      { ja: "窓を開けたところ、涼しい風が入ってきた。", vi: "Mở cửa sổ ra thì gió mát tràn vào." },
    ],
  },
];

// Drop the poorly named duplicate of ない限り
const cleaned = NEW.filter((e) => e.w !== "～ない限り返し確認" && e.w !== "～わけにはいかない（再掲整理）");

const added = [];
const skipped = [];

for (const e of cleaned) {
  const key = norm(e.w);
  // also skip if a very close form already exists as exact key
  if (existing.has(key)) {
    skipped.push(e.w);
    continue;
  }
  // soft-skip near-duplicates already covered well
  const softDup = [
    ["～たところ（発見）", ["～たところ", "Vたところ"]],
    ["～ところによると／～ところによれば", ["ちなみに／ところで"]],
  ];
  // don't soft skip たところ発見 - user asked each form separate; keep it if not exact

  const id = "v" + String(data.items.length + 1).padStart(4, "0");
  const meaning = `[${e.level}] ${e.m}`;
  data.items.push({
    id,
    w: e.w,
    r: e.r,
    m: meaning,
    t: "n2_grammar",
    s: "Ngữ pháp N2",
  });
  EXAMPLES[id] = e.examples.map((x) => ({ ja: x.ja, vi: x.vi }));
  existing.add(key);
  added.push({ id, w: e.w, level: e.level });
}

theme.count = data.items.filter((i) => i.t === "n2_grammar").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");

const grammarPath = path.join(root, "nguon", "n2-grammar.json");
if (fs.existsSync(grammarPath)) {
  const gjson = JSON.parse(fs.readFileSync(grammarPath, "utf8"));
  for (const a of added) {
    const e = cleaned.find((x) => x.w === a.w);
    gjson.items.push({
      id: a.id,
      pattern: e.w,
      structure: e.r,
      meaning: `[${e.level}] ${e.m}`,
      examples: e.examples,
    });
  }
  gjson.total = gjson.items.length;
  fs.writeFileSync(grammarPath, JSON.stringify(gjson, null, 2) + "\n");
}

console.log(
  JSON.stringify(
    {
      added: added.length,
      skipped,
      themeCount: theme.count,
      total: data.total,
      byFamily: {
        mono: added.filter((a) => a.w.includes("もの") || a.w.includes("もん")).length,
        wake: added.filter((a) => a.w.includes("わけ")).length,
        bakari: added.filter((a) => a.w.includes("ばかり")).length,
        kagiri: added.filter((a) => a.w.includes("限")).length,
        tokoro: added.filter((a) => a.w.includes("ところ") || a.w.includes("どころ")).length,
      },
      items: added.map((a) => a.w),
    },
    null,
    2
  )
);

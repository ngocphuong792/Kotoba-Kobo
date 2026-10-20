/**
 * Create theme "Kính ngữ" — regular + irregular keigo for JLPT & daily life.
 * Usage: node nguon/add-keigo-theme.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(root, "vocab-data.js"), "utf8"));
eval(fs.readFileSync(path.join(root, "examples-data.js"), "utf8"));

const data = window.VOCAB_DATA;
const EXAMPLES = window.EXAMPLES_DATA;

if (data.themes.some((t) => t.id === "keigo")) {
  console.error("Theme keigo already exists");
  process.exit(1);
}

const ITEMS = [
  // ===== Tổng quan =====
  {
    w: "尊敬語（そんけいご）",
    r: "分類：尊敬語",
    m: "Tôn kính ngữ — nâng người nghe / người được nói đến lên (hành động của đối phương).",
    examples: [
      { ja: "部長はもうお帰りになりました。", vi: "Trưởng phòng đã về rồi ạ. (尊敬語)" },
      { ja: "お客様がお待ちです。", vi: "Khách đang chờ ạ." },
      { ja: "先生は何とおっしゃいましたか。", vi: "Thầy/cô đã nói gì ạ?" },
    ],
  },
  {
    w: "謙譲語（けんじょうご）",
    r: "分類：謙譲語",
    m: "Khiêm nhường ngữ — hạ thấp hành động của mình để tỏ kính trọng với đối phương.",
    examples: [
      { ja: "私が資料をお持ちします。", vi: "Tôi sẽ mang tài liệu ạ. (謙譲語)" },
      { ja: "明日伺います。", vi: "Ngày mai tôi sẽ đến (thăm/gặp) ạ." },
      { ja: "田中と申します。", vi: "Tôi tên là Tanaka ạ." },
    ],
  },
  {
    w: "丁寧語（ていねいご）",
    r: "分類：丁寧語（です・ます）",
    m: "Lịch sự ngữ — làm câu lịch sự nói chung (です／ます／ございます), không nhất thiết nâng/hạ đối tượng.",
    examples: [
      { ja: "これはペンです。", vi: "Đây là bút ạ." },
      { ja: "毎日勉強します。", vi: "Tôi học mỗi ngày." },
      { ja: "こちらでございます。", vi: "Đây ạ. (lịch sự hơn です)" },
    ],
  },

  // ===== Tôn kính — có quy tắc =====
  {
    w: "お／ご～になる",
    r: "お＋Vます＋になる／ご＋漢語動詞＋になる",
    m: "[Có quy tắc · 尊敬語] Tôn kính hóa hành động của đối phương.",
    examples: [
      { ja: "先生はもうお帰りになりましたか。", vi: "Thầy/cô đã về chưa ạ?" },
      { ja: "どうぞお座りになってください。", vi: "Xin mời ngồi ạ." },
      { ja: "部長は何時にご出発になりますか。", vi: "Trưởng phòng xuất phát lúc mấy giờ ạ?" },
      { ja: "資料をご覧になりましたか。", vi: "Anh/chị đã xem tài liệu chưa ạ?" },
    ],
  },
  {
    w: "お／ご～です",
    r: "お＋Vます＋です／ご＋N＋です",
    m: "[Có quy tắc · 尊敬語] Trạng thái / hành động đang diễn ra của đối phương (lịch sự).",
    examples: [
      { ja: "社長は会議室におります→いらっしゃいます／お待ちです。", vi: "Giám đốc đang ở phòng họp / đang chờ ạ." },
      { ja: "お客様がお見えです。", vi: "Khách đã đến ạ." },
      { ja: "今お忙しいですか。", vi: "Hiện anh/chị có đang bận không ạ?" },
    ],
  },
  {
    w: "～ていらっしゃる",
    r: "Vて＋いらっしゃる（いらっしゃいます）",
    m: "[Có quy tắc · 尊敬語] Tôn kính của ～ている (đang… / trạng thái).",
    examples: [
      { ja: "先生は今、何をしていらっしゃいますか。", vi: "Thầy/cô hiện đang làm gì ạ?" },
      { ja: "ご両親は東京に住んでいらっしゃいます。", vi: "Bố mẹ anh/chị đang sống ở Tokyo ạ." },
      { ja: "もうお帰りになっていらっしゃいます。", vi: "Người ấy đã về rồi ạ." },
    ],
  },
  {
    w: "～れる・られる（尊敬）",
    r: "Vない語幹＋れる／られる（尊敬の用法）",
    m: "[Có quy tắc · 尊敬語] Dùng dạng bị động như tôn kính (thường văn viết / trang trọng).",
    examples: [
      { ja: "部長は来月アメリカへ行かれます。", vi: "Trưởng phòng tháng sau sẽ đi Mỹ ạ." },
      { ja: "先生は何と言われましたか。", vi: "Thầy/cô đã nói gì ạ?" },
      { ja: "その本はもう読まれましたか。", vi: "Anh/chị đã đọc cuốn sách đó chưa ạ?" },
    ],
  },
  {
    w: "お／ご～くださる",
    r: "お＋Vます＋くださる／ご＋漢語＋くださる",
    m: "[Có quy tắc · 尊敬語] Đối phương làm ơn làm gì cho mình (kính trọng hơn ～てくれる).",
    examples: [
      { ja: "ご連絡くださり、ありがとうございます。", vi: "Xin cảm ơn anh/chị đã liên lạc." },
      { ja: "ご覧ください。", vi: "Xin hãy xem ạ." },
      { ja: "少々お待ちください。", vi: "Xin vui lòng đợi một chút." },
    ],
  },

  // ===== Khiêm nhường — có quy tắc =====
  {
    w: "お／ご～する",
    r: "お＋Vます＋する／ご＋漢語＋する",
    m: "[Có quy tắc · 謙譲語] Mình làm hành động hướng tới đối phương (khiêm nhường).",
    examples: [
      { ja: "荷物をお持ちします。", vi: "Tôi sẽ xách hành lý giúp ạ." },
      { ja: "後でご連絡します。", vi: "Sau tôi sẽ liên lạc ạ." },
      { ja: "ご案内します。こちらへどうぞ。", vi: "Tôi xin hướng dẫn. Xin mời đi lối này." },
      { ja: "資料をお送りします。", vi: "Tôi sẽ gửi tài liệu ạ." },
    ],
  },
  {
    w: "お／ご～いたす",
    r: "お＋Vます＋いたす／ご＋漢語＋いたす",
    m: "[Có quy tắc · 謙譲語] Khiêm nhường hơn ～する (thường trong công việc / phục vụ).",
    examples: [
      { ja: "確認いたしました。", vi: "Tôi đã xác nhận ạ." },
      { ja: "ご案内いたします。", vi: "Xin phép được hướng dẫn ạ." },
      { ja: "少々お待ちいただけますか。すぐご用意いたします。", vi: "Xin đợi một chút. Tôi sẽ chuẩn bị ngay ạ." },
    ],
  },
  {
    w: "～ていただく",
    r: "Vて＋いただく",
    m: "[Có quy tắc · 謙譲語] Nhờ đối phương làm… (khiêm nhường của ～てもらう).",
    examples: [
      { ja: "ご意見をいただけますか。", vi: "Xin cho tôi nhận ý kiến được không ạ?" },
      { ja: "説明していただき、ありがとうございます。", vi: "Xin cảm ơn anh/chị đã giải thích." },
      { ja: "サインをいただけますでしょうか。", vi: "Xin cho tôi chữ ký được không ạ?" },
    ],
  },
  {
    w: "～させていただく",
    r: "Vさせる＋ていただく",
    m: "[Có quy tắc · 謙譲語] Xin phép được…; cho phép tôi được… (rất phổ biến trong công sở).",
    examples: [
      { ja: "明日欠席させていただきます。", vi: "Xin phép được vắng mặt ngày mai." },
      { ja: "こちらで説明させていただきます。", vi: "Xin phép tôi được giải thích tại đây." },
      { ja: "座らせていただいてもよろしいですか。", vi: "Xin phép được ngồi có được không ạ?" },
      { ja: "検討させてください。→検討させていただきます。", vi: "Xin phép được xem xét ạ." },
    ],
  },
  {
    w: "お／ご～申し上げる",
    r: "お／ご＋N／漢語＋申し上げる",
    m: "[Có quy tắc · 謙譲語] Khiêm nhường rất trang trọng của nói / bày tỏ (thường cố định).",
    examples: [
      { ja: "深くお礼申し上げます。", vi: "Xin bày tỏ lòng cảm ơn sâu sắc." },
      { ja: "心よりお祝い申し上げます。", vi: "Xin chân thành chúc mừng." },
      { ja: "ご報告申し上げます。", vi: "Xin phép báo cáo ạ." },
    ],
  },

  // ===== Bất quy tắc — tôn kính =====
  {
    w: "いらっしゃる",
    r: "不規則・尊敬語 ← 行く／来る／いる",
    m: "[Bất quy tắc · 尊敬語] đi / đến / ở (của đối phương).",
    examples: [
      { ja: "社長は何時にいらっしゃいますか。", vi: "Giám đốc đến lúc mấy giờ ạ?" },
      { ja: "先生は研究室にいらっしゃいます。", vi: "Thầy/cô đang ở phòng nghiên cứu ạ." },
      { ja: "よくいらっしゃいました。", vi: "Chào mừng quý khách đã đến ạ." },
      { ja: "どちらへいらっしゃいますか。", vi: "Anh/chị đi đâu ạ?" },
    ],
  },
  {
    w: "おいでになる",
    r: "不規則・尊敬語 ← 行く／来る／いる",
    m: "[Bất quy tắc · 尊敬語] đi / đến / ở (trang trọng; hay gặp trong đề thi).",
    examples: [
      { ja: "またおいでください。", vi: "Xin mời ghé lại ạ." },
      { ja: "先生はもうおいでになりましたか。", vi: "Thầy/cô đã đến chưa ạ?" },
      { ja: "どうぞおいでになってください。", vi: "Xin mời đến ạ." },
    ],
  },
  {
    w: "おっしゃる",
    r: "不規則・尊敬語 ← 言う",
    m: "[Bất quy tắc · 尊敬語] nói (của đối phương).",
    examples: [
      { ja: "先生がおっしゃったとおりです。", vi: "Đúng như thầy/cô đã nói ạ." },
      { ja: "何とおっしゃいましたか。", vi: "Anh/chị vừa nói gì ạ?" },
      { ja: "おっしゃる意味がよく分かりました。", vi: "Tôi đã hiểu rõ ý anh/chị muốn nói ạ." },
    ],
  },
  {
    w: "なさる",
    r: "不規則・尊敬語 ← する（なさいます）",
    m: "[Bất quy tắc · 尊敬語] làm (của đối phương).",
    examples: [
      { ja: "週末は何をなさいますか。", vi: "Cuối tuần anh/chị làm gì ạ?" },
      { ja: "ご自分でなさってください。", vi: "Xin hãy tự làm ạ." },
      { ja: "お大事になさってください。", vi: "Xin hãy bảo trọng ạ." },
    ],
  },
  {
    w: "召し上がる",
    r: "めしあがる｜不規則・尊敬語 ← 食べる／飲む",
    m: "[Bất quy tắc · 尊敬語] ăn / uống (của đối phương).",
    examples: [
      { ja: "どうぞ召し上がってください。", vi: "Xin mời dùng ạ." },
      { ja: "もう召し上がりましたか。", vi: "Anh/chị dùng (ăn) chưa ạ?" },
      { ja: "何を召し上がりますか。", vi: "Anh/chị dùng gì ạ?" },
    ],
  },
  {
    w: "ご覧になる",
    r: "ごらんになる｜不規則・尊敬語 ← 見る",
    m: "[Bất quy tắc · 尊敬語] xem / nhìn (của đối phương).",
    examples: [
      { ja: "こちらをご覧ください。", vi: "Xin hãy xem bên này ạ." },
      { ja: "もうご覧になりましたか。", vi: "Anh/chị đã xem chưa ạ?" },
      { ja: "資料をご覧になってからご判断ください。", vi: "Xin xem tài liệu rồi hãy quyết định ạ." },
    ],
  },
  {
    w: "ご存じだ",
    r: "ごぞんじだ｜不規則・尊敬語 ← 知っている",
    m: "[Bất quy tắc · 尊敬語] biết (của đối phương).",
    examples: [
      { ja: "この話をご存じですか。", vi: "Anh/chị có biết chuyện này không ạ?" },
      { ja: "ご存じのとおり、締切は金曜です。", vi: "Như anh/chị đã biết, hạn chót là thứ Sáu." },
      { ja: "もしご存じでしたら教えてください。", vi: "Nếu anh/chị biết thì xin hãy cho tôi biết." },
    ],
  },
  {
    w: "くださる",
    r: "不規則・尊敬語 ← くれる（くださいます）",
    m: "[Bất quy tắc · 尊敬語] cho (mình); làm ơn… (dạng kính của くれる).",
    examples: [
      { ja: "先生が本をくださいました。", vi: "Thầy/cô đã tặng tôi sách." },
      { ja: "教えてくださってありがとうございます。", vi: "Xin cảm ơn anh/chị đã dạy cho tôi." },
      { ja: "ご確認ください。", vi: "Xin vui lòng xác nhận ạ." },
    ],
  },
  {
    w: "お越しになる／見える",
    r: "おこしになる／おみえになる｜尊敬語 ← 来る",
    m: "[Bất quy tắc · 尊敬語] đến (khách / đối phương đến).",
    examples: [
      { ja: "お客様がお見えになりました。", vi: "Khách đã đến ạ." },
      { ja: "ぜひお越しください。", vi: "Xin hãy đến ạ." },
      { ja: "明日お越しになりますか。", vi: "Ngày mai anh/chị có đến không ạ?" },
    ],
  },
  {
    w: "お休みになる",
    r: "おやすみになる｜尊敬語 ← 寝る／休む",
    m: "[Bất quy tắc · 尊敬語] ngủ / nghỉ (của đối phương).",
    examples: [
      { ja: "昨夜はよくお休みになりましたか。", vi: "Đêm qua anh/chị ngủ có ngon không ạ?" },
      { ja: "来週はお休みになります。", vi: "Tuần sau người ấy nghỉ ạ." },
      { ja: "どうぞゆっくりお休みください。", vi: "Xin hãy nghỉ ngơi thật thoải mái." },
    ],
  },

  // ===== Bất quy tắc — khiêm nhường =====
  {
    w: "参る",
    r: "まいる｜不規則・謙譲語 ← 行く／来る",
    m: "[Bất quy tắc · 謙譲語] đi / đến (của mình).",
    examples: [
      { ja: "明日の会議に参ります。", vi: "Tôi sẽ đến cuộc họp ngày mai." },
      { ja: "すぐに参ります。", vi: "Tôi đến ngay ạ." },
      { ja: "駅まで参りましょうか。", vi: "Tôi đưa đến ga nhé ạ?" },
    ],
  },
  {
    w: "伺う",
    r: "うかがう｜不規則・謙譲語 ← 行く／聞く／尋ねる",
    m: "[Bất quy tắc · 謙譲語] 1) đến thăm. 2) hỏi / nghe (khiêm nhường).",
    examples: [
      { ja: "来週ご都合を伺ってもよろしいですか。", vi: "Tuần sau xin hỏi lịch anh/chị được không ạ?" },
      { ja: "明日お宅へ伺います。", vi: "Ngày mai tôi sẽ đến nhà anh/chị." },
      { ja: "ご意見を伺いたいのですが。", vi: "Tôi muốn được nghe ý kiến của anh/chị." },
      { ja: "お話は前に伺いました。", vi: "Chuyện đó trước đây tôi đã được nghe ạ." },
    ],
  },
  {
    w: "申す／申し上げる",
    r: "もうす／もうしあげる｜謙譲語 ← 言う",
    m: "[Bất quy tắc · 謙譲語] nói / tự xưng tên (申し上げる trang trọng hơn).",
    examples: [
      { ja: "田中と申します。", vi: "Tôi tên là Tanaka ạ." },
      { ja: "改めて御礼申し上げます。", vi: "Xin một lần nữa bày tỏ lời cảm ơn." },
      { ja: "私から申し上げます。", vi: "Xin phép tôi được trình bày." },
    ],
  },
  {
    w: "いたす",
    r: "謙譲語 ← する（いたします）",
    m: "[Bất quy tắc · 謙譲語] làm (của mình); hay gặp dạng いたします.",
    examples: [
      { ja: "確認いたします。", vi: "Tôi sẽ xác nhận ạ." },
      { ja: "承知いたしました。", vi: "Tôi đã rõ / xin tuân theo ạ." },
      { ja: "失礼いたします。", vi: "Xin phép thất lễ / xin cáo từ ạ." },
    ],
  },
  {
    w: "いただく",
    r: "謙譲語 ← もらう／食べる／飲む",
    m: "[Bất quy tắc · 謙譲語] nhận; ăn/uống (khiêm nhường).",
    examples: [
      { ja: "名刺をいただきました。", vi: "Tôi đã nhận danh thiếp ạ." },
      { ja: "頂きます。／いただきます。", vi: "Xin phép dùng bữa / cảm ơn trước khi ăn." },
      { ja: "ご意見をいただきたいです。", vi: "Tôi muốn được nhận ý kiến của anh/chị." },
    ],
  },
  {
    w: "おる",
    r: "謙譲語 ← いる（おります）",
    m: "[Bất quy tắc · 謙譲語] ở / đang… (của mình hoặc bên mình).",
    examples: [
      { ja: "山田は席を外しております。", vi: "Yamada hiện không có ở chỗ ạ." },
      { ja: "私は受付におります。", vi: "Tôi đang ở quầy lễ tân ạ." },
      { ja: "今考えております。", vi: "Hiện tôi đang suy nghĩ ạ." },
    ],
  },
  {
    w: "拝見する",
    r: "はいけんする｜謙譲語 ← 見る",
    m: "[Bất quy tắc · 謙譲語] xem (tài liệu, thư… của đối phương).",
    examples: [
      { ja: "資料を拝見しました。", vi: "Tôi đã xem tài liệu ạ." },
      { ja: "メールを拝見いたしました。", vi: "Tôi đã đọc email ạ." },
      { ja: "拝見してもよろしいですか。", vi: "Xin phép được xem có được không ạ?" },
    ],
  },
  {
    w: "拝借する",
    r: "はいしゃくする｜謙譲語 ← 借りる",
    m: "[Bất quy tắc · 謙譲語] mượn (của đối phương).",
    examples: [
      { ja: "少し拝借してもよろしいですか。", vi: "Xin phép mượn một chút được không ạ?" },
      { ja: "資料を拝借いたします。", vi: "Tôi xin mượn tài liệu ạ." },
      { ja: "ペンを拝借できますか。", vi: "Xin mượn bút được không ạ?" },
    ],
  },
  {
    w: "存じる／存じ上げる",
    r: "ぞんじる／ぞんじあげる｜謙譲語 ← 知る／思う",
    m: "[Bất quy tắc · 謙譲語] biết / nghĩ (của mình); 存じ上げる khiêm nhường hơn với người trên.",
    examples: [
      { ja: "その方は存じ上げております。", vi: "Người đó tôi có biết ạ." },
      { ja: "存じませんでした。", vi: "Tôi không biết ạ / tôi chưa hay." },
      { ja: "ぜひお会いしたいと存じます。", vi: "Tôi nghĩ rất muốn được gặp ạ." },
    ],
  },
  {
    w: "お目にかかる",
    r: "おめにかかる｜謙譲語 ← 会う",
    m: "[Bất quy tắc · 謙譲語] được gặp (người trên / đối phương).",
    examples: [
      { ja: "お目にかかれて光栄です。", vi: "Được gặp anh/chị thật vinh hạnh." },
      { ja: "先日はお目にかかり、ありがとうございました。", vi: "Hôm trước được gặp anh/chị, xin cảm ơn." },
      { ja: "来週お目にかかりたいのですが。", vi: "Tuần sau tôi muốn được gặp anh/chị." },
    ],
  },
  {
    w: "お目にかける",
    r: "おめにかける｜謙譲語 ← 見せる",
    m: "[Bất quy tắc · 謙譲語] cho (đối phương) xem.",
    examples: [
      { ja: "新製品をお目にかけます。", vi: "Xin phép cho anh/chị xem sản phẩm mới." },
      { ja: "面白いものをご目にかけましょう。", vi: "Tôi sẽ cho anh/chị xem thứ thú vị." },
      { ja: "完成品をお目にかけたく存じます。", vi: "Tôi muốn được đưa thành phẩm cho anh/chị xem." },
    ],
  },
  {
    w: "頂戴する",
    r: "ちょうだいする｜謙譲語 ← もらう",
    m: "[Bất quy tắc · 謙譲語] nhận (lịch sự); cũng dùng khi nhận đồ ăn/uống.",
    examples: [
      { ja: "ご意見を頂戴できますか。", vi: "Xin cho tôi nhận ý kiến được không ạ?" },
      { ja: "名刺を頂戴いたしました。", vi: "Tôi đã nhận danh thiếp ạ." },
      { ja: "お茶を頂戴します。", vi: "Xin phép dùng trà ạ." },
    ],
  },

  // ===== 丁寧語 đặc trưng =====
  {
    w: "ございます／でございます",
    r: "丁寧語 ← ある／です",
    m: "[Lịch sự] ございます = có (lịch sự của ある); でございます = là (lịch sự hơn です).",
    examples: [
      { ja: "こちらにございます。", vi: "Ở đây ạ." },
      { ja: "私は担当の田中でございます。", vi: "Tôi là Tanaka phụ trách ạ." },
      { ja: "何かご用でございますか。", vi: "Anh/chị cần gì ạ?" },
    ],
  },
  {
    w: "よろしいでしょうか",
    r: "丁寧な確認・許可",
    m: "[Lịch sự] Có được không ạ? / Có ổn không ạ? (xin phép / xác nhận).",
    examples: [
      { ja: "明日伺ってもよろしいでしょうか。", vi: "Ngày mai tôi đến có được không ạ?" },
      { ja: "こちらでよろしいでしょうか。", vi: "Như thế này có ổn không ạ?" },
      { ja: "少しお時間をいただいてもよろしいでしょうか。", vi: "Xin phép chiếm một chút thời gian được không ạ?" },
    ],
  },

  // ===== Cụm thông dụng thi + đời sống =====
  {
    w: "かしこまりました",
    r: "謙譲・応対表現 ← 分かりました",
    m: "Xin tuân lệnh / Tôi đã rõ ạ (phục vụ, điện thoại, công sở).",
    examples: [
      { ja: "かしこまりました。すぐご用意します。", vi: "Xin vâng ạ. Tôi chuẩn bị ngay." },
      { ja: "かしこまりました。少々お待ちください。", vi: "Xin vâng ạ. Xin vui lòng đợi một chút." },
      { ja: "はい、かしこまりました。", vi: "Vâng, tôi đã rõ ạ." },
    ],
  },
  {
    w: "承知いたしました",
    r: "しょうちいたしました｜謙譲",
    m: "Tôi đã hiểu / xin tuân theo ạ (trang trọng hơn 分かりました).",
    examples: [
      { ja: "ご依頼の件、承知いたしました。", vi: "Việc anh/chị nhờ, tôi đã rõ ạ." },
      { ja: "日程変更、承知いたしました。", vi: "Thay đổi lịch, tôi đã nắm ạ." },
      { ja: "承知いたしました。対応いたします。", vi: "Xin vâng. Tôi sẽ xử lý ạ." },
    ],
  },
  {
    w: "恐れ入ります",
    r: "おそれいります｜丁寧・謝罪／依頼",
    m: "Xin lỗi làm phiền…; xin phép… (lịch sự khi nhờ hoặc xin lỗi nhẹ).",
    examples: [
      { ja: "恐れ入りますが、もう一度お願いできますか。", vi: "Xin lỗi làm phiền, anh/chị làm ơn lần nữa được không ạ?" },
      { ja: "お忙しいところ恐れ入ります。", vi: "Xin lỗi vì làm phiền lúc anh/chị đang bận." },
      { ja: "恐れ入りますが、こちらにご記入ください。", vi: "Xin phép, vui lòng điền vào đây ạ." },
    ],
  },
  {
    w: "申し訳ございません",
    r: "もうしわけございません｜丁寧な謝罪",
    m: "Xin lỗi rất nhiều ạ (trang trọng hơn すみません).",
    examples: [
      { ja: "遅れてしまい、申し訳ございません。", vi: "Xin lỗi vì đã đến muộn." },
      { ja: "ご不便をおかけして申し訳ございません。", vi: "Xin lỗi vì đã gây bất tiện." },
      { ja: "確認不足で申し訳ございませんでした。", vi: "Xin lỗi vì đã xác nhận không đủ kỹ." },
    ],
  },
  {
    w: "失礼いたします／失礼します",
    r: "しつれいいたします｜挨拶・退出",
    m: "Xin phép thất lễ — khi vào/ra, kết thúc gọi điện, cáo từ.",
    examples: [
      { ja: "それでは失礼いたします。", vi: "Vậy tôi xin phép cáo từ ạ." },
      { ja: "お先に失礼します。", vi: "Tôi xin phép về trước ạ." },
      { ja: "電話口で失礼いたします。", vi: "Xin phép (nói chuyện) qua điện thoại ạ." },
    ],
  },
  {
    w: "お世話になっております",
    r: "ビジネス定型挨拶",
    m: "Xin cảm ơn sự hỗ trợ lâu nay — lời chào mở đầu email/điện thoại công việc.",
    examples: [
      { ja: "いつもお世話になっております。田中です。", vi: "Xin cảm ơn sự hỗ trợ lâu nay. Tôi là Tanaka." },
      { ja: "お世話になっております。先日の件ですが…。", vi: "Xin cảm ơn sự hỗ trợ. Về việc hôm trước thì…" },
      { ja: "今後ともお世話になります。", vi: "Mong tiếp tục được hỗ trợ ạ." },
    ],
  },
  {
    w: "よろしくお願いいたします",
    r: "依頼・結びの定型",
    m: "Xin nhờ / xin hãy giúp đỡ — kết email, nhờ vả trang trọng.",
    examples: [
      { ja: "ご確認のほど、よろしくお願いいたします。", vi: "Xin nhờ anh/chị xác nhận giúp." },
      { ja: "今後ともよろしくお願いいたします。", vi: "Mong tiếp tục được hỗ trợ ạ." },
      { ja: "当日はよろしくお願いいたします。", vi: "Ngày hôm đó xin nhờ anh/chị ạ." },
    ],
  },
  {
    w: "ご覧ください／お待ちください",
    r: "尊敬・依頼の定型",
    m: "Xin hãy xem / xin hãy đợi — cụm kính ngữ rất hay gặp.",
    examples: [
      { ja: "詳細は資料をご覧ください。", vi: "Chi tiết xin xem tài liệu ạ." },
      { ja: "少々お待ちください。", vi: "Xin vui lòng đợi một chút." },
      { ja: "順番にお待ちください。", vi: "Xin hãy chờ theo thứ tự ạ." },
    ],
  },
  {
    w: "結構です",
    r: "丁寧語・多義",
    m: "1) Không cần ạ. 2) Được / ổn ạ. (dễ nhầm trong đề thi & đời sống).",
    examples: [
      { ja: "お水は結構です。", vi: "Nước thì không cần ạ." },
      { ja: "それで結構です。", vi: "Như vậy là được ạ." },
      { ja: "今は結構です。また後でお願いします。", vi: "Bây giờ thì không cần. Xin nhờ lại sau." },
    ],
  },
  {
    w: "いかがですか／いかがでしょうか",
    r: "丁寧な尋ね方 ← どうですか",
    m: "Thế nào ạ? / Ra sao ạ? (lịch sự hơn どう).",
    examples: [
      { ja: "調子はいかがですか。", vi: "Sức khỏe / tình hình thế nào ạ?" },
      { ja: "こちらの案はいかがでしょうか。", vi: "Phương án này thì sao ạ?" },
      { ja: "コーヒーはいかがですか。", vi: "Anh/chị dùng cà phê chứ ạ?" },
    ],
  },
  {
    w: "差し上げる",
    r: "さしあげる｜謙譲語 ← あげる",
    m: "[Bất quy tắc · 謙譲語] đưa / tặng (cho người trên).",
    examples: [
      { ja: "記念品を差し上げます。", vi: "Xin tặng món quà kỷ niệm." },
      { ja: "後でメールを差し上げます。", vi: "Sau tôi sẽ gửi email ạ." },
      { ja: "ご案内を差し上げます。", vi: "Xin gửi thông tin hướng dẫn ạ." },
    ],
  },
  {
    w: "お召し上がりください／ご利用ください",
    r: "接客定型",
    m: "Xin mời dùng / xin hãy sử dụng — câu phục vụ thông dụng.",
    examples: [
      { ja: "ごゆっくりお召し上がりください。", vi: "Xin mời dùng thoải mái ạ." },
      { ja: "こちらのサービスをご利用ください。", vi: "Xin hãy sử dụng dịch vụ này ạ." },
      { ja: "クーポンをご利用ください。", vi: "Xin hãy dùng phiếu giảm giá ạ." },
    ],
  },
  {
    w: "お／ご～いただけますか",
    r: "お＋Vます＋いただけますか",
    m: "[Có quy tắc · nhờ lịch sự] Xin anh/chị vui lòng… giúp được không ạ?",
    examples: [
      { ja: "ご記入いただけますか。", vi: "Xin anh/chị điền giúp được không ạ?" },
      { ja: "ご確認いただけますでしょうか。", vi: "Xin anh/chị xác nhận giúp được không ạ?" },
      { ja: "少々お待ちいただけますか。", vi: "Xin anh/chị đợi một chút được không ạ?" },
    ],
  },
  {
    w: "お越しいただく／おいでいただく",
    r: "謙譲・依頼表現 ← 来てもらう",
    m: "Được đón (đối phương) đến — cách nói lịch sự khi khách đến.",
    examples: [
      { ja: "本日はお越しいただき、ありがとうございます。", vi: "Hôm nay xin cảm ơn anh/chị đã đến." },
      { ja: "会場までお越しいただきますようお願いいたします。", vi: "Xin nhờ anh/chị đến hội trường ạ." },
      { ja: "お忙しい中お越しいただき恐縮です。", vi: "Xin cảm ơn anh/chị đã đến dù đang bận." },
    ],
  },
];

// Fix awkward example in お／ご～です
ITEMS.find((x) => x.w === "お／ご～です").examples[0] = {
  ja: "お客様がお待ちです。",
  vi: "Khách đang chờ ạ.",
};

const theme = { id: "keigo", name: "Kính ngữ", count: ITEMS.length };
const n2g = data.themes.findIndex((t) => t.id === "n2_grammar");
if (n2g >= 0) data.themes.splice(n2g + 1, 0, theme);
else data.themes.push(theme);

const added = [];
for (const e of ITEMS) {
  const id = "v" + String(data.items.length + 1).padStart(4, "0");
  data.items.push({
    id,
    w: e.w,
    r: e.r,
    m: e.m,
    t: "keigo",
    s: "Kính ngữ",
  });
  EXAMPLES[id] = e.examples.map((x) => ({ ja: x.ja, vi: x.vi }));
  added.push({ id, w: e.w, ex: e.examples.length });
}

theme.count = data.items.filter((i) => i.t === "keigo").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");

fs.writeFileSync(
  path.join(root, "nguon", "keigo.json"),
  JSON.stringify(
    {
      source: "manual keigo pack",
      theme: "keigo",
      total: added.length,
      generated_at: "2026-10-20",
      items: added.map((a) => {
        const e = ITEMS.find((x) => x.w === a.w);
        return { id: a.id, pattern: e.w, structure: e.r, meaning: e.m, examples: e.examples };
      }),
    },
    null,
    2
  ) + "\n"
);

console.log(JSON.stringify({ theme, added: added.length, total: data.total, sample: added.slice(0, 5) }, null, 2));

/**
 * Create theme "Khiêm nhường ngữ" (謙譲語).
 * Usage: node nguon/add-kenjougo-theme.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(root, "vocab-data.js"), "utf8"));
eval(fs.readFileSync(path.join(root, "examples-data.js"), "utf8"));

const data = window.VOCAB_DATA;
const EXAMPLES = window.EXAMPLES_DATA;

if (data.themes.some((t) => t.id === "kenjougo")) {
  console.error("Theme kenjougo already exists");
  process.exit(1);
}

const ITEMS = [
  {
    w: "謙譲語とは",
    r: "けんじょうご｜分類",
    m: "Khiêm nhường ngữ — hạ thấp hành động của mình (hoặc bên mình) để tỏ kính trọng với đối phương / người nghe.",
    examples: [
      { ja: "私がご案内します。", vi: "Tôi sẽ hướng dẫn ạ. (hạ mình)" },
      { ja: "資料は私がお持ちします。", vi: "Tài liệu tôi sẽ mang ạ." },
      { ja: "謙譲語は自分の行為を低めて相手を立てる。", vi: "Khiêm nhường ngữ hạ hành động của mình để nâng đối phương." },
    ],
  },

  // ===== Có quy tắc =====
  {
    w: "お／ご～する",
    r: "お＋Vます＋する／ご＋漢語＋する｜有規則",
    m: "[Có quy tắc] Mình làm hành động hướng tới đối phương.",
    examples: [
      { ja: "荷物をお持ちします。", vi: "Tôi sẽ xách hành lý giúp ạ." },
      { ja: "後でご連絡します。", vi: "Sau tôi sẽ liên lạc ạ." },
      { ja: "駅までお送りします。", vi: "Tôi sẽ tiễn/đưa đến ga ạ." },
      { ja: "ご説明します。", vi: "Tôi xin giải thích ạ." },
    ],
  },
  {
    w: "お／ご～いたす",
    r: "お＋Vます＋いたす／ご＋漢語＋いたす｜有規則",
    m: "[Có quy tắc] Khiêm nhường hơn ～する (công sở, phục vụ).",
    examples: [
      { ja: "確認いたします。", vi: "Tôi sẽ xác nhận ạ." },
      { ja: "ご案内いたします。", vi: "Xin phép được hướng dẫn ạ." },
      { ja: "すぐご用意いたします。", vi: "Tôi sẽ chuẩn bị ngay ạ." },
      { ja: "資料をお送りいたします。", vi: "Tôi sẽ gửi tài liệu ạ." },
    ],
  },
  {
    w: "～ていただく",
    r: "Vて＋いただく｜有規則",
    m: "[Có quy tắc] Nhờ đối phương làm… (khiêm nhường của ～てもらう).",
    examples: [
      { ja: "ご意見をいただけますか。", vi: "Xin cho tôi nhận ý kiến được không ạ?" },
      { ja: "説明していただき、ありがとうございます。", vi: "Xin cảm ơn anh/chị đã giải thích." },
      { ja: "サインをいただけますでしょうか。", vi: "Xin cho tôi chữ ký được không ạ?" },
      { ja: "待っていただいてすみません。", vi: "Xin lỗi vì đã để anh/chị phải chờ." },
    ],
  },
  {
    w: "～させていただく",
    r: "Vさせる＋ていただく｜有規則",
    m: "[Có quy tắc] Xin phép được… (rất phổ biến trong công việc).",
    examples: [
      { ja: "明日欠席させていただきます。", vi: "Xin phép được vắng mặt ngày mai." },
      { ja: "説明させていただきます。", vi: "Xin phép tôi được giải thích." },
      { ja: "検討させていただきます。", vi: "Xin phép được xem xét ạ." },
      { ja: "座らせていただいてもよろしいですか。", vi: "Xin phép được ngồi có được không ạ?" },
    ],
  },
  {
    w: "お／ご～できる",
    r: "お＋Vます＋できる／ご＋漢語＋できる｜可能・謙譲寄り",
    m: "[Có quy tắc] Có thể… (lịch sự khi nói khả năng của mình / dịch vụ).",
    examples: [
      { ja: "ご予約をお取りできます。", vi: "Chúng tôi có thể giữ chỗ giúp ạ." },
      { ja: "明日お届けできます。", vi: "Ngày mai có thể giao được ạ." },
      { ja: "ご案内できますが、よろしいですか。", vi: "Tôi có thể hướng dẫn, anh/chị thấy được không ạ?" },
    ],
  },
  {
    w: "お／ご～願う",
    r: "お／ご＋N／Vます＋願う｜依頼の謙譲",
    m: "[Có quy tắc] Xin nhờ… (khiêm nhường khi nhờ đối phương).",
    examples: [
      { ja: "ご確認をお願いします。", vi: "Xin nhờ anh/chị xác nhận." },
      { ja: "少々お待ち願えますか。", vi: "Xin anh/chị đợi một chút được không ạ?" },
      { ja: "ご検討をお願いいたします。", vi: "Xin nhờ anh/chị xem xét." },
    ],
  },
  {
    w: "お／ご～申し上げる",
    r: "お／ご＋N＋申し上げる｜有規則・鄭重",
    m: "[Có quy tắc] Bày tỏ / nói một cách rất trang trọng.",
    examples: [
      { ja: "深くお礼申し上げます。", vi: "Xin bày tỏ lòng cảm ơn sâu sắc." },
      { ja: "心よりお祝い申し上げます。", vi: "Xin chân thành chúc mừng." },
      { ja: "ご報告申し上げます。", vi: "Xin phép báo cáo ạ." },
    ],
  },

  // ===== Bất quy tắc: đi/đến/ở =====
  {
    w: "参る",
    r: "まいる｜不規則 ← 行く／来る",
    m: "[Bất quy tắc] đi / đến (của mình).",
    examples: [
      { ja: "明日の会議に参ります。", vi: "Tôi sẽ đến cuộc họp ngày mai." },
      { ja: "すぐに参ります。", vi: "Tôi đến ngay ạ." },
      { ja: "駅まで参りましょうか。", vi: "Tôi đưa đến ga nhé ạ?" },
    ],
  },
  {
    w: "伺う（訪問）",
    r: "うかがう｜不規則 ← 行く／訪れる",
    m: "[Bất quy tắc] đến thăm / đến chỗ đối phương.",
    examples: [
      { ja: "明日お宅へ伺います。", vi: "Ngày mai tôi sẽ đến nhà anh/chị." },
      { ja: "来週ご都合のよい時に伺います。", vi: "Tuần sau tôi sẽ đến vào lúc tiện cho anh/chị." },
      { ja: "会社に伺ってもよろしいですか。", vi: "Tôi đến công ty có được không ạ?" },
    ],
  },
  {
    w: "伺う（聞く・尋ねる）",
    r: "うかがう｜不規則 ← 聞く／尋ねる",
    m: "[Bất quy tắc] hỏi / được nghe (khiêm nhường).",
    examples: [
      { ja: "ご意見を伺いたいのですが。", vi: "Tôi muốn được nghe ý kiến của anh/chị." },
      { ja: "少し伺ってもよろしいですか。", vi: "Xin hỏi một chút được không ạ?" },
      { ja: "その話は前に伺いました。", vi: "Chuyện đó trước đây tôi đã được nghe ạ." },
      { ja: "お名前を伺ってもよろしいですか。", vi: "Xin hỏi tên anh/chị được không ạ?" },
    ],
  },
  {
    w: "おる",
    r: "おります｜不規則 ← いる",
    m: "[Bất quy tắc] ở / đang… (mình hoặc người bên mình).",
    examples: [
      { ja: "私は受付におります。", vi: "Tôi đang ở quầy lễ tân ạ." },
      { ja: "山田は席を外しております。", vi: "Yamada hiện không có ở chỗ ạ." },
      { ja: "今調べております。", vi: "Hiện tôi đang tra cứu ạ." },
    ],
  },

  // ===== Bất quy tắc: nói / làm =====
  {
    w: "申す",
    r: "もうす｜不規則 ← 言う",
    m: "[Bất quy tắc] nói; tự xưng tên.",
    examples: [
      { ja: "田中と申します。", vi: "Tôi tên là Tanaka ạ." },
      { ja: "私から申します。", vi: "Xin phép tôi được nói." },
      { ja: "そのように申しておりました。", vi: "Người ấy có nói như vậy ạ. (nói về bên mình)" },
    ],
  },
  {
    w: "申し上げる",
    r: "もうしあげる｜不規則 ← 言う｜鄭重",
    m: "[Bất quy tắc] nói / trình bày (trang trọng hơn 申す).",
    examples: [
      { ja: "改めて御礼申し上げます。", vi: "Xin một lần nữa bày tỏ lời cảm ơn." },
      { ja: "私から申し上げます。", vi: "Xin phép tôi được trình bày." },
      { ja: "お祝いの言葉を申し上げます。", vi: "Xin phép nói lời chúc mừng." },
    ],
  },
  {
    w: "いたす",
    r: "いたします｜不規則 ← する",
    m: "[Bất quy tắc] làm (của mình).",
    examples: [
      { ja: "確認いたします。", vi: "Tôi sẽ xác nhận ạ." },
      { ja: "承知いたしました。", vi: "Tôi đã rõ ạ." },
      { ja: "対応いたします。", vi: "Tôi sẽ xử lý ạ." },
      { ja: "失礼いたします。", vi: "Xin phép cáo từ ạ." },
    ],
  },

  // ===== Bất quy tắc: nhận / cho / ăn =====
  {
    w: "いただく",
    r: "不規則 ← もらう／食べる／飲む",
    m: "[Bất quy tắc] nhận; ăn/uống (khiêm nhường).",
    examples: [
      { ja: "名刺をいただきました。", vi: "Tôi đã nhận danh thiếp ạ." },
      { ja: "いただきます。", vi: "Xin phép dùng bữa ạ." },
      { ja: "ご意見をいただきたいです。", vi: "Tôi muốn được nhận ý kiến của anh/chị." },
      { ja: "賞をいただきました。", vi: "Tôi đã nhận giải ạ." },
    ],
  },
  {
    w: "頂戴する",
    r: "ちょうだいする｜不規則 ← もらう",
    m: "[Bất quy tắc] nhận (lịch sự).",
    examples: [
      { ja: "ご意見を頂戴できますか。", vi: "Xin cho tôi nhận ý kiến được không ạ?" },
      { ja: "名刺を頂戴いたしました。", vi: "Tôi đã nhận danh thiếp ạ." },
      { ja: "お茶を頂戴します。", vi: "Xin phép dùng trà ạ." },
    ],
  },
  {
    w: "差し上げる",
    r: "さしあげる｜不規則 ← あげる",
    m: "[Bất quy tắc] đưa / tặng cho người trên.",
    examples: [
      { ja: "記念品を差し上げます。", vi: "Xin tặng món quà kỷ niệm." },
      { ja: "後でメールを差し上げます。", vi: "Sau tôi sẽ gửi email ạ." },
      { ja: "ご案内を差し上げます。", vi: "Xin gửi thông tin hướng dẫn ạ." },
    ],
  },

  // ===== Bất quy tắc: xem / mượn / biết / gặp =====
  {
    w: "拝見する",
    r: "はいけんする｜不規則 ← 見る",
    m: "[Bất quy tắc] xem (tài liệu, thư của đối phương).",
    examples: [
      { ja: "資料を拝見しました。", vi: "Tôi đã xem tài liệu ạ." },
      { ja: "メールを拝見いたしました。", vi: "Tôi đã đọc email ạ." },
      { ja: "拝見してもよろしいですか。", vi: "Xin phép được xem có được không ạ?" },
    ],
  },
  {
    w: "拝借する",
    r: "はいしゃくする｜不規則 ← 借りる",
    m: "[Bất quy tắc] mượn (của đối phương).",
    examples: [
      { ja: "少し拝借してもよろしいですか。", vi: "Xin phép mượn một chút được không ạ?" },
      { ja: "資料を拝借いたします。", vi: "Tôi xin mượn tài liệu ạ." },
      { ja: "ペンを拝借できますか。", vi: "Xin mượn bút được không ạ?" },
    ],
  },
  {
    w: "拝読する",
    r: "はいどくする｜不規則 ← 読む",
    m: "[Bất quy tắc] đọc (thư / tài liệu của đối phương).",
    examples: [
      { ja: "お手紙を拝読しました。", vi: "Tôi đã đọc thư của anh/chị ạ." },
      { ja: "原稿を拝読いたしました。", vi: "Tôi đã đọc bản thảo ạ." },
      { ja: "拝読のうえ、ご連絡します。", vi: "Sau khi đọc xong tôi sẽ liên lạc ạ." },
    ],
  },
  {
    w: "存じる",
    r: "ぞんじる｜不規則 ← 知る／思う",
    m: "[Bất quy tắc] biết / nghĩ (của mình).",
    examples: [
      { ja: "存じませんでした。", vi: "Tôi không biết ạ / tôi chưa hay." },
      { ja: "ぜひお会いしたいと存じます。", vi: "Tôi nghĩ rất muốn được gặp ạ." },
      { ja: "その件は存じております。", vi: "Việc đó tôi có biết ạ." },
    ],
  },
  {
    w: "存じ上げる",
    r: "ぞんじあげる｜不規則 ← 知っている｜より鄭重",
    m: "[Bất quy tắc] biết về người trên / đối phương (khiêm nhường hơn).",
    examples: [
      { ja: "その方は存じ上げております。", vi: "Người đó tôi có biết ạ." },
      { ja: "お名前は存じ上げております。", vi: "Tôi biết tên anh/chị ạ." },
      { ja: "ご高名は存じ上げております。", vi: "Tôi biết danh tiếng của anh/chị ạ." },
    ],
  },
  {
    w: "お目にかかる",
    r: "おめにかかる｜不規則 ← 会う",
    m: "[Bất quy tắc] được gặp (người trên).",
    examples: [
      { ja: "お目にかかれて光栄です。", vi: "Được gặp anh/chị thật vinh hạnh." },
      { ja: "先日はお目にかかり、ありがとうございました。", vi: "Hôm trước được gặp, xin cảm ơn." },
      { ja: "来週お目にかかりたいのですが。", vi: "Tuần sau tôi muốn được gặp anh/chị." },
    ],
  },
  {
    w: "お目にかける",
    r: "おめにかける｜不規則 ← 見せる",
    m: "[Bất quy tắc] cho đối phương xem.",
    examples: [
      { ja: "新製品をお目にかけます。", vi: "Xin phép cho anh/chị xem sản phẩm mới." },
      { ja: "完成品をお目にかけたく存じます。", vi: "Tôi muốn đưa thành phẩm cho anh/chị xem." },
      { ja: "面白い資料をお目にかけましょう。", vi: "Tôi sẽ cho anh/chị xem tài liệu thú vị." },
    ],
  },
  {
    w: "お聞きする／拝聴する",
    r: "おききする／はいちょうする｜← 聞く",
    m: "[Bất quy tắc / cố định] nghe (ý kiến, bài nói của đối phương).",
    examples: [
      { ja: "ご意見をお聞きしたいです。", vi: "Tôi muốn được nghe ý kiến của anh/chị." },
      { ja: "講演を拝聴しました。", vi: "Tôi đã lắng nghe bài giảng ạ." },
      { ja: "少しお聞きしてもよろしいですか。", vi: "Xin hỏi/nghe một chút được không ạ?" },
    ],
  },
  {
    w: "お届けする／お伝えする",
    r: "おとどけする／おつたえする｜有規則寄り",
    m: "Giao / chuyển lời (khiêm nhường thông dụng).",
    examples: [
      { ja: "商品をお届けします。", vi: "Chúng tôi sẽ giao hàng ạ." },
      { ja: "ご伝言をお伝えします。", vi: "Tôi sẽ chuyển lời nhắn ạ." },
      { ja: "明日までにお届けいたします。", vi: "Chúng tôi sẽ giao trước ngày mai ạ." },
    ],
  },
  {
    w: "お借りする／お返しする",
    r: "おかりする／おかえしする｜有規則",
    m: "Mượn / trả lại (khiêm nhường thông dụng).",
    examples: [
      { ja: "本をお借りしてもよろしいですか。", vi: "Xin mượn sách được không ạ?" },
      { ja: "来週お返しします。", vi: "Tuần sau tôi sẽ trả lại ạ." },
      { ja: "すぐにお返しいたします。", vi: "Tôi sẽ trả lại ngay ạ." },
    ],
  },

  // ===== Cụm cố định khiêm nhường =====
  {
    w: "かしこまりました",
    r: "応対定型｜← 分かりました",
    m: "Xin tuân lệnh / Tôi đã rõ ạ (phục vụ, điện thoại).",
    examples: [
      { ja: "かしこまりました。すぐご用意します。", vi: "Xin vâng ạ. Tôi chuẩn bị ngay." },
      { ja: "かしこまりました。少々お待ちください。", vi: "Xin vâng ạ. Xin vui lòng đợi một chút." },
      { ja: "はい、かしこまりました。", vi: "Vâng, tôi đã rõ ạ." },
    ],
  },
  {
    w: "承知いたしました",
    r: "しょうちいたしました｜定型",
    m: "Tôi đã hiểu / xin tuân theo ạ.",
    examples: [
      { ja: "ご依頼の件、承知いたしました。", vi: "Việc anh/chị nhờ, tôi đã rõ ạ." },
      { ja: "日程変更、承知いたしました。", vi: "Thay đổi lịch, tôi đã nắm ạ." },
      { ja: "承知いたしました。対応いたします。", vi: "Xin vâng. Tôi sẽ xử lý ạ." },
    ],
  },
  {
    w: "失礼いたします",
    r: "しつれいいたします｜定型",
    m: "Xin phép thất lễ / cáo từ (vào-ra, gọi điện, về trước).",
    examples: [
      { ja: "それでは失礼いたします。", vi: "Vậy tôi xin phép cáo từ ạ." },
      { ja: "お先に失礼します。", vi: "Tôi xin phép về trước ạ." },
      { ja: "ちょっと失礼いたします。", vi: "Xin phép một chút ạ." },
    ],
  },
  {
    w: "お願いいたします／お願い申し上げます",
    r: "依頼定型",
    m: "Xin nhờ… (trang trọng).",
    examples: [
      { ja: "ご確認をお願いいたします。", vi: "Xin nhờ anh/chị xác nhận." },
      { ja: "何卒よろしくお願い申し上げます。", vi: "Xin hết lòng nhờ anh/chị hỗ trợ." },
      { ja: "当日はよろしくお願いいたします。", vi: "Ngày hôm đó xin nhờ anh/chị ạ." },
    ],
  },
  {
    w: "お待ちしております",
    r: "謙譲・待機表現",
    m: "Chúng tôi đang chờ / xin chờ đón (khiêm nhường).",
    examples: [
      { ja: "ご来店を心よりお待ちしております。", vi: "Xin chân thành chờ đón quý khách đến cửa hàng." },
      { ja: "ご返信をお待ちしております。", vi: "Chúng tôi chờ phản hồi của anh/chị." },
      { ja: "会場でお待ちしております。", vi: "Chúng tôi sẽ chờ tại hội trường ạ." },
    ],
  },
  {
    w: "お預かりする",
    r: "おあずかりする｜← 預かる",
    m: "Nhận giữ / tiếp nhận hộ (hành lý, đồ, yêu cầu).",
    examples: [
      { ja: "お荷物をお預かりします。", vi: "Tôi xin giữ hành lý giúp ạ." },
      { ja: "ご要望をお預かりしました。", vi: "Tôi đã tiếp nhận yêu cầu của anh/chị." },
      { ja: "こちらでお預かりいたします。", vi: "Chúng tôi xin giữ tại đây ạ." },
    ],
  },
  {
    w: "お越しいただく",
    r: "おこしいただく｜← 来てもらう",
    m: "Được đón đối phương đến (nói về việc khách đến với mình).",
    examples: [
      { ja: "本日はお越しいただき、ありがとうございます。", vi: "Hôm nay xin cảm ơn anh/chị đã đến." },
      { ja: "お忙しい中お越しいただき恐縮です。", vi: "Xin cảm ơn anh/chị đã đến dù đang bận." },
      { ja: "会場までお越しいただきますようお願いいたします。", vi: "Xin nhờ anh/chị đến hội trường ạ." },
    ],
  },
  {
    w: "ご覧いただく",
    r: "ごらんいただく｜← 見てもらう",
    m: "Được đối phương xem (khiêm nhường khi mời xem).",
    examples: [
      { ja: "こちらの資料をご覧ください。／ご覧いただけますか。", vi: "Xin hãy xem tài liệu này / Xin anh/chị xem giúp được không ạ?" },
      { ja: "ご覧いただければと思います。", vi: "Tôi mong anh/chị vui lòng xem giúp." },
      { ja: "サンプルをご覧いただきます。", vi: "Xin mời anh/chị xem mẫu ạ." },
    ],
  },
  {
    w: "お引き受けする／お受けする",
    r: "おひきうけする／おうけする",
    m: "Nhận việc / nhận lời (khiêm nhường).",
    examples: [
      { ja: "その件、お引き受けいたします。", vi: "Việc đó tôi xin nhận ạ." },
      { ja: "ご注文をお受けしました。", vi: "Chúng tôi đã nhận đơn hàng ạ." },
      { ja: "今はお引き受けしかねます。", vi: "Hiện tôi khó lòng nhận được ạ." },
    ],
  },
  {
    w: "ご連絡さしあげる／ご報告する",
    r: "連絡・報告の謙譲",
    m: "Liên lạc / báo cáo (khiêm nhường công việc).",
    examples: [
      { ja: "追ってご連絡さしあげます。", vi: "Tôi sẽ liên lạc lại sau ạ." },
      { ja: "結果をご報告します。", vi: "Tôi xin báo cáo kết quả ạ." },
      { ja: "進捗をご報告いたします。", vi: "Xin báo cáo tiến độ ạ." },
    ],
  },
  {
    w: "お許しください／お許しくださいませ",
    r: "謝罪・許可の定型",
    m: "Xin hãy thứ lỗi / xin lượng thứ (kết hợp khiêm nhường + tôn kính).",
    examples: [
      { ja: "遅れてしまい、お許しください。", vi: "Xin hãy thứ lỗi vì tôi đến muộn." },
      { ja: "私用につき早退をお許しください。", vi: "Xin phép về sớm vì việc riêng." },
      { ja: "ご不便をおかけしますが、お許しください。", vi: "Xin thứ lỗi vì gây bất tiện." },
    ],
  },
  {
    w: "お邪魔します",
    r: "おじゃまします｜訪問定型",
    m: "Xin phép làm phiền — khi vào nhà / văn phòng người khác.",
    examples: [
      { ja: "お邪魔します。", vi: "Xin phép vào ạ." },
      { ja: "お邪魔しました。", vi: "Xin phép (đã làm phiền) / xin cáo từ sau khi thăm." },
      { ja: "少しお邪魔してもよろしいですか。", vi: "Xin phép làm phiền một chút được không ạ?" },
    ],
  },
  {
    w: "お疲れさまです／お疲れさまでした（対同僚）",
    r: "職場挨拶｜※目上には慎重に",
    m: "Chào đồng nghiệp khi làm việc / tan ca (với cấp trên cần cân nhắc ngữ cảnh).",
    examples: [
      { ja: "お疲れさまです。これから会議ですね。", vi: "Chào anh/chị. Sắp họp rồi nhỉ." },
      { ja: "今日もお疲れさまでした。", vi: "Hôm nay cũng vất vả rồi ạ." },
      { ja: "先に失礼します。お疲れさまです。", vi: "Tôi xin về trước. Cảm ơn anh/chị đã vất vả." },
    ],
  },
];

const theme = { id: "kenjougo", name: "Khiêm nhường ngữ", count: ITEMS.length };
const keigoIdx = data.themes.findIndex((t) => t.id === "keigo");
if (keigoIdx >= 0) data.themes.splice(keigoIdx + 1, 0, theme);
else data.themes.push(theme);

const added = [];
for (const e of ITEMS) {
  const id = "v" + String(data.items.length + 1).padStart(4, "0");
  data.items.push({
    id,
    w: e.w,
    r: e.r,
    m: e.m,
    t: "kenjougo",
    s: "Khiêm nhường ngữ",
  });
  EXAMPLES[id] = e.examples.map((x) => ({ ja: x.ja, vi: x.vi }));
  added.push({ id, w: e.w, ex: e.examples.length });
}

theme.count = data.items.filter((i) => i.t === "kenjougo").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");
fs.writeFileSync(
  path.join(root, "nguon", "kenjougo.json"),
  JSON.stringify(
    {
      theme: "kenjougo",
      name: "Khiêm nhường ngữ",
      total: added.length,
      generated_at: "2026-10-20",
      items: ITEMS.map((e, i) => ({
        id: added[i].id,
        pattern: e.w,
        structure: e.r,
        meaning: e.m,
        examples: e.examples,
      })),
    },
    null,
    2
  ) + "\n"
);

console.log(JSON.stringify({ theme, added: added.length, total: data.total }, null, 2));

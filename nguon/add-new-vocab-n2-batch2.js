/**
 * Add new-vocab.md into theme n2 — 3 examples each, Hán Việt uppercase in meaning.
 * Usage: node nguon/add-new-vocab-n2-batch2.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(root, "vocab-data.js"), "utf8"));
eval(fs.readFileSync(path.join(root, "examples-data.js"), "utf8"));

const data = window.VOCAB_DATA;
const EXAMPLES = window.EXAMPLES_DATA;
const theme = data.themes.find((t) => t.id === "n2");
if (!theme) throw new Error("n2 theme missing");

const NEW = [
  {
    w: "アレルギー",
    r: "アレルギー",
    m: "dị ứng (allergy)",
    examples: [
      { ja: "私は花粉アレルギーがある。", vi: "Tôi bị dị ứng phấn hoa." },
      { ja: "この成分にアレルギー反応が出ることがある。", vi: "Thành phần này đôi khi gây phản ứng dị ứng." },
      { ja: "アレルギーの有無を事前に確認してください。", vi: "Xin hãy xác nhận trước có dị ứng hay không." },
    ],
  },
  {
    w: "押し入れ",
    r: "おしいれ",
    m: "ÁP NHẬP — tủ tường / ngăn kéo âm tường (kiểu Nhật để cất futon)",
    examples: [
      { ja: "布団を押し入れにしまった。", vi: "Tôi cất futon vào tủ tường." },
      { ja: "押し入れの中を整理した。", vi: "Tôi dọn dẹp bên trong tủ tường." },
      { ja: "押し入れに荷物を入れておいてください。", vi: "Xin hãy để hành lý vào tủ tường." },
    ],
  },
  {
    w: "祖父母",
    r: "そふぼ",
    m: "TỔ PHỤ MẪU — ông bà (nội/ngoại)",
    examples: [
      { ja: "週末は祖父母の家に行きます。", vi: "Cuối tuần tôi đến nhà ông bà." },
      { ja: "祖父母に育てられた人も多い。", vi: "Nhiều người được ông bà nuôi lớn." },
      { ja: "祖父母の健康が心配だ。", vi: "Tôi lo lắng về sức khỏe ông bà." },
    ],
  },
  {
    w: "抽選",
    r: "ちゅうせん",
    m: "TRÙU TUYỂN — rút thăm, bốc thăm trúng thưởng",
    examples: [
      { ja: "入場券は抽選で決まります。", vi: "Vé vào cửa được quyết định bằng rút thăm." },
      { ja: "抽選に当たって嬉しかった。", vi: "Trúng thăm khiến tôi rất vui." },
      { ja: "応募者の中から抽選で選ばれた。", vi: "Được chọn bằng rút thăm trong số người đăng ký." },
    ],
  },
  {
    w: "差し支えない",
    r: "さしつかえない",
    m: "Sai CHI — không sao, không có trở ngại, được phép",
    examples: [
      { ja: "明日でも差し支えありません。", vi: "Ngày mai cũng không sao ạ." },
      { ja: "写真を撮っても差し支えなければお願いします。", vi: "Nếu không sao thì xin phép chụp ảnh." },
      { ja: "この案で差し支えないでしょうか。", vi: "Phương án này có ổn không ạ?" },
    ],
  },
  {
    w: "生中継",
    r: "なまちゅうけい",
    m: "SINH TRUNG KẾ — phát sóng trực tiếp",
    examples: [
      { ja: "試合はテレビで生中継される。", vi: "Trận đấu sẽ được phát sóng trực tiếp trên TV." },
      { ja: "記者会見を生中継で見ました。", vi: "Tôi xem họp báo qua phát sóng trực tiếp." },
      { ja: "イベントの生中継が始まった。", vi: "Buổi phát sóng trực tiếp sự kiện đã bắt đầu." },
    ],
  },
  {
    w: "深夜",
    r: "しんや",
    m: "THÂM DẠ — đêm khuya, nửa đêm",
    examples: [
      { ja: "深夜まで仕事をしてしまった。", vi: "Tôi làm việc đến tận đêm khuya." },
      { ja: "深夜の電車は空いている。", vi: "Tàu đêm khuya thường vắng." },
      { ja: "深夜番組をよく見る。", vi: "Tôi hay xem chương trình đêm khuya." },
    ],
  },
  {
    w: "知人",
    r: "ちじん",
    m: "TRI NHÂN — người quen",
    examples: [
      { ja: "知人の紹介でこの会社に入った。", vi: "Tôi vào công ty này nhờ người quen giới thiệu." },
      { ja: "駅で久しぶりに知人に会った。", vi: "Ở ga tôi gặp lại người quen sau lâu." },
      { ja: "知人に相談してみます。", vi: "Tôi sẽ hỏi ý kiến người quen." },
    ],
  },
  {
    w: "ほっと",
    r: "ほっと",
    m: "thở phào, cảm thấy nhẹ nhõm",
    examples: [
      { ja: "試験が終わってほっとした。", vi: "Thi xong tôi thở phào nhẹ nhõm." },
      { ja: "無事だと聞いてほっとした。", vi: "Nghe nói bình an vô sự tôi thấy nhẹ cả người." },
      { ja: "締め切りに間に合ってほっと一息ついた。", vi: "Kịp deadline nên tôi thở phào một nhịp." },
    ],
  },
  {
    w: "日本式",
    r: "にほんしき",
    m: "NHẬT BẢN THỨC — kiểu Nhật, theo cách Nhật Bản",
    examples: [
      { ja: "日本式の挨拶を覚えた。", vi: "Tôi học cách chào hỏi kiểu Nhật." },
      { ja: "この旅館は日本式の造りだ。", vi: "Nhà trọ này làm theo kiểu Nhật." },
      { ja: "会議は日本式に丁寧に進められた。", vi: "Cuộc họp diễn ra lịch sự theo kiểu Nhật." },
    ],
  },
  {
    w: "まれだ",
    r: "まれだ",
    m: "HY — hiếm, hiếm khi (稀だ)",
    examples: [
      { ja: "こんな機会はまれだ。", vi: "Cơ hội như thế này rất hiếm." },
      { ja: "彼が怒るのはまれだ。", vi: "Anh ấy hiếm khi nổi giận." },
      { ja: "大雪はこの地方ではまれだ。", vi: "Tuyết lớn ở vùng này là chuyện hiếm." },
    ],
  },
  {
    w: "有力",
    r: "ゆうりょく",
    m: "HỮU LỰC — có thế lực; có khả năng cao (ứng viên, giả thuyết)",
    examples: [
      { ja: "彼は次期社長の有力候補だ。", vi: "Anh ấy là ứng viên sáng giá cho ghế tổng giám đốc tiếp theo." },
      { ja: "有力な情報が得られた。", vi: "Chúng tôi có được thông tin có giá trị / đáng tin." },
      { ja: "この説が今のところ有力だ。", vi: "Giả thuyết này hiện đang chiếm ưu thế." },
    ],
  },
  {
    w: "怪しい",
    r: "あやしい",
    m: "QUÁI — khả nghi, đáng ngờ; không chắc chắn",
    examples: [
      { ja: "怪しいメールは開かないほうがいい。", vi: "Tốt hơn đừng mở email khả nghi." },
      { ja: "天気予報が怪しいので傘を持っていく。", vi: "Dự báo thời tiết không chắc nên tôi mang ô." },
      { ja: "挙動が怪しい人を見かけた。", vi: "Tôi thấy một người cử chỉ khả nghi." },
    ],
  },
  {
    w: "貴重",
    r: "きちょう",
    m: "QUÝ TRỌNG — quý giá, quý hiếm",
    examples: [
      { ja: "貴重な意見をありがとうございました。", vi: "Xin cảm ơn ý kiến quý giá của anh/chị." },
      { ja: "貴重品はロッカーに入れてください。", vi: "Xin để đồ quý vào tủ khóa." },
      { ja: "これは貴重な経験になった。", vi: "Đây đã trở thành một trải nghiệm quý giá." },
    ],
  },
  {
    w: "救う",
    r: "すくう",
    m: "CỨU — cứu, cứu giúp",
    examples: [
      { ja: "溺れている人を救った。", vi: "Người ta đã cứu người đang đuối nước." },
      { ja: "彼の一言が私を救ってくれた。", vi: "Một lời của anh ấy đã cứu tôi." },
      { ja: "困っている人を救いたい。", vi: "Tôi muốn cứu giúp người đang gặp khó." },
    ],
  },
  {
    w: "願望",
    r: "がんぼう",
    m: "NGUYỆN VỌNG — nguyện vọng, ước muốn",
    examples: [
      { ja: "海外で働くのが昔からの願望だ。", vi: "Làm việc ở nước ngoài là nguyện vọng từ lâu của tôi." },
      { ja: "強い願望があれば努力できる。", vi: "Có nguyện vọng mạnh thì sẽ cố gắng được." },
      { ja: "彼の願望は叶った。", vi: "Nguyện vọng của anh ấy đã thành hiện thực." },
    ],
  },
  {
    w: "虚しい",
    r: "むなしい",
    m: "HƯ — trống rỗng, hụt hẫng, vô nghĩa",
    examples: [
      { ja: "成功しても心が虚しいことがある。", vi: "Dù thành công đôi khi lòng vẫn thấy trống rỗng." },
      { ja: "虚しい議論に時間を使いたくない。", vi: "Tôi không muốn tốn thời gian cho cuộc tranh luận vô nghĩa." },
      { ja: "一人の部屋は虚しく感じた。", vi: "Căn phòng một mình khiến tôi thấy trống trải." },
    ],
  },
  {
    w: "保証",
    r: "ほしょう",
    m: "BẢO CHỨNG — bảo đảm, bảo hành",
    examples: [
      { ja: "この商品は一年間保証が付いている。", vi: "Sản phẩm này có bảo hành một năm." },
      { ja: "品質は保証します。", vi: "Chúng tôi bảo đảm chất lượng." },
      { ja: "保証書を大切に保管してください。", vi: "Xin giữ cẩn thận giấy bảo hành." },
    ],
  },
  {
    w: "催し",
    r: "もよおし",
    m: "THÔI — sự kiện, buổi tổ chức, hoạt động",
    examples: [
      { ja: "地域の催しに参加した。", vi: "Tôi tham gia sự kiện của khu phố." },
      { ja: "週末に面白い催しがある。", vi: "Cuối tuần có sự kiện thú vị." },
      { ja: "会社の催しで同僚と親しくなった。", vi: "Nhờ sự kiện công ty mà tôi thân hơn với đồng nghiệp." },
    ],
  },
  {
    w: "硬貨",
    r: "こうか",
    m: "CỨNG HỐA — tiền xu, tiền kim loại",
    examples: [
      { ja: "自動販売機に硬貨を入れた。", vi: "Tôi bỏ tiền xu vào máy bán hàng tự động." },
      { ja: "財布に硬貨がたくさん入っている。", vi: "Ví có rất nhiều tiền xu." },
      { ja: "硬貨と紙幣を分けて数えた。", vi: "Tôi tách tiền xu và tiền giấy rồi đếm." },
    ],
  },
  {
    w: "製造",
    r: "せいぞう",
    m: "CHẾ TẠO — sản xuất, chế tạo",
    examples: [
      { ja: "この工場では自動車部品を製造している。", vi: "Nhà máy này sản xuất linh kiện ô tô." },
      { ja: "製造工程を見直した。", vi: "Chúng tôi xem lại quy trình sản xuất." },
      { ja: "製造年月日を確認してください。", vi: "Xin hãy kiểm tra ngày sản xuất." },
    ],
  },
  {
    w: "結婚観",
    r: "けっこんかん",
    m: "KẾT HÔN QUAN — quan niệm về hôn nhân",
    examples: [
      { ja: "人によって結婚観は違う。", vi: "Quan niệm về hôn nhân khác nhau tùy người." },
      { ja: "最近の若者の結婚観が変わってきた。", vi: "Quan niệm hôn nhân của giới trẻ gần đây đã thay đổi." },
      { ja: "二人の結婚観が合わなかった。", vi: "Quan niệm hôn nhân của hai người không hợp nhau." },
    ],
  },
  {
    w: "高水準",
    r: "こうすいじゅん",
    m: "CAO THỦY CHUẨN — mức cao, trình độ / tiêu chuẩn cao",
    examples: [
      { ja: "この国の医療は高水準だ。", vi: "Y tế nước này ở mức cao." },
      { ja: "高水準のサービスが評価された。", vi: "Dịch vụ mức cao được đánh giá tốt." },
      { ja: "選手たちは高水準のプレーを見せた。", vi: "Các cầu thủ thể hiện lối chơi trình độ cao." },
    ],
  },
  {
    w: "未使用",
    r: "みしよう",
    m: "VỊ SỬ DỤNG — chưa sử dụng",
    examples: [
      { ja: "未使用の封筒が余っている。", vi: "Còn thừa phong bì chưa dùng." },
      { ja: "未使用品を安く譲ります。", vi: "Tôi nhượng lại đồ chưa dùng với giá rẻ." },
      { ja: "チケットは未使用のまま期限が切れた。", vi: "Vé hết hạn trong tình trạng chưa sử dụng." },
    ],
  },
  {
    w: "勉強漬け",
    r: "べんきょうづけ",
    m: "HỌC VẤN TRÍ — ngập trong học hành, học liên tục",
    examples: [
      { ja: "試験前は勉強漬けの毎日だった。", vi: "Trước kỳ thi mỗi ngày tôi ngập trong học." },
      { ja: "勉強漬けだと息抜きも必要だ。", vi: "Nếu học liên tục thì cũng cần nghỉ giải lao." },
      { ja: "一週間勉強漬けで疲れた。", vi: "Học ngập một tuần khiến tôi mệt." },
    ],
  },
  {
    w: "溶け",
    r: "とけ",
    m: "DUNG — sự tan chảy / tan (dạng danh từ của 溶ける); cũng dùng trong từ ghép",
    examples: [
      { ja: "氷の溶けが早い。", vi: "Băng tan nhanh." },
      { ja: "雪解けの季節になった。", vi: "Đã đến mùa tuyết tan." },
      { ja: "チョコが溶けないよう冷蔵庫に入れた。", vi: "Tôi cho socola vào tủ lạnh để không bị chảy." },
    ],
  },
  {
    w: "提供",
    r: "ていきょう",
    m: "ĐỀ CUNG — cung cấp, phục vụ, cung ứng",
    examples: [
      { ja: "このサイトは無料で情報を提供している。", vi: "Trang này cung cấp thông tin miễn phí." },
      { ja: "お客様に良いサービスを提供したい。", vi: "Tôi muốn cung cấp dịch vụ tốt cho khách." },
      { ja: "昼食が提供されます。", vi: "Bữa trưa sẽ được phục vụ / cung cấp." },
    ],
  },
  {
    w: "選出",
    r: "せんしゅつ",
    m: "TUYỂN XUẤT — bầu chọn, chọn ra",
    examples: [
      { ja: "彼は代表に選出された。", vi: "Anh ấy được chọn làm đại diện." },
      { ja: "委員の選出が行われた。", vi: "Việc bầu chọn ủy viên đã được tiến hành." },
      { ja: "投票でリーダーを選出する。", vi: "Bầu chọn người lãnh đạo bằng bỏ phiếu." },
    ],
  },
  {
    w: "指示",
    r: "しじ",
    m: "CHỈ THỊ — chỉ thị, hướng dẫn, ra lệnh",
    examples: [
      { ja: "上司の指示に従って作業した。", vi: "Tôi làm việc theo chỉ thị của cấp trên." },
      { ja: "詳しい指示をメールで送ります。", vi: "Tôi sẽ gửi hướng dẫn chi tiết qua email." },
      { ja: "指示が曖昧だとミスが増える。", vi: "Chỉ thị mơ hồ thì lỗi sẽ tăng." },
    ],
  },
  {
    w: "ぐったり",
    r: "ぐったり",
    m: "kiệt sức, rũ rượi, mệt bã",
    examples: [
      { ja: "一日歩いてぐったりした。", vi: "Đi bộ cả ngày khiến tôi mệt rũ." },
      { ja: "熱が出てぐったりしている。", vi: "Bị sốt nên người rũ rượi." },
      { ja: "残業続きでぐったりだ。", vi: "Tăng ca liên tục nên tôi kiệt sức." },
    ],
  },
  {
    w: "アウト",
    r: "アウト",
    m: "out — ra ngoài; lỗi / bị loại; hết hạn (nghĩa rộng tùy ngữ cảnh)",
    examples: [
      { ja: "ボールはアウトになった。", vi: "Bóng bị out." },
      { ja: "この案は予算的にアウトだ。", vi: "Phương án này về ngân sách là không ổn / out." },
      { ja: "期限が過ぎたらアウトです。", vi: "Quá hạn là out / không chấp nhận được." },
    ],
  },
  {
    w: "邪魔",
    r: "じゃま",
    m: "TÀ MA — cản trở, làm phiền, vướng",
    examples: [
      { ja: "お邪魔してすみません。", vi: "Xin lỗi vì làm phiền / ghé vào đột xuất." },
      { ja: "荷物が邪魔なのでどかした。", vi: "Hành lý vướng nên tôi dọn sang chỗ khác." },
      { ja: "作業の邪魔にならないように静かにする。", vi: "Giữ im để không cản trở công việc." },
    ],
  },
  {
    w: "被害",
    r: "ひがい",
    m: "BỊ HẠI — thiệt hại, tổn thất",
    examples: [
      { ja: "台風で大きな被害が出た。", vi: "Bão gây thiệt hại lớn." },
      { ja: "被害を最小限に抑えたい。", vi: "Muốn kìm thiệt hại ở mức thấp nhất." },
      { ja: "詐欺の被害に遭わないよう注意する。", vi: "Cẩn thận để không trở thành nạn nhân lừa đảo." },
    ],
  },
  {
    w: "無理",
    r: "むり",
    m: "VÔ LÝ — quá sức, không thể; ép buộc; vô lý",
    examples: [
      { ja: "今日中に全部やるのは無理だ。", vi: "Làm hết trong hôm nay là quá sức." },
      { ja: "無理をすると体を壊すよ。", vi: "Cố quá sẽ hại sức khỏe đấy." },
      { ja: "無理なお願いかもしれませんが…。", vi: "Có thể đây là yêu cầu quá đáng nhưng…" },
    ],
  },
  {
    w: "なだらか",
    r: "なだらか",
    m: "thoai thoải, êm dịu, không dốc đột ngột",
    examples: [
      { ja: "なだらかな坂を登った。", vi: "Tôi leo con dốc thoai thoải." },
      { ja: "景気がなだらかに回復している。", vi: "Kinh tế đang phục hồi một cách êm dịu." },
      { ja: "なだらかな口調で説明した。", vi: "Giải thích với giọng điệu êm dịu." },
    ],
  },
  {
    w: "ささやか",
    r: "ささやか",
    m: "nhỏ nhoi, khiêm tốn, giản dị",
    examples: [
      { ja: "ささやかな贈り物を用意した。", vi: "Tôi chuẩn bị một món quà nhỏ." },
      { ja: "ささやかながらお祝いします。", vi: "Dù nhỏ nhoi xin chúc mừng." },
      { ja: "ささやかな幸せを大切にしたい。", vi: "Tôi muốn trân trọng những hạnh phúc nhỏ bé." },
    ],
  },
  {
    w: "弱々しい",
    r: "よわよわしい",
    m: "NHƯỢC — yếu ớt, mong manh",
    examples: [
      { ja: "病気明けで弱々しい声だった。", vi: "Vừa khỏi bệnh nên giọng yếu ớt." },
      { ja: "弱々しい体つきに見えた。", vi: "Trông dáng người mong manh." },
      { ja: "弱々しい笑顔を浮かべた。", vi: "Nở một nụ cười yếu ớt." },
    ],
  },
  {
    w: "機敏",
    r: "きびん",
    m: "CƠ MẪN — nhanh nhẹn, lanh lợi",
    examples: [
      { ja: "機敏な対応が求められる。", vi: "Cần ứng phó nhanh nhẹn." },
      { ja: "彼は機敏に動いて問題を解決した。", vi: "Anh ấy hành động nhanh nhẹn và giải quyết vấn đề." },
      { ja: "機敏な選手がゴールを決めた。", vi: "Cầu thủ nhanh nhẹn đã ghi bàn." },
    ],
  },
  {
    w: "濃厚",
    r: "のうこう",
    m: "NỒNG HẬU — đậm đặc; rõ rệt, mạnh (khả năng, hương vị)",
    examples: [
      { ja: "濃厚なチーズケーキが人気だ。", vi: "Bánh phô mai vị đậm đang được ưa chuộng." },
      { ja: "優勝の可能性が濃厚になってきた。", vi: "Khả năng vô địch ngày càng rõ / đậm." },
      { ja: "濃厚な味のスープを作った。", vi: "Tôi nấu món súp vị đậm đặc." },
    ],
  },
  {
    w: "強引に",
    r: "ごういんに",
    m: "CƯỠNG DẪN — một cách cưỡng ép, cứng rắn, ép buộc",
    examples: [
      { ja: "強引に話を進めるのはよくない。", vi: "Ép cuộc nói chuyện tiến nhanh như vậy không tốt." },
      { ja: "強引に契約させられた。", vi: "Tôi bị ép ký hợp đồng." },
      { ja: "強引にドアを開けた。", vi: "Anh ấy mở cửa một cách mạnh bạo / cưỡng ép." },
    ],
  },
  {
    w: "当てはまる",
    r: "あてはまる",
    m: "ĐÁNG — phù hợp, áp dụng đúng vào, khớp với",
    examples: [
      { ja: "この条件に当てはまる人は少ない。", vi: "Ít người khớp với điều kiện này." },
      { ja: "説明が自分の状況に当てはまった。", vi: "Lời giải thích khớp với tình huống của tôi." },
      { ja: "当てはまる選択肢を選んでください。", vi: "Hãy chọn phương án phù hợp." },
    ],
  },
  {
    w: "付け加える",
    r: "つけくわえる",
    m: "PHÓ GIA — bổ sung thêm, thêm vào",
    examples: [
      { ja: "最後に一言付け加えたい。", vi: "Cuối cùng tôi muốn bổ sung thêm một câu." },
      { ja: "資料に注意点を付け加えた。", vi: "Tôi bổ sung điểm cần lưu ý vào tài liệu." },
      { ja: "付け加えることがあれば教えてください。", vi: "Nếu có gì cần bổ sung xin hãy cho biết." },
    ],
  },
  {
    w: "行き着く",
    r: "いきつく",
    m: "HÀNH TRỨC — đi đến (đích); cuối cùng đi đến kết luận",
    examples: [
      { ja: "長い議論の末、一つの結論に行き着いた。", vi: "Sau tranh luận dài, cuối cùng đi đến một kết luận." },
      { ja: "地図を見ながら目的地に行き着いた。", vi: "Vừa xem bản đồ vừa đi đến được đích." },
      { ja: "答えに行き着くまで時間がかかった。", vi: "Mất thời gian mới đi đến được câu trả lời." },
    ],
  },
  {
    w: "愉快",
    r: "ゆかい",
    m: "DU KHOÁI — vui vẻ, thú vị, khoái chí",
    examples: [
      { ja: "愉快な仲間と過ごした。", vi: "Tôi đã có thời gian với những người bạn vui vẻ." },
      { ja: "彼の話はいつも愉快だ。", vi: "Chuyện của anh ấy lúc nào cũng vui." },
      { ja: "愉快な雰囲気のパーティーだった。", vi: "Đó là buổi tiệc không khí vui vẻ." },
    ],
  },
  {
    w: "やむを得ない",
    r: "やむをえない",
    m: "BẤT ĐẮC DĨ — bất đắc dĩ, không còn cách khác",
    examples: [
      { ja: "事情により、やむを得ず欠席します。", vi: "Vì hoàn cảnh, tôi bất đắc dĩ phải vắng mặt." },
      { ja: "値上げはやむを得ない判断だった。", vi: "Tăng giá là quyết định bất đắc dĩ." },
      { ja: "やむを得ない事情を説明した。", vi: "Tôi đã giải thích hoàn cảnh bất đắc dĩ." },
    ],
  },
  {
    w: "情けない",
    r: "なさけない",
    m: "TÌNH — đáng xấu hổ, tồi tệ, yếu kém đến tội nghiệp",
    examples: [
      { ja: "同じミスを繰り返すなんて情けない。", vi: "Lặp lại cùng một lỗi thật đáng xấu hổ." },
      { ja: "情けない結果に落ち込んだ。", vi: "Tôi chùng xuống vì kết quả tệ hại." },
      { ja: "情けない話だが、道に迷ってしまった。", vi: "Nói ra thì xấu hổ, nhưng tôi bị lạc đường." },
    ],
  },
  {
    w: "息抜き",
    r: "いきぬき",
    m: "TỨC TRỦY — nghỉ giải lao, xả hơi",
    examples: [
      { ja: "仕事の合間に息抜きをする。", vi: "Tôi nghỉ giải lao giữa giờ làm." },
      { ja: "コーヒーを飲んで息抜きした。", vi: "Uống cà phê để xả hơi một chút." },
      { ja: "たまの息抜きが大切だ。", vi: "Thỉnh thoảng nghỉ giải lao là điều quan trọng." },
    ],
  },
  {
    w: "ついている",
    r: "ついている",
    m: "gặp may, đang vận đỏ (付いている)",
    examples: [
      { ja: "今日はついている。欲しかった商品が半額だった。", vi: "Hôm nay tôi gặp may. Món muốn mua đang giảm nửa giá." },
      { ja: "抽選に当たるなんて、本当についている。", vi: "Trúng thăm thế này thật sự đang gặp vận may." },
      { ja: "最近ついている気がする。", vi: "Gần đây tôi cảm giác đang gặp may." },
    ],
  },
  {
    w: "常に",
    r: "つねに",
    m: "THƯỜNG — luôn luôn, lúc nào cũng",
    examples: [
      { ja: "常に最新情報を確認している。", vi: "Tôi luôn kiểm tra thông tin mới nhất." },
      { ja: "彼は常に笑顔だ。", vi: "Anh ấy lúc nào cũng mỉm cười." },
      { ja: "安全を常に意識してください。", vi: "Xin hãy luôn ý thức về an toàn." },
    ],
  },
  {
    w: "延長",
    r: "えんちょう",
    m: "DIÊN TRƯỜNG — kéo dài, gia hạn",
    examples: [
      { ja: "会議が30分延長された。", vi: "Cuộc họp được kéo dài thêm 30 phút." },
      { ja: "ビザの延長手続きをした。", vi: "Tôi làm thủ tục gia hạn visa." },
      { ja: "締め切りの延長をお願いしたい。", vi: "Tôi muốn xin gia hạn deadline." },
    ],
  },
  {
    w: "錆びる",
    r: "さびる",
    m: "TỰ — bị gỉ, han gỉ; (nghĩa bóng) trở nên kém / lỗi thời",
    examples: [
      { ja: "自転車が錆びてしまった。", vi: "Xe đạp bị gỉ rồi." },
      { ja: "技能は使わないと錆びる。", vi: "Kỹ năng không dùng sẽ bị mai một." },
      { ja: "錆びないように油を塗った。", vi: "Tôi bôi dầu để không bị gỉ." },
    ],
  },
  {
    w: "鉄",
    r: "てつ",
    m: "THIẾT — sắt; (nghĩa bóng) cứng rắn",
    examples: [
      { ja: "この橋は鉄でできている。", vi: "Cây cầu này làm bằng sắt." },
      { ja: "鉄の意思で目標を達成した。", vi: "Với ý chí sắt đá, anh ấy đạt mục tiêu." },
      { ja: "鉄分を含む食品を食べる。", vi: "Ăn thực phẩm chứa sắt." },
    ],
  },
  {
    w: "棒",
    r: "ぼう",
    m: "BỔNG — cái gậy, thanh; (nghĩa bóng) thành công toi / mất trắng trong thành ngữ",
    examples: [
      { ja: "棒で地面に線を引いた。", vi: "Dùng gậy vạch một đường trên mặt đất." },
      { ja: "努力が水の泡になって棒に振った。", vi: "Công sức thành công toi / đổ sông đổ biển." },
      { ja: "棒状のパンを買った。", vi: "Tôi mua bánh mì dạng thanh." },
    ],
  },
  {
    w: "臭い",
    r: "におい／くさい",
    m: "XÚ — mùi (におい); hôi, khó chịu (くさい); đáng ngờ (nghĩa bóng)",
    examples: [
      { ja: "台所からいい臭いがする。", vi: "Từ nhà bếp có mùi thơm." },
      { ja: "靴が臭いので外に干した。", vi: "Giày hôi nên tôi phơi ra ngoài." },
      { ja: "その話はどうにも臭い。", vi: "Câu chuyện đó nghe đâu đó khả nghi." },
    ],
  },
  {
    w: "鉢",
    r: "はち",
    m: "BÁT — chậu (cây); bát lớn",
    examples: [
      { ja: "鉢に花を植えた。", vi: "Tôi trồng hoa vào chậu." },
      { ja: "大きな鉢でラーメンを食べた。", vi: "Tôi ăn ramen trong tô lớn." },
      { ja: "鉢植えを窓辺に置いた。", vi: "Tôi đặt chậu cây cạnh cửa sổ." },
    ],
  },
  {
    w: "目上",
    r: "めうえ",
    m: "MỤC THƯỢNG — người trên, cấp trên, bậc trên",
    examples: [
      { ja: "目上の人には丁寧な言葉を使う。", vi: "Với người trên thì dùng lời lẽ lịch sự." },
      { ja: "目上に意見を言うときは慎重に。", vi: "Khi góp ý với cấp trên cần thận trọng." },
      { ja: "目上を敬う文化がある。", vi: "Có văn hóa tôn kính người trên." },
    ],
  },
  {
    w: "優秀",
    r: "ゆうしゅう",
    m: "ƯU TÚ — xuất sắc, ưu tú",
    examples: [
      { ja: "優秀な社員を採用したい。", vi: "Muốn tuyển nhân viên xuất sắc." },
      { ja: "彼女は優秀な成績で卒業した。", vi: "Cô ấy tốt nghiệp với thành tích xuất sắc." },
      { ja: "優秀賞をもらった。", vi: "Tôi nhận giải xuất sắc." },
    ],
  },
  {
    w: "学年",
    r: "がくねん",
    m: "HỌC NIÊN — niên khóa, khối lớp, năm học",
    examples: [
      { ja: "学年が上がると勉強が難しくなる。", vi: "Lên khối cao hơn thì học khó hơn." },
      { ja: "同学年の友達と旅行した。", vi: "Tôi đi du lịch với bạn cùng niên khóa." },
      { ja: "学年末にテストがある。", vi: "Cuối năm học có bài kiểm tra." },
    ],
  },
  {
    w: "金賞",
    r: "きんしょう",
    m: "KIM THƯỞNG — giải vàng, giải nhất",
    examples: [
      { ja: "コンテストで金賞を取った。", vi: "Tôi đoạt giải vàng trong cuộc thi." },
      { ja: "金賞作品が展示されている。", vi: "Tác phẩm giải vàng đang được trưng bày." },
      { ja: "金賞を目指して練習している。", vi: "Đang luyện tập nhằm đoạt giải vàng." },
    ],
  },
  {
    w: "受賞",
    r: "じゅしょう",
    m: "THỤ THƯỞNG — nhận giải, được trao giải",
    examples: [
      { ja: "彼の小説が賞を受賞した。", vi: "Tiểu thuyết của anh ấy đã nhận giải." },
      { ja: "受賞の知らせに驚いた。", vi: "Tôi bất ngờ trước tin nhận giải." },
      { ja: "受賞スピーチで感謝を述べた。", vi: "Trong bài phát biểu nhận giải, anh ấy bày tỏ biết ơn." },
    ],
  },
  {
    w: "大げさ",
    r: "おおげさ",
    m: "ĐẠI — phóng đại, khoa trương, thái quá",
    examples: [
      { ja: "大げさに騒ぐ必要はない。", vi: "Không cần làm ầm ĩ / phóng đại lên." },
      { ja: "彼の話はいつも大げさだ。", vi: "Chuyện của anh ấy lúc nào cũng khoa trương." },
      { ja: "大げさな表現を避けて説明した。", vi: "Tôi giải thích tránh cách nói phóng đại." },
    ],
  },
  {
    w: "反省",
    r: "はんせい",
    m: "PHẢN TỈNH — tự kiểm điểm, rút kinh nghiệm",
    examples: [
      { ja: "失敗を反省して次に活かす。", vi: "Rút kinh nghiệm từ thất bại để áp dụng lần sau." },
      { ja: "深く反省しています。", vi: "Tôi đang thành thật rút kinh nghiệm." },
      { ja: "反省会で原因を話し合った。", vi: "Trong buổi rút kinh nghiệm chúng tôi bàn về nguyên nhân." },
    ],
  },
];

// Fix 差し支えない HV typo
NEW.find((x) => x.w === "差し支えない").m =
  "SA CHI — không sao, không có trở ngại, được phép (差し支え)";

let added = 0;
let updated = 0;

for (const entry of NEW) {
  const existing = data.items.find((i) => i.t === "n2" && i.w === entry.w);
  if (existing) {
    existing.r = entry.r || existing.r;
    existing.m = entry.m;
    existing.s = "Từ vựng N2";
    const old = EXAMPLES[existing.id] || [];
    const merged = [
      ...entry.examples,
      ...old.filter((e) => !entry.examples.some((n) => n.ja === e.ja)),
    ].slice(0, Math.max(3, entry.examples.length));
    EXAMPLES[existing.id] = merged.slice(0, Math.max(3, merged.length >= 3 ? merged.length : 3));
    // ensure exactly at least 3
    while (EXAMPLES[existing.id].length < 3) {
      EXAMPLES[existing.id].push(entry.examples[EXAMPLES[existing.id].length % entry.examples.length]);
    }
    EXAMPLES[existing.id] = EXAMPLES[existing.id].slice(0, 3);
    updated++;
  } else {
    const id = "v" + String(data.items.length + 1).padStart(4, "0");
    data.items.push({
      id,
      w: entry.w,
      r: entry.r,
      m: entry.m,
      t: "n2",
      s: "Từ vựng N2",
    });
    EXAMPLES[id] = entry.examples.slice(0, 3);
    added++;
  }
}

theme.count = data.items.filter((i) => i.t === "n2").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");

console.log({ added, updated, n2: theme.count, total: data.total });

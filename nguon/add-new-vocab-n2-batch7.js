/**
 * Thêm new-vocab.md (batch 7) vào chủ đề Từ vựng N2 (3 ví dụ / từ, nghĩa kèm Hán Việt).
 * Luôn thêm mới, không kiểm tra trùng.
 * Usage: node nguon/add-new-vocab-n2-batch7.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(root, "vocab-data.js"), "utf8"));
eval(fs.readFileSync(path.join(root, "examples-data.js"), "utf8"));

const data = window.VOCAB_DATA;
const EXAMPLES = window.EXAMPLES_DATA;

const NEW = [
  {
    w: "軽傷",
    r: "けいしょう",
    m: "KHINH THƯƠNG — vết thương nhẹ, bị thương nhẹ",
    examples: [
      { ja: "事故で運転手は軽傷を負った。", vi: "Tài xế bị thương nhẹ trong vụ tai nạn." },
      { ja: "幸い軽傷ですんだ。", vi: "May mà chỉ bị thương nhẹ." },
      { ja: "けが人は三人で、全員軽傷だ。", vi: "Có ba người bị thương, tất cả đều nhẹ." },
    ],
  },
  {
    w: "負担",
    r: "ふたん",
    m: "PHỤ ĐẢM — gánh nặng, gánh vác, chịu (chi phí)",
    examples: [
      { ja: "家賃の負担が大きい。", vi: "Gánh nặng tiền thuê nhà rất lớn." },
      { ja: "費用は会社が負担してくれる。", vi: "Công ty sẽ chịu chi phí." },
      { ja: "親に負担をかけたくない。", vi: "Tôi không muốn gây gánh nặng cho cha mẹ." },
    ],
  },
  {
    w: "映る",
    r: "うつる",
    m: "ÁNH — được phản chiếu, hiện lên (trong gương, màn hình, ảnh)",
    examples: [
      { ja: "湖に山の姿が映っている。", vi: "Bóng núi phản chiếu trên mặt hồ." },
      { ja: "この写真には私も映っている。", vi: "Trong bức ảnh này cũng có tôi." },
      { ja: "テレビに映った景色に見覚えがあった。", vi: "Cảnh trên ti vi trông quen quen." },
    ],
  },
  {
    w: "偉大",
    r: "いだい",
    m: "VĨ ĐẠI — vĩ đại, to lớn, lỗi lạc",
    examples: [
      { ja: "彼は偉大な科学者として知られている。", vi: "Ông ấy được biết đến như một nhà khoa học vĩ đại." },
      { ja: "母の愛は偉大だ。", vi: "Tình yêu của mẹ thật vĩ đại." },
      { ja: "偉大な功績を残した。", vi: "Ông đã để lại công lao to lớn." },
    ],
  },
  {
    w: "勇ましい",
    r: "いさましい",
    m: "DŨNG — dũng cảm, hùng dũng, oai hùng",
    examples: [
      { ja: "兵士たちは勇ましく戦った。", vi: "Các binh sĩ đã chiến đấu dũng cảm." },
      { ja: "勇ましい掛け声が響いた。", vi: "Tiếng hô hùng dũng vang lên." },
      { ja: "勇ましい姿に子どもたちは憧れた。", vi: "Bọn trẻ ngưỡng mộ dáng vẻ oai hùng ấy." },
    ],
  },
  {
    w: "勢い",
    r: "いきおい",
    m: "THẾ — khí thế, đà, sức mạnh, sức lực",
    examples: [
      { ja: "火は風に煽られて勢いを増した。", vi: "Lửa gặp gió nên mạnh thêm." },
      { ja: "勢いに乗って三連勝した。", vi: "Thừa thắng, tôi thắng ba trận liên tiếp." },
      { ja: "彼は勢いよくドアを開けた。", vi: "Anh ấy mở cửa mạnh mẽ." },
    ],
  },
  {
    w: "陽気",
    r: "ようき",
    m: "DƯƠNG KHÍ — vui vẻ, tươi tỉnh; thời tiết (ấm áp)",
    examples: [
      { ja: "彼は陽気な性格でみんなに好かれている。", vi: "Anh ấy tính vui vẻ nên được mọi người quý mến." },
      { ja: "陽気な音楽に合わせて踊った。", vi: "Chúng tôi nhảy theo điệu nhạc vui nhộn." },
      { ja: "春の陽気に誘われて散歩に出た。", vi: "Bị tiết trời xuân ấm áp cuốn hút nên tôi ra ngoài đi dạo." },
    ],
  },
  {
    w: "見逃す",
    r: "みのがす",
    m: "KIẾN ĐÀO — bỏ lỡ, không nhìn thấy; bỏ qua, nhắm mắt cho qua",
    examples: [
      { ja: "好きなドラマを見逃してしまった。", vi: "Tôi lỡ mất bộ phim yêu thích." },
      { ja: "今回だけは見逃してあげよう。", vi: "Lần này thôi, tôi sẽ bỏ qua cho." },
      { ja: "小さな変化も見逃さないように注意する。", vi: "Chú ý để không bỏ sót cả những thay đổi nhỏ." },
    ],
  },
  {
    w: "去る",
    r: "さる",
    m: "KHỨ — rời đi, rời khỏi; qua đi, đã qua",
    examples: [
      { ja: "彼は故郷を去って東京へ行った。", vi: "Anh ấy rời quê lên Tokyo." },
      { ja: "台風が去って青空が広がった。", vi: "Bão qua đi, bầu trời xanh trải rộng." },
      { ja: "去る三月に彼は退職した。", vi: "Tháng Ba vừa qua anh ấy đã nghỉ việc." },
    ],
  },
  {
    w: "延ばす",
    r: "のばす",
    m: "DUYÊN — kéo dài, hoãn lại, gia hạn",
    examples: [
      { ja: "雨で出発を一日延ばした。", vi: "Vì mưa nên hoãn xuất phát một ngày." },
      { ja: "提出期限を延ばしてもらえませんか。", vi: "Anh có thể gia hạn thời hạn nộp cho tôi không?" },
      { ja: "滞在期間を一週間延ばすことにした。", vi: "Tôi quyết định kéo dài thời gian lưu trú thêm một tuần." },
    ],
  },
  {
    w: "欠かす",
    r: "かかす",
    m: "KHIẾM — bỏ sót, thiếu (thường dùng 欠かせない: không thể thiếu)",
    examples: [
      { ja: "毎朝のジョギングは欠かさない。", vi: "Tôi không bỏ buổi chạy bộ mỗi sáng." },
      { ja: "水は生活に欠かせないものだ。", vi: "Nước là thứ không thể thiếu trong cuộc sống." },
      { ja: "この料理には塩が欠かせない。", vi: "Món này không thể thiếu muối." },
    ],
  },
  {
    w: "拡張",
    r: "かくちょう",
    m: "KHUẾCH TRƯƠNG — mở rộng, nới rộng",
    examples: [
      { ja: "工場を拡張する計画がある。", vi: "Có kế hoạch mở rộng nhà máy." },
      { ja: "メモリーを拡張してパソコンを速くした。", vi: "Tôi nâng cấp bộ nhớ để máy tính chạy nhanh hơn." },
      { ja: "道路の拡張工事が始まった。", vi: "Công trình mở rộng đường đã bắt đầu." },
    ],
  },
  {
    w: "前町長",
    r: "ぜんちょうちょう",
    m: "TIỀN TRẤN TRƯỞNG — nguyên trưởng thị trấn, cựu trưởng thị trấn",
    examples: [
      { ja: "前町長が講演会に招かれた。", vi: "Nguyên trưởng thị trấn được mời đến buổi diễn thuyết." },
      { ja: "前町長の功績をたたえる式が行われた。", vi: "Đã tổ chức lễ ca ngợi công lao của cựu trưởng thị trấn." },
      { ja: "前町長は十年間町政を担当した。", vi: "Cựu trưởng thị trấn đã điều hành thị trấn trong mười năm." },
    ],
  },
  {
    w: "連絡先",
    r: "れんらくさき",
    m: "LIÊN LẠC TIÊN — địa chỉ liên lạc, nơi liên hệ",
    examples: [
      { ja: "連絡先を教えていただけますか。", vi: "Anh cho tôi xin thông tin liên lạc được không?" },
      { ja: "引っ越したので連絡先が変わった。", vi: "Tôi chuyển nhà nên thông tin liên lạc đã thay đổi." },
      { ja: "緊急の連絡先をここに書いてください。", vi: "Xin hãy viết số liên lạc khẩn cấp vào đây." },
    ],
  },
  {
    w: "昔話",
    r: "むかしばなし",
    m: "TÍCH THOẠI — chuyện cổ tích, chuyện ngày xưa",
    examples: [
      { ja: "祖母は寝る前に昔話を聞かせてくれた。", vi: "Bà kể chuyện cổ tích cho tôi trước khi ngủ." },
      { ja: "同窓会で昔話に花が咲いた。", vi: "Ở buổi họp lớp, chuyện ngày xưa được kể rôm rả." },
      { ja: "「桃太郎」は日本の有名な昔話だ。", vi: "“Momotaro” là truyện cổ tích nổi tiếng của Nhật." },
    ],
  },
  {
    w: "政治色・地方色・国際色",
    r: "せいじしょく・ちほうしょく・こくさいしょく",
    m: "SẮC (〜色) — màu sắc ~, tính chất ~ (chính trị, địa phương, quốc tế)",
    examples: [
      { ja: "この雑誌は政治色が強い。", vi: "Tạp chí này mang đậm màu sắc chính trị." },
      { ja: "地方色豊かな祭りを見に行った。", vi: "Tôi đi xem lễ hội đậm màu sắc địa phương." },
      { ja: "留学生が多く、キャンパスは国際色豊かだ。", vi: "Có nhiều du học sinh nên khuôn viên trường đậm màu sắc quốc tế." },
    ],
  },
  {
    w: "現実味",
    r: "げんじつみ",
    m: "HIỆN THỰC VỊ — tính hiện thực, cảm giác như thật",
    examples: [
      { ja: "その計画には現実味がない。", vi: "Kế hoạch đó thiếu tính thực tế." },
      { ja: "夢が現実味を帯びてきた。", vi: "Giấc mơ đã dần trở nên có thật." },
      { ja: "映画の設定は現実味に欠けていた。", vi: "Bối cảnh của bộ phim thiếu tính chân thực." },
    ],
  },
  {
    w: "無力",
    r: "むりょく",
    m: "VÔ LỰC — bất lực, không có sức mạnh",
    examples: [
      { ja: "自然災害の前では人間は無力だ。", vi: "Trước thiên tai con người thật bất lực." },
      { ja: "友人を助けられず、自分の無力さを感じた。", vi: "Không giúp được bạn, tôi cảm thấy mình bất lực." },
      { ja: "子どもたちは大人の争いの前で無力だった。", vi: "Trẻ em bất lực trước cuộc tranh chấp của người lớn." },
    ],
  },
  {
    w: "望み",
    r: "のぞみ",
    m: "VỌNG — hy vọng, nguyện vọng, mong muốn",
    examples: [
      { ja: "まだ助かる望みはある。", vi: "Vẫn còn hy vọng cứu được." },
      { ja: "あなたの望みを聞かせてください。", vi: "Hãy cho tôi biết nguyện vọng của bạn." },
      { ja: "望み通りの結果が出てうれしい。", vi: "Tôi vui vì kết quả đúng như mong muốn." },
    ],
  },
  {
    w: "命じる",
    r: "めいじる",
    m: "MỆNH — ra lệnh, giao lệnh; bổ nhiệm",
    examples: [
      { ja: "上司に残業を命じられた。", vi: "Tôi bị sếp ra lệnh tăng ca." },
      { ja: "彼は部長に命じられた。", vi: "Anh ấy được bổ nhiệm làm trưởng phòng." },
      { ja: "裁判所は被告に賠償を命じた。", vi: "Tòa án ra lệnh bị cáo bồi thường." },
    ],
  },
  {
    w: "移行",
    r: "いこう",
    m: "DI HÀNH — chuyển sang, chuyển đổi (sang hệ thống, giai đoạn khác)",
    examples: [
      { ja: "新しいシステムに移行する。", vi: "Chuyển sang hệ thống mới." },
      { ja: "紙の書類から電子データへの移行が進んでいる。", vi: "Việc chuyển từ giấy tờ sang dữ liệu điện tử đang tiến triển." },
      { ja: "計画は第二段階に移行した。", vi: "Kế hoạch đã chuyển sang giai đoạn hai." },
    ],
  },
  {
    w: "移住",
    r: "いじゅう",
    m: "DI TRÚ — di cư, chuyển đến sống ở nơi khác",
    examples: [
      { ja: "定年後は田舎に移住したい。", vi: "Sau khi nghỉ hưu tôi muốn chuyển về quê sống." },
      { ja: "彼の家族は海外に移住した。", vi: "Gia đình anh ấy đã di cư ra nước ngoài." },
      { ja: "移住者を支援する制度がある。", vi: "Có chế độ hỗ trợ người di cư đến." },
    ],
  },
  {
    w: "転職",
    r: "てんしょく",
    m: "CHUYỂN CHỨC — chuyển việc, đổi nghề",
    examples: [
      { ja: "給料が低いので転職を考えている。", vi: "Lương thấp nên tôi đang nghĩ đến chuyện đổi việc." },
      { ja: "彼は三回転職した。", vi: "Anh ấy đã đổi việc ba lần." },
      { ja: "転職して自分に合う仕事を見つけた。", vi: "Sau khi đổi việc tôi đã tìm được công việc phù hợp." },
    ],
  },
  {
    w: "転勤",
    r: "てんきん",
    m: "CHUYỂN CẦN — chuyển công tác, điều chuyển nơi làm việc",
    examples: [
      { ja: "来月、大阪へ転勤することになった。", vi: "Tháng sau tôi sẽ được điều chuyển đến Osaka." },
      { ja: "夫の転勤で引っ越した。", vi: "Chúng tôi chuyển nhà vì chồng tôi chuyển công tác." },
      { ja: "転勤が多い仕事は大変だ。", vi: "Công việc hay phải chuyển nơi làm thì vất vả." },
    ],
  },
  {
    w: "栽培",
    r: "さいばい",
    m: "TÀI BỒI — trồng trọt, canh tác",
    examples: [
      { ja: "この地域ではお茶を栽培している。", vi: "Vùng này trồng chè." },
      { ja: "無農薬で野菜を栽培している。", vi: "Chúng tôi trồng rau không dùng thuốc trừ sâu." },
      { ja: "トマトの栽培は意外と簡単だ。", vi: "Trồng cà chua hóa ra khá đơn giản." },
    ],
  },
  {
    w: "制作",
    r: "せいさく",
    m: "CHẾ TÁC — chế tác, sản xuất (phim, tác phẩm)",
    examples: [
      { ja: "彼は映画の制作に関わっている。", vi: "Anh ấy tham gia sản xuất phim." },
      { ja: "卒業制作に一年かかった。", vi: "Tác phẩm tốt nghiệp mất một năm để hoàn thành." },
      { ja: "番組の制作費を削減する。", vi: "Cắt giảm kinh phí sản xuất chương trình." },
    ],
  },
  {
    w: "養成",
    r: "ようせい",
    m: "DƯỠNG THÀNH — đào tạo, bồi dưỡng",
    examples: [
      { ja: "看護師を養成する学校に通っている。", vi: "Tôi học ở trường đào tạo y tá." },
      { ja: "若い技術者の養成が急務だ。", vi: "Đào tạo kỹ sư trẻ là việc cấp bách." },
      { ja: "この講座は通訳の養成を目的としている。", vi: "Khóa học này nhằm đào tạo phiên dịch viên." },
    ],
  },
  {
    w: "頷く",
    r: "うなずく",
    m: "HÀM — gật đầu (đồng ý, hiểu)",
    examples: [
      { ja: "彼は黙って頷いた。", vi: "Anh ấy lặng lẽ gật đầu." },
      { ja: "私の説明に、みんなが頷いてくれた。", vi: "Mọi người gật đầu trước lời giải thích của tôi." },
      { ja: "質問に頷くだけで答えなかった。", vi: "Anh ấy chỉ gật đầu chứ không trả lời câu hỏi." },
    ],
  },
  {
    w: "振り向く",
    r: "ふりむく",
    m: "CHẤN HƯỚNG — quay đầu lại, ngoảnh lại",
    examples: [
      { ja: "名前を呼ばれて振り向いた。", vi: "Nghe gọi tên, tôi quay đầu lại." },
      { ja: "彼女は一度も振り向かずに歩いていった。", vi: "Cô ấy bước đi mà không một lần ngoảnh lại." },
      { ja: "後ろの足音に驚いて振り向いた。", vi: "Giật mình vì tiếng bước chân phía sau nên tôi quay lại." },
    ],
  },
  {
    w: "睨む",
    r: "にらむ",
    m: "NGHÊ — lườm, nhìn chằm chằm, trừng mắt; để mắt tới",
    examples: [
      { ja: "兄は怖い顔で私を睨んだ。", vi: "Anh trai lườm tôi với vẻ mặt đáng sợ." },
      { ja: "警察は彼が犯人だと睨んでいる。", vi: "Cảnh sát nghi ngờ anh ta là thủ phạm." },
      { ja: "上司に睨まれると仕事がやりにくい。", vi: "Bị sếp để ý thì làm việc khó." },
    ],
  },
  {
    w: "屈む",
    r: "かがむ",
    m: "KHUẤT — cúi xuống, khom người, ngồi xổm",
    examples: [
      { ja: "落ちた財布を拾おうと屈んだ。", vi: "Tôi cúi xuống nhặt chiếc ví rơi." },
      { ja: "屈んで靴ひもを結んだ。", vi: "Tôi cúi xuống buộc dây giày." },
      { ja: "低い入口なので屈まないと通れない。", vi: "Cửa thấp nên phải khom người mới đi qua được." },
    ],
  },
  {
    w: "ごちゃごちゃ",
    r: "ごちゃごちゃ",
    m: "(từ tượng thanh/tượng hình) — lộn xộn, bừa bộn; lải nhải",
    examples: [
      { ja: "机の上がごちゃごちゃしている。", vi: "Bàn làm việc lộn xộn." },
      { ja: "荷物がごちゃごちゃで必要な物が見つからない。", vi: "Đồ đạc lộn xộn nên không tìm được thứ cần." },
      { ja: "ごちゃごちゃ言わずに早くやりなさい。", vi: "Đừng lải nhải nữa, làm nhanh đi." },
    ],
  },
  {
    w: "きょろきょろ",
    r: "きょろきょろ",
    m: "(từ tượng hình) — nhìn ngó xung quanh, đảo mắt",
    examples: [
      { ja: "子どもが不安そうにきょろきょろしている。", vi: "Đứa bé ngó nghiêng xung quanh với vẻ lo lắng." },
      { ja: "道に迷ってきょろきょろと辺りを見回した。", vi: "Bị lạc đường nên tôi nhìn quanh quẩn." },
      { ja: "きょろきょろしないで前を向いて座りなさい。", vi: "Đừng ngó nghiêng, hãy ngồi nhìn thẳng về phía trước." },
    ],
  },
  {
    w: "動揺",
    r: "どうよう",
    m: "ĐỘNG DAO — dao động, xao động, bối rối, hoang mang",
    examples: [
      { ja: "突然の知らせに動揺した。", vi: "Tôi bối rối trước tin đột ngột." },
      { ja: "彼は動揺を隠して笑顔で答えた。", vi: "Anh ấy giấu sự bối rối và trả lời bằng nụ cười." },
      { ja: "事件の影響で社会に動揺が広がった。", vi: "Vụ việc làm xã hội xáo động." },
    ],
  },
  {
    w: "引き返す",
    r: "ひきかえす",
    m: "DẪN PHẢN — quay lại, quay trở về (＝戻る)",
    examples: [
      { ja: "忘れ物に気づいて途中で引き返した。", vi: "Nhận ra bỏ quên đồ nên tôi quay lại giữa đường." },
      { ja: "雪がひどくて山の途中で引き返した。", vi: "Tuyết dày nên chúng tôi quay xuống giữa chừng." },
      { ja: "もう引き返せないところまで来てしまった。", vi: "Đã đi đến mức không thể quay đầu được nữa." },
    ],
  },
  {
    w: "一層",
    r: "いっそう",
    m: "NHẤT TẦNG — hơn nữa, càng thêm (＝もっと)",
    examples: [
      { ja: "寒さが一層厳しくなってきた。", vi: "Cái lạnh càng ngày càng khắc nghiệt." },
      { ja: "今後は一層努力いたします。", vi: "Từ nay tôi sẽ cố gắng hơn nữa." },
      { ja: "雨のせいで、道路の渋滞が一層ひどくなった。", vi: "Vì mưa nên tắc đường càng nặng thêm." },
    ],
  },
  {
    w: "かかりつけ",
    r: "かかりつけ",
    m: "(掛かり付け) — (bác sĩ, bệnh viện) quen, thường xuyên khám",
    examples: [
      { ja: "かかりつけの医者に相談した。", vi: "Tôi đã hỏi bác sĩ quen của mình." },
      { ja: "まずはかかりつけの病院に行ってみます。", vi: "Trước hết tôi sẽ thử đến bệnh viện mình hay khám." },
      { ja: "かかりつけ医を決めておくと安心だ。", vi: "Có sẵn bác sĩ gia đình thì yên tâm hơn." },
    ],
  },
  {
    w: "特殊",
    r: "とくしゅ",
    m: "ĐẶC THÙ — đặc thù, đặc biệt, khác thường",
    examples: [
      { ja: "これは特殊な技術を使った製品だ。", vi: "Đây là sản phẩm dùng kỹ thuật đặc biệt." },
      { ja: "特殊な事情があって参加できない。", vi: "Vì có hoàn cảnh đặc biệt nên tôi không tham gia được." },
      { ja: "特殊な訓練を受けた犬が活躍している。", vi: "Những chú chó được huấn luyện đặc biệt đang hoạt động hiệu quả." },
    ],
  },
  {
    w: "染みる",
    r: "しみる",
    m: "NHIỄM — thấm, ngấm; xót, buốt",
    examples: [
      { ja: "雨水が靴に染みて冷たい。", vi: "Nước mưa thấm vào giày nên lạnh." },
      { ja: "傷口に消毒液が染みて痛い。", vi: "Thuốc sát trùng xót vết thương." },
      { ja: "優しい言葉が心に染みた。", vi: "Lời nói dịu dàng đã thấm vào lòng tôi." },
    ],
  },
  {
    w: "揃える",
    r: "そろえる",
    m: "(揃) — làm cho đồng đều, sắp xếp ngay ngắn, gom cho đủ",
    examples: [
      { ja: "靴をきちんと揃えて脱ぎなさい。", vi: "Hãy cởi giày và xếp ngay ngắn." },
      { ja: "必要な書類を全部揃えて提出した。", vi: "Tôi gom đủ hồ sơ cần thiết rồi nộp." },
      { ja: "声を揃えて歌おう。", vi: "Hãy cùng hát đồng thanh." },
    ],
  },
  {
    w: "めくる",
    r: "めくる",
    m: "(捲る) — lật (trang), giở, lật ra",
    examples: [
      { ja: "本のページをめくる音が聞こえる。", vi: "Nghe tiếng lật trang sách." },
      { ja: "カレンダーを一枚めくると十一月になった。", vi: "Lật một tờ lịch là sang tháng Mười Một." },
      { ja: "布団をめくって中を探した。", vi: "Tôi lật chăn lên tìm bên trong." },
    ],
  },
  {
    w: "検討",
    r: "けんとう",
    m: "KIỂM THẢO — xem xét, cân nhắc, nghiên cứu",
    examples: [
      { ja: "その案は今後検討します。", vi: "Phương án đó chúng tôi sẽ xem xét sau." },
      { ja: "引っ越しを検討している。", vi: "Tôi đang cân nhắc chuyện chuyển nhà." },
      { ja: "会議で問題点を十分に検討した。", vi: "Trong cuộc họp, chúng tôi đã xem xét kỹ các vấn đề." },
    ],
  },
  {
    w: "初期",
    r: "しょき",
    m: "SƠ KỲ — thời kỳ đầu, giai đoạn đầu",
    examples: [
      { ja: "病気は初期のうちに発見できた。", vi: "Bệnh được phát hiện ngay từ giai đoạn đầu." },
      { ja: "江戸時代初期の建物が残っている。", vi: "Vẫn còn các công trình từ đầu thời Edo." },
      { ja: "初期設定をしてから使ってください。", vi: "Hãy cài đặt ban đầu rồi hãy sử dụng." },
    ],
  },
  {
    w: "打ち明ける",
    r: "うちあける",
    m: "ĐẢ MINH — thổ lộ, bộc bạch, nói thật",
    examples: [
      { ja: "親友に悩みを打ち明けた。", vi: "Tôi tâm sự nỗi lo với bạn thân." },
      { ja: "彼は思い切って本当の気持ちを打ち明けた。", vi: "Anh ấy mạnh dạn thổ lộ cảm xúc thật." },
      { ja: "秘密を打ち明けたら、気が楽になった。", vi: "Nói ra bí mật rồi, lòng tôi nhẹ nhõm hẳn." },
    ],
  },
  {
    w: "欠陥",
    r: "けっかん",
    m: "KHIẾM HÃM — khuyết điểm, khiếm khuyết, lỗi (sản phẩm)",
    examples: [
      { ja: "この車には重大な欠陥が見つかった。", vi: "Chiếc xe này bị phát hiện có lỗi nghiêm trọng." },
      { ja: "欠陥商品は交換いたします。", vi: "Sản phẩm lỗi chúng tôi sẽ đổi." },
      { ja: "設計に欠陥があったため、事故が起きた。", vi: "Vì thiết kế có sai sót nên đã xảy ra tai nạn." },
    ],
  },
  {
    w: "ブレーキ",
    r: "ブレーキ",
    m: "(brake) — phanh, cái phanh; sự hãm lại",
    examples: [
      { ja: "急ブレーキをかけて事故を避けた。", vi: "Tôi phanh gấp để tránh tai nạn." },
      { ja: "自転車のブレーキが効かない。", vi: "Phanh xe đạp không ăn." },
      { ja: "円高が景気にブレーキをかけている。", vi: "Đồng yên lên giá đang kìm hãm kinh tế." },
    ],
  },
  {
    w: "付き合う",
    r: "つきあう",
    m: "PHÓ HỢP — giao thiệp, qua lại; hẹn hò; đi cùng, chiều theo",
    examples: [
      { ja: "彼女とは三年付き合っている。", vi: "Tôi đang hẹn hò với cô ấy được ba năm." },
      { ja: "買い物に付き合ってくれない？", vi: "Đi mua sắm cùng tôi được không?" },
      { ja: "あの人とは付き合いにくい。", vi: "Người đó khó giao thiệp." },
    ],
  },
  {
    w: "そっくり",
    r: "そっくり",
    m: "— giống hệt, giống như đúc; toàn bộ, nguyên vẹn",
    examples: [
      { ja: "彼は父親にそっくりだ。", vi: "Anh ấy giống hệt bố." },
      { ja: "この絵は本物とそっくりだ。", vi: "Bức tranh này giống hệt bản gốc." },
      { ja: "財産をそっくり盗まれてしまった。", vi: "Toàn bộ tài sản đã bị lấy cắp." },
    ],
  },
  {
    w: "施設",
    r: "しせつ",
    m: "THI THIẾT — cơ sở, công trình, thiết bị",
    examples: [
      { ja: "この町には大きなスポーツ施設がある。", vi: "Thị trấn này có cơ sở thể thao lớn." },
      { ja: "老人施設でボランティアをしている。", vi: "Tôi làm tình nguyện ở viện dưỡng lão." },
      { ja: "施設の利用は予約が必要です。", vi: "Sử dụng cơ sở này cần đặt trước." },
    ],
  },
  {
    w: "貢献",
    r: "こうけん",
    m: "CỐNG HIẾN — đóng góp, cống hiến",
    examples: [
      { ja: "彼は会社の発展に大きく貢献した。", vi: "Anh ấy đã đóng góp lớn cho sự phát triển của công ty." },
      { ja: "地域社会に貢献したい。", vi: "Tôi muốn đóng góp cho cộng đồng địa phương." },
      { ja: "平和への貢献が評価された。", vi: "Đóng góp cho hòa bình đã được đánh giá cao." },
    ],
  },
  {
    w: "比較的",
    r: "ひかくてき",
    m: "TỈ GIÁO ĐÍCH — tương đối, khá là",
    examples: [
      { ja: "今年の冬は比較的暖かい。", vi: "Mùa đông năm nay khá ấm." },
      { ja: "この問題は比較的簡単だ。", vi: "Bài này tương đối dễ." },
      { ja: "比較的安い値段で買えた。", vi: "Tôi mua được với giá tương đối rẻ." },
    ],
  },
  {
    w: "下降",
    r: "かこう",
    m: "HẠ GIÁNG — đi xuống, giảm xuống, hạ xuống",
    examples: [
      { ja: "気温が急に下降した。", vi: "Nhiệt độ đột ngột giảm." },
      { ja: "飛行機は着陸のため下降を始めた。", vi: "Máy bay bắt đầu hạ độ cao để hạ cánh." },
      { ja: "景気は下降傾向にある。", vi: "Kinh tế đang có xu hướng đi xuống." },
    ],
  },
  {
    w: "鮮やか",
    r: "あざやか",
    m: "TIÊN — tươi sáng, rực rỡ; điêu luyện, ngoạn mục",
    examples: [
      { ja: "鮮やかな赤い花が咲いている。", vi: "Những bông hoa đỏ rực rỡ đang nở." },
      { ja: "彼の鮮やかなプレーに観客は拍手した。", vi: "Khán giả vỗ tay trước màn chơi ngoạn mục của anh ấy." },
      { ja: "十年前の出来事を鮮やかに覚えている。", vi: "Tôi vẫn nhớ rõ ràng chuyện mười năm trước." },
    ],
  },
  {
    w: "帰省",
    r: "きせい",
    m: "QUY TỈNH — về quê, về thăm quê",
    examples: [
      { ja: "お正月に帰省する予定だ。", vi: "Tôi định về quê vào dịp Tết." },
      { ja: "帰省ラッシュで新幹線が混んでいる。", vi: "Tàu Shinkansen đông vì dòng người về quê." },
      { ja: "久しぶりに帰省して友人に会った。", vi: "Lâu lắm mới về quê, tôi gặp lại bạn bè." },
    ],
  },
  {
    w: "実践",
    r: "じっせん",
    m: "THỰC TIỄN — thực hành, đưa vào thực tế",
    examples: [
      { ja: "学んだことを実践に生かしたい。", vi: "Tôi muốn vận dụng điều đã học vào thực tiễn." },
      { ja: "理論だけでなく実践も大切だ。", vi: "Không chỉ lý thuyết mà thực hành cũng quan trọng." },
      { ja: "健康のために早寝早起きを実践している。", vi: "Tôi thực hành ngủ sớm dậy sớm để giữ sức khỏe." },
    ],
  },
  {
    w: "実施",
    r: "じっし",
    m: "THỰC THI — thực hiện, tiến hành",
    examples: [
      { ja: "来月から新しい制度を実施する。", vi: "Từ tháng sau sẽ thực hiện chế độ mới." },
      { ja: "アンケート調査を実施した。", vi: "Đã tiến hành khảo sát bằng phiếu hỏi." },
      { ja: "試験は予定通り実施される。", vi: "Kỳ thi sẽ được tổ chức đúng như dự định." },
    ],
  },
  {
    w: "委嘱",
    r: "いしょく",
    m: "ỦY CHÚC — ủy thác, giao phó, mời đảm nhận (chức vụ, công việc)",
    examples: [
      { ja: "彼は市の委員を委嘱された。", vi: "Ông ấy được thành phố mời làm ủy viên." },
      { ja: "専門家に調査を委嘱する。", vi: "Ủy thác việc điều tra cho chuyên gia." },
      { ja: "委嘱を受けて審査員を務めた。", vi: "Nhận lời mời, tôi đảm nhận vai trò giám khảo." },
    ],
  },
  {
    w: "都会育ち",
    r: "とかいそだち",
    m: "ĐÔ HỘI DỤC — lớn lên ở thành phố",
    examples: [
      { ja: "彼は都会育ちなので、田舎の生活に慣れていない。", vi: "Anh ấy lớn lên ở thành phố nên chưa quen cuộc sống nông thôn." },
      { ja: "都会育ちの私は星空に感動した。", vi: "Tôi lớn lên ở thành phố nên rất xúc động trước bầu trời sao." },
      { ja: "都会育ちの人は虫が苦手なことが多い。", vi: "Người lớn lên ở thành phố thường sợ côn trùng." },
    ],
  },
  {
    w: "一仕事",
    r: "ひとしごと",
    m: "NHẤT SĨ SỰ — một việc, một công việc (đáng kể); xong một phần việc",
    examples: [
      { ja: "引っ越しの片付けは一仕事だ。", vi: "Dọn dẹp sau khi chuyển nhà là một việc không nhỏ." },
      { ja: "一仕事終えてお茶を飲んだ。", vi: "Xong một phần việc, tôi uống trà." },
      { ja: "庭の草取りだけでも一仕事だった。", vi: "Chỉ nhổ cỏ trong vườn thôi cũng đã là một công việc lớn." },
    ],
  },
  {
    w: "考慮",
    r: "こうりょ",
    m: "KHẢO LỰ — cân nhắc, xem xét, tính đến",
    examples: [
      { ja: "お客様の意見を考慮して決めた。", vi: "Chúng tôi quyết định có cân nhắc ý kiến khách hàng." },
      { ja: "年齢や経験を考慮に入れて採用する。", vi: "Tuyển dụng có tính đến tuổi tác và kinh nghiệm." },
      { ja: "その点はまったく考慮されていなかった。", vi: "Điểm đó hoàn toàn chưa được tính đến." },
    ],
  },
  {
    w: "測定",
    r: "そくてい",
    m: "TRẮC ĐỊNH — đo, đo đạc, xác định (số đo)",
    examples: [
      { ja: "毎朝、体温を測定している。", vi: "Mỗi sáng tôi đều đo thân nhiệt." },
      { ja: "騒音の大きさを測定する。", vi: "Đo độ lớn của tiếng ồn." },
      { ja: "測定結果は来週発表される。", vi: "Kết quả đo sẽ được công bố vào tuần sau." },
    ],
  },
  {
    w: "信仰",
    r: "しんこう",
    m: "TÍN NGƯỠNG — tín ngưỡng, đức tin, sùng bái",
    examples: [
      { ja: "彼女は深い信仰を持っている。", vi: "Cô ấy có đức tin sâu sắc." },
      { ja: "信仰の自由は憲法で保障されている。", vi: "Tự do tín ngưỡng được hiến pháp bảo đảm." },
      { ja: "この地域では山を信仰する習慣がある。", vi: "Vùng này có tập quán thờ phụng núi." },
    ],
  },
  {
    w: "発揮",
    r: "はっき",
    m: "PHÁT HUY — phát huy, thể hiện (năng lực, sức mạnh)",
    examples: [
      { ja: "本番で実力を発揮できた。", vi: "Tôi đã phát huy được thực lực vào lúc thi thật." },
      { ja: "リーダーシップを発揮してチームをまとめた。", vi: "Anh ấy phát huy khả năng lãnh đạo để đoàn kết cả đội." },
      { ja: "新しい薬が効果を発揮している。", vi: "Loại thuốc mới đang phát huy hiệu quả." },
    ],
  },
  {
    w: "提案",
    r: "ていあん",
    m: "ĐỀ ÁN — đề xuất, đề nghị, phương án đề xuất",
    examples: [
      { ja: "新しい企画を提案した。", vi: "Tôi đã đề xuất một dự án mới." },
      { ja: "彼の提案に全員が賛成した。", vi: "Mọi người đều tán thành đề xuất của anh ấy." },
      { ja: "もっと良い方法を提案していただけませんか。", vi: "Anh có thể đề xuất cách tốt hơn được không?" },
    ],
  },
  {
    w: "定着",
    r: "ていちゃく",
    m: "ĐỊNH TRƯỚC — bén rễ, thành nếp, ổn định, được thiết lập",
    examples: [
      { ja: "キャッシュレス決済が社会に定着してきた。", vi: "Thanh toán không tiền mặt đã dần thành nếp trong xã hội." },
      { ja: "新しい習慣はなかなか定着しない。", vi: "Thói quen mới mãi không thành nếp." },
      { ja: "覚えた単語を定着させるために復習する。", vi: "Tôi ôn lại để ghi nhớ chắc từ vựng đã học." },
    ],
  },
  {
    w: "独特",
    r: "どくとく",
    m: "ĐỘC ĐẶC — đặc trưng riêng, độc đáo, riêng có",
    examples: [
      { ja: "この店は独特の雰囲気がある。", vi: "Quán này có bầu không khí rất riêng." },
      { ja: "彼には独特な考え方がある。", vi: "Anh ấy có lối suy nghĩ độc đáo." },
      { ja: "この料理は独特の香りがする。", vi: "Món này có mùi hương đặc trưng riêng." },
    ],
  },
  {
    w: "専用",
    r: "せんよう",
    m: "CHUYÊN DỤNG — chuyên dụng, dành riêng (cho ai/việc gì)",
    examples: [
      { ja: "ここは社員専用の入口です。", vi: "Đây là lối vào dành riêng cho nhân viên." },
      { ja: "女性専用車両に乗った。", vi: "Tôi lên toa dành riêng cho phụ nữ." },
      { ja: "このカードは学生専用だ。", vi: "Thẻ này chỉ dành cho sinh viên." },
    ],
  },
  {
    w: "奪う",
    r: "うばう",
    m: "ĐOẠT — cướp, chiếm đoạt, tước đi",
    examples: [
      { ja: "泥棒にバッグを奪われた。", vi: "Tôi bị kẻ trộm giật mất túi xách." },
      { ja: "その事故は多くの人の命を奪った。", vi: "Vụ tai nạn đó đã cướp đi sinh mạng nhiều người." },
      { ja: "美しい景色に目を奪われた。", vi: "Tôi bị cảnh đẹp thu hút mất hồn." },
    ],
  },
];

NEW.forEach((x) => {
  if (!Array.isArray(x.examples) || x.examples.length !== 3) {
    throw new Error("Need 3 examples: " + x.w);
  }
  for (const ex of x.examples) {
    if (!ex.ja || !ex.vi) throw new Error("Empty example: " + x.w);
  }
});

const n2Theme = data.themes.find((t) => t.id === "n2");
if (!n2Theme) throw new Error("theme n2 missing");

let added = 0;
const addedIds = [];

for (const entry of NEW) {
  const nextNum = data.items.length + 1;
  const id = "v" + String(nextNum).padStart(4, "0");
  data.items.push({
    id,
    w: entry.w,
    r: entry.r,
    m: entry.m,
    t: "n2",
    s: "Từ vựng N2",
  });
  EXAMPLES[id] = entry.examples;
  addedIds.push(id);
  added++;
}

n2Theme.count = data.items.filter((i) => i.t === "n2").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");

console.log({
  added,
  n2Count: n2Theme.count,
  total: data.total,
  firstNew: addedIds[0],
  lastNew: addedIds[addedIds.length - 1],
});

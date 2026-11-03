/**
 * Thêm new-vocab.md (batch 5) vào chủ đề Từ vựng N2 (3 ví dụ / từ, nghĩa kèm Hán Việt).
 * Usage: node nguon/add-new-vocab-n2-batch5.js
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
    w: "演説",
    r: "えんぜつ",
    m: "DIỄN THUYẾT — bài diễn thuyết, diễn văn; diễn thuyết",
    examples: [
      { ja: "首相が駅前で演説を行った。", vi: "Thủ tướng đã diễn thuyết trước nhà ga." },
      { ja: "彼の演説は聴衆の心を動かした。", vi: "Bài diễn thuyết của anh ấy đã lay động lòng khán giả." },
      { ja: "選挙前は街頭演説が多い。", vi: "Trước bầu cử có nhiều buổi diễn thuyết trên đường phố." },
    ],
  },
  {
    w: "最寄り",
    r: "もより",
    m: "TỐI KÝ — gần nhất (ga, bến xe, cửa hàng…)",
    examples: [
      { ja: "最寄りの駅まで歩いて五分です。", vi: "Đi bộ đến ga gần nhất mất năm phút." },
      { ja: "最寄りのコンビニはどこですか。", vi: "Cửa hàng tiện lợi gần nhất ở đâu ạ?" },
      { ja: "詳しくは最寄りの交番でお尋ねください。", vi: "Chi tiết xin hỏi tại đồn cảnh sát gần nhất." },
    ],
  },
  {
    w: "役目",
    r: "やくめ",
    m: "DỊCH MỤC — vai trò, nhiệm vụ, phận sự",
    examples: [
      { ja: "子どもを守るのは親の役目だ。", vi: "Bảo vệ con cái là nhiệm vụ của cha mẹ." },
      { ja: "司会の役目を無事に果たした。", vi: "Tôi đã hoàn thành suôn sẻ vai trò dẫn chương trình." },
      { ja: "この部品は大切な役目を持っている。", vi: "Linh kiện này có vai trò quan trọng." },
    ],
  },
  {
    w: "仕組み",
    r: "しくみ",
    m: "SĨ TỔ — cơ chế, cấu trúc, cách vận hành",
    examples: [
      { ja: "エンジンの仕組みを説明してもらった。", vi: "Tôi được giải thích cơ chế của động cơ." },
      { ja: "社会の仕組みを学ぶ授業がある。", vi: "Có môn học tìm hiểu cơ cấu xã hội." },
      { ja: "ポイントがたまる仕組みになっている。", vi: "Được thiết kế theo cơ chế tích điểm." },
    ],
  },
  {
    w: "企画",
    r: "きかく",
    m: "XÍ HOẠCH — kế hoạch, dự án; lên kế hoạch, lên ý tưởng",
    examples: [
      { ja: "新商品の企画を任された。", vi: "Tôi được giao lên kế hoạch cho sản phẩm mới." },
      { ja: "社員旅行を企画している。", vi: "Tôi đang lên kế hoạch cho chuyến du lịch công ty." },
      { ja: "その企画は会議で通らなかった。", vi: "Dự án đó đã không được thông qua trong cuộc họp." },
    ],
  },
  {
    w: "再度",
    r: "さいど",
    m: "TÁI ĐỘ — lại lần nữa, một lần nữa",
    examples: [
      { ja: "再度ご確認をお願いいたします。", vi: "Kính mong quý vị kiểm tra lại một lần nữa." },
      { ja: "エラーが出たので再度試してみた。", vi: "Bị lỗi nên tôi thử lại lần nữa." },
      { ja: "後日、再度ご連絡いたします。", vi: "Hôm khác chúng tôi sẽ liên lạc lại lần nữa." },
    ],
  },
  {
    w: "和やか",
    r: "なごやか",
    m: "HÒA — hòa nhã, êm ấm, vui vẻ thân thiện (bầu không khí)",
    examples: [
      { ja: "会は和やかな雰囲気で進んだ。", vi: "Buổi gặp diễn ra trong bầu không khí hòa nhã." },
      { ja: "家族で和やかに食事をした。", vi: "Cả nhà dùng bữa vui vẻ, êm ấm." },
      { ja: "両社の話し合いは和やかに終わった。", vi: "Cuộc trao đổi giữa hai công ty kết thúc trong không khí thân thiện." },
    ],
  },
  {
    w: "爽やか",
    r: "さわやか",
    m: "SẢNG — sảng khoái, trong lành, dễ chịu; (người) tươi tắn",
    examples: [
      { ja: "今朝は爽やかな風が吹いている。", vi: "Sáng nay có làn gió trong lành thổi." },
      { ja: "彼は爽やかな笑顔で挨拶した。", vi: "Anh ấy chào với nụ cười tươi tắn." },
      { ja: "ミントの爽やかな香りがする。", vi: "Có mùi bạc hà thơm mát." },
    ],
  },
  {
    w: "迎える",
    r: "むかえる",
    m: "NGHÊNH — đón, đón tiếp; đón (dịp, thời kỳ)",
    examples: [
      { ja: "空港まで客を迎えに行った。", vi: "Tôi ra sân bay đón khách." },
      { ja: "会社は創立五十周年を迎えた。", vi: "Công ty đã đón kỷ niệm 50 năm thành lập." },
      { ja: "新しいメンバーを温かく迎えた。", vi: "Chúng tôi đón thành viên mới một cách nồng hậu." },
    ],
  },
  {
    w: "介護",
    r: "かいご",
    m: "GIỚI HỘ — chăm sóc, điều dưỡng (người già, người bệnh)",
    examples: [
      { ja: "母は祖母の介護をしている。", vi: "Mẹ tôi đang chăm sóc bà." },
      { ja: "介護の仕事は人手が足りない。", vi: "Ngành điều dưỡng đang thiếu nhân lực." },
      { ja: "介護保険について調べた。", vi: "Tôi đã tìm hiểu về bảo hiểm chăm sóc dài hạn." },
    ],
  },
  {
    w: "系統",
    r: "けいとう",
    m: "HỆ THỐNG — hệ thống, dòng, tuyến; gam (màu)",
    examples: [
      { ja: "このバスは何系統ですか。", vi: "Xe buýt này là tuyến số mấy?" },
      { ja: "青系統の服が好きだ。", vi: "Tôi thích quần áo gam màu xanh." },
      { ja: "電気系統の故障で電車が止まった。", vi: "Tàu dừng vì hỏng hệ thống điện." },
    ],
  },
  {
    w: "束ねる",
    r: "たばねる",
    m: "THÚC — bó lại, buộc lại; quản lý, thống lĩnh (nhóm)",
    examples: [
      { ja: "古新聞をひもで束ねて出した。", vi: "Tôi buộc báo cũ bằng dây rồi mang đi bỏ." },
      { ja: "長い髪を後ろで束ねる。", vi: "Buộc mái tóc dài ra phía sau." },
      { ja: "彼はチームを束ねるリーダーだ。", vi: "Anh ấy là trưởng nhóm dẫn dắt cả đội." },
    ],
  },
  {
    w: "精算",
    r: "せいさん",
    m: "TINH TOÁN — thanh toán, quyết toán (tính lại cho chính xác)",
    examples: [
      { ja: "出張の交通費を精算した。", vi: "Tôi đã quyết toán tiền đi lại khi công tác." },
      { ja: "乗り越した分は精算機で払ってください。", vi: "Phần đi quá ga xin trả ở máy thanh toán bù." },
      { ja: "月末に経費をまとめて精算する。", vi: "Cuối tháng gộp chi phí lại để quyết toán." },
    ],
  },
  {
    w: "無計画",
    r: "むけいかく",
    m: "VÔ KẾ HOẠCH — không có kế hoạch, tùy tiện",
    examples: [
      { ja: "無計画にお金を使うと後で困る。", vi: "Tiêu tiền không có kế hoạch thì sau này sẽ khổ." },
      { ja: "無計画な旅も楽しいものだ。", vi: "Chuyến đi không kế hoạch cũng thú vị." },
      { ja: "無計画な開発で自然が壊された。", vi: "Việc phát triển tùy tiện đã phá hủy thiên nhiên." },
    ],
  },
  {
    w: "送信",
    r: "そうしん",
    m: "TỐNG TÍN — gửi đi, truyền đi (thư, dữ liệu)",
    examples: [
      { ja: "メールを送信する前に宛先を確認した。", vi: "Tôi kiểm tra địa chỉ nhận trước khi gửi email." },
      { ja: "データの送信に失敗しました。", vi: "Gửi dữ liệu thất bại." },
      { ja: "間違えて送信してしまった。", vi: "Tôi lỡ gửi nhầm mất rồi." },
    ],
  },
  {
    w: "働き手",
    r: "はたらきて",
    m: "ĐỘNG THỦ — người lao động; trụ cột kiếm tiền (trong nhà)",
    examples: [
      { ja: "地方では若い働き手が不足している。", vi: "Ở địa phương đang thiếu lao động trẻ." },
      { ja: "彼は一家の働き手だ。", vi: "Anh ấy là trụ cột kiếm tiền của gia đình." },
      { ja: "外国人の働き手が増えている。", vi: "Người lao động nước ngoài đang tăng lên." },
    ],
  },
  {
    w: "ステージ",
    r: "すてーじ",
    m: "sân khấu (stage); giai đoạn, màn (game)",
    examples: [
      { ja: "初めてステージに立って緊張した。", vi: "Lần đầu đứng trên sân khấu nên tôi hồi hộp." },
      { ja: "ゲームの最後のステージをクリアした。", vi: "Tôi đã vượt qua màn cuối của trò chơi." },
      { ja: "人生の新しいステージが始まる。", vi: "Một giai đoạn mới của cuộc đời bắt đầu." },
    ],
  },
  {
    w: "フロア",
    r: "ふろあ",
    m: "tầng (floor); sàn nhà; khu vực (trong tòa nhà)",
    examples: [
      { ja: "紳士服売り場は三階のフロアです。", vi: "Quầy đồ nam ở tầng ba." },
      { ja: "このフロアは禁煙です。", vi: "Tầng này cấm hút thuốc." },
      { ja: "フロアを掃除してから帰る。", vi: "Lau sàn xong rồi mới về." },
    ],
  },
  {
    w: "異常",
    r: "いじょう",
    m: "DỊ THƯỜNG — bất thường, khác thường",
    examples: [
      { ja: "検査の結果、異常は見つからなかった。", vi: "Kết quả xét nghiệm không phát hiện điều gì bất thường." },
      { ja: "今年の夏は異常な暑さだ。", vi: "Mùa hè năm nay nóng bất thường." },
      { ja: "機械に異常があればすぐ止めてください。", vi: "Nếu máy có gì bất thường hãy dừng ngay." },
    ],
  },
  {
    w: "参観",
    r: "さんかん",
    m: "THAM QUAN — đến xem, dự giờ (lớp học, cơ sở)",
    examples: [
      { ja: "明日は授業参観の日だ。", vi: "Ngày mai là ngày phụ huynh dự giờ." },
      { ja: "工場を参観する許可をもらった。", vi: "Tôi được phép vào xem nhà máy." },
      { ja: "保護者が教室の後ろで参観している。", vi: "Phụ huynh đang dự giờ ở cuối lớp." },
    ],
  },
  {
    w: "検診",
    r: "けんしん",
    m: "KIỂM CHẨN — khám sức khỏe, khám kiểm tra (định kỳ)",
    examples: [
      { ja: "年に一度、健康検診を受けている。", vi: "Mỗi năm tôi đi khám sức khỏe một lần." },
      { ja: "がん検診で早期に発見できた。", vi: "Nhờ khám tầm soát ung thư mà phát hiện sớm." },
      { ja: "歯の検診の予約をした。", vi: "Tôi đã đặt lịch khám răng." },
    ],
  },
  {
    w: "観測",
    r: "かんそく",
    m: "QUAN TRẮC — quan sát, đo đạc (thiên văn, khí tượng); dự đoán",
    examples: [
      { ja: "今年最高の気温が観測された。", vi: "Đã đo được nhiệt độ cao nhất trong năm." },
      { ja: "望遠鏡で星を観測する。", vi: "Quan sát sao bằng kính thiên văn." },
      { ja: "それは希望的観測にすぎない。", vi: "Đó chỉ là dự đoán theo mong muốn mà thôi." },
    ],
  },
  {
    w: "にっこり",
    r: "にっこり",
    m: "mỉm cười (tươi tắn, hài lòng)",
    examples: [
      { ja: "赤ちゃんが私を見てにっこり笑った。", vi: "Em bé nhìn tôi rồi mỉm cười." },
      { ja: "彼女はにっこりしてうなずいた。", vi: "Cô ấy mỉm cười gật đầu." },
      { ja: "店員がにっこりと迎えてくれた。", vi: "Nhân viên mỉm cười đón tôi." },
    ],
  },
  {
    w: "ぴかぴか",
    r: "ぴかぴか",
    m: "sáng bóng, sáng loáng; lấp lánh; mới tinh",
    examples: [
      { ja: "靴をぴかぴかに磨いた。", vi: "Tôi đánh giày bóng loáng." },
      { ja: "ぴかぴかの一年生が入学した。", vi: "Các em lớp một mới tinh đã nhập học." },
      { ja: "夜空に星がぴかぴか光っている。", vi: "Sao lấp lánh trên bầu trời đêm." },
    ],
  },
  {
    w: "ほかほか",
    r: "ほかほか",
    m: "nóng hổi, ấm áp (đồ ăn vừa làm, cơ thể)",
    examples: [
      { ja: "ほかほかのご飯が食べたい。", vi: "Tôi muốn ăn cơm nóng hổi." },
      { ja: "お風呂上がりで体がほかほかしている。", vi: "Vừa tắm xong nên người ấm áp." },
      { ja: "焼きたてのパンがほかほかだ。", vi: "Bánh mì vừa nướng còn nóng hổi." },
    ],
  },
  {
    w: "続行",
    r: "ぞっこう",
    m: "TỤC HÀNH — tiếp tục tiến hành (việc đang dở)",
    examples: [
      { ja: "雨が降っても試合は続行された。", vi: "Dù trời mưa trận đấu vẫn tiếp tục." },
      { ja: "会議を続行するかどうか決めよう。", vi: "Hãy quyết định có tiếp tục cuộc họp hay không." },
      { ja: "安全が確認され、作業を続行した。", vi: "Đã xác nhận an toàn nên tiếp tục công việc." },
    ],
  },
  {
    w: "持続",
    r: "じぞく",
    m: "TRÌ TỤC — duy trì, kéo dài liên tục",
    examples: [
      { ja: "この薬の効果は八時間持続する。", vi: "Tác dụng của thuốc này kéo dài tám tiếng." },
      { ja: "持続可能な社会を目指す。", vi: "Hướng tới một xã hội bền vững." },
      { ja: "集中力が持続しない。", vi: "Không duy trì được sự tập trung." },
    ],
  },
  {
    w: "継続",
    r: "けいぞく",
    m: "KẾ TỤC — tiếp tục, duy trì (lâu dài)",
    examples: [
      { ja: "継続は力なり。", vi: "Kiên trì là sức mạnh." },
      { ja: "契約を継続することにした。", vi: "Chúng tôi quyết định gia hạn hợp đồng." },
      { ja: "毎日の練習を継続している。", vi: "Tôi duy trì luyện tập mỗi ngày." },
    ],
  },
  {
    w: "飛び散る",
    r: "とびちる",
    m: "PHI TÁN — bắn tung tóe, văng ra tứ phía",
    examples: [
      { ja: "油が飛び散ってやけどした。", vi: "Dầu bắn tung tóe làm tôi bị bỏng." },
      { ja: "割れたガラスが床に飛び散った。", vi: "Kính vỡ văng khắp sàn." },
      { ja: "水が飛び散らないように注意して。", vi: "Cẩn thận đừng để nước bắn ra." },
    ],
  },
  {
    w: "飛び立つ",
    r: "とびたつ",
    m: "PHI LẬP — cất cánh, bay lên; rời đi (ra thế giới)",
    examples: [
      { ja: "飛行機が成田から飛び立った。", vi: "Máy bay đã cất cánh từ Narita." },
      { ja: "鳥が一斉に飛び立った。", vi: "Đàn chim đồng loạt bay lên." },
      { ja: "卒業生が社会へ飛び立っていく。", vi: "Các sinh viên tốt nghiệp bước ra xã hội." },
    ],
  },
  {
    w: "飛び上がる",
    r: "とびあがる",
    m: "PHI THƯỢNG — nhảy lên, bật lên (vì vui, giật mình); bay lên",
    examples: [
      { ja: "合格の知らせに飛び上がって喜んだ。", vi: "Nghe tin đỗ, tôi nhảy cẫng lên vui mừng." },
      { ja: "大きな音に驚いて飛び上がった。", vi: "Giật mình vì tiếng động lớn mà bật dậy." },
      { ja: "猫が棚の上に飛び上がった。", vi: "Con mèo nhảy phốc lên kệ." },
    ],
  },
  {
    w: "飛び降りる",
    r: "とびおりる",
    m: "PHI GIÁNG — nhảy xuống",
    examples: [
      { ja: "子どもが階段から飛び降りた。", vi: "Đứa trẻ nhảy xuống từ cầu thang." },
      { ja: "走っている電車から飛び降りるのは危険だ。", vi: "Nhảy xuống từ tàu đang chạy rất nguy hiểm." },
      { ja: "清水の舞台から飛び降りる気持ちで買った。", vi: "Tôi mua với quyết tâm liều một phen." },
    ],
  },
  {
    w: "くしゃみ",
    r: "くしゃみ",
    m: "cái hắt hơi; hắt hơi",
    examples: [
      { ja: "花粉症でくしゃみが止まらない。", vi: "Vì dị ứng phấn hoa mà tôi hắt hơi không ngừng." },
      { ja: "くしゃみをするときは口を押さえて。", vi: "Khi hắt hơi hãy che miệng lại." },
      { ja: "寒くてくしゃみが出た。", vi: "Lạnh quá nên tôi hắt hơi." },
    ],
  },
  {
    w: "根元",
    r: "ねもと",
    m: "CĂN NGUYÊN — gốc, chân (cây, tóc…); gốc rễ",
    examples: [
      { ja: "木の根元に花が咲いている。", vi: "Hoa nở dưới gốc cây." },
      { ja: "髪の根元から染めた。", vi: "Tôi nhuộm tóc từ chân tóc." },
      { ja: "問題を根元から解決する。", vi: "Giải quyết vấn đề từ gốc rễ." },
    ],
  },
  {
    w: "土台",
    r: "どだい",
    m: "THỔ ĐÀI — nền móng, nền tảng, cơ sở",
    examples: [
      { ja: "家の土台がしっかりしている。", vi: "Móng nhà rất chắc chắn." },
      { ja: "基礎知識が学習の土台になる。", vi: "Kiến thức cơ bản là nền tảng của việc học." },
      { ja: "信頼関係を土台にして協力する。", vi: "Hợp tác dựa trên nền tảng tin tưởng lẫn nhau." },
    ],
  },
  {
    w: "立場",
    r: "たちば",
    m: "LẬP TRƯỜNG — lập trường, vị trí, hoàn cảnh",
    examples: [
      { ja: "相手の立場になって考えてみよう。", vi: "Hãy thử đặt mình vào vị trí của đối phương." },
      { ja: "私の立場では何も言えない。", vi: "Ở vị trí của tôi thì không thể nói gì." },
      { ja: "会社は反対の立場をとった。", vi: "Công ty đã giữ lập trường phản đối." },
    ],
  },
  {
    w: "敏感",
    r: "びんかん",
    m: "MẪN CẢM — nhạy cảm, nhạy bén",
    examples: [
      { ja: "肌が敏感なので化粧品を選ぶ。", vi: "Da tôi nhạy cảm nên phải chọn mỹ phẩm." },
      { ja: "若者は流行に敏感だ。", vi: "Giới trẻ nhạy bén với xu hướng." },
      { ja: "犬は音に敏感な動物だ。", vi: "Chó là loài nhạy cảm với âm thanh." },
    ],
  },
  {
    w: "急激",
    r: "きゅうげき",
    m: "CẤP KÍCH — đột ngột, gấp, mạnh (thay đổi)",
    examples: [
      { ja: "気温が急激に下がった。", vi: "Nhiệt độ giảm đột ngột." },
      { ja: "急激な円安で物価が上がった。", vi: "Đồng yên mất giá mạnh khiến giá cả tăng." },
      { ja: "急激な運動は体に悪い。", vi: "Vận động mạnh đột ngột không tốt cho cơ thể." },
    ],
  },
  {
    w: "機敏",
    r: "きびん",
    m: "CƠ MẪN — nhanh nhẹn, lanh lợi, nhanh nhạy",
    examples: [
      { ja: "彼は機敏に動いて事故を防いだ。", vi: "Anh ấy hành động nhanh nhẹn ngăn được tai nạn." },
      { ja: "状況の変化に機敏に対応する。", vi: "Ứng phó nhanh nhạy với thay đổi của tình hình." },
      { ja: "猫は機敏な動物だ。", vi: "Mèo là loài vật nhanh nhẹn." },
    ],
  },
  {
    w: "過激",
    r: "かげき",
    m: "QUÁ KÍCH — quá khích, cực đoan, quá mức",
    examples: [
      { ja: "過激な発言が問題になった。", vi: "Phát ngôn quá khích đã gây ra vấn đề." },
      { ja: "過激なダイエットは危ない。", vi: "Ăn kiêng quá mức rất nguy hiểm." },
      { ja: "過激な思想を持つグループ。", vi: "Một nhóm có tư tưởng cực đoan." },
    ],
  },
  {
    w: "俯く",
    r: "うつむく",
    m: "PHỦ — cúi đầu, cúi mặt (xấu hổ, buồn)",
    examples: [
      { ja: "叱られて彼は黙って俯いた。", vi: "Bị mắng, cậu ấy im lặng cúi đầu." },
      { ja: "恥ずかしくて俯いてしまった。", vi: "Ngại quá nên tôi cúi mặt xuống." },
      { ja: "俯いてばかりいないで前を見よう。", vi: "Đừng cúi đầu mãi, hãy nhìn về phía trước." },
    ],
  },
  {
    w: "利口",
    r: "りこう",
    m: "LỢI KHẨU — thông minh, lanh lợi; ngoan",
    examples: [
      { ja: "この犬はとても利口だ。", vi: "Con chó này rất thông minh." },
      { ja: "お利口にして待っていてね。", vi: "Ngoan ngoãn ngồi đợi nhé." },
      { ja: "黙っているほうが利口だ。", vi: "Im lặng thì khôn ngoan hơn." },
    ],
  },
  {
    w: "くどい",
    r: "くどい",
    m: "dài dòng, lải nhải, lặp đi lặp lại (= しつこい); (vị) đậm, ngấy",
    examples: [
      { ja: "部長の話はいつもくどい。", vi: "Trưởng phòng lúc nào cũng nói dài dòng." },
      { ja: "くどいようですが、もう一度確認します。", vi: "Biết là lặp lại nhưng tôi xin xác nhận lần nữa." },
      { ja: "このスープは味がくどい。", vi: "Món súp này vị đậm quá, ngấy." },
    ],
  },
  {
    w: "日課",
    r: "にっか",
    m: "NHẬT KHÓA — việc làm hằng ngày, thói quen mỗi ngày",
    examples: [
      { ja: "朝の散歩が祖父の日課だ。", vi: "Đi dạo buổi sáng là thói quen hằng ngày của ông." },
      { ja: "日記を書くのを日課にしている。", vi: "Tôi tập thói quen viết nhật ký mỗi ngày." },
      { ja: "犬の世話は私の日課です。", vi: "Chăm chó là việc hằng ngày của tôi." },
    ],
  },
  {
    w: "多彩",
    r: "たさい",
    m: "ĐA THẢI — đa dạng, phong phú, nhiều màu sắc",
    examples: [
      { ja: "彼は多彩な才能を持っている。", vi: "Anh ấy có nhiều tài năng đa dạng." },
      { ja: "多彩なイベントが予定されている。", vi: "Nhiều sự kiện phong phú đã được lên lịch." },
      { ja: "多彩なメンバーがそろった。", vi: "Đã tập hợp đủ các thành viên đa dạng." },
    ],
  },
  {
    w: "乗り継ぐ",
    r: "のりつぐ",
    m: "THỪA KẾ — đổi tàu/xe, nối chuyến",
    examples: [
      { ja: "東京で新幹線に乗り継いだ。", vi: "Tôi nối chuyến sang tàu Shinkansen ở Tokyo." },
      { ja: "バスを二回乗り継いで行く。", vi: "Đi bằng cách đổi xe buýt hai lần." },
      { ja: "乗り継ぎの時間が短くて走った。", vi: "Thời gian nối chuyến ngắn nên tôi phải chạy." },
    ],
  },
  {
    w: "共働き",
    r: "ともばたらき",
    m: "CỘNG ĐỘNG — cả vợ chồng cùng đi làm",
    examples: [
      { ja: "うちは共働きの家庭です。", vi: "Nhà tôi cả hai vợ chồng đều đi làm." },
      { ja: "共働きの夫婦が増えている。", vi: "Số cặp vợ chồng cùng đi làm đang tăng." },
      { ja: "共働きなので家事を分担している。", vi: "Vì cả hai đều đi làm nên chia nhau việc nhà." },
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

let updated = 0;
let added = 0;
let skipped = 0;
const addedIds = [];

for (const entry of NEW) {
  const existing = data.items.find((i) => i.t === "n2" && (i.w === entry.w || i.w === entry.w.replace(/する$/, "")));
  if (existing) {
    existing.r = entry.r || existing.r;
    existing.m = entry.m;
    existing.s = "Từ vựng N2";
    const old = EXAMPLES[existing.id] || [];
    EXAMPLES[existing.id] = [
      ...entry.examples,
      ...old.filter((e) => !entry.examples.some((n) => n.ja === e.ja)),
    ].slice(0, 5);
    updated++;
    continue;
  }
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
  updated,
  skipped,
  n2Count: n2Theme.count,
  total: data.total,
  firstNew: addedIds[0],
  lastNew: addedIds[addedIds.length - 1],
});

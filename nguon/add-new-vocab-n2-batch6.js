/**
 * Thêm new-vocab.md (batch 6) vào chủ đề Từ vựng N2 (3 ví dụ / từ, nghĩa kèm Hán Việt).
 * Luôn thêm mới, không kiểm tra trùng.
 * Usage: node nguon/add-new-vocab-n2-batch6.js
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
    w: "憎む",
    r: "にくむ",
    m: "TĂNG — ghét, căm ghét, thù ghét",
    examples: [
      { ja: "彼は兄を憎んでいる。", vi: "Anh ấy căm ghét anh trai mình." },
      { ja: "罪を憎んで人を憎まず。", vi: "Ghét tội chứ đừng ghét người." },
      { ja: "戦争を憎む気持ちは誰にでもある。", vi: "Ai cũng có cảm giác căm ghét chiến tranh." },
    ],
  },
  {
    w: "刺激",
    r: "しげき",
    m: "THÍCH KÍCH — kích thích, sự kích thích",
    examples: [
      { ja: "強い光は目に刺激を与える。", vi: "Ánh sáng mạnh gây kích thích cho mắt." },
      { ja: "海外での生活は刺激に満ちていた。", vi: "Cuộc sống ở nước ngoài đầy sự kích thích." },
      { ja: "友人の成功に刺激を受けて勉強を始めた。", vi: "Bị thành công của bạn kích thích nên tôi bắt đầu học." },
    ],
  },
  {
    w: "恥",
    r: "はじ",
    m: "SỈ — sự xấu hổ, nỗi nhục",
    examples: [
      { ja: "人前で転んで恥をかいた。", vi: "Tôi bị ngã trước mặt mọi người nên xấu hổ." },
      { ja: "聞くは一時の恥、聞かぬは一生の恥。", vi: "Hỏi chỉ xấu hổ một lúc, không hỏi thì xấu hổ cả đời." },
      { ja: "恥を忍んでお願いに来ました。", vi: "Tôi nén xấu hổ đến nhờ vả." },
    ],
  },
  {
    w: "圧倒的",
    r: "あっとうてき",
    m: "ÁP ĐẢO ĐÍCH — mang tính áp đảo, vượt trội hẳn",
    examples: [
      { ja: "わがチームが圧倒的な強さで勝った。", vi: "Đội chúng tôi thắng với sức mạnh áp đảo." },
      { ja: "圧倒的多数で法案が可決された。", vi: "Dự luật được thông qua với đa số áp đảo." },
      { ja: "彼の歌唱力は圧倒的だった。", vi: "Khả năng ca hát của anh ấy thật áp đảo." },
    ],
  },
  {
    w: "趣味",
    r: "しゅみ",
    m: "THÚ VỊ — sở thích, thú vui; gu thẩm mỹ",
    examples: [
      { ja: "私の趣味は写真を撮ることです。", vi: "Sở thích của tôi là chụp ảnh." },
      { ja: "趣味と実益を兼ねたアルバイトを見つけた。", vi: "Tôi tìm được việc làm thêm vừa là sở thích vừa có lợi ích." },
      { ja: "あの人の服は趣味がいい。", vi: "Quần áo của người đó có gu rất tốt." },
    ],
  },
  {
    w: "濃い",
    r: "こい",
    m: "NỒNG — đậm, đặc, nồng",
    examples: [
      { ja: "このコーヒーは濃すぎる。", vi: "Cà phê này đậm quá." },
      { ja: "濃い青のスーツを着ていた。", vi: "Anh ấy mặc bộ vest màu xanh đậm." },
      { ja: "朝は霧が濃くて前が見えなかった。", vi: "Sáng sương dày nên không nhìn thấy phía trước." },
    ],
  },
  {
    w: "混じる",
    r: "まじる",
    m: "HỖN — lẫn vào, trộn lẫn, xen lẫn",
    examples: [
      { ja: "米に小さな石が混じっていた。", vi: "Trong gạo có lẫn những viên đá nhỏ." },
      { ja: "彼の言葉には怒りが混じっていた。", vi: "Trong lời nói của anh ấy có lẫn sự tức giận." },
      { ja: "大人の中に子どもが一人混じっている。", vi: "Có một đứa trẻ lẫn trong đám người lớn." },
    ],
  },
  {
    w: "硬い",
    r: "かたい",
    m: "NGẠNH — cứng, rắn; cứng nhắc",
    examples: [
      { ja: "このパンは硬くて食べにくい。", vi: "Bánh mì này cứng khó ăn." },
      { ja: "硬い表情で面接室に入った。", vi: "Anh ấy bước vào phòng phỏng vấn với vẻ mặt căng cứng." },
      { ja: "ダイヤモンドは非常に硬い。", vi: "Kim cương cực kỳ cứng." },
    ],
  },
  {
    w: "損",
    r: "そん",
    m: "TỔN — thiệt, lỗ, thiệt thòi",
    examples: [
      { ja: "今買わないと損ですよ。", vi: "Bây giờ không mua thì thiệt đấy." },
      { ja: "株で大きな損をした。", vi: "Tôi bị lỗ lớn vì cổ phiếu." },
      { ja: "損な役回りばかり引き受けてしまう。", vi: "Tôi cứ nhận toàn vai thiệt thòi." },
    ],
  },
  {
    w: "組織",
    r: "そしき",
    m: "TỔ CHỨC — tổ chức, cơ cấu; thành lập, tổ chức nên",
    examples: [
      { ja: "大きな組織では意思決定に時間がかかる。", vi: "Ở tổ chức lớn, việc ra quyết định mất nhiều thời gian." },
      { ja: "新しい委員会を組織する。", vi: "Thành lập một ủy ban mới." },
      { ja: "彼は犯罪組織の一員だった。", vi: "Anh ta từng là thành viên của một tổ chức tội phạm." },
    ],
  },
  {
    w: "含む",
    r: "ふくむ",
    m: "HÀM — bao gồm, chứa, ngậm",
    examples: [
      { ja: "料金には消費税が含まれている。", vi: "Phí đã bao gồm thuế tiêu dùng." },
      { ja: "この食品はビタミンCを多く含んでいる。", vi: "Thực phẩm này chứa nhiều vitamin C." },
      { ja: "私を含めて五人が参加した。", vi: "Tính cả tôi có năm người tham gia." },
    ],
  },
  {
    w: "演技",
    r: "えんぎ",
    m: "DIỄN KỸ — diễn xuất, màn trình diễn",
    examples: [
      { ja: "彼女の演技は素晴らしかった。", vi: "Diễn xuất của cô ấy thật tuyệt vời." },
      { ja: "フィギュアスケートの演技を見に行った。", vi: "Tôi đi xem màn trình diễn trượt băng nghệ thuật." },
      { ja: "泣いたのは演技だったのか。", vi: "Việc khóc đó là diễn thôi sao?" },
    ],
  },
  {
    w: "犯罪",
    r: "はんざい",
    m: "PHẠM TỘI — tội phạm, hành vi phạm tội",
    examples: [
      { ja: "この町は犯罪が少ない。", vi: "Thị trấn này ít tội phạm." },
      { ja: "インターネットを使った犯罪が増えている。", vi: "Tội phạm sử dụng internet đang gia tăng." },
      { ja: "犯罪を防ぐために防犯カメラを設置した。", vi: "Đã lắp camera an ninh để phòng ngừa tội phạm." },
    ],
  },
  {
    w: "被害",
    r: "ひがい",
    m: "BỊ HẠI — thiệt hại, tổn thất (do bị tác động)",
    examples: [
      { ja: "台風で農作物に大きな被害が出た。", vi: "Bão gây thiệt hại lớn cho nông sản." },
      { ja: "詐欺の被害に遭った。", vi: "Tôi đã bị lừa đảo." },
      { ja: "被害の状況を調べている。", vi: "Đang điều tra tình hình thiệt hại." },
    ],
  },
  {
    w: "損害",
    r: "そんがい",
    m: "TỔN HẠI — thiệt hại, tổn thất (về tiền bạc)",
    examples: [
      { ja: "火事で会社は大きな損害を受けた。", vi: "Công ty chịu thiệt hại lớn vì hỏa hoạn." },
      { ja: "損害を賠償してもらった。", vi: "Tôi đã được bồi thường thiệt hại." },
      { ja: "損害額は一億円に上る。", vi: "Số thiệt hại lên tới một trăm triệu yên." },
    ],
  },
  {
    w: "毒",
    r: "どく",
    m: "ĐỘC — chất độc, độc; có hại",
    examples: [
      { ja: "このキノコには毒がある。", vi: "Loại nấm này có độc." },
      { ja: "食べ過ぎは体に毒だ。", vi: "Ăn quá nhiều có hại cho cơ thể." },
      { ja: "毒を持つ蛇に注意してください。", vi: "Hãy chú ý loài rắn có độc." },
    ],
  },
  {
    w: "悪影響",
    r: "あくえいきょう",
    m: "ÁC ẢNH HƯỞNG — ảnh hưởng xấu",
    examples: [
      { ja: "睡眠不足は健康に悪影響を及ぼす。", vi: "Thiếu ngủ gây ảnh hưởng xấu đến sức khỏe." },
      { ja: "暴力的なゲームが子どもに悪影響を与えるという意見がある。", vi: "Có ý kiến cho rằng game bạo lực ảnh hưởng xấu đến trẻ em." },
      { ja: "景気の悪化は経済に悪影響を与えた。", vi: "Kinh tế suy thoái đã ảnh hưởng xấu đến nền kinh tế." },
    ],
  },
  {
    w: "アメリカ流",
    r: "アメリカりゅう",
    m: "LƯU — kiểu Mỹ, phong cách Mỹ",
    examples: [
      { ja: "彼はアメリカ流の考え方をする。", vi: "Anh ấy suy nghĩ theo kiểu Mỹ." },
      { ja: "この会社ではアメリカ流の経営が行われている。", vi: "Công ty này quản lý theo phong cách Mỹ." },
      { ja: "アメリカ流のあいさつは握手とハグだ。", vi: "Cách chào kiểu Mỹ là bắt tay và ôm." },
    ],
  },
  {
    w: "別れ際",
    r: "わかれぎわ",
    m: "BIỆT TẾ — lúc chia tay, khi sắp chia tay",
    examples: [
      { ja: "別れ際に彼女は小さく手を振った。", vi: "Lúc chia tay, cô ấy khẽ vẫy tay." },
      { ja: "別れ際にまた会おうと約束した。", vi: "Lúc chia tay chúng tôi hẹn sẽ gặp lại." },
      { ja: "別れ際の一言が忘れられない。", vi: "Tôi không quên được lời nói lúc chia tay." },
    ],
  },
  {
    w: "ショップ",
    r: "ショップ",
    m: "(shop) — cửa hàng, tiệm",
    examples: [
      { ja: "駅の近くにおしゃれなショップができた。", vi: "Gần nhà ga mới có một cửa hàng sành điệu." },
      { ja: "ギフトショップで土産を買った。", vi: "Tôi mua quà lưu niệm ở cửa hàng quà tặng." },
      { ja: "このショップは夜十時まで開いている。", vi: "Cửa hàng này mở cửa đến mười giờ tối." },
    ],
  },
  {
    w: "プレッシャー",
    r: "プレッシャー",
    m: "(pressure) — áp lực",
    examples: [
      { ja: "試合前は大きなプレッシャーを感じた。", vi: "Trước trận đấu tôi cảm thấy áp lực lớn." },
      { ja: "親の期待がプレッシャーになっている。", vi: "Kỳ vọng của cha mẹ trở thành áp lực." },
      { ja: "プレッシャーに強いタイプだ。", vi: "Anh ấy là kiểu người chịu áp lực tốt." },
    ],
  },
  {
    w: "ダメージ",
    r: "ダメージ",
    m: "(damage) — thiệt hại, tổn thương, sát thương",
    examples: [
      { ja: "この失敗は会社に大きなダメージを与えた。", vi: "Thất bại này gây thiệt hại lớn cho công ty." },
      { ja: "強い日差しで髪がダメージを受けた。", vi: "Tóc bị tổn thương vì nắng gắt." },
      { ja: "心のダメージから立ち直るには時間がかかる。", vi: "Phải mất thời gian để hồi phục sau tổn thương tinh thần." },
    ],
  },
  {
    w: "コンプレックス",
    r: "コンプレックス",
    m: "(complex) — mặc cảm, tự ti",
    examples: [
      { ja: "背が低いことがコンプレックスだった。", vi: "Tôi từng mặc cảm vì thấp bé." },
      { ja: "彼は学歴にコンプレックスを持っている。", vi: "Anh ấy mặc cảm về học vấn của mình." },
      { ja: "コンプレックスを克服して自信がついた。", vi: "Tôi vượt qua mặc cảm và có thêm tự tin." },
    ],
  },
  {
    w: "不安定",
    r: "ふあんてい",
    m: "BẤT AN ĐỊNH — không ổn định, bấp bênh",
    examples: [
      { ja: "天気が不安定で傘が手放せない。", vi: "Thời tiết thất thường nên không rời được cây dù." },
      { ja: "この椅子は不安定で座りにくい。", vi: "Chiếc ghế này không vững nên khó ngồi." },
      { ja: "不安定な収入では生活設計が立てにくい。", vi: "Thu nhập bấp bênh thì khó lập kế hoạch sống." },
    ],
  },
  {
    w: "地味",
    r: "じみ",
    m: "ĐỊA VỊ — giản dị, nhã nhặn, kín đáo (không nổi bật)",
    examples: [
      { ja: "彼女はいつも地味な服を着ている。", vi: "Cô ấy lúc nào cũng mặc đồ giản dị." },
      { ja: "地味な仕事だが、大切な役目だ。", vi: "Là công việc thầm lặng nhưng là vai trò quan trọng." },
      { ja: "このデザインは私には地味すぎる。", vi: "Thiết kế này quá đơn giản đối với tôi." },
    ],
  },
  {
    w: "かすか",
    r: "かすか",
    m: "VI (微か) — mờ nhạt, yếu ớt, thoang thoảng",
    examples: [
      { ja: "遠くからかすかな音が聞こえる。", vi: "Nghe thấy tiếng động yếu ớt từ xa." },
      { ja: "かすかに花の香りがした。", vi: "Thoang thoảng có mùi hoa." },
      { ja: "彼はかすかな希望を捨てなかった。", vi: "Anh ấy không từ bỏ chút hy vọng mong manh." },
    ],
  },
  {
    w: "鈍感",
    r: "どんかん",
    m: "ĐỘN CẢM — kém nhạy cảm, chậm cảm nhận, vô tâm",
    examples: [
      { ja: "彼は人の気持ちに鈍感だ。", vi: "Anh ấy không nhạy cảm với cảm xúc của người khác." },
      { ja: "寒さに鈍感な体質だ。", vi: "Tôi có thể trạng ít cảm nhận được cái lạnh." },
      { ja: "鈍感な私はまったく気づかなかった。", vi: "Vốn chậm cảm nhận nên tôi hoàn toàn không nhận ra." },
    ],
  },
  {
    w: "散る",
    r: "ちる",
    m: "TÁN — rụng, rơi (hoa, lá); tản ra, phân tán",
    examples: [
      { ja: "風で桜の花が散った。", vi: "Hoa anh đào rụng vì gió." },
      { ja: "試合が終わって観客が散っていった。", vi: "Trận đấu kết thúc, khán giả tản đi." },
      { ja: "気が散って勉強に集中できない。", vi: "Tôi bị phân tán nên không tập trung học được." },
    ],
  },
  {
    w: "覚悟",
    r: "かくご",
    m: "GIÁC NGỘ — sự chuẩn bị tinh thần, quyết tâm, sẵn sàng chấp nhận",
    examples: [
      { ja: "失敗する覚悟でやってみよう。", vi: "Hãy thử với tinh thần sẵn sàng chấp nhận thất bại." },
      { ja: "彼は退職する覚悟を決めた。", vi: "Anh ấy đã quyết tâm nghỉ việc." },
      { ja: "覚悟はできているから、本当のことを教えてください。", vi: "Tôi đã chuẩn bị tinh thần rồi, xin hãy nói sự thật." },
    ],
  },
  {
    w: "ふさわしい",
    r: "ふさわしい",
    m: "TƯƠNG ỨNG (相応しい) — phù hợp, xứng đáng",
    examples: [
      { ja: "彼はリーダーにふさわしい人物だ。", vi: "Anh ấy là người xứng đáng làm lãnh đạo." },
      { ja: "結婚式にふさわしい服装を選んだ。", vi: "Tôi chọn trang phục phù hợp với lễ cưới." },
      { ja: "この場にふさわしくない発言だった。", vi: "Đó là phát ngôn không phù hợp với hoàn cảnh này." },
    ],
  },
  {
    w: "分別",
    r: "ぶんべつ",
    m: "PHÂN BIỆT — phân loại (rác…); (ふんべつ: óc phán đoán, sự thận trọng)",
    examples: [
      { ja: "ごみは分別して出してください。", vi: "Hãy phân loại rác rồi mới đem bỏ." },
      { ja: "資源ごみの分別が義務づけられている。", vi: "Việc phân loại rác tái chế là bắt buộc." },
      { ja: "いい大人なのだから分別のある行動をしなさい。", vi: "Đã là người lớn thì hãy hành động có suy xét." },
    ],
  },
  {
    w: "区別",
    r: "くべつ",
    m: "KHU BIỆT — phân biệt, sự phân biệt",
    examples: [
      { ja: "双子の兄弟は区別がつかない。", vi: "Hai anh em sinh đôi không thể phân biệt được." },
      { ja: "公私の区別をはっきりつけるべきだ。", vi: "Nên phân biệt rõ việc công và việc tư." },
      { ja: "本物と偽物を区別するのは難しい。", vi: "Phân biệt hàng thật và hàng giả rất khó." },
    ],
  },
  {
    w: "区分",
    r: "くぶん",
    m: "KHU PHÂN — sự phân chia, phân loại, khu vực chia",
    examples: [
      { ja: "年齢によって料金の区分が異なる。", vi: "Phí được chia khác nhau theo độ tuổi." },
      { ja: "土地を用途ごとに区分する。", vi: "Phân chia đất theo mục đích sử dụng." },
      { ja: "この表では所得を三つの区分に分けている。", vi: "Bảng này chia thu nhập thành ba nhóm." },
    ],
  },
  {
    w: "分担",
    r: "ぶんたん",
    m: "PHÂN ĐẢM — chia nhau đảm nhận, phân công",
    examples: [
      { ja: "夫婦で家事を分担している。", vi: "Vợ chồng chia nhau việc nhà." },
      { ja: "仕事を分担すれば早く終わる。", vi: "Chia việc ra thì sẽ xong sớm." },
      { ja: "費用は三人で分担しよう。", vi: "Ba người chúng ta cùng chia chi phí nhé." },
    ],
  },
  {
    w: "等しい",
    r: "ひとしい",
    m: "ĐẲNG — bằng nhau, tương đương, như nhau",
    examples: [
      { ja: "二つの三角形の面積は等しい。", vi: "Diện tích của hai hình tam giác bằng nhau." },
      { ja: "それは嘘をついたに等しい。", vi: "Điều đó chẳng khác gì nói dối." },
      { ja: "法の下では、すべての人が等しく扱われる。", vi: "Trước pháp luật, mọi người được đối xử bình đẳng." },
    ],
  },
  {
    w: "ありがち",
    r: "ありがち",
    m: "HỮU — hay gặp, thường xảy ra, dễ xảy ra",
    examples: [
      { ja: "それは新人にありがちなミスだ。", vi: "Đó là lỗi người mới hay mắc phải." },
      { ja: "忙しいと食事が不規則になりがちだ。", vi: "Bận rộn thì bữa ăn dễ thất thường." },
      { ja: "ありがちな話だが、本当にあった出来事だ。", vi: "Chuyện nghe quen thuộc nhưng là chuyện có thật." },
    ],
  },
  {
    w: "物騒",
    r: "ぶっそう",
    m: "VẬT TAO — bất an, nguy hiểm, không yên ổn",
    examples: [
      { ja: "最近は物騒な事件が多い。", vi: "Gần đây có nhiều vụ việc đáng lo ngại." },
      { ja: "夜道は物騒だから一人で歩かないほうがいい。", vi: "Đường đêm nguy hiểm nên đừng đi một mình." },
      { ja: "物騒な世の中になったものだ。", vi: "Xã hội đã trở nên bất an biết bao." },
    ],
  },
  {
    w: "精いっぱい",
    r: "せいいっぱい",
    m: "TINH — hết sức, hết mình, cố gắng tối đa (＝一生懸命)",
    examples: [
      { ja: "精いっぱい頑張ったので悔いはない。", vi: "Tôi đã cố hết sức nên không hối tiếc." },
      { ja: "それが今の私に精いっぱいできることだ。", vi: "Đó là điều hết mức tôi có thể làm lúc này." },
      { ja: "彼女は精いっぱいの笑顔で見送った。", vi: "Cô ấy tiễn đưa với nụ cười hết sức có thể." },
    ],
  },
  {
    w: "同情",
    r: "どうじょう",
    m: "ĐỒNG TÌNH — đồng cảm, thương cảm (＝thấy tội nghiệp)",
    examples: [
      { ja: "被害者に同情が集まった。", vi: "Sự đồng cảm dồn về phía nạn nhân." },
      { ja: "彼の境遇には同情せざるを得ない。", vi: "Không thể không thương cảm cho hoàn cảnh của anh ấy." },
      { ja: "同情するなら金をくれ、という言葉がある。", vi: "Có câu nói rằng: thương thì cho tiền đi." },
    ],
  },
  {
    w: "初歩",
    r: "しょほ",
    m: "SƠ BỘ — sơ cấp, bước đầu, kiến thức cơ bản",
    examples: [
      { ja: "初歩から丁寧に教えてもらった。", vi: "Tôi được dạy cẩn thận từ những bước đầu tiên." },
      { ja: "これは初歩的なミスだ。", vi: "Đây là lỗi sơ đẳng." },
      { ja: "初歩のフランス語なら話せる。", vi: "Tiếng Pháp sơ cấp thì tôi nói được." },
    ],
  },
  {
    w: "即座",
    r: "そくざ",
    m: "TỨC TỌA — ngay lập tức, ngay tại chỗ",
    examples: [
      { ja: "質問に即座に答えた。", vi: "Tôi trả lời câu hỏi ngay lập tức." },
      { ja: "彼は即座に断った。", vi: "Anh ấy từ chối ngay tức khắc." },
      { ja: "即座の判断が求められる場面だ。", vi: "Đây là tình huống đòi hỏi phán đoán tức thì." },
    ],
  },
  {
    w: "尽きる",
    r: "つきる",
    m: "TẬN — cạn, hết, kiệt",
    examples: [
      { ja: "ついに食料が尽きてしまった。", vi: "Cuối cùng thức ăn cũng cạn kiệt." },
      { ja: "話題が尽きなくて、朝まで話した。", vi: "Chuyện không bao giờ hết nên chúng tôi nói chuyện đến sáng." },
      { ja: "助けてくれた皆さんには感謝に尽きます。", vi: "Tôi vô cùng biết ơn tất cả những người đã giúp đỡ." },
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

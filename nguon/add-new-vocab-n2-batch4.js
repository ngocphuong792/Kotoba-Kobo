/**
 * Thêm new-vocab.md vào chủ đề Từ vựng N2 (3 ví dụ / từ, nghĩa kèm Hán Việt).
 * Usage: node nguon/add-new-vocab-n2-batch4.js
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
    w: "在籍",
    r: "ざいせき",
    m: "TẠI TỊCH — đang thuộc biên chế, đang học / làm tại (công ty, trường)",
    examples: [
      { ja: "私は来月からこの会社に在籍します。", vi: "Từ tháng sau tôi sẽ thuộc biên chế công ty này." },
      { ja: "在籍期間は三年です。", vi: "Thời gian thuộc biên chế là ba năm." },
      { ja: "現在、大学院に在籍しています。", vi: "Hiện tôi đang học tại trường sau đại học." },
    ],
  },
  {
    w: "従って",
    r: "したがって",
    m: "TÒNG — vì vậy, do đó; theo, tuân theo",
    examples: [
      { ja: "予算が足りない。従って、計画を見直す必要がある。", vi: "Ngân sách không đủ. Vì vậy cần xem lại kế hoạch." },
      { ja: "規則に従って手続きを進めた。", vi: "Tôi tiến hành thủ tục theo quy định." },
      { ja: "説明書に従って組み立ててください。", vi: "Hãy lắp theo hướng dẫn." },
    ],
  },
  {
    w: "領収書",
    r: "りょうしゅうしょ",
    m: "LÃNH THU THƯ — hóa đơn, biên lai thu tiền",
    examples: [
      { ja: "経費精算のため領収書を保管しています。", vi: "Tôi giữ hóa đơn để quyết toán chi phí." },
      { ja: "宛名入りの領収書を発行してください。", vi: "Xin hãy xuất hóa đơn ghi tên người nhận." },
      { ja: "領収書がないと払い戻しできません。", vi: "Không có biên lai thì không hoàn tiền được." },
    ],
  },
  {
    w: "暴く",
    r: "あばく",
    m: "BẠO — vạch trần, phơi bày (bí mật, sai phạm)",
    examples: [
      { ja: "内部の不正を暴く記事が掲載された。", vi: "Bài viết vạch trần gian lận nội bộ đã được đăng." },
      { ja: "他人の秘密を暴くのはよくない。", vi: "Vạch trần bí mật của người khác là không tốt." },
      { ja: "調査で事実が暴かれた。", vi: "Qua điều tra, sự thật đã bị phơi bày." },
    ],
  },
  {
    w: "住宅街",
    r: "じゅうたくがい",
    m: "TRÚ TRẠC NHAI — khu nhà ở, khu dân cư",
    examples: [
      { ja: "静かな住宅街に引っ越した。", vi: "Tôi chuyển đến một khu dân cư yên tĩnh." },
      { ja: "この住宅街は緑が多くて静かだ。", vi: "Khu nhà ở này nhiều cây xanh và yên tĩnh." },
      { ja: "夜の住宅街は車がほとんど通らない。", vi: "Ban đêm khu dân cư hầu như không có xe qua." },
    ],
  },
  {
    w: "不正確",
    r: "ふせいかく",
    m: "BẤT CHÍNH XÁC — không chính xác, sai lệch",
    examples: [
      { ja: "不正確な情報を共有しないでください。", vi: "Xin đừng chia sẻ thông tin không chính xác." },
      { ja: "測定値が不正確だったのでやり直した。", vi: "Số đo không chính xác nên tôi làm lại." },
      { ja: "記憶が不正確で、日時を思い出せない。", vi: "Trí nhớ không chính xác nên tôi không nhớ được ngày giờ." },
    ],
  },
  {
    w: "数値",
    r: "すうち",
    m: "SỐ TRỊ — số liệu, giá trị số",
    examples: [
      { ja: "この数値は先月より改善している。", vi: "Số liệu này đã cải thiện so với tháng trước." },
      { ja: "目標数値を達成できた。", vi: "Đã đạt được số liệu mục tiêu." },
      { ja: "数値だけで判断せず、現場も確認する。", vi: "Không chỉ nhìn số liệu mà còn kiểm tra hiện trường." },
    ],
  },
  {
    w: "低カロリー",
    r: "ていかロリー",
    m: "ĐÊ — ít calo, low-calorie",
    examples: [
      { ja: "低カロリーのメニューを選んだ。", vi: "Tôi chọn món ít calo." },
      { ja: "この飲料は低カロリーだと書いてある。", vi: "Trên chai ghi là đồ uống ít calo." },
      { ja: "ダイエット中なので低カロリーの食事にしている。", vi: "Đang giảm cân nên tôi ăn khẩu phần ít calo." },
    ],
  },
  {
    w: "輸入",
    r: "ゆにゅう",
    m: "THÂU NHẬP — nhập khẩu",
    examples: [
      { ja: "この部品は海外から輸入している。", vi: "Linh kiện này được nhập khẩu từ nước ngoài." },
      { ja: "輸入食品の価格が上がった。", vi: "Giá thực phẩm nhập khẩu đã tăng." },
      { ja: "新しい車を輸入する手続きを始めた。", vi: "Tôi bắt đầu thủ tục nhập khẩu xe mới." },
    ],
  },
  {
    w: "リズム",
    r: "リズム",
    m: "nhịp, nhịp điệu, nhịp sống / làm việc",
    examples: [
      { ja: "音楽のリズムに合わせて歩いた。", vi: "Tôi bước theo nhịp của bản nhạc." },
      { ja: "生活のリズムが乱れて疲れやすい。", vi: "Nhịp sống rối loạn nên dễ mệt." },
      { ja: "仕事のリズムがつかめてきた。", vi: "Tôi bắt đầu nắm được nhịp làm việc." },
    ],
  },
  {
    w: "寄せる",
    r: "よせる",
    m: "KÝ — kéo lại gần; dồn, tập hợp; gửi (ý kiến)",
    examples: [
      { ja: "机を壁に寄せてスペースを作った。", vi: "Tôi kéo bàn sát tường để tạo chỗ trống." },
      { ja: "お客様から多くの意見が寄せられた。", vi: "Khách hàng đã gửi rất nhiều ý kiến." },
      { ja: "体を前に寄せて話を聞いた。", vi: "Tôi nghiêng người về phía trước để nghe." },
    ],
  },
  {
    w: "行為",
    r: "こうい",
    m: "HÀNH VI — hành vi, hành động",
    examples: [
      { ja: "その行為は規則違反になる。", vi: "Hành vi đó sẽ vi phạm quy định." },
      { ja: "善意の行為でも誤解されることがある。", vi: "Đôi khi hành động thiện ý vẫn bị hiểu lầm." },
      { ja: "危険な行為はすぐに止めてください。", vi: "Hãy dừng ngay hành vi nguy hiểm." },
    ],
  },
  {
    w: "現場",
    r: "げんば",
    m: "HIỆN TRƯỜNG — hiện trường, nơi làm việc thực tế",
    examples: [
      { ja: "事故の現場に警察が来た。", vi: "Cảnh sát đã đến hiện trường vụ tai nạn." },
      { ja: "現場の状況を見て判断したい。", vi: "Tôi muốn nhìn tình hình hiện trường rồi mới quyết định." },
      { ja: "建設現場ではヘルメットが必須だ。", vi: "Ở công trường xây dựng, mũ bảo hộ là bắt buộc." },
    ],
  },
  {
    w: "実地",
    r: "じっち",
    m: "THỰC ĐỊA — thực địa, thực tế tại chỗ",
    examples: [
      { ja: "マニュアルだけでなく実地で確認する。", vi: "Không chỉ xem tài liệu mà còn kiểm tra thực địa." },
      { ja: "実地研修で仕事の流れを覚えた。", vi: "Qua thực tập tại chỗ tôi nhớ được luồng công việc." },
      { ja: "机上の計画を実地で試してみた。", vi: "Tôi thử kế hoạch trên giấy ở thực địa." },
    ],
  },
  {
    w: "ぎりぎり",
    r: "ぎりぎり",
    m: "sát nút, vừa đủ, sát hạn",
    examples: [
      { ja: "締め切りぎりぎりで提出した。", vi: "Tôi nộp sát hạn chót." },
      { ja: "電車にぎりぎり間に合った。", vi: "Tôi vừa kịp tàu sát nút." },
      { ja: "予算はぎりぎりなので追加は難しい。", vi: "Ngân sách vừa đủ nên khó tăng thêm." },
    ],
  },
  {
    w: "ばったり",
    r: "ばったり",
    m: "tình cờ gặp; đột ngột ngã / dừng",
    examples: [
      { ja: "駅前で昔の同僚とばったり会った。", vi: "Tôi tình cờ gặp đồng nghiệp cũ trước ga." },
      { ja: "買い物中に友人とばったり出会った。", vi: "Đang mua sắm thì tình cờ gặp bạn." },
      { ja: "強風で看板がばったり倒れた。", vi: "Gió mạnh làm biển hiệu đổ phịch xuống." },
    ],
  },
  {
    w: "資格",
    r: "しかく",
    m: "TƯ CÁCH — bằng cấp, chứng chỉ; tư cách",
    examples: [
      { ja: "仕事に必要な資格を取得した。", vi: "Tôi đã lấy chứng chỉ cần cho công việc." },
      { ja: "応募資格を満たしているか確認してください。", vi: "Hãy kiểm tra xem có đủ điều kiện ứng tuyển không." },
      { ja: "資格がなくても経験があれば応募できる。", vi: "Không có chứng chỉ vẫn ứng tuyển được nếu có kinh nghiệm." },
    ],
  },
  {
    w: "有利",
    r: "ゆうり",
    m: "HỮU LỢI — có lợi, thuận lợi",
    examples: [
      { ja: "経験がある人の方が就職に有利だ。", vi: "Người có kinh nghiệm có lợi hơn khi xin việc." },
      { ja: "早期予約の方が料金が有利になる。", vi: "Đặt sớm thì giá có lợi hơn." },
      { ja: "この条件はこちら側に有利だ。", vi: "Điều kiện này có lợi cho phía chúng ta." },
    ],
  },
  {
    w: "先着",
    r: "せんちゃく",
    m: "TIÊN TRƯỚC — đến trước, người đến trước",
    examples: [
      { ja: "先着50名に粗品をプレゼントします。", vi: "Tặng quà nhỏ cho 50 người đến trước." },
      { ja: "先着順ではなく抽選で決める。", vi: "Không theo thứ tự đến trước mà quay số." },
      { ja: "チケットは先着で売り切れた。", vi: "Vé bán hết theo người đến trước." },
    ],
  },
  {
    w: "先着順",
    r: "せんちゃくじゅん",
    m: "TIÊN TRƯỚC THUẬN — theo thứ tự đến trước",
    examples: [
      { ja: "受付は先着順で行います。", vi: "Tiếp nhận theo thứ tự đến trước." },
      { ja: "席は先着順なので早めに来てください。", vi: "Chỗ ngồi theo thứ tự đến trước nên hãy đến sớm." },
      { ja: "先着順だと並ぶ時間が長くなる。", vi: "Nếu theo thứ tự đến trước thì thời gian xếp hàng sẽ dài." },
    ],
  },
  {
    w: "強力",
    r: "きょうりょく",
    m: "CƯỜNG LỰC — mạnh, mạnh mẽ, có sức mạnh lớn",
    examples: [
      { ja: "この洗剤は強力で汚れがよく落ちる。", vi: "Chất tẩy này mạnh, vết bẩn ra rất tốt." },
      { ja: "強力なチームワークで目標を達成した。", vi: "Nhờ teamwork mạnh mà đạt mục tiêu." },
      { ja: "強力な磁石で金属を拾った。", vi: "Tôi nhặt kim loại bằng nam châm mạnh." },
    ],
  },
  {
    w: "打ち消す",
    r: "うちけす",
    m: "ĐẢ TIÊU — phủ nhận, bác bỏ, dập tắt (tin đồn)",
    examples: [
      { ja: "彼はそのうわさを打ち消した。", vi: "Anh ấy đã phủ nhận tin đồn đó." },
      { ja: "会社は合併の報道を打ち消した。", vi: "Công ty bác bỏ tin đồn sáp nhập." },
      { ja: "誤解を打ち消すために説明した。", vi: "Tôi giải thích để dập tắt hiểu lầm." },
    ],
  },
  {
    w: "入れ替える",
    r: "いれかえる",
    m: "NHẬP THẾ — thay thế, đổi chỗ, thay mới",
    examples: [
      { ja: "古い部品を新しいものに入れ替えた。", vi: "Tôi thay linh kiện cũ bằng cái mới." },
      { ja: "棚の商品を季節ものに入れ替える。", vi: "Thay hàng trên kệ thành đồ theo mùa." },
      { ja: "電池を入れ替えたら動くようになった。", vi: "Thay pin xong thì máy chạy lại." },
    ],
  },
  {
    w: "追い返す",
    r: "おいかえす",
    m: "TRUY PHẢN — đuổi về, đẩy lui, từ chối không cho vào",
    examples: [
      { ja: "受付で書類不備のため追い返された。", vi: "Tôi bị đuổi về vì giấy tờ thiếu ở quầy tiếp nhận." },
      { ja: "犬が知らない人を追い返した。", vi: "Con chó đuổi người lạ đi." },
      { ja: "無理な要求は丁寧に追い返す。", vi: "Yêu cầu vô lý thì lịch sự từ chối." },
    ],
  },
  {
    w: "差し引く",
    r: "さしひく",
    m: "SAI DẪN — trừ đi, khấu trừ",
    examples: [
      { ja: "給料から税金が差し引かれる。", vi: "Thuế bị khấu trừ từ lương." },
      { ja: "前払い分を差し引いて請求する。", vi: "Xuất hóa đơn sau khi trừ phần đã trả trước." },
      { ja: "ポイントを差し引いて支払った。", vi: "Tôi thanh toán sau khi trừ điểm." },
    ],
  },
  {
    w: "厚かましい",
    r: "あつかましい",
    m: "HẬU — trơ trẽn, mặt dày, không biết ngượng",
    examples: [
      { ja: "初対面なのに厚かましいお願いをしてしまった。", vi: "Mới gặp lần đầu mà tôi đã xin một việc trơ trẽn." },
      { ja: "厚かましいと思われたくないので遠慮した。", vi: "Tôi ngại bị cho là mặt dày nên từ chối." },
      { ja: "何度も催促するのは厚かましいかもしれない。", vi: "Nhắc nhiều lần có thể bị xem là trơ trẽn." },
    ],
  },
  {
    w: "冗談",
    r: "じょうだん",
    m: "NHÀNG ĐÀM — chuyện đùa, nói đùa",
    examples: [
      { ja: "それは冗談です。本気にしないでください。", vi: "Đó chỉ là đùa. Đừng hiểu nghiêm túc." },
      { ja: "会議中に冗談を言って場を和ませた。", vi: "Trong họp tôi nói đùa cho không khí dễ chịu." },
      { ja: "冗談が通じない相手には言い方を変える。", vi: "Với người không hiểu đùa thì tôi đổi cách nói." },
    ],
  },
  {
    w: "むかつく",
    r: "むかつく",
    m: "bực tức, khó chịu; buồn nôn",
    examples: [
      { ja: "理不尽な対応にむかついた。", vi: "Tôi bực vì cách xử lý vô lý." },
      { ja: "そんな言い方をされるとむかつく。", vi: "Bị nói kiểu đó thì khó chịu." },
      { ja: "車に酔って少しむかついている。", vi: "Tôi say xe nên hơi buồn nôn." },
    ],
  },
  {
    w: "いじわる",
    r: "いじわる",
    m: "Ý ÁC — xấu tính, cố ý làm khó người khác",
    examples: [
      { ja: "いじわるな冗談はやめてほしい。", vi: "Tôi muốn bạn đừng đùa kiểu xấu tính." },
      { ja: "わざと教えないのはいじわるだ。", vi: "Cố tình không nói là xấu tính." },
      { ja: "子供がいじわるをして友達を泣かせた。", vi: "Đứa trẻ cố làm khó bạn và làm bạn khóc." },
    ],
  },
  {
    w: "わがまま",
    r: "わがまま",
    m: "NGÃ — ích kỷ, chỉ nghĩ mình, đòi hỏi tùy ý",
    examples: [
      { ja: "わがままを言わずに協力してほしい。", vi: "Đừng ích kỷ, hãy hợp tác với tôi." },
      { ja: "子供のわがままを全部聞いてはいられない。", vi: "Không thể chiều hết đòi hỏi tùy ý của trẻ." },
      { ja: "チームではわがままは通らない。", vi: "Trong team thì thái độ chỉ nghĩ mình không được chấp nhận." },
    ],
  },
  {
    w: "なさけない",
    r: "なさけない",
    m: "TÌNH — đáng thương, tồi tệ, không ra gì",
    examples: [
      { ja: "同じミスを繰り返すのはなさけない。", vi: "Lặp lại cùng một lỗi thì thật không ra gì." },
      { ja: "なさけない結果になって反省している。", vi: "Kết quả tồi tệ nên tôi đang tự trách." },
      { ja: "助けを求められずになさけなくなった。", vi: "Không xin được giúp nên tôi thấy đáng thương cho mình." },
    ],
  },
  {
    w: "だらしない",
    r: "だらしない",
    m: "luộm thuộm, bê tha, không gọn gàng",
    examples: [
      { ja: "部屋がだらしないので片付ける。", vi: "Phòng luộm thuộm nên tôi dọn." },
      { ja: "だらしない格好で出社しないでください。", vi: "Đừng đến công ty với bộ dạng luộm thuộm." },
      { ja: "時間にだらしない人だと思われたくない。", vi: "Tôi không muốn bị cho là người bê tha giờ giấc." },
    ],
  },
  {
    w: "限定",
    r: "げんてい",
    m: "HẠN ĐỊNH — giới hạn, phiên bản giới hạn",
    examples: [
      { ja: "今週末限定のキャンペーンです。", vi: "Đây là chiến dịch chỉ giới hạn cuối tuần này." },
      { ja: "地域限定の商品を探している。", vi: "Tôi đang tìm sản phẩm chỉ bán ở khu vực nhất định." },
      { ja: "参加者は社員に限定する。", vi: "Người tham gia giới hạn trong nhân viên." },
    ],
  },
  {
    w: "まれ",
    r: "まれ",
    m: "HY — hiếm, ít khi xảy ra",
    examples: [
      { ja: "こんな失敗はまれだ。", vi: "Thất bại kiểu này rất hiếm." },
      { ja: "まれな症例なので専門医に相談した。", vi: "Ca bệnh hiếm nên tôi hỏi bác sĩ chuyên khoa." },
      { ja: "彼が遅刻するのはまれなことだ。", vi: "Anh ấy đi muộn là chuyện hiếm." },
    ],
  },
  {
    w: "散らかす",
    r: "ちらかす",
    m: "TÁN — làm bừa bộn, vứt lung tung",
    examples: [
      { ja: "子供がおもちゃを部屋に散らかした。", vi: "Bọn trẻ làm đồ chơi bừa bộn khắp phòng." },
      { ja: "書類を散らかさないでファイリングして。", vi: "Đừng vứt giấy tờ lung tung, hãy sắp vào file." },
      { ja: "使った道具を散らかしたまま帰らないでください。", vi: "Đừng về mà để dụng cụ vứt bừa." },
    ],
  },
  {
    w: "論争",
    r: "ろんそう",
    m: "LUẬN TRANH — tranh luận, cuộc tranh cãi",
    examples: [
      { ja: "方針をめぐって社内で論争になった。", vi: "Trong công ty nảy ra tranh luận về phương châm." },
      { ja: "その問題は長い論争の末に決まった。", vi: "Vấn đề đó được quyết sau cuộc tranh luận dài." },
      { ja: "感情的な論争は避けたい。", vi: "Tôi muốn tránh tranh cãi mang tính cảm xúc." },
    ],
  },
  {
    w: "仰向け",
    r: "あおむけ",
    m: "NGƯỠNG — nằm ngửa",
    examples: [
      { ja: "検査のため仰向けになってください。", vi: "Hãy nằm ngửa để kiểm tra." },
      { ja: "仰向けで寝るといびきをかきやすい。", vi: "Nằm ngửa dễ ngáy." },
      { ja: "赤ちゃんを仰向けに寝かせた。", vi: "Tôi đặt em bé nằm ngửa." },
    ],
  },
  {
    w: "浮かぶ",
    r: "うかぶ",
    m: "PHÙ — nổi lên; nảy ra (ý tưởng), hiện ra trong đầu",
    examples: [
      { ja: "湖に月が浮かんでいる。", vi: "Mặt trăng nổi trên mặt hồ." },
      { ja: "いいアイデアが突然浮かんだ。", vi: "Bỗng nhiên nảy ra một ý hay." },
      { ja: "昔の光景が目に浮かぶ。", vi: "Cảnh cũ hiện ra trước mắt." },
    ],
  },
  {
    w: "膨らむ",
    r: "ふくらむ",
    m: "PHỒNG — phồng lên, nở ra; lớn dần (hy vọng, kế hoạch)",
    examples: [
      { ja: "風船がだんだん膨らんだ。", vi: "Bóng bay phồng dần lên." },
      { ja: "パン生地がよく膨らんだ。", vi: "Bột bánh mì nở rất đẹp." },
      { ja: "新しい仕事への期待が膨らんでいる。", vi: "Kỳ vọng vào công việc mới đang lớn dần." },
    ],
  },
  {
    w: "なめらか",
    r: "なめらか",
    m: "mượt, nhẵn, trơn tru",
    examples: [
      { ja: "この生地は手触りがなめらかだ。", vi: "Vải này sờ rất mượt." },
      { ja: "発表がなめらかに進んだ。", vi: "Buổi thuyết trình diễn ra trơn tru." },
      { ja: "ソースがなめらかになるまで混ぜた。", vi: "Tôi khuấy đến khi sốt mịn." },
    ],
  },
  {
    w: "きつい",
    r: "きつい",
    m: "chặt, gắt, nặng (công việc); gay gắt",
    examples: [
      { ja: "この靴は少しきつい。", vi: "Đôi giày này hơi chặt." },
      { ja: "今月はスケジュールがきつい。", vi: "Tháng này lịch làm việc rất nặng." },
      { ja: "上司の言い方がきつく感じた。", vi: "Cách nói của sếp nghe gay gắt." },
    ],
  },
  {
    w: "冷蔵庫",
    r: "れいぞうこ",
    m: "LÃNH TÀNG KHỐ — tủ lạnh",
    examples: [
      { ja: "牛乳を冷蔵庫に入れてください。", vi: "Hãy cho sữa vào tủ lạnh." },
      { ja: "冷蔵庫の中が空いてきたので買い物に行く。", vi: "Tủ lạnh gần hết đồ nên tôi đi mua." },
      { ja: "冷蔵庫の温度を少し下げた。", vi: "Tôi hạ nhiệt độ tủ lạnh một chút." },
    ],
  },
  {
    w: "総額",
    r: "そうがく",
    m: "TỔNG NGẠCH — tổng số tiền, tổng giá trị",
    examples: [
      { ja: "請求書の総額を確認した。", vi: "Tôi kiểm tra tổng số tiền trên hóa đơn." },
      { ja: "今回の工事は総額で三百万円かかる。", vi: "Công trình lần này tốn tổng cộng 3 triệu yên." },
      { ja: "税込みの総額を先に伝えてほしい。", vi: "Tôi muốn được nói trước tổng tiền đã gồm thuế." },
    ],
  },
  {
    w: "溜まる",
    r: "たまる",
    m: "LƯU — tích tụ, chất đống (việc, tiền, nước)",
    examples: [
      { ja: "机の上に書類が溜まっている。", vi: "Giấy tờ chất đống trên bàn." },
      { ja: "ストレスが溜まらないよう休みを取る。", vi: "Tôi nghỉ để stress không tích tụ." },
      { ja: "ポイントが十分に溜まった。", vi: "Điểm đã tích đủ." },
    ],
  },
  {
    w: "養う",
    r: "やしなう",
    m: "DƯỠNG — nuôi dưỡng, nuôi nấng; bồi dưỡng (thói quen, sức khỏe)",
    examples: [
      { ja: "家族を養うために働いている。", vi: "Tôi làm việc để nuôi gia đình." },
      { ja: "毎日の読書で思考力を養う。", vi: "Đọc sách hàng ngày để bồi dưỡng tư duy." },
      { ja: "早寝早起きの習慣を養いたい。", vi: "Tôi muốn nuôi dưỡng thói quen ngủ sớm dậy sớm." },
    ],
  },
  {
    w: "踏む",
    r: "ふむ",
    m: "ĐẠP — giẫm, dẫm; trải qua (bước, thủ tục)",
    examples: [
      { ja: "人の足を踏んでしまったので謝った。", vi: "Tôi dẫm chân người khác nên xin lỗi." },
      { ja: "正しい手順を踏んで申請する。", vi: "Nộp đơn theo đúng các bước thủ tục." },
      { ja: "ブレーキを踏んで停車した。", vi: "Tôi đạp phanh rồi dừng xe." },
    ],
  },
  {
    w: "警備",
    r: "けいび",
    m: "CẢNH BỊ — bảo vệ, canh gác, an ninh",
    examples: [
      { ja: "会場の警備が強化された。", vi: "An ninh tại hội trường được tăng cường." },
      { ja: "夜間は警備員が建物を見回る。", vi: "Ban đêm nhân viên bảo vệ đi tuần tòa nhà." },
      { ja: "イベント当日の警備計画を確認した。", vi: "Tôi đã xác nhận kế hoạch bảo vệ ngày sự kiện." },
    ],
  },
  {
    w: "省く",
    r: "はぶく",
    m: "TỈNH — lược bỏ, cắt bớt, tiết kiệm (công đoạn)",
    examples: [
      { ja: "説明が長いので詳細は省きます。", vi: "Giải thích dài nên tôi lược phần chi tiết." },
      { ja: "無駄な工程を省いて効率を上げた。", vi: "Cắt bớt công đoạn thừa để tăng hiệu quả." },
      { ja: "挨拶を省いて本題に入った。", vi: "Bỏ phần chào hỏi rồi vào vấn đề chính." },
    ],
  },
  {
    w: "スキー場",
    r: "スキーじょう",
    m: "TRƯỜNG — khu trượt tuyết",
    examples: [
      { ja: "今シーズン初めてスキー場に行った。", vi: "Mùa này tôi lần đầu đến khu trượt tuyết." },
      { ja: "このスキー場は初心者向けのコースが多い。", vi: "Khu trượt tuyết này có nhiều đường cho người mới." },
      { ja: "週末はスキー場が混むので早めに出る。", vi: "Cuối tuần khu trượt đông nên tôi đi sớm." },
    ],
  },
  {
    w: "来学期",
    r: "らいがっき",
    m: "LAI HỌC KỲ — học kỳ tới",
    examples: [
      { ja: "来学期から新しい授業が始まる。", vi: "Từ học kỳ tới sẽ bắt đầu môn mới." },
      { ja: "来学期の時間割を確認した。", vi: "Tôi đã xem thời khóa biểu học kỳ tới." },
      { ja: "来学期に留学する予定だ。", vi: "Tôi dự định du học vào học kỳ tới." },
    ],
  },
  {
    w: "学年別",
    r: "がくねんべつ",
    m: "HỌC NIÊN BIỆT — theo từng khối lớp / năm học",
    examples: [
      { ja: "学年別のクラスに分かれて授業を受ける。", vi: "Chia lớp theo khối rồi học." },
      { ja: "結果は学年別に集計する。", vi: "Kết quả được thống kê theo từng khối." },
      { ja: "学年別の目標を先生と確認した。", vi: "Tôi xác nhận mục tiêu theo khối với giáo viên." },
    ],
  },
  {
    w: "明示",
    r: "めいじ",
    m: "MINH THỊ — ghi rõ, nêu rõ, công bố rõ ràng",
    examples: [
      { ja: "契約書に条件を明示してください。", vi: "Hãy ghi rõ điều kiện trong hợp đồng." },
      { ja: "料金は税込みと税抜きを明示する。", vi: "Giá phải nêu rõ đã gồm thuế hay chưa." },
      { ja: "注意事項が画面に明示されている。", vi: "Các lưu ý được ghi rõ trên màn hình." },
    ],
  },
  {
    w: "公開",
    r: "こうかい",
    m: "CÔNG KHAI — công khai, phát hành / đăng tải cho mọi người",
    examples: [
      { ja: "新しい方針を社内に公開した。", vi: "Đã công khai phương châm mới trong công ty." },
      { ja: "映画は来月から公開される。", vi: "Bộ phim sẽ công chiếu từ tháng sau." },
      { ja: "個人情報は公開しないでください。", vi: "Xin đừng công khai thông tin cá nhân." },
    ],
  },
  {
    w: "アレンジする",
    r: "アレンジする",
    m: "sắp xếp, điều chỉnh, biến tấu (kế hoạch, món ăn, nhạc)",
    examples: [
      { ja: "日程を少しアレンジして調整した。", vi: "Tôi sắp xếp lại lịch một chút cho khớp." },
      { ja: "レシピをアレンジして低カロリーにした。", vi: "Tôi biến tấu công thức cho ít calo hơn." },
      { ja: "会議室のレイアウトをアレンジする。", vi: "Tôi sắp xếp lại bố trí phòng họp." },
    ],
  },
  {
    w: "ケア",
    r: "ケア",
    m: "chăm sóc, quan tâm, chăm sóc da / sức khỏe",
    examples: [
      { ja: "肌のケアを怠らないようにしている。", vi: "Tôi cố gắng không bỏ chăm sóc da." },
      { ja: "お客様へのアフターケアが大切だ。", vi: "Chăm sóc sau bán hàng với khách rất quan trọng." },
      { ja: "怪我の後は丁寧にケアする必要がある。", vi: "Sau chấn thương cần chăm sóc cẩn thận." },
    ],
  },
  {
    w: "独特",
    r: "どくとく",
    m: "ĐỘC ĐẮC — độc đáo, riêng biệt, đặc trưng",
    examples: [
      { ja: "彼には独特の話し方がある。", vi: "Anh ấy có cách nói chuyện rất độc đáo." },
      { ja: "この店は独特の雰囲気で人気だ。", vi: "Quán này nổi tiếng vì không khí đặc trưng." },
      { ja: "独特な発想が新しい企画を生んだ。", vi: "Ý tưởng độc đáo đã tạo ra dự án mới." },
    ],
  },
  {
    w: "専属",
    r: "せんぞく",
    m: "CHUYÊN THUỘC — độc quyền, thuộc riêng một nơi / người",
    examples: [
      { ja: "その選手は今のチームの専属契約だ。", vi: "Vận động viên đó đang có hợp đồng độc quyền với đội hiện tại." },
      { ja: "専属の担当者が対応します。", vi: "Nhân viên phụ trách riêng sẽ hỗ trợ." },
      { ja: "専属モデルとしてブランドと契約した。", vi: "Cô ấy ký hợp đồng làm model độc quyền cho thương hiệu." },
    ],
  },
  {
    w: "孤立",
    r: "こりつ",
    m: "CÔ LẬP — bị cô lập, đứng một mình",
    examples: [
      { ja: "意見が孤立して通らなかった。", vi: "Ý kiến bị cô lập nên không được thông qua." },
      { ja: "新しい環境で孤立しないよう声をかける。", vi: "Tôi chào hỏi để không bị cô lập ở môi trường mới." },
      { ja: "山間の村は冬に孤立しやすい。", vi: "Làng giữa núi dễ bị cô lập vào mùa đông." },
    ],
  },
  {
    w: "奪う",
    r: "うばう",
    m: "ĐOẠT — cướp, lấy mất; chiếm (sự chú ý, mạng sống)",
    examples: [
      { ja: "自転車を奪われて警察に届けた。", vi: "Xe đạp bị cướp nên tôi trình báo cảnh sát." },
      { ja: "そのニュースは人々の関心を奪った。", vi: "Tin đó chiếm lấy sự quan tâm của mọi người." },
      { ja: "事故は多くの命を奪った。", vi: "Tai nạn đã cướp đi nhiều mạng sống." },
    ],
  },
  {
    w: "空ける",
    r: "あける",
    m: "KHÔNG — để trống, dọn chỗ; vắng nhà; làm trống (thời gian)",
    examples: [
      { ja: "来週の午後を空けておきます。", vi: "Tôi sẽ để trống buổi chiều tuần sau." },
      { ja: "箱を空けて荷物を入れた。", vi: "Tôi làm trống hộp rồi cho đồ vào." },
      { ja: "週末は家を空ける予定だ。", vi: "Cuối tuần tôi dự định vắng nhà." },
    ],
  },
  {
    w: "でたらめ",
    r: "でたらめ",
    m: "bừa bãi, lung tung, không có căn cứ",
    examples: [
      { ja: "でたらめな数字を報告してはいけない。", vi: "Không được báo cáo số liệu bừa bãi." },
      { ja: "答えがわからないのででたらめに選んだ。", vi: "Không biết đáp án nên tôi chọn đại." },
      { ja: "その説明はでたらめに聞こえる。", vi: "Lời giải thích đó nghe không có căn cứ." },
    ],
  },
  {
    w: "ぎざぎざ",
    r: "ぎざぎざ",
    m: "lởm chởm, răng cưa, mép không đều",
    examples: [
      { ja: "紙の端がぎざぎざになっている。", vi: "Mép giấy bị lởm chởm." },
      { ja: "ぎざぎざの刃で段ボールを切った。", vi: "Tôi cắt thùng carton bằng lưỡi răng cưa." },
      { ja: "岩場は表面がぎざぎざで滑りにくい。", vi: "Mặt đá lởm chởm nên khó trượt." },
    ],
  },
  {
    w: "ごちゃごちゃ",
    r: "ごちゃごちゃ",
    m: "lộn xộn, lộn tùng phèo, rối rắm",
    examples: [
      { ja: "机の上がごちゃごちゃなので整理した。", vi: "Mặt bàn lộn xộn nên tôi sắp xếp." },
      { ja: "話がごちゃごちゃして要点がわからない。", vi: "Câu chuyện rối rắm nên không nắm được điểm chính." },
      { ja: "ごちゃごちゃ言わずに結論を先に言って。", vi: "Đừng nói lộn xộn, hãy nói kết luận trước." },
    ],
  },
  {
    w: "達する",
    r: "たっする",
    m: "ĐẠT — đạt tới (số, mức, nơi)",
    examples: [
      { ja: "気温が20度に達した。", vi: "Nhiệt độ đã đạt 20 độ." },
      { ja: "売上は目標額に達していない。", vi: "Doanh thu chưa đạt mức mục tiêu." },
      { ja: "山頂に達するまであと一時間だ。", vi: "Còn một giờ nữa mới tới đỉnh núi." },
    ],
  },
  {
    w: "退屈",
    r: "たいくつ",
    m: "ĐÃI QUẬT — chán, nhàm chán",
    examples: [
      { ja: "待ち時間が長くて退屈だった。", vi: "Chờ lâu nên tôi thấy chán." },
      { ja: "退屈な会議がやっと終わった。", vi: "Cuộc họp nhàm chán cuối cùng cũng xong." },
      { ja: "休日に退屈しないよう予定を入れた。", vi: "Tôi xếp lịch để ngày nghỉ không chán." },
    ],
  },
  {
    w: "当分",
    r: "とうぶん",
    m: "ĐƯƠNG PHÂN — trong một thời gian nữa, trước mắt",
    examples: [
      { ja: "この件は当分保留にします。", vi: "Việc này trước mắt sẽ để tạm." },
      { ja: "当分の間、在宅勤務が続く。", vi: "Trong một thời gian nữa vẫn làm việc tại nhà." },
      { ja: "新しい担当は当分決まりそうにない。", vi: "Người phụ trách mới trước mắt khó mà chốt được." },
    ],
  },
  {
    w: "一転する",
    r: "いってんする",
    m: "NHẤT CHUYỂN — đảo chiều, thay đổi hẳn",
    examples: [
      { ja: "試合の流れが一転して逆転した。", vi: "Thế trận đảo chiều rồi lội ngược." },
      { ja: "発表後、空気が一転して静かになった。", vi: "Sau thông báo, không khí đổi hẳn thành im ắng." },
      { ja: "方針が一転してスケジュールを組み直した。", vi: "Phương châm đổi hẳn nên tôi xếp lại lịch." },
    ],
  },
  {
    w: "じたばたする",
    r: "じたばたする",
    m: "giãy giụa, cuống lên, vùng vẫy (không bình tĩnh)",
    examples: [
      { ja: "締め切り前にじたばたしても遅い。", vi: "Sát hạn rồi mới cuống lên thì đã muộn." },
      { ja: "失敗したからといってじたばたするな。", vi: "Đừng vì thất bại mà giãy giụa." },
      { ja: "魚が網の中でじたばたしている。", vi: "Cá đang vùng vẫy trong lưới." },
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

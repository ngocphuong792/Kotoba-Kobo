/**
 * Thêm new-vocab.md (batch 10) vào chủ đề Từ vựng N2 (3 ví dụ / từ, nghĩa kèm Hán Việt).
 * Luôn thêm mới, không kiểm tra trùng.
 * Usage: node nguon/add-new-vocab-n2-batch10.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(root, "vocab-data.js"), "utf8"));
eval(fs.readFileSync(path.join(root, "examples-data.js"), "utf8"));

const data = window.VOCAB_DATA;
const EXAMPLES = window.EXAMPLES_DATA;

const E = (ja, vi) => ({ ja, vi });

const NEW = [
  { w: "刑事", r: "けいじ", m: "HÌNH SỰ — hình sự; cảnh sát hình sự, thám tử", examples: [
    E("刑事が事件の現場を調べている。", "Cảnh sát hình sự đang khám nghiệm hiện trường vụ án."),
    E("これは刑事事件として扱われる。", "Vụ này được xử lý như một vụ án hình sự."),
    E("彼は刑事になるのが夢だった。", "Trở thành cảnh sát hình sự là ước mơ của anh ấy.")] },
  { w: "起床", r: "きしょう", m: "KHỞI SÀNG — thức dậy, ngủ dậy", examples: [
    E("起床時間は毎朝六時だ。", "Giờ thức dậy mỗi sáng là sáu giờ."),
    E("合宿では五時に起床する。", "Ở trại tập huấn chúng tôi dậy lúc năm giờ."),
    E("起床後すぐにカーテンを開けた。", "Vừa thức dậy là tôi kéo rèm ra ngay.")] },
  { w: "収まる", r: "おさまる", m: "THU — nằm gọn trong, lắng xuống, dịu đi", examples: [
    E("荷物がかばんにきれいに収まった。", "Đồ đạc nằm gọn trong chiếc cặp."),
    E("薬を飲んだら痛みが収まった。", "Uống thuốc xong cơn đau dịu đi."),
    E("騒ぎはやっと収まった。", "Cuối cùng vụ ồn ào cũng lắng xuống.")] },
  { w: "定まる", r: "さだまる", m: "ĐỊNH — được định, ổn định, được xác định", examples: [
    E("ようやく方針が定まった。", "Cuối cùng phương châm đã được xác định."),
    E("狙いが定まらず、矢は的を外れた。", "Không ngắm được chuẩn nên mũi tên trượt đích."),
    E("まだ将来の進路が定まっていない。", "Hướng đi tương lai của tôi vẫn chưa được định ra.")] },
  { w: "視察", r: "しさつ", m: "THỊ SÁT — thị sát, đi kiểm tra thực địa", examples: [
    E("大臣が被災地を視察した。", "Bộ trưởng đi thị sát vùng bị thiên tai."),
    E("海外の工場を視察する予定だ。", "Dự định đi thị sát nhà máy ở nước ngoài."),
    E("視察の結果を報告書にまとめた。", "Tôi tổng hợp kết quả thị sát vào báo cáo.")] },
  { w: "施設", r: "しせつ", m: "THI THIẾT — cơ sở, công trình, thiết bị", examples: [
    E("市内には多くの公共施設がある。", "Trong thành phố có nhiều cơ sở công cộng."),
    E("この施設は誰でも無料で利用できる。", "Ai cũng có thể sử dụng cơ sở này miễn phí."),
    E("福祉施設で働くことになった。", "Tôi được nhận vào làm ở một cơ sở phúc lợi.")] },
  { w: "住居", r: "じゅうきょ", m: "TRÚ CƯ — nơi ở, nhà ở", examples: [
    E("住居の確保が最優先の課題だ。", "Đảm bảo chỗ ở là vấn đề ưu tiên hàng đầu."),
    E("彼は住居を転々としていた。", "Anh ấy chuyển nơi ở liên tục."),
    E("ここは住居専用の地域だ。", "Đây là khu vực chỉ dành cho nhà ở.")] },
  { w: "掘る", r: "ほる", m: "QUẬT — đào, khai quật", examples: [
    E("庭に穴を掘って木を植えた。", "Tôi đào hố trong vườn rồi trồng cây."),
    E("子どもたちは砂浜でトンネルを掘って遊んだ。", "Bọn trẻ đào đường hầm trên bãi cát để chơi."),
    E("この地域では温泉を掘り当てた。", "Ở khu vực này họ đã đào trúng suối nước nóng.")] },
  { w: "経過", r: "けいか", m: "KINH QUÁ — trôi qua, diễn biến, tiến triển", examples: [
    E("事故から一年が経過した。", "Đã một năm trôi qua kể từ vụ tai nạn."),
    E("手術後の経過は順調だ。", "Tiến triển sau phẫu thuật rất tốt."),
    E("経過を見て、また連絡します。", "Tôi sẽ theo dõi diễn biến rồi liên lạc lại.")] },
  { w: "判断", r: "はんだん", m: "PHÁN ĐOÁN — phán đoán, nhận định, quyết định", examples: [
    E("状況を見て、自分で判断してください。", "Hãy nhìn tình hình rồi tự mình phán đoán."),
    E("彼の判断は正しかった。", "Phán đoán của anh ấy là đúng."),
    E("情報が少なくて判断できない。", "Thông tin ít quá nên không thể phán đoán được.")] },
  { w: "裂ける", r: "さける", m: "LIỆT — rách, nứt, toạc ra", examples: [
    E("引っ張ったらシャツが裂けた。", "Kéo mạnh một cái là cái áo bị rách."),
    E("地震で地面が裂けた。", "Mặt đất bị nứt toác vì động đất."),
    E("口が裂けても言えない秘密だ。", "Đó là bí mật có chết cũng không nói.")] },
  { w: "スカート", r: "スカート", m: "(skirt) — váy, chân váy", examples: [
    E("彼女は赤いスカートをはいている。", "Cô ấy đang mặc chiếc váy đỏ."),
    E("スカートの丈を短くした。", "Tôi đã làm ngắn chiều dài váy."),
    E("風でスカートが揺れた。", "Chiếc váy lay động trong gió.")] },
  { w: "確信", r: "かくしん", m: "XÁC TÍN — tin chắc, chắc chắn", examples: [
    E("私は彼が無実だと確信している。", "Tôi tin chắc anh ấy vô tội."),
    E("成功を確信して準備を進めた。", "Tôi tin chắc sẽ thành công nên tiếp tục chuẩn bị."),
    E("確信が持てず、決断できなかった。", "Không tin chắc được nên tôi không quyết định nổi.")] },
  { w: "攻撃", r: "こうげき", m: "CÔNG KÍCH — tấn công, công kích", examples: [
    E("チームは後半から攻撃に転じた。", "Đội chuyển sang tấn công từ hiệp hai."),
    E("彼の意見は激しい攻撃を受けた。", "Ý kiến của anh ấy bị công kích dữ dội."),
    E("攻撃は最大の防御なり。", "Tấn công là phòng thủ tốt nhất.")] },
  { w: "背中", r: "せなか", m: "BỐI TRUNG — lưng, phần lưng", examples: [
    E("母の背中は大きく見えた。", "Tấm lưng của mẹ trông thật to lớn."),
    E("背中が痛くて眠れない。", "Đau lưng nên không ngủ được."),
    E("子どもを背中に背負って歩いた。", "Tôi cõng con trên lưng đi bộ.")] },
  { w: "もともと", r: "もともと", m: "— vốn dĩ, ban đầu, xưa nay vốn", examples: [
    E("彼女はもともと体が丈夫だ。", "Cô ấy vốn dĩ có thể trạng khỏe."),
    E("もともとは私の考えではなかった。", "Ban đầu đó không phải là ý của tôi."),
    E("失敗してもともとだ。やってみよう。", "Thất bại thì cũng như chưa có gì, cứ thử đi.")] },
  { w: "改定", r: "かいてい", m: "CẢI ĐỊNH — sửa đổi, điều chỉnh (quy định, giá cả)", examples: [
    E("来月から料金が改定される。", "Từ tháng sau biểu phí sẽ được điều chỉnh."),
    E("規則を改定する必要がある。", "Cần phải sửa đổi quy tắc."),
    E("教科書が改定されて内容が変わった。", "Sách giáo khoa được sửa đổi nên nội dung thay đổi.")] },
  { w: "調整", r: "ちょうせい", m: "ĐIỀU CHỈNH — điều chỉnh, sắp xếp, phối hợp", examples: [
    E("スケジュールを調整して会議の時間を決めた。", "Tôi điều chỉnh lịch rồi chốt giờ họp."),
    E("エアコンの温度を調整した。", "Tôi chỉnh nhiệt độ điều hòa."),
    E("部署間の意見を調整するのは難しい。", "Phối hợp ý kiến giữa các phòng ban rất khó.")] },
  { w: "教育論", r: "きょういくろん", m: "GIÁO DỤC LUẬN — lý luận giáo dục, quan điểm về giáo dục", examples: [
    E("彼は独自の教育論を持っている。", "Ông ấy có quan điểm giáo dục riêng."),
    E("教育論をめぐって激しい議論になった。", "Đã nảy lửa tranh luận xoay quanh lý luận giáo dục."),
    E("この本は現代の教育論を分かりやすく説明している。", "Cuốn sách này giải thích dễ hiểu lý luận giáo dục hiện đại.")] },
  { w: "要点", r: "ようてん", m: "YẾU ĐIỂM — điểm chính, trọng điểm", examples: [
    E("話の要点をまとめてください。", "Hãy tóm tắt các điểm chính của câu chuyện."),
    E("彼の説明は要点がつかみにくい。", "Lời giải thích của anh ấy khó nắm được trọng tâm."),
    E("授業の要点をノートに書いた。", "Tôi ghi các điểm chính của bài học vào vở.")] },
  { w: "流行る", r: "はやる", m: "LƯU HÀNH — thịnh hành, phổ biến; lan rộng (bệnh)", examples: [
    E("今、この歌が流行っている。", "Bây giờ bài hát này đang thịnh hành."),
    E("冬になるとインフルエンザが流行る。", "Vào mùa đông cúm lan rộng."),
    E("あの店はいつも流行っていて客が多い。", "Quán đó lúc nào cũng đắt khách.")] },
  { w: "一括", r: "いっかつ", m: "NHẤT QUÁT — gộp lại, làm một lượt, trả một lần", examples: [
    E("代金は一括で支払った。", "Tôi đã trả toàn bộ tiền một lần."),
    E("書類を一括して送ってください。", "Hãy gộp hết hồ sơ lại rồi gửi."),
    E("申し込みを一括で処理する。", "Xử lý các đơn đăng ký cùng một lượt.")] },
  { w: "誓う", r: "ちかう", m: "THỆ — thề, thề nguyện, hứa chắc", examples: [
    E("二人は永遠の愛を誓った。", "Hai người đã thề yêu nhau mãi mãi."),
    E("二度と嘘をつかないと誓います。", "Tôi thề sẽ không bao giờ nói dối nữa."),
    E("彼は優勝を誓って練習に励んだ。", "Anh ấy thề sẽ vô địch và miệt mài luyện tập.")] },
  { w: "逸れる", r: "それる", m: "DẬT — lệch hướng, chệch đi, lạc đề", examples: [
    E("ボールが的から逸れた。", "Quả bóng chệch khỏi mục tiêu."),
    E("台風は進路が逸れて海へ向かった。", "Bão chệch hướng và ra biển."),
    E("話が本題から逸れてしまった。", "Câu chuyện đã bị lạc khỏi chủ đề chính.")] },
  { w: "狂う", r: "くるう", m: "CUỒNG — phát điên, hỏng, lệch (sai lạc)", examples: [
    E("時計が狂って、時間が合わない。", "Đồng hồ chạy sai nên giờ không khớp."),
    E("計画が狂ってしまった。", "Kế hoạch đã bị đảo lộn."),
    E("彼は音楽に狂ったように熱中した。", "Anh ấy mê mẩn âm nhạc như phát cuồng.")] },
  { w: "偏る", r: "かたよる", m: "THIÊN — thiên lệch, lệch về một phía, mất cân đối", examples: [
    E("食事の栄養が偏っている。", "Chế độ ăn bị mất cân đối dinh dưỡng."),
    E("この記事は意見が偏っている。", "Bài báo này có quan điểm thiên lệch."),
    E("荷物が片方に偏って重い。", "Hành lý dồn lệch về một bên nên nặng.")] },
  { w: "開発", r: "かいはつ", m: "KHAI PHÁT — phát triển, khai thác, nghiên cứu (sản phẩm, vùng đất)", examples: [
    E("新しい薬の開発に成功した。", "Đã thành công trong việc phát triển thuốc mới."),
    E("この地域は開発が進んでいる。", "Khu vực này đang được phát triển."),
    E("ゲームの開発には時間がかかる。", "Phát triển trò chơi tốn nhiều thời gian.")] },
  { w: "消失", r: "しょうしつ", m: "TIÊU THẤT — biến mất, mất đi, tiêu tan", examples: [
    E("火事で貴重な資料が消失した。", "Tài liệu quý đã bị mất do hỏa hoạn."),
    E("データが突然消失してしまった。", "Dữ liệu đột nhiên biến mất."),
    E("自信が消失して何もできなくなった。", "Mất hết tự tin nên tôi không làm được gì nữa.")] },
  { w: "なまいき", r: "なまいき", m: "SINH Ý KHÍ (生意気) — láo xược, hỗn láo, trịch thượng", examples: [
    E("子どものくせに生意気なことを言うな。", "Còn là trẻ con mà đừng ăn nói hỗn láo."),
    E("彼は生意気な態度で先輩に接した。", "Cậu ấy đối xử với đàn anh bằng thái độ trịch thượng."),
    E("生意気だと言われても、自分の意見は変えない。", "Dù bị nói là láo, tôi cũng không đổi ý kiến.")] },
  { w: "おおざっぱ", r: "おおざっぱ", m: "ĐẠI TẠP BÀ (大雑把) — đại khái, qua loa, sơ sài", examples: [
    E("彼は何事も大ざっぱだ。", "Anh ấy việc gì cũng qua loa."),
    E("大ざっぱに言うと、こういうことだ。", "Nói đại khái thì là như thế này."),
    E("大ざっぱな計算では五万円ぐらいだ。", "Tính sơ sơ thì khoảng năm vạn yên.")] },
  { w: "痛ましい", r: "いたましい", m: "THỐNG — thương tâm, đau lòng, thảm thương", examples: [
    E("痛ましい事故が起きた。", "Đã xảy ra một vụ tai nạn thương tâm."),
    E("被害者の姿はあまりにも痛ましかった。", "Dáng vẻ của nạn nhân thật quá thảm thương."),
    E("痛ましいニュースに胸が痛んだ。", "Tin tức đau lòng khiến tôi xót xa.")] },
  { w: "迫る", r: "せまる", m: "BÁCH — đến gần, cận kề; ép buộc, thúc ép", examples: [
    E("試験の日が迫っている。", "Ngày thi đang cận kề."),
    E("犯人は警察に追い詰められ、逃げ道が迫ってきた。", "Thủ phạm bị cảnh sát dồn vào đường cùng."),
    E("彼は私に返事を迫った。", "Anh ấy thúc ép tôi trả lời.")] },
  { w: "一時的", r: "いちじてき", m: "NHẤT THỜI ĐÍCH — tạm thời, nhất thời", examples: [
    E("一時的に電話がつながらなくなった。", "Điện thoại tạm thời không gọi được."),
    E("この症状は一時的なものだ。", "Triệu chứng này chỉ là tạm thời."),
    E("一時的な感情で決めてはいけない。", "Không nên quyết định bằng cảm xúc nhất thời.")] },
  { w: "関与", r: "かんよ", m: "QUAN DỰ — tham gia vào, có dính líu, can dự", examples: [
    E("彼はその事件に関与していない。", "Anh ấy không dính líu đến vụ việc đó."),
    E("政府が経済に関与しすぎるのは良くない。", "Chính phủ can thiệp quá nhiều vào kinh tế là không tốt."),
    E("計画の立案に関与した。", "Tôi đã tham gia lập kế hoạch.")] },
  { w: "ちくちく", r: "ちくちく", m: "(từ tượng hình) — châm chích, nhói nhói, ngứa ran", examples: [
    E("このセーターは首がちくちくする。", "Cái áo len này làm cổ tôi ngứa châm chích."),
    E("胃がちくちく痛む。", "Dạ dày tôi đau nhói."),
    E("彼の皮肉が胸にちくちく刺さった。", "Lời mỉa mai của anh ấy đâm nhói vào lòng tôi.")] },
  { w: "反則", r: "はんそく", m: "PHẢN TẮC — phạm luật, lỗi (thể thao, trò chơi)", examples: [
    E("彼は反則をして退場になった。", "Anh ấy phạm lỗi nên bị đuổi khỏi sân."),
    E("それは反則だよ。ずるい。", "Thế là phạm luật đấy, gian lận."),
    E("反則スレスレのプレーだった。", "Đó là pha chơi sát nút phạm luật.")] },
  { w: "要約", r: "ようやく", m: "YẾU ƯỚC — tóm tắt, tóm lược", examples: [
    E("長い文章を三行に要約した。", "Tôi tóm tắt bài dài thành ba dòng."),
    E("先生は話を要約して説明してくれた。", "Thầy giáo đã tóm lược câu chuyện rồi giải thích."),
    E("この論文の要約を読んだ。", "Tôi đã đọc phần tóm tắt của bài luận này.")] },
  { w: "競技", r: "きょうぎ", m: "CẠNH KỸ — môn thi đấu, cuộc thi (thể thao)", examples: [
    E("陸上競技の大会に出場した。", "Tôi tham gia giải điền kinh."),
    E("オリンピックには多くの競技がある。", "Olympic có rất nhiều môn thi đấu."),
    E("競技場は応援する人で満員だった。", "Sân thi đấu chật kín người cổ vũ.")] },
  { w: "消毒", r: "しょうどく", m: "TIÊU ĐỘC — khử trùng, sát trùng", examples: [
    E("傷口を消毒してから薬をつけた。", "Tôi sát trùng vết thương rồi bôi thuốc."),
    E("入る前に手を消毒してください。", "Hãy khử trùng tay trước khi vào."),
    E("哺乳瓶を熱湯で消毒する。", "Khử trùng bình sữa bằng nước sôi.")] },
  { w: "説教", r: "せっきょう", m: "THUYẾT GIÁO — thuyết giáo, giảng đạo; lên lớp, răn dạy", examples: [
    E("遅刻して先生に説教された。", "Đi muộn nên bị thầy giáo lên lớp."),
    E("父の説教は長い。", "Bố tôi răn dạy rất dài dòng."),
    E("説教くさい話は聞きたくない。", "Tôi không muốn nghe những lời răn đời.")] },
  { w: "構わない", r: "かまわない", m: "CẤU — không sao, không ngại, không bận tâm", examples: [
    E("明日でも構わない。", "Ngày mai cũng không sao."),
    E("多少高くても構わないから、いいものがほしい。", "Dù đắt một chút cũng được, tôi muốn món tốt."),
    E("ここに座っても構いませんか。", "Tôi ngồi đây có được không ạ?")] },
  { w: "縮小", r: "しゅくしょう", m: "SÚC TIỂU — thu nhỏ, cắt giảm quy mô", examples: [
    E("不況で事業を縮小した。", "Vì suy thoái nên công ty thu hẹp việc kinh doanh."),
    E("写真を縮小して印刷した。", "Tôi thu nhỏ ảnh rồi in."),
    E("予算の縮小が決まった。", "Đã quyết định cắt giảm ngân sách.")] },
  { w: "裏付ける", r: "うらづける", m: "LÝ PHÓ — chứng minh, củng cố bằng chứng cứ", examples: [
    E("データがその説を裏付けている。", "Dữ liệu chứng minh cho giả thuyết đó."),
    E("証拠で彼の話を裏付けた。", "Tôi đã dùng chứng cứ để củng cố lời kể của anh ấy."),
    E("事実に裏付けられた主張だ。", "Đó là lập luận có sự thật làm cơ sở.")] },
  { w: "ぶくぶく", r: "ぶくぶく", m: "(từ tượng hình) — sủi bọt, nổi bong bóng; béo phì phị", examples: [
    E("鍋の中でお湯がぶくぶくと泡立っている。", "Nước trong nồi sủi bọt ùng ục."),
    E("子どもが水の中でぶくぶくと息を吐いた。", "Đứa trẻ thổi bong bóng trong nước."),
    E("運動不足でぶくぶく太ってしまった。", "Ít vận động nên tôi béo phị ra.")] },
  { w: "一致", r: "いっち", m: "NHẤT TRÍ — thống nhất, trùng khớp, giống nhau", examples: [
    E("二人の意見が一致した。", "Ý kiến của hai người đã thống nhất."),
    E("指紋が一致して犯人が分かった。", "Dấu vân tay trùng khớp nên xác định được thủ phạm."),
    E("彼の話は事実と一致している。", "Lời kể của anh ấy khớp với sự thật.")] },
  { w: "早急", r: "さっきゅう", m: "TẢO CẤP — khẩn cấp, gấp, cấp bách", examples: [
    E("早急に対応をお願いします。", "Xin hãy xử lý khẩn cấp."),
    E("この問題は早急な解決が必要だ。", "Vấn đề này cần được giải quyết gấp."),
    E("早急に連絡してください。", "Hãy liên lạc ngay lập tức.")] },
  { w: "振る", r: "ふる", m: "CHẤN — vẫy, lắc, vung; từ chối (tình cảm)", examples: [
    E("駅で手を振って別れた。", "Chúng tôi vẫy tay chia tay ở nhà ga."),
    E("バットを思い切り振った。", "Tôi vung gậy hết sức."),
    E("彼は恋人に振られて落ち込んでいる。", "Anh ấy bị người yêu đá nên đang buồn.")] },
  { w: "追い払う", r: "おいはらう", m: "TRUY PHẤT — xua đuổi, đuổi đi", examples: [
    E("畑に来る鳥を追い払った。", "Tôi xua đuổi chim đến phá ruộng."),
    E("犬を追い払うために石を投げた。", "Tôi ném đá để đuổi con chó đi."),
    E("彼は不安を追い払うように深呼吸した。", "Anh ấy hít sâu như để xua tan nỗi bất an.")] },
  { w: "締め出す", r: "しめだす", m: "ĐẾ XUẤT — khóa cửa không cho vào, đóng cửa chặn lại; loại ra", examples: [
    E("鍵を忘れて家から締め出された。", "Quên chìa khóa nên tôi bị khóa ngoài nhà."),
    E("外国企業を市場から締め出す。", "Loại các công ty nước ngoài ra khỏi thị trường."),
    E("うるさいので子どもを部屋から締め出した。", "Ồn quá nên tôi đuổi bọn trẻ ra khỏi phòng rồi đóng cửa.")] },
  { w: "ポーズ", r: "ポーズ", m: "(pose) — tư thế, dáng điệu; (pause) tạm dừng", examples: [
    E("写真を撮るときに変なポーズをした。", "Lúc chụp ảnh tôi làm tư thế kỳ cục."),
    E("モデルがいろいろなポーズを決めた。", "Người mẫu tạo đủ kiểu dáng."),
    E("彼はクールなポーズを取っているだけだ。", "Anh ta chỉ giả bộ làm ra vẻ lạnh lùng thôi.")] },
  { w: "妙", r: "みょう", m: "DIỆU — lạ, kỳ lạ, khác thường; khéo", examples: [
    E("今日は妙に静かだ。", "Hôm nay yên tĩnh một cách lạ lùng."),
    E("妙な音がしたので、見に行った。", "Nghe tiếng động lạ nên tôi ra xem."),
    E("彼が来ないのは妙だ。", "Việc anh ấy không đến thật là lạ.")] },
  { w: "粗末", r: "そまつ", m: "THÔ MẠT — sơ sài, tồi tàn; lãng phí (粗末にする)", examples: [
    E("粗末な食事しか出せなくてすみません。", "Xin lỗi vì chỉ có thể mời bữa ăn đạm bạc."),
    E("食べ物を粗末にしてはいけない。", "Không được lãng phí đồ ăn."),
    E("古くて粗末な小屋に住んでいた。", "Họ sống trong căn lều cũ kỹ tồi tàn.")] },
  { w: "熱中", r: "ねっちゅう", m: "NHIỆT TRUNG — mải mê, say mê, đam mê", examples: [
    E("子どもたちはゲームに熱中している。", "Bọn trẻ đang mải mê chơi game."),
    E("彼は仕事に熱中して、時間を忘れた。", "Anh ấy mải mê làm việc quên cả thời gian."),
    E("何かに熱中するのはいいことだ。", "Đam mê điều gì đó là một điều tốt.")] },
  { w: "批判", r: "ひはん", m: "PHÊ PHÁN — phê phán, chỉ trích, nhận xét", examples: [
    E("政府の政策が批判された。", "Chính sách của chính phủ bị phê phán."),
    E("人を批判する前に、自分を見直そう。", "Trước khi chỉ trích người khác, hãy xem lại bản thân."),
    E("彼は批判を恐れずに意見を言った。", "Anh ấy nói ý kiến mà không sợ bị chỉ trích.")] },
  { w: "愛着", r: "あいちゃく", m: "ÁI TRƯỚC — gắn bó, quyến luyến, yêu quý (đồ vật, nơi chốn)", examples: [
    E("長年使った時計に愛着がある。", "Tôi gắn bó với chiếc đồng hồ dùng nhiều năm."),
    E("この町には愛着を感じている。", "Tôi cảm thấy gắn bó với thị trấn này."),
    E("愛着のある家を手放すのはつらい。", "Thật đau lòng khi phải rời bỏ ngôi nhà đã gắn bó.")] },
  { w: "棚", r: "たな", m: "BẰNG — giá, kệ, ngăn", examples: [
    E("本を棚に並べた。", "Tôi xếp sách lên kệ."),
    E("高い棚の上の箱を取ってください。", "Hãy lấy giúp cái hộp trên kệ cao."),
    E("スーパーの棚が空になっている。", "Kệ ở siêu thị đã trống trơn.")] },
  { w: "柱", r: "はしら", m: "TRỤ — cột, trụ; trụ cột", examples: [
    E("古い家の柱は太くてしっかりしている。", "Cột của ngôi nhà cổ vừa to vừa vững."),
    E("彼は一家の大黒柱だ。", "Anh ấy là trụ cột của gia đình."),
    E("柱に背の高さを刻んだ。", "Tôi khắc chiều cao lên cột.")] },
  { w: "討論", r: "とうろん", m: "THẢO LUẬN — thảo luận, tranh luận, tranh biện", examples: [
    E("クラスで環境問題について討論した。", "Cả lớp thảo luận về vấn đề môi trường."),
    E("テレビで政治家たちが討論している。", "Các chính trị gia đang tranh luận trên ti vi."),
    E("活発な討論が行われた。", "Đã diễn ra cuộc thảo luận sôi nổi.")] },
  { w: "統一", r: "とういつ", m: "THỐNG NHẤT — thống nhất, làm cho đồng bộ", examples: [
    E("書類の形式を統一する。", "Thống nhất định dạng hồ sơ."),
    E("チームの意見を統一するのは難しい。", "Thống nhất ý kiến của cả nhóm thật khó."),
    E("色を統一すると部屋がすっきり見える。", "Thống nhất màu sắc thì căn phòng trông gọn gàng.")] },
  { w: "拡充", r: "かくじゅう", m: "KHUẾCH SUNG — mở rộng, bổ sung, tăng cường", examples: [
    E("学校の図書館が拡充された。", "Thư viện của trường đã được mở rộng."),
    E("子育て支援の拡充を求める声がある。", "Có tiếng nói đòi tăng cường hỗ trợ nuôi dạy con."),
    E("サービス内容を拡充して顧客を増やした。", "Mở rộng nội dung dịch vụ để tăng khách hàng.")] },
  { w: "予備", r: "よび", m: "DỰ BỊ — dự phòng, dự trữ, sơ bộ", examples: [
    E("予備の電池を持っていく。", "Tôi mang theo pin dự phòng."),
    E("予備の席も用意しておいた。", "Tôi cũng đã chuẩn bị sẵn chỗ ngồi dự phòng."),
    E("本番の前に予備実験を行う。", "Tiến hành thí nghiệm sơ bộ trước khi làm thật.")] },
  { w: "予防", r: "よぼう", m: "DỰ PHÒNG — phòng ngừa, đề phòng", examples: [
    E("風邪の予防にうがいをしている。", "Tôi súc miệng để phòng cảm."),
    E("予防注射を受けた。", "Tôi đã tiêm phòng."),
    E("火事を予防するために点検が行われた。", "Đã tiến hành kiểm tra để phòng ngừa hỏa hoạn.")] },
  { w: "守衛", r: "しゅえい", m: "THỦ VỆ — bảo vệ, người gác cổng", examples: [
    E("夜は守衛が見回りをしている。", "Ban đêm bảo vệ đi tuần tra."),
    E("守衛に入館証を見せた。", "Tôi đưa thẻ vào tòa nhà cho bảo vệ xem."),
    E("会社の門に守衛が立っている。", "Có bảo vệ đứng ở cổng công ty.")] },
  { w: "自衛", r: "じえい", m: "TỰ VỆ — tự vệ, tự bảo vệ", examples: [
    E("自衛のために防犯ブザーを持っている。", "Tôi mang còi báo động để tự vệ."),
    E("彼らは自衛手段を考えている。", "Họ đang suy nghĩ các biện pháp tự vệ."),
    E("自衛の権利は認められている。", "Quyền tự vệ được công nhận.")] },
];

NEW.forEach((x) => {
  if (!Array.isArray(x.examples) || x.examples.length !== 3) {
    throw new Error("Need 3 examples: " + x.w);
  }
});

const n2Theme = data.themes.find((t) => t.id === "n2");
if (!n2Theme) throw new Error("theme n2 missing");

let added = 0;
const addedIds = [];

for (const entry of NEW) {
  const id = "v" + String(data.items.length + 1).padStart(4, "0");
  data.items.push({ id, w: entry.w, r: entry.r, m: entry.m, t: "n2", s: "Từ vựng N2" });
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

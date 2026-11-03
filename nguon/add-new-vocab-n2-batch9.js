/**
 * Thêm new-vocab.md (batch 9) vào chủ đề Từ vựng N2 (3 ví dụ / từ, nghĩa kèm Hán Việt).
 * Luôn thêm mới, không kiểm tra trùng.
 * Usage: node nguon/add-new-vocab-n2-batch9.js
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
  { w: "打ち合わせ", r: "うちあわせ", m: "ĐẢ HỢP — họp bàn, trao đổi trước, bàn bạc", examples: [
    E("明日の十時に打ち合わせがある。", "Mười giờ sáng mai có buổi họp bàn."),
    E("取引先と打ち合わせをしてから会社に戻る。", "Tôi họp bàn với đối tác rồi mới về công ty."),
    E("旅行の日程について打ち合わせしよう。", "Hãy cùng bàn bạc về lịch trình chuyến đi.")] },
  { w: "ベテラン", r: "ベテラン", m: "(veteran) — người giàu kinh nghiệm, lão luyện", examples: [
    E("彼はこの道三十年のベテランだ。", "Anh ấy là người lão luyện ba mươi năm trong nghề."),
    E("ベテランの先生に相談した。", "Tôi đã hỏi ý kiến một giáo viên giàu kinh nghiệm."),
    E("ベテラン選手が若手を引っ張っている。", "Cầu thủ kỳ cựu đang dẫn dắt các bạn trẻ.")] },
  { w: "ぼろぼろ", r: "ぼろぼろ", m: "(từ tượng hình) — rách tả tơi, hỏng nát; kiệt quệ; rơi lả tả", examples: [
    E("この靴はぼろぼろになるまで履いた。", "Đôi giày này tôi đi đến khi rách tả tơi."),
    E("徹夜続きで体がぼろぼろだ。", "Thức trắng liên tục nên cơ thể rã rời."),
    E("感動して涙がぼろぼろこぼれた。", "Cảm động đến nỗi nước mắt rơi lã chã.")] },
  { w: "負担", r: "ふたん", m: "PHỤ ĐẢM — gánh nặng, gánh vác, chịu (chi phí)", examples: [
    E("交通費は自己負担です。", "Phí đi lại do bản thân tự chịu."),
    E("仕事の負担が大きくて疲れている。", "Gánh nặng công việc lớn nên tôi rất mệt."),
    E("この制度は国民の負担を軽くする。", "Chế độ này làm nhẹ gánh nặng cho người dân.")] },
  { w: "維持", r: "いじ", m: "DUY TRÌ — duy trì, giữ gìn", examples: [
    E("健康を維持するために運動している。", "Tôi tập thể dục để duy trì sức khỏe."),
    E("車の維持費は意外と高い。", "Chi phí duy trì xe hơi cao bất ngờ."),
    E("現状を維持するだけでも大変だ。", "Chỉ riêng việc giữ nguyên hiện trạng cũng đã vất vả.")] },
  { w: "模範", r: "もはん", m: "MÔ PHẠM — gương mẫu, mẫu mực, kiểu mẫu", examples: [
    E("彼は学生の模範となる存在だ。", "Anh ấy là tấm gương cho sinh viên."),
    E("先生が模範を示してくれた。", "Thầy giáo đã làm mẫu cho chúng tôi xem."),
    E("模範的な行動が評価された。", "Hành động mẫu mực được đánh giá cao.")] },
  { w: "帯", r: "おび", m: "ĐỚI — đai, thắt lưng (obi); dải, vành đai", examples: [
    E("着物の帯をきれいに結んだ。", "Tôi thắt obi của bộ kimono thật đẹp."),
    E("この辺りは住宅地帯だ。", "Khu vực này là vùng nhà ở."),
    E("本に帯が付いていて、あらすじが書いてある。", "Cuốn sách có băng giấy quấn ngoài ghi tóm tắt nội dung.")] },
  { w: "捨てる", r: "すてる", m: "XẢ — vứt, bỏ, từ bỏ", examples: [
    E("いらない物を捨てて部屋を片付けた。", "Tôi vứt đồ không cần rồi dọn phòng."),
    E("道にごみを捨ててはいけない。", "Không được vứt rác ra đường."),
    E("彼は夢を捨てずに頑張り続けた。", "Anh ấy không từ bỏ ước mơ mà tiếp tục cố gắng.")] },
  { w: "投げる", r: "なげる", m: "ĐẦU — ném, quăng; bỏ cuộc", examples: [
    E("ボールを遠くへ投げた。", "Tôi ném quả bóng ra xa."),
    E("犬に棒を投げて取ってこさせた。", "Tôi ném cây gậy cho chó đi nhặt về."),
    E("難しくて途中で投げてしまった。", "Khó quá nên tôi bỏ cuộc giữa chừng.")] },
  { w: "腕", r: "うで", m: "OẢN — cánh tay; tay nghề, năng lực", examples: [
    E("重い荷物を持って腕が痛くなった。", "Xách đồ nặng làm tay tôi đau."),
    E("彼は料理の腕がいい。", "Anh ấy nấu ăn rất giỏi."),
    E("腕を磨くために毎日練習している。", "Tôi luyện tập mỗi ngày để mài giũa tay nghề.")] },
  { w: "もてなす", r: "もてなす", m: "— tiếp đãi, chiêu đãi, đón tiếp (khách)", examples: [
    E("お客様を心からもてなした。", "Chúng tôi tiếp đãi khách hết lòng."),
    E("手料理でもてなしてくれた。", "Họ chiêu đãi chúng tôi bằng món tự nấu."),
    E("日本のもてなしの心は世界で有名だ。", "Tinh thần hiếu khách của Nhật nổi tiếng thế giới.")] },
  { w: "おだてる", r: "おだてる", m: "— tâng bốc, nịnh nọt, xu nịnh", examples: [
    E("おだてられて、つい引き受けてしまった。", "Bị tâng bốc nên tôi lỡ nhận lời."),
    E("彼は人をおだてるのが上手だ。", "Anh ta giỏi nịnh người khác."),
    E("子どもをおだてて勉強させる。", "Tâng bốc con để nó chịu học.")] },
  { w: "許す", r: "ゆるす", m: "HỨA — tha thứ, cho phép, thừa nhận", examples: [
    E("彼の失敗を許してあげた。", "Tôi đã tha thứ cho lỗi lầm của anh ấy."),
    E("ここでの撮影は許されていない。", "Ở đây không được phép chụp ảnh."),
    E("時間が許せば、観光もしたい。", "Nếu thời gian cho phép, tôi cũng muốn tham quan.")] },
  { w: "通過", r: "つうか", m: "THÔNG QUÁ — đi qua, vượt qua, thông qua", examples: [
    E("電車は駅を通過した。", "Tàu đã đi qua nhà ga."),
    E("台風は関東地方を通過した。", "Bão đã đi qua vùng Kanto."),
    E("書類審査を通過して面接に進んだ。", "Tôi qua vòng xét hồ sơ và vào phỏng vấn.")] },
  { w: "横断", r: "おうだん", m: "HOÀNH ĐOẠN — băng qua, đi ngang, cắt ngang", examples: [
    E("横断歩道を渡るときは左右を確認する。", "Khi qua vạch đi bộ phải nhìn hai bên."),
    E("彼は自転車で日本を横断した。", "Anh ấy đã đạp xe xuyên ngang nước Nhật."),
    E("道路の横断は危険だ。", "Băng qua đường rất nguy hiểm.")] },
  { w: "通信", r: "つうしん", m: "THÔNG TÍN — viễn thông, liên lạc, truyền tin", examples: [
    E("山の中では通信ができない。", "Ở trong núi không thể liên lạc được."),
    E("通信速度が速くなった。", "Tốc độ truyền tin đã nhanh hơn."),
    E("通信教育で資格を取った。", "Tôi lấy chứng chỉ bằng học từ xa.")] },
  { w: "報道", r: "ほうどう", m: "BÁO ĐẠO — đưa tin, tin tức, báo chí", examples: [
    E("事故のニュースが大きく報道された。", "Tin tức về vụ tai nạn được đưa lên rất lớn."),
    E("報道によると、犯人は逮捕された。", "Theo báo chí, thủ phạm đã bị bắt."),
    E("報道の自由は守られるべきだ。", "Tự do báo chí cần được bảo vệ.")] },
  { w: "多大", r: "ただい", m: "ĐA ĐẠI — to lớn, rất nhiều, nhiều vô kể", examples: [
    E("多大なご協力に感謝します。", "Chúng tôi cảm ơn sự giúp đỡ to lớn của quý vị."),
    E("その事故は多大な被害をもたらした。", "Vụ tai nạn đó gây ra thiệt hại rất lớn."),
    E("多大な努力が必要だ。", "Cần có nỗ lực rất lớn.")] },
  { w: "大まか", r: "おおまか", m: "ĐẠI — đại khái, sơ lược, tổng quát", examples: [
    E("大まかな計画を立てた。", "Tôi lập kế hoạch đại khái."),
    E("費用を大まかに計算してみた。", "Tôi thử tính chi phí một cách sơ lược."),
    E("彼は大まかな性格で、細かいことは気にしない。", "Anh ấy tính xuề xòa, không để ý chuyện vụn vặt.")] },
  { w: "大げさ", r: "おおげさ", m: "ĐẠI — phóng đại, làm quá, khoa trương", examples: [
    E("彼は何でも大げさに話す。", "Anh ấy cái gì cũng nói quá lên."),
    E("ちょっと転んだだけなのに、大げさだよ。", "Chỉ ngã chút thôi mà, làm quá rồi đấy."),
    E("大げさな表現は避けたほうがいい。", "Nên tránh cách nói phóng đại.")] },
  { w: "溶け込む", r: "とけこむ", m: "DUNG NHẬP — hòa nhập, hòa vào, tan vào", examples: [
    E("新しい環境にすぐ溶け込んだ。", "Tôi hòa nhập ngay với môi trường mới."),
    E("留学生がクラスに溶け込めてよかった。", "May quá, du học sinh đã hòa nhập được với lớp."),
    E("砂糖が水に溶け込んだ。", "Đường đã tan vào nước.")] },
  { w: "当てはまる", r: "あてはまる", m: "ĐƯƠNG — áp dụng được, phù hợp với, đúng với", examples: [
    E("この規則は全員に当てはまる。", "Quy tắc này áp dụng cho tất cả mọi người."),
    E("当てはまるものに丸をつけてください。", "Hãy khoanh tròn vào mục phù hợp."),
    E("その説明は私には当てはまらない。", "Lời giải thích đó không đúng với trường hợp của tôi.")] },
  { w: "結びつく", r: "むすびつく", m: "KẾT — gắn kết, liên kết, dẫn đến", examples: [
    E("努力が結果に結びついた。", "Nỗ lực đã dẫn đến kết quả."),
    E("二つの事件は深く結びついている。", "Hai vụ việc có liên hệ chặt chẽ."),
    E("学んだ知識を仕事に結びつけたい。", "Tôi muốn gắn kiến thức đã học với công việc.")] },
  { w: "触れ合う", r: "ふれあう", m: "XÚC HỢP — chạm vào nhau; gần gũi, tiếp xúc, giao lưu", examples: [
    E("動物と触れ合う体験ができる。", "Có thể trải nghiệm tiếp xúc với động vật."),
    E("人と人の心が触れ合う瞬間が好きだ。", "Tôi thích khoảnh khắc trái tim người với người chạm nhau."),
    E("地域の人々と触れ合う機会が増えた。", "Cơ hội giao lưu với người dân địa phương đã tăng.")] },
  { w: "うっとうしい", r: "うっとうしい", m: "— phiền phức, khó chịu, bực bội; u ám (trời)", examples: [
    E("梅雨の天気はうっとうしい。", "Thời tiết mùa mưa thật khó chịu."),
    E("前髪が長くてうっとうしい。", "Mái tóc mái dài thật vướng víu."),
    E("彼の自慢話がうっとうしかった。", "Những lời khoe khoang của anh ta thật phiền.")] },
  { w: "おおよそ", r: "おおよそ", m: "— khoảng chừng, đại khái, đại thể", examples: [
    E("ここから駅までおおよそ十分かかる。", "Từ đây đến ga mất khoảng mười phút."),
    E("話の内容はおおよそ理解できた。", "Tôi đã hiểu đại khái nội dung câu chuyện."),
    E("参加者はおおよそ百人だった。", "Số người tham gia khoảng một trăm.")] },
  { w: "行儀", r: "ぎょうぎ", m: "HÀNH NGHI — cách cư xử, phép tắc, lễ nghi", examples: [
    E("食事のときは行儀よくしなさい。", "Lúc ăn hãy cư xử cho đúng phép."),
    E("彼は行儀のいい子だ。", "Cậu bé là đứa trẻ có phép tắc."),
    E("行儀が悪いと注意された。", "Tôi bị nhắc nhở là cư xử thiếu lễ phép.")] },
  { w: "威張る", r: "いばる", m: "UY TRƯƠNG — làm bộ, lên mặt, kiêu căng (＝偉そうにする)", examples: [
    E("彼は先輩だからといって威張っている。", "Anh ta lên mặt chỉ vì là đàn anh."),
    E("威張ってばかりいると、人に嫌われる。", "Cứ lên mặt mãi sẽ bị người ta ghét."),
    E("お金があるからって威張るな。", "Có tiền cũng đừng làm bộ.")] },
  { w: "収納", r: "しゅうのう", m: "THU NẠP — cất giữ, sắp xếp đồ vào chỗ chứa", examples: [
    E("この家は収納が多くて便利だ。", "Nhà này có nhiều chỗ chứa đồ nên tiện."),
    E("季節外れの服を押し入れに収納した。", "Tôi cất quần áo trái mùa vào tủ âm tường."),
    E("収納ボックスを買って整理した。", "Tôi mua hộp đựng đồ để sắp xếp.")] },
  { w: "不平", r: "ふへい", m: "BẤT BÌNH — bất bình, phàn nàn, cằn nhằn", examples: [
    E("彼はいつも不平ばかり言っている。", "Anh ấy lúc nào cũng chỉ phàn nàn."),
    E("給料に不平を持つ社員が多い。", "Nhiều nhân viên bất mãn về tiền lương."),
    E("不平を言う前に、自分で動こう。", "Trước khi phàn nàn, hãy tự hành động.")] },
  { w: "共有", r: "きょうゆう", m: "CỘNG HỮU — dùng chung, chia sẻ, sở hữu chung", examples: [
    E("情報をチーム全員で共有する。", "Chia sẻ thông tin cho toàn đội."),
    E("このパソコンは家族で共有している。", "Chiếc máy tính này cả nhà dùng chung."),
    E("ファイルを共有フォルダに入れた。", "Tôi bỏ tệp vào thư mục dùng chung.")] },
  { w: "善良", r: "ぜんりょう", m: "THIỆN LƯƠNG — lương thiện, hiền lành, tốt bụng", examples: [
    E("善良な市民が被害に遭った。", "Những người dân lương thiện đã bị hại."),
    E("彼は善良で、人を疑わない。", "Anh ấy hiền lành, không nghi ngờ ai."),
    E("善良な人ほどだまされやすい。", "Người càng lương thiện càng dễ bị lừa.")] },
  { w: "リハーサル", r: "リハーサル", m: "(rehearsal) — buổi tập dượt, diễn tập", examples: [
    E("本番の前にリハーサルをする。", "Tập dượt trước khi diễn thật."),
    E("結婚式のリハーサルは前日に行われた。", "Buổi tập dượt đám cưới diễn ra vào hôm trước."),
    E("リハーサルどおりにはいかなかった。", "Thực tế không diễn ra đúng như lúc tập.")] },
  { w: "特定", r: "とくてい", m: "ĐẶC ĐỊNH — xác định cụ thể, nhất định, chỉ định", examples: [
    E("警察は犯人を特定した。", "Cảnh sát đã xác định được thủ phạm."),
    E("特定の人にだけ連絡した。", "Tôi chỉ liên lạc với một số người nhất định."),
    E("原因はまだ特定できていない。", "Nguyên nhân vẫn chưa xác định được.")] },
  { w: "限定", r: "げんてい", m: "HẠN ĐỊNH — giới hạn, giới hạn trong phạm vi, số lượng có hạn", examples: [
    E("この商品は数量限定です。", "Sản phẩm này có số lượng giới hạn."),
    E("参加者を二十歳以上に限定する。", "Giới hạn người tham gia từ hai mươi tuổi trở lên."),
    E("期間限定のメニューを食べた。", "Tôi đã ăn thực đơn chỉ bán trong thời gian giới hạn.")] },
  { w: "農薬", r: "のうやく", m: "NÔNG DƯỢC — thuốc trừ sâu, thuốc nông nghiệp", examples: [
    E("この野菜は農薬を使わずに育てた。", "Rau này được trồng mà không dùng thuốc trừ sâu."),
    E("農薬の残留が心配だ。", "Tôi lo ngại dư lượng thuốc trừ sâu."),
    E("農薬を減らす努力が続いている。", "Nỗ lực giảm thuốc trừ sâu vẫn đang tiếp tục.")] },
  { w: "志望", r: "しぼう", m: "CHÍ VỌNG — nguyện vọng, mong muốn (vào trường, ngành)", examples: [
    E("第一志望の大学に合格した。", "Tôi đã đỗ trường nguyện vọng một."),
    E("志望動機を面接で聞かれた。", "Tôi bị hỏi động cơ ứng tuyển trong buổi phỏng vấn."),
    E("彼は医者を志望している。", "Anh ấy mong muốn trở thành bác sĩ.")] },
  { w: "短編", r: "たんぺん", m: "ĐOẢN BIÊN — truyện ngắn, phim ngắn, tác phẩm ngắn", examples: [
    E("短編小説を一冊読み終えた。", "Tôi đã đọc xong một tập truyện ngắn."),
    E("彼の短編映画が賞を取った。", "Phim ngắn của anh ấy đã đoạt giải."),
    E("通勤中に短編を読むのが好きだ。", "Tôi thích đọc truyện ngắn lúc đi làm.")] },
  { w: "眺める", r: "ながめる", m: "— ngắm nhìn, nhìn ra xa, quan sát", examples: [
    E("窓から海を眺めている。", "Tôi đang ngắm biển từ cửa sổ."),
    E("星空をぼんやり眺めた。", "Tôi thẫn thờ ngắm bầu trời sao."),
    E("山頂から町を眺めると気持ちがいい。", "Ngắm thị trấn từ đỉnh núi thật sảng khoái.")] },
  { w: "疲労", r: "ひろう", m: "BÌ LAO — mệt mỏi, kiệt sức", examples: [
    E("疲労がたまっているので早く寝る。", "Mệt mỏi tích tụ nên tôi đi ngủ sớm."),
    E("長時間の運転で疲労を感じた。", "Lái xe lâu khiến tôi thấy mệt mỏi."),
    E("目の疲労を取るために休憩した。", "Tôi nghỉ ngơi để giảm mỏi mắt.")] },
  { w: "老人", r: "ろうじん", m: "LÃO NHÂN — người già, cụ già", examples: [
    E("電車で老人に席を譲った。", "Tôi nhường ghế cho một cụ già trên tàu."),
    E("老人ホームでボランティアをしている。", "Tôi làm tình nguyện ở viện dưỡng lão."),
    E("この町は老人が多い。", "Thị trấn này có nhiều người già.")] },
  { w: "決定権", r: "けっていけん", m: "QUYẾT ĐỊNH QUYỀN — quyền quyết định", examples: [
    E("最終的な決定権は社長にある。", "Quyền quyết định cuối cùng thuộc về giám đốc."),
    E("私には決定権がないので答えられません。", "Tôi không có quyền quyết định nên không trả lời được."),
    E("子どもにも決定権を与えるべきだ。", "Cũng nên cho trẻ em quyền quyết định.")] },
  { w: "ふさふさ", r: "ふさふさ", m: "(từ tượng hình) — rậm rạp, dày mượt (tóc, lông)", examples: [
    E("おじいさんはふさふさの白髪だった。", "Ông cụ có mái tóc bạc dày rậm."),
    E("ふさふさした尻尾の犬が走ってきた。", "Một chú chó đuôi xù mượt chạy tới."),
    E("ふさふさのまつげがきれいだ。", "Hàng mi dày cong thật đẹp.")] },
  { w: "どろどろ", r: "どろどろ", m: "(từ tượng hình) — sền sệt, lầy lội bùn; rối rắm (quan hệ)", examples: [
    E("雨で道がどろどろになった。", "Đường lầy lội vì mưa."),
    E("鍋の中のスープがどろどろに煮詰まった。", "Súp trong nồi đã cô đặc sền sệt."),
    E("ドラマはどろどろした人間関係を描いている。", "Bộ phim khắc họa những mối quan hệ rối ren.")] },
  { w: "べたべた", r: "べたべた", m: "(từ tượng hình) — dính nhớp, nhơm nhớp; bám dính", examples: [
    E("汗で体がべたべたする。", "Người dính nhớp vì mồ hôi."),
    E("手がべたべたするので洗ってきた。", "Tay dính nhớp nên tôi đi rửa."),
    E("あの二人は人前でもべたべたしている。", "Hai người đó dính lấy nhau cả khi ở nơi đông người.")] },
  { w: "叶える", r: "かなえる", m: "— thực hiện (ước mơ, nguyện vọng), làm cho thành hiện thực", examples: [
    E("彼は子どものころの夢を叶えた。", "Anh ấy đã thực hiện giấc mơ thời thơ ấu."),
    E("願いを叶えるために努力している。", "Tôi nỗ lực để biến điều ước thành hiện thực."),
    E("どんな願いでも一つだけ叶えてあげよう。", "Ta sẽ thực hiện cho con một điều ước bất kỳ.")] },
  { w: "はきはき", r: "はきはき", m: "(từ tượng hình) — rõ ràng, dứt khoát, lanh lẹ", examples: [
    E("面接ではきはきと答えた。", "Tôi trả lời rõ ràng dứt khoát trong buổi phỏng vấn."),
    E("彼女ははきはきした話し方をする。", "Cô ấy nói chuyện rành mạch dứt khoát."),
    E("子どもははきはき挨拶した。", "Đứa bé chào hỏi lanh lảnh.")] },
  { w: "絶えず", r: "たえず", m: "TUYỆT — không ngừng, liên tục, luôn luôn", examples: [
    E("絶えず努力を続けることが大切だ。", "Liên tục nỗ lực là điều quan trọng."),
    E("この川は絶えず流れている。", "Con sông này chảy không ngừng."),
    E("彼は絶えず笑顔を絶やさない。", "Anh ấy luôn giữ nụ cười trên môi.")] },
  { w: "絡まる", r: "からまる", m: "LẠC — quấn vào, vướng vào, rối", examples: [
    E("イヤホンのコードが絡まった。", "Dây tai nghe bị rối."),
    E("蔦が木に絡まっている。", "Dây thường xuân quấn lấy cây."),
    E("糸が絡まって解けない。", "Sợi chỉ rối lại không gỡ được.")] },
  { w: "映す", r: "うつす", m: "ÁNH — phản chiếu, chiếu (hình ảnh, phim)", examples: [
    E("鏡に自分の姿を映した。", "Tôi soi hình mình vào gương."),
    E("スクリーンに写真を映して説明した。", "Tôi chiếu ảnh lên màn hình để giải thích."),
    E("この映画は当時の社会を映している。", "Bộ phim này phản ánh xã hội thời đó.")] },
  { w: "保つ", r: "たもつ", m: "BẢO — giữ, duy trì, giữ vững", examples: [
    E("食べ物を新鮮に保つ方法を調べた。", "Tôi tìm hiểu cách giữ thức ăn luôn tươi."),
    E("礼儀を保って話すことが大切だ。", "Nói chuyện giữ phép lịch sự là điều quan trọng."),
    E("彼は一位を保ち続けた。", "Anh ấy tiếp tục giữ vị trí thứ nhất.")] },
  { w: "盛り上がる", r: "もりあがる", m: "THỊNH THƯỢNG — sôi nổi, náo nhiệt, dâng cao", examples: [
    E("パーティーは大いに盛り上がった。", "Bữa tiệc vô cùng sôi nổi."),
    E("話が盛り上がって時間を忘れた。", "Câu chuyện rôm rả đến mức quên cả thời gian."),
    E("決勝戦で会場が一気に盛り上がった。", "Trận chung kết khiến cả hội trường bùng nổ.")] },
  { w: "飛び出す", r: "とびだす", m: "PHI XUẤT — lao ra, nhảy ra, phóng ra", examples: [
    E("子どもが道路に飛び出して危なかった。", "Đứa bé lao ra đường thật nguy hiểm."),
    E("彼は怒って家を飛び出した。", "Anh ấy tức giận bỏ nhà chạy đi."),
    E("箱を開けると、人形が飛び出した。", "Mở hộp ra thì con búp bê bật lên.")] },
  { w: "行き過ぎる", r: "ゆきすぎる", m: "HÀNH QUÁ — đi quá, đi lố; quá đà", examples: [
    E("考え事をしていて、駅を行き過ぎた。", "Mải suy nghĩ nên tôi đi quá ga."),
    E("冗談が行き過ぎて、彼女を怒らせた。", "Đùa quá đà nên làm cô ấy giận."),
    E("行き過ぎた競争は良くない。", "Cạnh tranh quá mức thì không tốt.")] },
  { w: "駆け抜ける", r: "かけぬける", m: "KHU BẠT — chạy xuyên qua, lướt qua, chạy vụt qua", examples: [
    E("選手たちがゴールまで駆け抜けた。", "Các vận động viên chạy một mạch về đích."),
    E("風が野原を駆け抜けた。", "Gió lướt qua cánh đồng."),
    E("彼は青春を駆け抜けるように生きた。", "Anh ấy sống như lướt qua cả tuổi thanh xuân.")] },
  { w: "対抗心", r: "たいこうしん", m: "ĐỐI KHÁNG TÂM — tinh thần ganh đua, tâm lý muốn hơn đối thủ", examples: [
    E("彼はお兄さんに対抗心を燃やしている。", "Cậu ấy có tinh thần ganh đua với anh trai."),
    E("対抗心が強くて負けるのが嫌いだ。", "Tôi hiếu thắng nên ghét thua."),
    E("ライバルへの対抗心が成長の原動力になった。", "Tinh thần muốn vượt qua đối thủ trở thành động lực trưởng thành.")] },
  { w: "課題", r: "かだい", m: "KHÓA ĐỀ — bài tập, đề tài, vấn đề cần giải quyết", examples: [
    E("夏休みの課題がまだ終わっていない。", "Bài tập kỳ nghỉ hè vẫn chưa làm xong."),
    E("環境問題は今後の大きな課題だ。", "Vấn đề môi trường là thách thức lớn sắp tới."),
    E("課題を一つずつ解決していこう。", "Hãy giải quyết từng vấn đề một.")] },
  { w: "後悔", r: "こうかい", m: "HẬU HỐI — hối hận, ân hận", examples: [
    E("あのとき断ったことを後悔している。", "Tôi hối hận vì đã từ chối lúc đó."),
    E("やらずに後悔するより、やって後悔したほうがいい。", "Thà làm rồi hối hận còn hơn không làm mà hối hận."),
    E("彼は何の後悔もなく会社を辞めた。", "Anh ấy nghỉ việc mà không hề hối tiếc.")] },
  { w: "平等", r: "びょうどう", m: "BÌNH ĐẲNG — bình đẳng, công bằng", examples: [
    E("すべての人は法の下に平等だ。", "Mọi người đều bình đẳng trước pháp luật."),
    E("男女平等の社会を目指している。", "Hướng tới xã hội bình đẳng nam nữ."),
    E("お金を平等に分けた。", "Tôi chia tiền đồng đều.")] },
  { w: "～べきだった", r: "Vる＋べきだった", m: "[N2] Lẽ ra nên…, đáng lẽ phải… (tiếc nuối về việc đã không làm)", examples: [
    E("もっと早く病院に行くべきだった。", "Lẽ ra tôi nên đi bệnh viện sớm hơn."),
    E("あのとき、彼に本当のことを言うべきだった。", "Lúc đó lẽ ra tôi nên nói thật với anh ấy."),
    E("出かける前に天気予報を見るべきだった。", "Lẽ ra phải xem dự báo thời tiết trước khi ra ngoài.")] },
  { w: "機嫌", r: "きげん", m: "CƠ HIỀM — tâm trạng, tâm tính (tốt/xấu)", examples: [
    E("今日は父の機嫌が悪い。", "Hôm nay bố tôi đang tâm trạng xấu."),
    E("子どもの機嫌を取るのは大変だ。", "Dỗ cho trẻ vui thật là vất vả."),
    E("彼女はご機嫌で鼻歌を歌っている。", "Cô ấy đang vui vẻ ngân nga hát.")] },
  { w: "損失", r: "そんしつ", m: "TỔN THẤT — tổn thất, thua lỗ, mất mát", examples: [
    E("会社は大きな損失を出した。", "Công ty chịu tổn thất lớn."),
    E("人材の流出は会社にとって大きな損失だ。", "Mất nhân tài là tổn thất lớn cho công ty."),
    E("損失を最小限に抑える。", "Hạn chế tổn thất ở mức tối thiểu.")] },
  { w: "削除", r: "さくじょ", m: "TƯỚC TRỪ — xóa, xóa bỏ, loại bỏ (dữ liệu, nội dung)", examples: [
    E("不要なファイルを削除した。", "Tôi đã xóa các tệp không cần thiết."),
    E("間違えて写真を削除してしまった。", "Tôi lỡ tay xóa mất ảnh."),
    E("この項目は削除してください。", "Hãy xóa mục này đi.")] },
  { w: "削る", r: "けずる", m: "TƯỚC — gọt, bào, cắt giảm", examples: [
    E("鉛筆をナイフで削った。", "Tôi gọt bút chì bằng dao."),
    E("予算を削って経費を抑える。", "Cắt giảm ngân sách để kiềm chế chi phí."),
    E("睡眠時間を削って勉強した。", "Tôi bớt giờ ngủ để học.")] },
  { w: "無回答", r: "むかいとう", m: "VÔ HỒI ĐÁP — không trả lời, bỏ trống câu trả lời", examples: [
    E("アンケートの無回答が多かった。", "Phiếu khảo sát có nhiều câu bỏ trống."),
    E("無回答の項目には印をつけてください。", "Hãy đánh dấu vào mục không trả lời."),
    E("無回答の理由を教えてください。", "Xin cho biết lý do không trả lời.")] },
  { w: "承認", r: "しょうにん", m: "THỪA NHẬN — phê duyệt, chấp thuận, công nhận", examples: [
    E("上司の承認を得てから進める。", "Tiến hành sau khi được cấp trên phê duyệt."),
    E("新しい計画が承認された。", "Kế hoạch mới đã được phê duyệt."),
    E("彼の実力は誰もが承認している。", "Thực lực của anh ấy ai cũng công nhận.")] },
  { w: "売れ行き", r: "うれゆき", m: "MẠI HÀNH — doanh số bán, tình hình tiêu thụ", examples: [
    E("新商品の売れ行きは好調だ。", "Doanh số sản phẩm mới rất tốt."),
    E("夏は冷たい飲み物の売れ行きがいい。", "Mùa hè đồ uống lạnh bán chạy."),
    E("売れ行きが悪くて値下げした。", "Bán ế nên đã giảm giá.")] },
  { w: "円満", r: "えんまん", m: "VIÊN MÃN — hòa thuận, êm đẹp, viên mãn", examples: [
    E("二人は円満に離婚した。", "Hai người ly hôn trong êm đẹp."),
    E("円満な家庭を築きたい。", "Tôi muốn xây dựng một gia đình hòa thuận."),
    E("問題は円満に解決した。", "Vấn đề được giải quyết êm thấm.")] },
  { w: "鑑賞", r: "かんしょう", m: "GIÁM THƯỞNG — thưởng thức, chiêm ngưỡng (nghệ thuật)", examples: [
    E("私の趣味は映画鑑賞だ。", "Sở thích của tôi là xem phim."),
    E("美術館で絵を鑑賞した。", "Tôi chiêm ngưỡng tranh ở bảo tàng mỹ thuật."),
    E("音楽鑑賞をしながらリラックスする。", "Tôi thư giãn khi nghe nhạc.")] },
  { w: "奪う", r: "うばう", m: "ĐOẠT — cướp, chiếm đoạt, tước đi", examples: [
    E("犯人は彼のバッグを奪って逃げた。", "Thủ phạm giật túi của anh ấy rồi bỏ chạy."),
    E("戦争は多くの人から家族を奪った。", "Chiến tranh đã cướp đi gia đình của nhiều người."),
    E("そのドレスに目を奪われた。", "Tôi bị chiếc váy đó thu hút ánh nhìn.")] },
  { w: "腫れる", r: "はれる", m: "CHỦNG — sưng, phù", examples: [
    E("蜂に刺されて腕が腫れた。", "Bị ong đốt nên cánh tay sưng lên."),
    E("泣きすぎて目が腫れている。", "Khóc nhiều quá nên mắt sưng."),
    E("足首が腫れて歩けない。", "Cổ chân sưng nên không đi được.")] },
  { w: "暮れ", r: "くれ", m: "MỘ — cuối năm (年の暮れ); lúc hoàng hôn", examples: [
    E("年の暮れは何かと忙しい。", "Cuối năm thì bận rộn đủ thứ."),
    E("暮れの大掃除を始めた。", "Tôi bắt đầu tổng vệ sinh cuối năm."),
    E("日の暮れに散歩に出かけた。", "Tôi ra ngoài đi dạo lúc hoàng hôn.")] },
  { w: "残高", r: "ざんだか", m: "TÀN CAO — số dư (tài khoản)", examples: [
    E("口座の残高を確認した。", "Tôi kiểm tra số dư tài khoản."),
    E("残高が足りなくて引き出せなかった。", "Số dư không đủ nên tôi không rút được."),
    E("通帳に残高が記入されている。", "Số dư được ghi trong sổ tiết kiệm.")] },
  { w: "好調", r: "こうちょう", m: "HẢO ĐIỀU — thuận lợi, tốt đẹp, phong độ tốt", examples: [
    E("今月の売り上げは好調だ。", "Doanh thu tháng này rất tốt."),
    E("体の調子は好調だ。", "Thể trạng của tôi đang rất tốt."),
    E("チームは好調な滑り出しを見せた。", "Đội đã khởi đầu thuận lợi.")] },
  { w: "短縮", r: "たんしゅく", m: "ĐOẢN SÚC — rút ngắn, thu ngắn", examples: [
    E("工事の期間を一か月短縮した。", "Rút ngắn thời gian thi công một tháng."),
    E("新幹線で移動時間が大幅に短縮された。", "Nhờ Shinkansen, thời gian di chuyển được rút ngắn nhiều."),
    E("営業時間を短縮して営業している。", "Đang mở cửa với giờ làm việc rút ngắn.")] },
  { w: "研修", r: "けんしゅう", m: "NGHIÊN TU — đào tạo, tập huấn, thực tập", examples: [
    E("新入社員は三か月の研修を受ける。", "Nhân viên mới trải qua ba tháng đào tạo."),
    E("海外で研修を受ける予定だ。", "Tôi dự định đi tập huấn ở nước ngoài."),
    E("研修の成果を発表した。", "Tôi đã báo cáo kết quả của khóa tập huấn.")] },
  { w: "各自", r: "かくじ", m: "CÁC TỰ — mỗi người, từng người", examples: [
    E("昼ご飯は各自で用意してください。", "Bữa trưa mỗi người hãy tự chuẩn bị."),
    E("各自の責任で行動すること。", "Mỗi người phải tự chịu trách nhiệm cho hành động của mình."),
    E("各自が意見を出し合った。", "Mỗi người lần lượt đưa ra ý kiến.")] },
  { w: "妨げる", r: "さまたげる", m: "PHƯƠNG — cản trở, ngăn cản, gây trở ngại", examples: [
    E("騒音が勉強を妨げる。", "Tiếng ồn cản trở việc học."),
    E("道に止めた車が交通を妨げている。", "Xe đậu trên đường đang cản trở giao thông."),
    E("彼の成功を妨げるものは何もない。", "Không có gì cản được thành công của anh ấy.")] },
  { w: "駆け込む", r: "かけこむ", m: "KHU NHẬP — chạy vội vào, lao vào", examples: [
    E("雨が降ってきて、近くの店に駆け込んだ。", "Trời đổ mưa nên tôi chạy vội vào cửa hàng gần đó."),
    E("発車ぎりぎりに電車に駆け込んだ。", "Tôi chạy vội lên tàu sát giờ khởi hành."),
    E("困って警察に駆け込んだ。", "Bị khó khăn nên tôi chạy đến đồn cảnh sát.")] },
  { w: "寄りかかる", r: "よりかかる", m: "KÝ — dựa vào, tựa vào; dựa dẫm", examples: [
    E("壁に寄りかかって待っていた。", "Tôi tựa vào tường đứng đợi."),
    E("疲れて友人の肩に寄りかかった。", "Mệt quá nên tôi tựa vào vai bạn."),
    E("人に寄りかかってばかりでは成長できない。", "Cứ dựa dẫm người khác mãi thì không trưởng thành được.")] },
  { w: "飛びつく", r: "とびつく", m: "PHI — nhảy bổ vào, vồ lấy, nhào đến; hăm hở nhận", examples: [
    E("犬が飼い主に飛びついた。", "Con chó nhảy bổ vào chủ."),
    E("安いと聞いて、みんなが飛びついた。", "Nghe nói rẻ là ai nấy đều nhào đến."),
    E("彼はうまい話にすぐ飛びつく。", "Anh ta hễ nghe lời hứa ngon ngọt là lao vào ngay.")] },
  { w: "収集", r: "しゅうしゅう", m: "THU TẬP — thu thập, sưu tầm", examples: [
    E("趣味で切手を収集している。", "Tôi sưu tầm tem như một thú vui."),
    E("ごみの収集は週に二回ある。", "Rác được thu gom hai lần một tuần."),
    E("必要な情報を収集した。", "Tôi đã thu thập các thông tin cần thiết.")] },
  { w: "目印", r: "めじるし", m: "MỤC ẤN — dấu hiệu nhận biết, cột mốc, điểm đánh dấu", examples: [
    E("赤い屋根の家を目印にしてください。", "Hãy lấy ngôi nhà mái đỏ làm mốc."),
    E("迷わないように木に目印をつけた。", "Tôi đánh dấu lên cây để không bị lạc."),
    E("駅前のコンビニが目印です。", "Cửa hàng tiện lợi trước ga là điểm nhận biết.")] },
  { w: "こそこそ", r: "こそこそ", m: "(từ tượng hình) — lén lút, thì thầm, rón rén", examples: [
    E("二人は教室の隅でこそこそ話していた。", "Hai người thì thầm ở góc lớp."),
    E("彼はこそこそと部屋を出ていった。", "Anh ta lén lút ra khỏi phòng."),
    E("こそこそせず、堂々と言いなさい。", "Đừng lén lút, hãy nói thẳng thắn.")] },
  { w: "ぶるぶる", r: "ぶるぶる", m: "(từ tượng hình) — run lẩy bẩy, run cầm cập", examples: [
    E("寒くて体がぶるぶる震えた。", "Lạnh quá nên người tôi run cầm cập."),
    E("緊張して手がぶるぶるしている。", "Hồi hộp nên tay tôi run lẩy bẩy."),
    E("犬が雷に怯えてぶるぶる震えている。", "Con chó sợ sấm run lẩy bẩy.")] },
  { w: "惜しい", r: "おしい", m: "TÍCH — đáng tiếc, tiếc, quý giá", examples: [
    E("あと一点で優勝だったのに、惜しい。", "Chỉ cần thêm một điểm là vô địch, tiếc thật."),
    E("捨てるのは惜しいので、取っておいた。", "Vứt đi thì tiếc nên tôi giữ lại."),
    E("時間が惜しくて、食事も取らずに働いた。", "Tiếc thời gian nên tôi làm việc mà không ăn.")] },
  { w: "テンポ", r: "テンポ", m: "(tempo) — nhịp độ, tiết tấu, nhịp điệu", examples: [
    E("この曲はテンポが速い。", "Bài hát này có nhịp nhanh."),
    E("仕事のテンポが速くてついていけない。", "Nhịp làm việc nhanh quá nên tôi không theo kịp."),
    E("話のテンポがよくて飽きない。", "Câu chuyện có nhịp điệu tốt nên không thấy chán.")] },
  { w: "概要", r: "がいよう", m: "KHÁI YẾU — đại ý, tóm tắt, tổng quan", examples: [
    E("まず計画の概要を説明します。", "Trước hết tôi xin giải thích tổng quan kế hoạch."),
    E("事件の概要をまとめた。", "Tôi đã tóm tắt đại ý vụ việc."),
    E("募集要項の概要はサイトで見られる。", "Có thể xem tóm tắt thông báo tuyển dụng trên trang web.")] },
  { w: "早期", r: "そうき", m: "TẢO KỲ — giai đoạn sớm, sớm, từ sớm", examples: [
    E("病気は早期発見が大切だ。", "Với bệnh tật, phát hiện sớm rất quan trọng."),
    E("問題の早期解決を目指す。", "Hướng tới việc giải quyết sớm vấn đề."),
    E("早期に退職を申し出た。", "Tôi xin nghỉ việc từ sớm.")] },
  { w: "印", r: "しるし", m: "ẤN — dấu, dấu hiệu, ký hiệu; biểu tượng", examples: [
    E("大事な所に赤い印をつけた。", "Tôi đánh dấu đỏ vào chỗ quan trọng."),
    E("これは感謝の印です。", "Đây là chút lòng cảm tạ."),
    E("地図に目的地の印がある。", "Trên bản đồ có dấu điểm đến.")] },
  { w: "合図", r: "あいず", m: "HỢP ĐỒ — ra hiệu, tín hiệu, hiệu lệnh", examples: [
    E("先生の合図でスタートした。", "Chúng tôi xuất phát theo hiệu lệnh của thầy giáo."),
    E("目で合図を送った。", "Tôi ra hiệu bằng mắt."),
    E("笛の合図で試合が始まった。", "Trận đấu bắt đầu bằng tiếng còi.")] },
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

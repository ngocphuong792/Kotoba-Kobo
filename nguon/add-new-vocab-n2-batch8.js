/**
 * Thêm new-vocab.md (batch 8) vào chủ đề Từ vựng N2 (3 ví dụ / từ, nghĩa kèm Hán Việt).
 * Bỏ qua từ đã có trong chủ đề N2 (cùng chữ viết).
 * Usage: node nguon/add-new-vocab-n2-batch8.js
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
  { w: "拡充", r: "かくじゅう", m: "KHUẾCH SUNG — mở rộng, bổ sung thêm (quy mô, nội dung)", examples: [
    E("図書館の蔵書を拡充する。", "Mở rộng số lượng sách của thư viện."),
    E("サービスの拡充を図っている。", "Chúng tôi đang tìm cách mở rộng dịch vụ."),
    E("設備を拡充して生産量を増やした。", "Bổ sung thiết bị để tăng sản lượng.")] },
  { w: "著しい", r: "いちじるしい", m: "TRỮ — rõ rệt, đáng kể, nổi bật", examples: [
    E("この町は近年著しい発展を遂げた。", "Thị trấn này những năm gần đây phát triển rõ rệt."),
    E("彼の成長は著しい。", "Sự trưởng thành của cậu ấy thật đáng kể."),
    E("技術の進歩は著しいものがある。", "Tiến bộ kỹ thuật thật đáng kinh ngạc.")] },
  { w: "声援", r: "せいえん", m: "THANH VIÊN — cổ vũ, tiếng reo hò cổ vũ", examples: [
    E("観客の声援に応えて手を振った。", "Anh ấy vẫy tay đáp lại sự cổ vũ của khán giả."),
    E("みなさんの声援のおかげで優勝できました。", "Nhờ sự cổ vũ của mọi người mà chúng tôi vô địch."),
    E("スタジアムは大きな声援に包まれた。", "Sân vận động ngập tràn tiếng cổ vũ.")] },
  { w: "返品", r: "へんぴん", m: "PHẢN PHẨM — trả hàng, hàng trả lại", examples: [
    E("サイズが合わなかったので返品した。", "Vì không vừa size nên tôi đã trả hàng."),
    E("返品は一週間以内にお願いします。", "Xin vui lòng trả hàng trong vòng một tuần."),
    E("不良品は返品できます。", "Hàng lỗi có thể trả lại.")] },
  { w: "弱点", r: "じゃくてん", m: "NHƯỢC ĐIỂM — điểm yếu, nhược điểm", examples: [
    E("自分の弱点を知ることが大切だ。", "Biết điểm yếu của bản thân là điều quan trọng."),
    E("相手の弱点を突いて勝った。", "Anh ấy đánh vào điểm yếu của đối thủ để chiến thắng."),
    E("数学が私の弱点だ。", "Toán là điểm yếu của tôi.")] },
  { w: "襲う", r: "おそう", m: "TẬP — tấn công, đánh úp; ập đến (thiên tai, nỗi sợ)", examples: [
    E("強盗が銀行を襲った。", "Bọn cướp đã tấn công ngân hàng."),
    E("大型の台風が九州を襲った。", "Bão lớn đã ập vào Kyushu."),
    E("急に激しい眠気に襲われた。", "Tôi đột nhiên bị cơn buồn ngủ dữ dội ập đến.")] },
  { w: "ボール状", r: "ボールじょう", m: "TRẠNG — có hình dạng quả bóng, dạng cầu", examples: [
    E("生地をボール状に丸める。", "Vo bột thành hình viên tròn."),
    E("このお菓子はボール状をしている。", "Loại bánh này có hình quả bóng."),
    E("雪をボール状に固めて投げた。", "Tôi nặn tuyết thành cục tròn rồi ném.")] },
  { w: "現社長", r: "げんしゃちょう", m: "HIỆN XÃ TRƯỞNG — giám đốc đương nhiệm, giám đốc hiện tại", examples: [
    E("現社長は創業者の息子だ。", "Giám đốc hiện tại là con trai của người sáng lập."),
    E("現社長の方針で、残業が減った。", "Theo chủ trương của giám đốc hiện tại, việc tăng ca đã giảm."),
    E("前社長と現社長の意見が分かれた。", "Ý kiến của giám đốc tiền nhiệm và giám đốc hiện tại khác nhau.")] },
  { w: "上達", r: "じょうたつ", m: "THƯỢNG ĐẠT — tiến bộ, giỏi lên (kỹ năng)", examples: [
    E("毎日練習したので、ピアノが上達した。", "Vì luyện tập mỗi ngày nên tôi chơi piano giỏi lên."),
    E("日本語の上達には会話が一番だ。", "Để giỏi tiếng Nhật thì hội thoại là tốt nhất."),
    E("彼の上達の速さには驚く。", "Tôi ngạc nhiên trước tốc độ tiến bộ của anh ấy.")] },
  { w: "記憶", r: "きおく", m: "KÝ ỨC — trí nhớ, ký ức; ghi nhớ", examples: [
    E("子どものころの記憶はほとんどない。", "Tôi hầu như không còn nhớ gì thời thơ ấu."),
    E("私の記憶が正しければ、彼は去年卒業した。", "Nếu trí nhớ tôi đúng thì anh ấy đã tốt nghiệp năm ngoái."),
    E("この事件は今も記憶に新しい。", "Vụ việc này đến giờ vẫn còn mới trong ký ức.")] },
  { w: "タイマー", r: "タイマー", m: "(timer) — bộ hẹn giờ, đồng hồ bấm giờ", examples: [
    E("タイマーを三分にセットした。", "Tôi đặt hẹn giờ ba phút."),
    E("炊飯器のタイマーで朝にご飯が炊ける。", "Nhờ hẹn giờ của nồi cơm điện mà sáng có cơm chín sẵn."),
    E("タイマーが鳴ったら火を止めてください。", "Khi chuông hẹn giờ kêu hãy tắt bếp.")] },
  { w: "アクシデント", r: "アクシデント", m: "(accident) — sự cố, biến cố bất ngờ", examples: [
    E("旅行中にアクシデントがあって予定が変わった。", "Có sự cố khi đi du lịch nên kế hoạch thay đổi."),
    E("アクシデントにも落ち着いて対応した。", "Anh ấy bình tĩnh xử lý cả những sự cố bất ngờ."),
    E("思わぬアクシデントで試合が中断した。", "Trận đấu bị gián đoạn vì sự cố ngoài ý muốn.")] },
  { w: "アクション", r: "アクション", m: "(action) — hành động; cảnh hành động", examples: [
    E("彼はアクション映画が好きだ。", "Anh ấy thích phim hành động."),
    E("問題が起きたらすぐアクションを起こそう。", "Khi có vấn đề, hãy hành động ngay."),
    E("このゲームはアクションが派手だ。", "Trò chơi này có những pha hành động rất hoành tráng.")] },
  { w: "気軽", r: "きがる", m: "KHÍ KHINH — thoải mái, không câu nệ, nhẹ nhàng", examples: [
    E("分からないことは気軽に聞いてください。", "Có gì không hiểu cứ thoải mái hỏi nhé."),
    E("気軽に参加できるイベントだ。", "Đây là sự kiện ai cũng có thể thoải mái tham gia."),
    E("彼は気軽に引き受けてくれた。", "Anh ấy nhận lời một cách nhẹ nhàng.")] },
  { w: "素直", r: "すなお", m: "TỐ TRỰC — ngoan ngoãn, thẳng thắn, dễ nghe lời", examples: [
    E("彼は素直に謝った。", "Anh ấy thẳng thắn xin lỗi."),
    E("素直な子どもは先生に好かれる。", "Trẻ ngoan ngoãn được thầy cô yêu mến."),
    E("もっと素直に気持ちを伝えたい。", "Tôi muốn bày tỏ cảm xúc thẳng thắn hơn.")] },
  { w: "器用", r: "きよう", m: "KHÍ DỤNG — khéo tay, khéo léo", examples: [
    E("彼女は手先が器用で、料理もうまい。", "Cô ấy khéo tay, nấu ăn cũng giỏi."),
    E("器用に箸を使って豆をつまんだ。", "Anh ấy khéo léo dùng đũa gắp hạt đậu."),
    E("私は不器用で、うまく折り紙が折れない。", "Tôi vụng về nên gấp giấy origami không đẹp.")] },
  { w: "ブラッシュ", r: "ブラッシュ", m: "(brush) — bàn chải, cọ; chải (ブラッシュアップ: trau chuốt, nâng cấp)", examples: [
    E("毛先をブラッシュで整えた。", "Tôi dùng lược chải gọn phần đuôi tóc."),
    E("企画書をブラッシュアップして提出した。", "Tôi trau chuốt lại bản kế hoạch rồi nộp."),
    E("ブラッシュで丁寧に汚れを落とす。", "Dùng bàn chải để chải sạch vết bẩn cẩn thận.")] },
  { w: "付属", r: "ふぞく", m: "PHÓ THUỘC — đi kèm, trực thuộc, phụ", examples: [
    E("このカメラには充電器が付属している。", "Chiếc máy ảnh này có kèm bộ sạc."),
    E("大学の付属病院で働いている。", "Tôi làm việc ở bệnh viện trực thuộc trường đại học."),
    E("付属の説明書をよく読んでください。", "Hãy đọc kỹ tài liệu hướng dẫn kèm theo.")] },
  { w: "低価格", r: "ていかかく", m: "ĐÊ GIÁ CÁCH — giá thấp, giá rẻ", examples: [
    E("低価格で高品質な商品が人気だ。", "Sản phẩm giá rẻ chất lượng cao rất được ưa chuộng."),
    E("低価格のスマートフォンを買った。", "Tôi mua một chiếc điện thoại thông minh giá rẻ."),
    E("この店は低価格を売りにしている。", "Cửa hàng này lấy giá rẻ làm điểm mạnh.")] },
  { w: "密着", r: "みっちゃく", m: "MẬT TRƯỚC — dính sát, bám sát, gắn chặt", examples: [
    E("テープを肌に密着させる。", "Dán băng dính sát vào da."),
    E("記者がその選手に密着取材している。", "Phóng viên đang bám sát cầu thủ đó để lấy tin."),
    E("地域に密着した店を目指している。", "Chúng tôi hướng đến cửa hàng gắn bó với địa phương.")] },
  { w: "劇的", r: "げきてき", m: "KỊCH ĐÍCH — kịch tính, ngoạn mục, thay đổi lớn", examples: [
    E("試合は劇的な逆転勝ちで終わった。", "Trận đấu kết thúc bằng chiến thắng lật ngược kịch tính."),
    E("新しい薬で病状が劇的に改善した。", "Nhờ thuốc mới bệnh tình cải thiện rõ rệt."),
    E("二人は劇的な再会を果たした。", "Hai người đã có cuộc hội ngộ đầy kịch tính.")] },
  { w: "交渉", r: "こうしょう", m: "GIAO THIỆP — đàm phán, thương lượng", examples: [
    E("給料の交渉をするつもりだ。", "Tôi định thương lượng về lương."),
    E("交渉の結果、値段が下がった。", "Sau thương lượng, giá đã giảm."),
    E("両国は貿易について交渉している。", "Hai nước đang đàm phán về thương mại.")] },
  { w: "授受", r: "じゅじゅ", m: "THỤ THỤ — trao nhận, giao nhận", examples: [
    E("金銭の授受は禁止されている。", "Việc trao nhận tiền bạc bị cấm."),
    E("書類の授受は窓口で行います。", "Việc giao nhận hồ sơ được thực hiện tại quầy."),
    E("贈り物の授受にも注意が必要だ。", "Việc trao nhận quà tặng cũng cần cẩn trọng.")] },
  { w: "通話", r: "つうわ", m: "THÔNG THOẠI — cuộc gọi, đàm thoại", examples: [
    E("通話中は音量を下げてください。", "Khi đang gọi điện xin hãy giảm âm lượng."),
    E("通話料が高くて驚いた。", "Tôi giật mình vì cước gọi cao."),
    E("電車内での通話はご遠慮ください。", "Xin vui lòng không gọi điện thoại trong tàu.")] },
  { w: "出願", r: "しゅつがん", m: "XUẤT NGUYỆN — nộp đơn đăng ký (nhập học, bằng sáng chế)", examples: [
    E("大学への出願は来月までだ。", "Hạn nộp đơn vào đại học là hết tháng sau."),
    E("特許を出願した。", "Tôi đã nộp đơn đăng ký bằng sáng chế."),
    E("出願には写真と成績証明書が必要です。", "Nộp đơn cần có ảnh và bảng điểm.")] },
  { w: "偉い", r: "えらい", m: "VĨ — vĩ đại, giỏi giang, có địa vị cao", examples: [
    E("あの人は会社でとても偉い人だ。", "Người đó là người có chức vụ rất cao trong công ty."),
    E("毎日自分で勉強して偉いね。", "Mỗi ngày đều tự học, con giỏi thật."),
    E("偉い先生に会って緊張した。", "Tôi hồi hộp khi gặp vị giáo sư danh tiếng.")] },
  { w: "作用", r: "さよう", m: "TÁC DỤNG — tác dụng, ảnh hưởng, tác động", examples: [
    E("この薬には眠くなる作用がある。", "Thuốc này có tác dụng gây buồn ngủ."),
    E("薬の副作用に注意してください。", "Hãy chú ý tác dụng phụ của thuốc."),
    E("二つの力が互いに作用している。", "Hai lực đang tác động lẫn nhau.")] },
  { w: "途端", r: "とたん", m: "ĐỒ ĐOAN — ngay khi…, vừa mới… thì (V た途端)", examples: [
    E("家を出た途端、雨が降り出した。", "Vừa bước ra khỏi nhà thì trời đổ mưa."),
    E("立ち上がった途端、めまいがした。", "Vừa đứng dậy thì tôi thấy chóng mặt."),
    E("電話を切った途端、涙が出てきた。", "Vừa cúp máy là nước mắt tuôn ra.")] },
  { w: "垂直", r: "すいちょく", m: "THÙY TRỰC — thẳng đứng, vuông góc", examples: [
    E("柱を地面に垂直に立てる。", "Dựng cột thẳng đứng trên mặt đất."),
    E("二本の線が垂直に交わっている。", "Hai đường thẳng cắt nhau vuông góc."),
    E("垂直な壁を登るのは難しい。", "Leo bức tường thẳng đứng rất khó.")] },
  { w: "住居", r: "じゅうきょ", m: "TRÚ CƯ — nơi ở, chỗ ở, nhà ở", examples: [
    E("住居を移す際は届け出が必要だ。", "Khi chuyển chỗ ở cần phải báo đăng ký."),
    E("この建物は住居としては使えない。", "Tòa nhà này không thể dùng làm nơi ở."),
    E("災害で住居を失った人々を支援する。", "Hỗ trợ những người mất nhà vì thiên tai.")] },
  { w: "整える", r: "ととのえる", m: "CHỈNH — sắp xếp gọn gàng, chuẩn bị đầy đủ, chỉnh trang", examples: [
    E("髪を整えてから出かけた。", "Tôi chải chuốt tóc tai rồi mới ra ngoài."),
    E("体調を整えて試験に臨む。", "Điều chỉnh sức khỏe cho tốt để bước vào kỳ thi."),
    E("受け入れ態勢を整えている。", "Đang chuẩn bị sẵn sàng để tiếp nhận.")] },
  { w: "典型的", r: "てんけいてき", m: "ĐIỂN HÌNH ĐÍCH — điển hình, tiêu biểu", examples: [
    E("これは典型的な日本の家庭料理だ。", "Đây là món ăn gia đình điển hình của Nhật."),
    E("彼は典型的なA型の性格だ。", "Anh ấy có tính cách điển hình của nhóm máu A."),
    E("典型的な失敗例を紹介する。", "Giới thiệu ví dụ thất bại điển hình.")] },
  { w: "雇う", r: "やとう", m: "CỐ — thuê, tuyển dụng (nhân công)", examples: [
    E("店の忙しい時期にアルバイトを雇った。", "Vào mùa bận rộn, quán đã thuê thêm người làm thêm."),
    E("新しい従業員を二人雇う予定だ。", "Dự định tuyển hai nhân viên mới."),
    E("彼は家政婦を雇っている。", "Anh ấy có thuê người giúp việc.")] },
  { w: "じりじり", r: "じりじり", m: "(từ tượng hình) — từ từ nhích dần; nóng rát; sốt ruột", examples: [
    E("太陽がじりじりと照りつける。", "Mặt trời chiếu nóng rát."),
    E("じりじりと相手に近づいた。", "Anh ấy nhích dần lại gần đối phương."),
    E("返事を待ちながらじりじりしていた。", "Tôi sốt ruột chờ hồi âm.")] },
  { w: "ニーズ", r: "ニーズ", m: "(needs) — nhu cầu", examples: [
    E("客のニーズに応える商品を開発する。", "Phát triển sản phẩm đáp ứng nhu cầu khách hàng."),
    E("市場のニーズを調査している。", "Đang khảo sát nhu cầu thị trường."),
    E("ニーズが多様化している。", "Nhu cầu ngày càng đa dạng.")] },
  { w: "セールス", r: "セールス", m: "(sales) — bán hàng, tiếp thị", examples: [
    E("彼は車のセールスをしている。", "Anh ấy làm nghề bán xe ô tô."),
    E("セールスの電話は断った。", "Tôi từ chối cuộc gọi chào hàng."),
    E("今月のセールスは好調だ。", "Doanh số bán hàng tháng này rất tốt.")] },
  { w: "エコノミー", r: "エコノミー", m: "(economy) — kinh tế; hạng phổ thông (エコノミークラス)", examples: [
    E("エコノミークラスで海外へ行った。", "Tôi đi nước ngoài bằng hạng phổ thông."),
    E("エコノミーでも座席は意外と快適だった。", "Hạng phổ thông mà ghế ngồi lại khá thoải mái."),
    E("エコノミー症候群を防ぐために歩いた。", "Tôi đi lại để phòng hội chứng hạng phổ thông.")] },
  { w: "創造", r: "そうぞう", m: "SÁNG TẠO — sáng tạo, tạo ra", examples: [
    E("子どもの創造力を伸ばす教育が大切だ。", "Giáo dục phát triển năng lực sáng tạo của trẻ rất quan trọng."),
    E("新しい文化を創造する。", "Sáng tạo nên nền văn hóa mới."),
    E("芸術は創造の喜びを与えてくれる。", "Nghệ thuật mang lại niềm vui sáng tạo.")] },
  { w: "相違", r: "そうい", m: "TƯƠNG VI — khác biệt, sai khác", examples: [
    E("二人の意見には大きな相違がある。", "Ý kiến của hai người có sự khác biệt lớn."),
    E("事実と相違する点があれば訂正します。", "Nếu có chỗ nào sai khác với sự thật thì chúng tôi sẽ đính chính."),
    E("相違点をまとめて報告した。", "Tôi tổng hợp các điểm khác biệt rồi báo cáo.")] },
  { w: "対決", r: "たいけつ", m: "ĐỐI QUYẾT — đối đầu, đọ sức, quyết đấu", examples: [
    E("決勝で宿命のライバルと対決する。", "Ở trận chung kết, anh ấy đối đầu với đối thủ định mệnh."),
    E("二人の対決は大きな話題になった。", "Cuộc đối đầu của hai người thành chủ đề nóng."),
    E("彼は問題と正面から対決した。", "Anh ấy đối mặt trực diện với vấn đề.")] },
  { w: "対抗", r: "たいこう", m: "ĐỐI KHÁNG — chống lại, đối kháng, cạnh tranh", examples: [
    E("大手に対抗するために値段を下げた。", "Hạ giá để cạnh tranh với các công ty lớn."),
    E("対抗意識を燃やして練習した。", "Anh ấy luyện tập với tinh thần muốn vượt mặt đối thủ."),
    E("クラス対抗のリレーが始まった。", "Cuộc thi chạy tiếp sức giữa các lớp bắt đầu.")] },
  { w: "支店", r: "してん", m: "CHI ĐIẾM — chi nhánh, cửa hàng chi nhánh", examples: [
    E("銀行の大阪支店に勤めている。", "Tôi làm ở chi nhánh Osaka của ngân hàng."),
    E("来月、新しい支店が開店する。", "Tháng sau chi nhánh mới sẽ khai trương."),
    E("本店と支店で営業時間が違う。", "Giờ mở cửa của trụ sở chính và chi nhánh khác nhau.")] },
  { w: "世代", r: "せだい", m: "THẾ ĐẠI — thế hệ", examples: [
    E("若い世代は新聞をあまり読まない。", "Thế hệ trẻ ít đọc báo."),
    E("三つの世代が一緒に住んでいる。", "Ba thế hệ cùng sống chung."),
    E("世代によって価値観が違う。", "Mỗi thế hệ có giá trị quan khác nhau.")] },
  { w: "設備", r: "せつび", m: "THIẾT BỊ — trang thiết bị, cơ sở vật chất", examples: [
    E("このホテルは設備が整っている。", "Khách sạn này trang thiết bị đầy đủ."),
    E("古い設備を新しいものに取り替えた。", "Thay thiết bị cũ bằng thiết bị mới."),
    E("工場の設備に多額の費用がかかった。", "Trang bị cho nhà máy tốn kém một khoản lớn.")] },
  { w: "物体", r: "ぶったい", m: "VẬT THỂ — vật thể, đồ vật", examples: [
    E("空に不思議な物体が浮かんでいた。", "Có một vật thể kỳ lạ lơ lửng trên trời."),
    E("物体は重力によって落ちる。", "Vật thể rơi xuống do trọng lực."),
    E("水中の物体は実際より大きく見える。", "Vật thể dưới nước trông lớn hơn thực tế.")] },
  { w: "形成", r: "けいせい", m: "HÌNH THÀNH — hình thành, tạo nên", examples: [
    E("子どものころの経験が人格を形成する。", "Trải nghiệm thời thơ ấu hình thành nên nhân cách."),
    E("川の流れが谷を形成した。", "Dòng sông đã tạo nên thung lũng."),
    E("良い人間関係を形成するには時間がかかる。", "Tạo dựng quan hệ tốt đẹp cần thời gian.")] },
  { w: "俳優", r: "はいゆう", m: "BÀI ƯU — diễn viên (kịch, phim)", examples: [
    E("彼は有名な映画俳優だ。", "Anh ấy là diễn viên điện ảnh nổi tiếng."),
    E("将来は俳優になりたい。", "Tương lai tôi muốn trở thành diễn viên."),
    E("舞台俳優は毎日稽古を重ねる。", "Diễn viên sân khấu luyện tập mỗi ngày.")] },
  { w: "職業", r: "しょくぎょう", m: "CHỨC NGHIỆP — nghề nghiệp", examples: [
    E("申込書に職業を書いてください。", "Hãy ghi nghề nghiệp vào đơn đăng ký."),
    E("将来の職業についてよく考えた。", "Tôi đã suy nghĩ kỹ về nghề nghiệp tương lai."),
    E("職業に貴賤はない。", "Nghề nghiệp không có cao thấp, sang hèn.")] },
  { w: "傾向", r: "けいこう", m: "KHUYNH HƯỚNG — khuynh hướng, xu hướng", examples: [
    E("若者の間で野菜離れの傾向が見られる。", "Trong giới trẻ có xu hướng ít ăn rau."),
    E("彼は物事を悪く考える傾向がある。", "Anh ấy có khuynh hướng nghĩ tiêu cực."),
    E("今年は暖冬の傾向だ。", "Năm nay có xu hướng mùa đông ấm.")] },
  { w: "診断", r: "しんだん", m: "CHẨN ĐOÁN — chẩn đoán, khám bệnh", examples: [
    E("医者に過労と診断された。", "Tôi bị bác sĩ chẩn đoán là làm việc quá sức."),
    E("健康診断を毎年受けている。", "Hằng năm tôi đều khám sức khỏe."),
    E("診断の結果は来週わかる。", "Kết quả chẩn đoán tuần sau sẽ có.")] },
  { w: "逃れる", r: "のがれる", m: "ĐÀO — thoát khỏi, trốn thoát, tránh được", examples: [
    E("犯人は警察の目を逃れて逃走した。", "Thủ phạm trốn thoát khỏi tầm mắt cảnh sát."),
    E("責任から逃れることはできない。", "Không thể thoát khỏi trách nhiệm."),
    E("火事から逃れて無事だった。", "Thoát khỏi đám cháy nên bình an vô sự.")] },
  { w: "避ける", r: "さける", m: "TỴ — tránh, né, tránh xa", examples: [
    E("混雑を避けて早朝に出発した。", "Tôi xuất phát từ sáng sớm để tránh đông đúc."),
    E("彼は私を避けているようだ。", "Hình như anh ấy đang tránh mặt tôi."),
    E("車をよけて、ぶつかるのを避けた。", "Tôi né chiếc xe để tránh va chạm.")] },
  { w: "工作", r: "こうさく", m: "CÔNG TÁC — thủ công, làm đồ thủ công; mưu đồ, thao túng", examples: [
    E("子どもと一緒に工作を楽しんだ。", "Tôi cùng con làm đồ thủ công vui vẻ."),
    E("夏休みの工作の宿題を出した。", "Tôi nộp bài tập làm đồ thủ công của kỳ nghỉ hè."),
    E("裏で選挙の工作が行われていた。", "Đằng sau đã có những mưu đồ thao túng bầu cử.")] },
  { w: "警備", r: "けいび", m: "CẢNH BỊ — canh gác, bảo vệ, an ninh", examples: [
    E("大統領の警備が厳しくなった。", "An ninh bảo vệ tổng thống được siết chặt."),
    E("夜は警備員が建物を巡回する。", "Ban đêm nhân viên bảo vệ đi tuần quanh tòa nhà."),
    E("会場は厳重に警備されている。", "Hội trường được canh gác nghiêm ngặt.")] },
  { w: "外れる", r: "はずれる", m: "NGOẠI — tuột ra, bong ra; trật, lệch; không trúng", examples: [
    E("ボタンが外れてしまった。", "Cái cúc áo bị bung ra."),
    E("天気予報が外れて、雨が降った。", "Dự báo thời tiết sai nên trời đã mưa."),
    E("くじは外れだった。", "Tôi bốc thăm không trúng.")] },
  { w: "盗む", r: "ぬすむ", m: "ĐẠO — ăn trộm, lấy cắp", examples: [
    E("財布を盗まれた。", "Tôi bị trộm ví."),
    E("人の物を盗んではいけない。", "Không được lấy cắp đồ của người khác."),
    E("彼は先輩の技を盗んで上達した。", "Anh ấy học lỏm kỹ thuật của đàn anh nên giỏi lên.")] },
  { w: "注意深い", r: "ちゅういぶかい", m: "CHÚ Ý THÂM — cẩn thận, chú ý kỹ, thận trọng", examples: [
    E("彼は注意深い性格だ。", "Anh ấy có tính cẩn thận."),
    E("注意深く観察すれば違いがわかる。", "Nếu quan sát kỹ thì sẽ nhận ra sự khác biệt."),
    E("注意深い運転を心がけている。", "Tôi luôn cố gắng lái xe thận trọng.")] },
  { w: "用心深い", r: "ようじんぶかい", m: "DỤNG TÂM THÂM — cẩn trọng, thận trọng, cảnh giác", examples: [
    E("祖父は用心深くて、必ず鍵を二回確認する。", "Ông tôi rất cẩn trọng, luôn kiểm tra khóa hai lần."),
    E("用心深い人は簡単には人を信じない。", "Người cảnh giác không dễ tin người khác."),
    E("彼は用心深く道の両側を見渡した。", "Anh ấy thận trọng nhìn cả hai bên đường.")] },
  { w: "貴団体", r: "きだんたい", m: "QUÝ ĐOÀN THỂ — quý tổ chức, quý hội (kính ngữ trong văn bản)", examples: [
    E("貴団体のご発展をお祈りいたします。", "Chúng tôi xin chúc quý tổ chức ngày càng phát triển."),
    E("貴団体のご協力に感謝申し上げます。", "Chúng tôi xin cảm ơn sự hợp tác của quý tổ chức."),
    E("貴団体の活動に興味があります。", "Tôi quan tâm đến hoạt động của quý tổ chức.")] },
  { w: "浴びる", r: "あびる", m: "DỤC — tắm, dội, hứng chịu (ánh nắng, lời chỉ trích, sự chú ý)", examples: [
    E("朝シャワーを浴びてから出かけた。", "Tôi tắm vòi sen buổi sáng rồi mới ra ngoài."),
    E("日光を浴びると気分がいい。", "Tắm nắng khiến tinh thần sảng khoái."),
    E("彼の発言は世間の批判を浴びた。", "Phát ngôn của anh ấy hứng chịu chỉ trích của dư luận.")] },
  { w: "開設", r: "かいせつ", m: "KHAI THIẾT — mở, thiết lập (cửa hàng, tài khoản, trang web)", examples: [
    E("銀行で口座を開設した。", "Tôi đã mở tài khoản ở ngân hàng."),
    E("新しい教室を開設する予定だ。", "Dự định mở thêm lớp học mới."),
    E("会社の公式サイトを開設した。", "Công ty đã mở trang web chính thức.")] },
  { w: "添付", r: "てんぷ", m: "THIÊM PHÓ — đính kèm", examples: [
    E("メールに資料を添付して送った。", "Tôi gửi mail đính kèm tài liệu."),
    E("写真を添付してください。", "Hãy đính kèm ảnh."),
    E("添付ファイルを開けない。", "Tôi không mở được tệp đính kèm.")] },
  { w: "しゃっくり", r: "しゃっくり", m: "— nấc cụt, cơn nấc", examples: [
    E("急にしゃっくりが止まらなくなった。", "Đột nhiên tôi bị nấc không ngừng."),
    E("水を飲むとしゃっくりが止まることがある。", "Uống nước đôi khi làm hết nấc."),
    E("赤ちゃんがしゃっくりをしている。", "Em bé đang bị nấc.")] },
  { w: "再三", r: "さいさん", m: "TÁI TAM — nhiều lần, hết lần này đến lần khác", examples: [
    E("再三注意したのに、彼は遅刻をやめない。", "Dù đã nhắc nhở nhiều lần, anh ta vẫn không bỏ tật đi muộn."),
    E("再三の要請にもかかわらず、返事はなかった。", "Dù yêu cầu nhiều lần vẫn không có hồi âm."),
    E("再三お願いしたが、断られた。", "Tôi nhờ đi nhờ lại nhiều lần nhưng đều bị từ chối.")] },
  { w: "お勘定", r: "おかんじょう", m: "KHÁM ĐỊNH — tính tiền, hóa đơn (nhà hàng, quán)", examples: [
    E("すみません、お勘定をお願いします。", "Xin lỗi, cho tôi tính tiền."),
    E("お勘定は別々にしてください。", "Xin hãy tính tiền riêng."),
    E("お勘定を済ませて店を出た。", "Tôi thanh toán xong rồi rời quán.")] },
  { w: "騒がしい", r: "さわがしい", m: "TAO — ồn ào, náo động, bất ổn", examples: [
    E("隣の部屋が騒がしくて眠れない。", "Phòng bên cạnh ồn quá nên tôi không ngủ được."),
    E("教室が騒がしいので、先生が注意した。", "Lớp ồn ào nên thầy giáo nhắc nhở."),
    E("最近、世の中が騒がしい。", "Dạo này xã hội có nhiều xáo động.")] },
  { w: "取り払う", r: "とりはらう", m: "THỦ PHẤT — dọn bỏ, dỡ bỏ, phá bỏ", examples: [
    E("古い塀を取り払って庭を広くした。", "Dỡ bỏ bức tường cũ để mở rộng khu vườn."),
    E("二人の間の壁を取り払いたい。", "Tôi muốn phá bỏ rào cản giữa hai người."),
    E("机をすべて取り払って、広い空間をつくった。", "Dọn hết bàn đi để tạo không gian rộng.")] },
  { w: "打ち消す", r: "うちけす", m: "ĐẢ TIÊU — phủ nhận, bác bỏ; xóa tan", examples: [
    E("彼はその噂を強く打ち消した。", "Anh ấy kiên quyết bác bỏ tin đồn đó."),
    E("香水で嫌な匂いを打ち消した。", "Tôi dùng nước hoa át mùi khó chịu."),
    E("不安を打ち消すように笑った。", "Cô ấy cười như để xua tan nỗi bất an.")] },
  { w: "引き離す", r: "ひきはなす", m: "DẪN LY — kéo rời ra, tách ra; bỏ xa (đối thủ)", examples: [
    E("けんかをしている二人を引き離した。", "Tôi tách hai người đang cãi nhau ra."),
    E("ライバルを大きく引き離して優勝した。", "Anh ấy bỏ xa đối thủ và vô địch."),
    E("親子を引き離すのはかわいそうだ。", "Chia cắt cha mẹ và con cái thật tội nghiệp.")] },
  { w: "ごくごく", r: "ごくごく", m: "(từ tượng thanh) — ừng ực (uống); ごく: rất, cực kỳ", examples: [
    E("冷たい水をごくごくと飲んだ。", "Tôi uống ừng ực cốc nước lạnh."),
    E("子どもがジュースをごくごく飲んでいる。", "Đứa bé uống nước trái cây ừng ực."),
    E("それはごくごく普通のことだ。", "Đó là chuyện cực kỳ bình thường.")] },
  { w: "ぞろぞろ", r: "ぞろぞろ", m: "(từ tượng hình) — nối đuôi nhau, lũ lượt kéo đi", examples: [
    E("試合が終わって、観客がぞろぞろと出てきた。", "Trận đấu xong, khán giả lũ lượt kéo ra."),
    E("子どもたちが先生のあとをぞろぞろついていく。", "Bọn trẻ nối đuôi nhau đi theo cô giáo."),
    E("駅からぞろぞろと人が出てきた。", "Người từ nhà ga lũ lượt kéo ra.")] },
  { w: "大量", r: "たいりょう", m: "ĐẠI LƯỢNG — số lượng lớn, hàng loạt", examples: [
    E("大量の資料を一晩で読んだ。", "Tôi đọc một lượng lớn tài liệu trong một đêm."),
    E("セールで大量に買ってしまった。", "Tôi lỡ mua rất nhiều vì giảm giá."),
    E("工場では製品が大量に生産されている。", "Sản phẩm được sản xuất hàng loạt ở nhà máy.")] },
  { w: "ぎしぎし", r: "ぎしぎし", m: "(từ tượng thanh) — kẽo kẹt, cọt kẹt (sàn, ghế)", examples: [
    E("古い床がぎしぎしと音を立てる。", "Sàn nhà cũ kêu cọt kẹt."),
    E("椅子がぎしぎしして壊れそうだ。", "Cái ghế kêu kẽo kẹt như sắp hỏng."),
    E("階段をのぼると、ぎしぎし鳴った。", "Bước lên cầu thang thì nó kêu cọt kẹt.")] },
  { w: "じめじめ", r: "じめじめ", m: "(từ tượng hình) — ẩm ướt, âm ẩm; u ám (tính cách)", examples: [
    E("梅雨は毎日じめじめして不快だ。", "Mùa mưa ẩm ướt mỗi ngày thật khó chịu."),
    E("じめじめした部屋にはカビが生える。", "Căn phòng ẩm ướt dễ mọc nấm mốc."),
    E("彼はいつもじめじめして暗い性格だ。", "Anh ấy tính u ám, lúc nào cũng buồn rầu.")] },
  { w: "じろじろ", r: "じろじろ", m: "(từ tượng hình) — nhìn chằm chằm, nhìn soi mói", examples: [
    E("人をじろじろ見るのは失礼だ。", "Nhìn chằm chằm vào người khác là bất lịch sự."),
    E("じろじろ見られて恥ずかしかった。", "Bị nhìn chằm chằm nên tôi thấy xấu hổ."),
    E("外国人だからか、みんなにじろじろ見られた。", "Chắc vì là người nước ngoài nên bị mọi người nhìn chằm chằm.")] },
  { w: "格別", r: "かくべつ", m: "CÁCH BIỆT — đặc biệt, khác thường, hơn hẳn", examples: [
    E("運動の後のビールは格別だ。", "Bia sau khi vận động thì thật đặc biệt ngon."),
    E("今年の夏は格別に暑い。", "Mùa hè năm nay nóng khác thường."),
    E("格別の配慮をいただき、感謝しています。", "Tôi biết ơn sự quan tâm đặc biệt của anh.")] },
  { w: "直行", r: "ちょっこう", m: "TRỰC HÀNH — đi thẳng (không ghé nơi khác)", examples: [
    E("会社に寄らず、取引先へ直行した。", "Tôi không ghé công ty mà đi thẳng đến nơi đối tác."),
    E("この電車は東京まで直行する。", "Chuyến tàu này chạy thẳng đến Tokyo."),
    E("空港から直行でホテルへ向かった。", "Từ sân bay chúng tôi đi thẳng tới khách sạn.")] },
  { w: "くだらない", r: "くだらない", m: "— vô giá trị, tầm phào, nhảm nhí", examples: [
    E("くだらない冗談ばかり言うな。", "Đừng toàn nói đùa nhảm nhí."),
    E("そんなくだらないことで悩んでいたのか。", "Hóa ra cậu băn khoăn vì chuyện vớ vẩn như thế à."),
    E("この番組はくだらなくて見る気がしない。", "Chương trình này nhảm nên tôi không muốn xem.")] },
  { w: "どしどし", r: "どしどし", m: "(phó từ) — liên tiếp, ào ạt, cứ thoải mái", examples: [
    E("ご意見をどしどしお寄せください。", "Xin hãy gửi ý kiến đến thật nhiều."),
    E("質問があればどしどし聞いてください。", "Có thắc mắc cứ thoải mái hỏi nhé."),
    E("注文がどしどし入ってきた。", "Đơn đặt hàng đổ về dồn dập.")] },
  { w: "どっしり", r: "どっしり", m: "(từ tượng hình) — nặng trịch, vững chãi, điềm đạm", examples: [
    E("どっしりとした机を買った。", "Tôi mua một chiếc bàn nặng và chắc chắn."),
    E("彼はどっしり構えていて頼りになる。", "Anh ấy điềm tĩnh vững vàng nên rất đáng tin."),
    E("どっしりしたお寺の門が見えてきた。", "Cổng chùa đồ sộ vững chãi hiện ra.")] },
  { w: "うじゃうじゃ", r: "うじゃうじゃ", m: "(từ tượng hình) — lúc nhúc, nhung nhúc (nhiều và dày đặc)", examples: [
    E("川の中に魚がうじゃうじゃいる。", "Trong sông cá lúc nhúc."),
    E("ごみ箱に虫がうじゃうじゃわいていた。", "Trong thùng rác sâu bọ nhung nhúc."),
    E("駅前には人がうじゃうじゃいた。", "Trước nhà ga người đông nghịt.")] },
  { w: "保つ", r: "たもつ", m: "BẢO — giữ, duy trì, giữ vững", examples: [
    E("部屋の温度を一定に保つ。", "Giữ nhiệt độ phòng ổn định."),
    E("健康を保つために毎日歩いている。", "Tôi đi bộ mỗi ngày để duy trì sức khỏe."),
    E("彼は最後まで冷静さを保った。", "Anh ấy giữ được sự bình tĩnh đến cuối cùng.")] },
  { w: "反論", r: "はんろん", m: "PHẢN LUẬN — phản bác, bác lại, phản biện", examples: [
    E("彼の意見に反論した。", "Tôi đã phản bác ý kiến của anh ấy."),
    E("反論の余地がない。", "Không có chỗ để phản bác."),
    E("先生の説明に反論する学生はいなかった。", "Không có sinh viên nào phản biện lời giải thích của thầy.")] },
  { w: "書籍", r: "しょせき", m: "THƯ TỊCH — sách, ấn phẩm sách", examples: [
    E("この店は専門書籍が充実している。", "Cửa hàng này có nhiều sách chuyên ngành."),
    E("書籍の価格が上がっている。", "Giá sách đang tăng."),
    E("電子書籍で小説を読んでいる。", "Tôi đọc tiểu thuyết bằng sách điện tử.")] },
  { w: "尖る", r: "とがる", m: "TIÊM — nhọn, sắc, nhọn lên; nhạy bén, gay gắt", examples: [
    E("鉛筆の先が尖っている。", "Đầu bút chì nhọn."),
    E("彼は怒って口を尖らせた。", "Anh ấy giận nên chu môi."),
    E("神経が尖ってちょっとの音でも気になる。", "Thần kinh căng thẳng nên chỉ một tiếng động nhỏ cũng khó chịu.")] },
  { w: "進出", r: "しんしゅつ", m: "TIẾN XUẤT — tiến ra, mở rộng sang (thị trường, nước ngoài)", examples: [
    E("その会社は海外市場に進出した。", "Công ty đó đã tiến ra thị trường nước ngoài."),
    E("女性の社会進出が進んでいる。", "Việc phụ nữ tham gia xã hội đang tiến triển."),
    E("チームは決勝戦に進出した。", "Đội đã tiến vào trận chung kết.")] },
  { w: "強大", r: "きょうだい", m: "CƯỜNG ĐẠI — hùng mạnh, to lớn, mạnh mẽ", examples: [
    E("強大な軍事力を持つ国だ。", "Đó là quốc gia có sức mạnh quân sự hùng hậu."),
    E("強大な敵に立ち向かった。", "Họ đã đối đầu với kẻ thù hùng mạnh."),
    E("彼の影響力は強大だ。", "Ảnh hưởng của ông ấy rất to lớn.")] },
  { w: "到達", r: "とうたつ", m: "ĐÁO ĐẠT — đạt tới, đến được, đến nơi", examples: [
    E("登山隊は山頂に到達した。", "Đoàn leo núi đã lên tới đỉnh."),
    E("目標に到達するまで頑張る。", "Tôi sẽ cố gắng cho đến khi đạt mục tiêu."),
    E("彼の技術は高い水準に到達している。", "Kỹ thuật của anh ấy đã đạt tới trình độ cao.")] },
  { w: "限界", r: "げんかい", m: "HẠN GIỚI — giới hạn, mức tối đa", examples: [
    E("体力の限界を感じた。", "Tôi cảm thấy đã đến giới hạn thể lực."),
    E("この方法には限界がある。", "Phương pháp này có giới hạn."),
    E("もう我慢の限界だ。", "Đã đến giới hạn chịu đựng rồi.")] },
  { w: "境界", r: "きょうかい", m: "CẢNH GIỚI — ranh giới, biên giới", examples: [
    E("川が二つの県の境界になっている。", "Con sông là ranh giới của hai tỉnh."),
    E("隣の家との境界に塀を建てた。", "Dựng tường ở ranh giới với nhà bên cạnh."),
    E("夢と現実の境界があいまいになった。", "Ranh giới giữa mơ và thực trở nên mơ hồ.")] },
  { w: "境目", r: "さかいめ", m: "CẢNH MỤC — chỗ giáp ranh, ranh giới, điểm phân chia", examples: [
    E("海と空の境目が見えない。", "Không thấy ranh giới giữa biển và trời."),
    E("ここが二つの町の境目だ。", "Đây là chỗ giáp ranh của hai thị trấn."),
    E("成功と失敗の境目は紙一重だ。", "Ranh giới giữa thành công và thất bại mong manh.")] },
  { w: "皮肉", r: "ひにく", m: "BÌ NHỤC — mỉa mai, châm biếm; trớ trêu", examples: [
    E("彼は皮肉を言うのが得意だ。", "Anh ấy giỏi nói mỉa mai."),
    E("皮肉な結果になってしまった。", "Kết quả lại trở nên trớ trêu."),
    E("皮肉っぽい言い方はやめてほしい。", "Tôi mong anh đừng nói giọng mỉa mai.")] },
  { w: "固める", r: "かためる", m: "CỐ — làm cứng, củng cố, kiên định", examples: [
    E("セメントを固めて土台を作る。", "Làm xi măng cứng lại để xây nền."),
    E("彼は留学する決意を固めた。", "Anh ấy đã hạ quyết tâm đi du học."),
    E("守りを固めて反撃に備える。", "Củng cố phòng thủ để chuẩn bị phản công.")] },
  { w: "取りかかる", r: "とりかかる", m: "THỦ — bắt tay vào, bắt đầu làm", examples: [
    E("さっそく新しい仕事に取りかかります。", "Tôi sẽ bắt tay vào công việc mới ngay."),
    E("宿題に取りかかる前に、少し休んだ。", "Trước khi bắt tay làm bài tập, tôi nghỉ một chút."),
    E("工事は来月から取りかかる予定だ。", "Công trình dự kiến khởi công từ tháng sau.")] },
  { w: "指図", r: "さしず", m: "CHỈ ĐỒ — chỉ thị, sai bảo, ra lệnh (＝命令)", examples: [
    E("人の指図は受けたくない。", "Tôi không muốn bị người khác sai bảo."),
    E("彼は部下に細かく指図した。", "Anh ấy chỉ thị tỉ mỉ cho cấp dưới."),
    E("あなたに指図される筋合いはない。", "Tôi không có lý do gì để bị anh ra lệnh.")] },
  { w: "漏れる", r: "もれる", m: "LẬU — rò rỉ, lọt ra, bị lộ; sót", examples: [
    E("水道管から水が漏れている。", "Nước đang rò rỉ từ ống nước."),
    E("機密情報が外部に漏れた。", "Thông tin mật bị lộ ra ngoài."),
    E("名簿から私の名前が漏れていた。", "Tên tôi bị sót khỏi danh sách.")] },
  { w: "人柄", r: "ひとがら", m: "NHÂN BÍNH — tính cách, phẩm chất con người", examples: [
    E("彼は人柄がよくて誰からも好かれる。", "Anh ấy tính tình tốt nên ai cũng quý."),
    E("面接では人柄も重視される。", "Khi phỏng vấn, phẩm chất con người cũng được coi trọng."),
    E("温かい人柄に引かれて結婚した。", "Tôi kết hôn vì bị cuốn hút bởi tính cách ấm áp của anh ấy.")] },
  { w: "案の定", r: "あんのじょう", m: "ÁN ĐỊNH — quả nhiên, đúng như dự đoán", examples: [
    E("案の定、彼は遅刻してきた。", "Quả nhiên, anh ấy đã đến muộn."),
    E("案の定、試験は難しかった。", "Đúng như dự đoán, đề thi rất khó."),
    E("案の定、計画は失敗に終わった。", "Quả nhiên kế hoạch kết thúc bằng thất bại.")] },
  { w: "包む", r: "つつむ", m: "BAO — gói, bọc, bao phủ", examples: [
    E("プレゼントを紙で包んだ。", "Tôi gói món quà bằng giấy."),
    E("町は深い霧に包まれていた。", "Thị trấn bị sương mù dày đặc bao phủ."),
    E("お弁当を布で包んで持っていく。", "Tôi gói cơm hộp bằng khăn rồi mang theo.")] },
  { w: "展開", r: "てんかい", m: "TRIỂN KHAI — triển khai, diễn biến, phát triển (tình tiết)", examples: [
    E("話は思わぬ方向に展開した。", "Câu chuyện diễn biến theo hướng bất ngờ."),
    E("全国に店舗を展開している。", "Công ty đang triển khai cửa hàng trên toàn quốc."),
    E("この映画は展開が速くて面白い。", "Bộ phim này diễn biến nhanh nên rất hấp dẫn.")] },
  { w: "妥当", r: "だとう", m: "THỎA ĐÁNG — thỏa đáng, hợp lý, thích hợp", examples: [
    E("その価格は妥当だと思う。", "Tôi nghĩ mức giá đó là hợp lý."),
    E("妥当な判断だった。", "Đó là phán đoán thỏa đáng."),
    E("この条件は妥当とは言えない。", "Không thể nói điều kiện này là hợp lý.")] },
  { w: "庇う", r: "かばう", m: "TÝ — che chở, bênh vực, bảo vệ", examples: [
    E("母は子どもをかばって車にはねられた。", "Người mẹ che chắn cho con và bị xe tông."),
    E("彼は友人の失敗をかばった。", "Anh ấy bênh vực cho lỗi của bạn."),
    E("けがした足をかばいながら歩いた。", "Tôi vừa đi vừa giữ gìn cái chân bị thương.")] },
  { w: "やり抜く", r: "やりぬく", m: "— làm đến cùng, hoàn thành bằng được", examples: [
    E("一度決めたことは最後までやり抜く。", "Việc đã quyết định thì tôi làm đến cùng."),
    E("困難があっても、やり抜く覚悟だ。", "Dù khó khăn tôi vẫn quyết tâm làm cho bằng được."),
    E("彼は難しい仕事をやり抜いた。", "Anh ấy đã hoàn thành công việc khó đến cùng.")] },
  { w: "本人", r: "ほんにん", m: "BẢN NHÂN — bản thân người đó, đương sự, chính chủ", examples: [
    E("本人に直接確認してください。", "Hãy xác nhận trực tiếp với chính người đó."),
    E("本人が来なければ手続きはできない。", "Nếu đương sự không đến thì không làm thủ tục được."),
    E("本人は何も知らなかったらしい。", "Hình như chính anh ta không hề biết gì.")] },
  { w: "情景", r: "じょうけい", m: "TÌNH CẢNH — cảnh tượng, quang cảnh (gợi cảm xúc)", examples: [
    E("子どものころの情景が目に浮かぶ。", "Cảnh tượng thời thơ ấu hiện lên trước mắt."),
    E("この小説は情景の描写が美しい。", "Cuốn tiểu thuyết này miêu tả cảnh vật rất đẹp."),
    E("忘れられない情景だった。", "Đó là một quang cảnh không thể quên.")] },
  { w: "賛否", r: "さんぴ", m: "TÁN PHỦ — tán thành hay phản đối, đồng tình hay không", examples: [
    E("新しい制度は賛否が分かれている。", "Chế độ mới đang gây chia rẽ ý kiến tán thành và phản đối."),
    E("賛否を問う投票が行われた。", "Đã tiến hành bỏ phiếu hỏi ý kiến tán thành hay phản đối."),
    E("この映画は賛否両論だ。", "Bộ phim này có cả khen lẫn chê.")] },
  { w: "勧誘", r: "かんゆう", m: "KHUYẾN DỤ — mời chào, lôi kéo, chiêu mộ", examples: [
    E("駅前で新聞の勧誘を受けた。", "Tôi bị người chào mời đặt báo ở trước nhà ga."),
    E("サークルの新入生勧誘が始まった。", "Đã bắt đầu chiêu mộ tân sinh viên cho câu lạc bộ."),
    E("しつこい勧誘はお断りします。", "Chúng tôi từ chối các lời chào mời dai dẳng.")] },
  { w: "積もる", r: "つもる", m: "TÍCH — chất đống, tích tụ, phủ dày (tuyết, bụi)", examples: [
    E("昨夜の雪が十センチ積もった。", "Đêm qua tuyết phủ dày mười xen-ti-mét."),
    E("本棚にほこりが積もっている。", "Bụi bám dày trên giá sách."),
    E("久しぶりに会って、積もる話をした。", "Lâu ngày gặp lại, chúng tôi nói chuyện dồn nén bao điều.")] },
  { w: "永久", r: "えいきゅう", m: "VĨNH CỬU — vĩnh cửu, mãi mãi, lâu dài", examples: [
    E("二人は永久の愛を誓った。", "Hai người thề yêu nhau mãi mãi."),
    E("この資源は永久には続かない。", "Nguồn tài nguyên này không tồn tại mãi."),
    E("永久に忘れることはない。", "Tôi sẽ không bao giờ quên.")] },
  { w: "食べ頃", r: "たべごろ", m: "THỰC KHOẢNH — vừa độ ăn, lúc ăn ngon nhất (そろそろ食べ頃)", examples: [
    E("このメロンはそろそろ食べ頃だ。", "Quả dưa này sắp đến độ ăn ngon rồi."),
    E("桃が食べ頃になった。", "Đào đã chín đến lúc ăn ngon."),
    E("食べ頃を逃さないうちにいただこう。", "Hãy ăn trước khi qua mất lúc ngon nhất.")] },
  { w: "びりびり", r: "びりびり", m: "(từ tượng thanh/tượng hình) — xoẹt (xé), tê rần, giật", examples: [
    E("手紙をびりびりに破いた。", "Tôi xé bức thư thành từng mảnh."),
    E("電気が走って手がびりびりした。", "Điện giật làm tay tôi tê rần."),
    E("大きな音で窓ガラスがびりびり震えた。", "Cửa kính rung lên bần bật vì tiếng động lớn.")] },
  { w: "ばりばり", r: "ばりばり", m: "(từ tượng thanh/tượng hình) — rôm rốp, rắc rắc; hăng hái (làm việc)", examples: [
    E("せんべいをばりばりと食べた。", "Tôi nhai bánh gạo rôm rốp."),
    E("今日はばりばり働くぞ。", "Hôm nay tôi sẽ làm việc thật hăng hái."),
    E("凍った道を踏むと、ばりばり音がした。", "Giẫm lên con đường đóng băng, nghe tiếng rắc rắc.")] },
];

NEW.forEach((x) => {
  if (!Array.isArray(x.examples) || x.examples.length !== 3) {
    throw new Error("Need 3 examples: " + x.w);
  }
});

const n2Theme = data.themes.find((t) => t.id === "n2");
if (!n2Theme) throw new Error("theme n2 missing");

const have = new Set(data.items.filter((i) => i.t === "n2").map((i) => i.w));
let added = 0;
const skipped = [];
const addedIds = [];

for (const entry of NEW) {
  if (have.has(entry.w)) {
    skipped.push(entry.w);
    continue;
  }
  const id = "v" + String(data.items.length + 1).padStart(4, "0");
  data.items.push({ id, w: entry.w, r: entry.r, m: entry.m, t: "n2", s: "Từ vựng N2" });
  EXAMPLES[id] = entry.examples;
  have.add(entry.w);
  addedIds.push(id);
  added++;
}

n2Theme.count = data.items.filter((i) => i.t === "n2").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");

console.log({
  added,
  skipped,
  n2Count: n2Theme.count,
  total: data.total,
  firstNew: addedIds[0],
  lastNew: addedIds[addedIds.length - 1],
});

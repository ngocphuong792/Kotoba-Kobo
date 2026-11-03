const fs = require('fs');

// Read current (remote) version
let currentContent = fs.readFileSync('examples-data.js', 'utf8');

// Generate new examples for v6035-v6082 (48 words)
const newExamples = {
  "v6035": [
    {"ja":"膨大なデータを分析するのに時間がかかった。","vi":"Phân tích lượng dữ liệu khổng lồ mất nhiều thời gian."},
    {"ja":"膨大な費用がかかるプロジェクトだ。","vi":"Đây là dự án tốn chi phí cực kỳ lớn."},
    {"ja":"膨大な資料を読み込んで要点をまとめた。","vi":"Tôi đọc lượng tài liệu khổng lồ rồi tóm tắt điểm chính."}
  ],
  "v6036": [
    {"ja":"看護師が患者の状態を確認してくれた。","vi":"Y tá giúp tôi kiểm tra tình trạng bệnh nhân."},
    {"ja":"看護師を目指して勉強を始めた。","vi":"Tôi bắt đầu học với mục tiêu trở thành y tá."},
    {"ja":"夜間の看護師シフトに入ります。","vi":"Tôi sẽ vào ca trực đêm của y tá."}
  ],
  "v6037": [
    {"ja":"この問題に真剣に取り組む必要がある。","vi":"Cần nghiêm túc giải quyết vấn đề này."},
    {"ja":"新しいプロジェクトに取り組んでいます。","vi":"Tôi đang nỗ lực làm dự án mới."},
    {"ja":"チームで課題に取り組んだ結果、改善できた。","vi":"Đội nỗ lực giải quyết vấn đề và đã cải thiện được."}
  ],
  "v6038": [
    {"ja":"当時はまだスマホが普及していなかった。","vi":"Lúc đó điện thoại thông minh chưa phổ biến."},
    {"ja":"当時の記憶が曖昧だ。","vi":"Ký ức thời điểm đó khá mơ hồ."},
    {"ja":"当時、私はまだ学生だった。","vi":"Lúc đó tôi vẫn còn là sinh viên."}
  ],
  "v6039": [
    {"ja":"あらゆる可能性を考慮に入れた。","vi":"Tôi đã cân nhắc mọi khả năng."},
    {"ja":"あらゆる手段を尽くして解決を図る。","vi":"Nỗ lực dùng mọi cách để tìm giải pháp."},
    {"ja":"あらゆる角度から問題を分析する。","vi":"Phân tích vấn đề từ mọi góc độ."}
  ],
  "v6040": [
    {"ja":"幼い頃の記憶を思い出した。","vi":"Tôi nhớ lại ký ức thuở nhỏ."},
    {"ja":"幼い子供でも操作できるアプリだ。","vi":"Đây là app ngay cả trẻ em cũng dùng được."},
    {"ja":"彼はまだ幼い考え方をしている。","vi":"Anh ấy vẫn có suy nghĩ trẻ con."}
  ],
  "v6041": [
    {"ja":"説明がくどいので、要点だけ言ってほしい。","vi":"Giải thích dài dòng quá, chỉ nói điểm chính thôi."},
    {"ja":"くどい言い方をせず、シンプルに伝えた。","vi":"Tôi không nói dài dòng mà truyền đạt đơn giản."},
    {"ja":"同じことをくどくど言わないでください。","vi":"Đừng lặp lại cùng một chuyện mãi."}
  ],
  "v6042": [
    {"ja":"容器を密閉して保存してください。","vi":"Hãy đóng kín hộp rồi bảo quản."},
    {"ja":"密閉された部屋で酸素濃度が下がった。","vi":"Trong phòng kín, nồng độ oxy giảm."},
    {"ja":"密閉パックの食品は長持ちする。","vi":"Thực phẩm đóng kín bảo quản được lâu."}
  ],
  "v6043": [
    {"ja":"タオルを絞って水気を取った。","vi":"Tôi vắt khăn để lấy nước."},
    {"ja":"候補を3人に絞って面接を行う。","vi":"Thu hẹp 3 ứng viên rồi phỏng vấn."},
    {"ja":"予算を絞って運営する必要がある。","vi":"Cần giới hạn ngân sách để vận hành."}
  ],
  "v6044": [
    {"ja":"ポケットを探ったが財布が見つからなかった。","vi":"Tôi lục túi nhưng không tìm thấy ví."},
    {"ja":"相手の反応を探りながら話した。","vi":"Tôi nói vừa thăm dò phản ứng đối phương."},
    {"ja":"新しいビジネスの可能性を探る。","vi":"Khảo sát khả năng kinh doanh mới."}
  ],
  "v6045": [
    {"ja":"地面に垂直に柱を立てた。","vi":"Tôi dựng cột thẳng đứng với mặt đất."},
    {"ja":"垂直線を引いて角度を測る。","vi":"Kẻ đường thẳng đứng để đo góc."},
    {"ja":"この壁は地面に対して垂直だ。","vi":"Bức tường này thẳng đứng với mặt đất."}
  ],
  "v6046": [
    {"ja":"湖が凍ってスケートができる。","vi":"Hồ đóng băng nên trượt băng được."},
    {"ja":"冬の朝は水道管が凍ることがある。","vi":"Sáng đông có khi ống nước đóng băng."},
    {"ja":"怖さで体が凍るような気分だ。","vi":"Sợ đến mức cơ thể như đóng băng."}
  ],
  "v6047": [
    {"ja":"髪を後ろで結って仕事に行った。","vi":"Tôi búi tóc ra sau rồi đi làm."},
    {"ja":"彼女は髪を可愛く結っている。","vi":"Cô ấy búi tóc khá dễ thương."},
    {"ja":"リボンで髪を結った。","vi":"Tôi buộc tóc bằng nơ."}
  ],
  "v6048": [
    {"ja":"寒いのでセメントが固まらない。","vi":"Lạnh quá nên xi măng không đông lại."},
    {"ja":"人だかりが固まって見えにくい。","vi":"Đám đông đông đúc nên khó thấy."},
    {"ja":"恐怖で体が固まって動けなかった。","vi":"Sợ quá cơ thể cứng đơ không cử động được."}
  ],
  "v6049": [
    {"ja":"夜は気温が冷え込む。","vi":"Ban đêm nhiệt độ giảm lạnh."},
    {"ja":"コーヒーが冷えてしまった。","vi":"Cà phê đã nguội rồi."},
    {"ja":"体が冷える風邪をひいた。","vi":"Tôi bị cảm do cơ thể bị lạnh."}
  ],
  "v6050": [
    {"ja":"テーマについて活発な討論が行われた。","vi":"Đã có thảo luận sôi nổi về chủ đề."},
    {"ja":"討論の結果、新しい方針が決まった。","vi":"Kết quả thảo luận, phương châm mới được quyết định."},
    {"ja":"会議で意見を交換し討論した。","vi":"Trong cuộc họp chúng tôi trao đổi ý kiến và thảo luận."}
  ],
  "v6051": [
    {"ja":"厳しい言葉に傷ついた。","vi":"Tôi bị tổn thương vì lời nói gay gắt."},
    {"ja":"彼女の心を傷つけないように気をつけた。","vi":"Tôi cẩn thận để không làm tổn thương cô ấy."},
    {"ja":"失敗で自信が傷ついた。","vi":"Tự tin bị tổn thương vì thất bại."}
  ],
  "v6052": [
    {"ja":"売上が好調に伸びている。","vi":"Doanh thu đang tăng thuận lợi."},
    {"ja":"最近調子が好調だ。","vi":"Gần đây tôi phong độ tốt."},
    {"ja":"チームの好調な状態を維持したい。","vi":"Muốn duy trì trạng thái tốt của đội."}
  ],
  "v6053": [
    {"ja":"この平和が永久に続くことを願う。","vi":"Ước hòa bình này kéo dài vĩnh viễn."},
    {"ja":"永久に保存されるデータだ。","vi":"Đây là dữ liệu được lưu vĩnh viễn."},
    {"ja":"永久不滅の愛を誓った。","vi":"Thề với tình yêu vĩnh cửu."}
  ],
  "v6054": [
    {"ja":"事業の初年度は赤字だった。","vi":"Năm đầu kinh doanh bị lỗ."},
    {"ja":"初年度の目標を達成できた。","vi":"Đạt được mục tiêu năm đầu."},
    {"ja":"初年度から順調にスタートした。","vi":"Khởi đầu thuận lợi từ năm đầu."}
  ],
  "v6055": [
    {"ja":"前社長のリーダーシップを学んだ。","vi":"Tôi học được lãnh đạo từ cựu chủ tịch."},
    {"ja":"前社長が築いた方針を引き継いだ。","vi":"Tiếp nối phương châm cựu chủ tịch xây dựng."},
    {"ja":"前社長の講演を聞く機会があった。","vi":"Có cơ hội nghe cựu chủ tịch diễn thuyết."}
  ],
  "v6056": [
    {"ja":"このジムは会員制だ。","vi":"Phòng gym này chỉ dành cho thành viên."},
    {"ja":"会員制のレストランを予約した。","vi":"Tôi đặt nhà hàng chỉ dành cho thành viên."},
    {"ja":"会員制サイトで限定コンテンツを見る。","vi":"Xem nội dung giới hạn trên site thành viên."}
  ],
  "v6057": [
    {"ja":"週末は家族連れで行楽地が混む。","vi":"Cuối tuần khu vui chơi đông người đi cùng gia đình."},
    {"ja":"家族連れに優先席を譲った。","vi":"Tôi nhường ghế ưu tiên cho người đi cùng gia đình."},
    {"ja":"家族連れでの旅行を計画している。","vi":"Đang lên kế hoạch đi du lịch cùng gia đình."}
  ],
  "v6058": [
    {"ja":"彼は私の真後ろに立っていた。","vi":"Anh ấy đứng ngay sau lưng tôi."},
    {"ja":"真後ろから声をかけられて驚いた。","vi":"Bị gọi từ ngay sau lưng nên tôi giật mình."},
    {"ja":"出口は真後ろにある。","vi":"Lối出口 ở ngay phía sau."}
  ],
  "v6059": [
    {"ja":"記憶が鮮明に残っている。","vi":"Ký ức vẫn còn rõ ràng."},
    {"ja":"鮮明な色彩の絵を描いた。","vi":"Tôi vẽ bức tranh màu sắc tươi sáng."},
    {"ja":"鮮明な印象を受けた。","vi":"Tôi có ấn tượng rõ ràng."}
  ],
  "v6060": [
    {"ja":"肌が滑らかで美しい。","vi":"Da mịn mượt và đẹp."},
    {"ja":"操作が滑らかで使いやすいアプリだ。","vi":"App này thao tác mượt mà, dễ dùng."},
    {"ja":"滑らかな会話ができた。","vi":"Cuộc trò chuyện diễn ra suôn sẻ."}
  ],
  "v6061": [
    {"ja":"緩やかな坂道を上る。","vi":"Leo con dốc thoải."},
    {"ja":"緩やかな改善が見られた。","vi":"Thấy được sự cải thiện chậm rãi."},
    {"ja":"緩やかな曲線を描く。","vi":"Vẽ đường cong nhẹ nhàng."}
  ],
  "v6062": [
    {"ja":"会議室を確保する必要がある。","vi":"Cần đảm bảo có phòng họp."},
    {"ja":"資金を確保してプロジェクトを始める。","vi":"Đảm bảo nguồn vốn rồi bắt đầu dự án."},
    {"ja":"席を確保して待っていた。","vi":"Tôi giữ chỗ rồi chờ."}
  ],
  "v6063": [
    {"ja":"新しいCMの制作に携わった。","vi":"Tôi tham gia sản xuất quảng cáo mới."},
    {"ja":"制作チームと協力して動画を作った。","vi":"Làm video hợp tác với đội sản xuất."},
    {"ja":"映画の制作費が膨大だ。","vi":"Chi phí sản xuất phim cực kỳ lớn."}
  ],
  "v6064": [
    {"ja":"データをクラウドに保存した。","vi":"Tôi lưu dữ liệu lên cloud."},
    {"ja":"食品を冷蔵庫で保存する。","vi":"Bảo quản thực phẩm trong tủ lạnh."},
    {"ja":"重要な書類を保管庫に保存する。","vi":"Lưu tài liệu quan trọng trong két."}
  ],
  "v6065": [
    {"ja":"自分の強みをアピールする。","vi":"Nêu bật điểm mạnh của mình."},
    {"ja":"商品の魅力をアピールする広告だ。","vi":"Quảng cáo làm nổi bật sự hấp dẫn của sản phẩm."},
    {"ja":"面接でスキルをアピールした。","vi":"Tôi nêu bật kỹ năng trong phỏng vấn."}
  ],
  "v6066": [
    {"ja":"新しいアプリをインストールした。","vi":"Tôi cài app mới."},
    {"ja":"インストールに失敗してやり直した。","vi":"Cài đặt thất bại nên làm lại."},
    {"ja":"必要なソフトをインストールしてください。","vi":"Hãy cài phần mềm cần thiết."}
  ],
  "v6067": [
    {"ja":"家具のセットを買った。","vi":"Tôi mua bộ đồ nội thất."},
    {"ja":"環境をセットして開発を始める。","vi":"Thiết lập môi trường rồi bắt đầu phát triển."},
    {"ja":"テレビをセットして番組を見る。","vi":"Cài đặt TV rồi xem chương trình."}
  ],
  "v6068": [
    {"ja":"彼の言葉を疑った。","vi":"Tôi nghi ngờ lời của anh ấy."},
    {"ja":"成果が疑われるような数値だ。","vi":"Con số khiến kết quả bị nghi ngờ."},
    {"ja":"疑う余地がない事実だ。","vi":"Đây là sự thật không thể nghi ngờ."}
  ],
  "v6069": [
    {"ja":"この事件を契機にルールが変わった。","vi":"Từ sự kiện này, quy tắc đã thay đổi."},
    {"ja":"契機として使える良い経験だ。","vi":"Đây là kinh nghiệm tốt làm cơ hội."},
    {"ja":"転職を契機に生活が変わった。","vi":"Từ việc chuyển nghề, cuộc sống thay đổi."}
  ],
  "v6070": [
    {"ja":"先端技術を取り入れた製品だ。","vi":"Sản phẩm dùng công nghệ tiên tiến."},
    {"ja":"ペンの先端が摩耗した。","vi":"Ngòi bút bị mòn."},
    {"ja":"先端医療で治療を受けた。","vi":"Điều trị bằng y tế tiên tiến."}
  ],
  "v6071": [
    {"ja":"予算をばっさり削減した。","vi":"Cắt giảm ngân sách mạnh mẽ."},
    {"ja":"ばっさり髪を切った。","vi":"Cắt tóc ngắn mạnh."},
    {"ja":"売上がばっさり落ちた。","vi":"Doanh thu giảm mạnh."}
  ],
  "v6072": [
    {"ja":"過剰な心配は不要だ。","vi":"Không cần lo lắng quá mức."},
    {"ja":"生産能力が過剰になっている。","vi":"Năng lực sản xuất đang quá mức."},
    {"ja":"過剰なサービスで顧客を驚かせた。","vi":"Dịch vụ quá mức khiến khách ngạc nhiên."}
  ],
  "v6073": [
    {"ja":"臆病な性格で挑戦を避けていた。","vi":"Vì tính hèn nhát nên tránh thử thách."},
    {"ja":"臆病な発言をしたと批判された。","vi":"Bị phê bình vì phát biểu nhút nhát."},
    {"ja":"臆病者だと思われたくない。","vi":"Không muốn bị coi là kẻ hèn nhát."}
  ],
  "v6074": [
    {"ja":"山の頂上に到達した。","vi":"Đạt đến đỉnh núi."},
    {"ja":"頂上からの景色が美しい。","vi":"Cảnh từ đỉnh núi rất đẹp."},
    {"ja":"キャリアの頂上を目指す。","vi":"Phấn đấu đến đỉnh cao sự nghiệp."}
  ],
  "v6075": [
    {"ja":"機械を分解して修理した。","vi":"Tôi tháo máy để sửa."},
    {"ja":"問題を分解して解決策を探る。","vi":"Phân tích vấn đề để tìm giải pháp."},
    {"ja":"ゴミを分解して処理する。","vi":"Phân rác để xử lý."}
  ],
  "v6076": [
    {"ja":"雪が山を覆っている。","vi":"Tuyết phủ lên núi."},
    {"ja":"雲が空を覆って暗くなった。","vi":"Mây che bầu trời nên tối."},
    {"ja":"謎が覆い隠されている。","vi":"Bí ẩn được che giấu."}
  ],
  "v6077": [
    {"ja":"二人はひそひそと話していた。","vi":"Hai người rì rầm nói chuyện."},
    {"ja":"ひそひそ噂話が広まっている。","vi":"Tin đồn rì rầm đang lan."},
    {"ja":"ひそひそと笑い声が聞こえた。","vi":"Nghe thấy tiếng cười nhỏ."}
  ],
  "v6078": [
    {"ja":"対等な立場で話し合った。","vi":"Thảo luận từ vị thế bình đẳng."},
    {"ja":"対等なパートナーシップを築く。","vi":"Xây dựng quan hệ đối tác bình đẳng."},
    {"ja":"対等に扱われることを望む。","vi":"Muốn được đối xử bình đẳng."}
  ],
  "v6079": [
    {"ja":"駅の係員に道を聞いた。","vi":"Tôi hỏi đường nhân viên nhà ga."},
    {"ja":"係員が対応してくれた。","vi":"Nhân viên đã hỗ trợ tôi."},
    {"ja":"係員に案内してもらった。","vi":"Được nhân viên hướng dẫn."}
  ],
  "v6080": [
    {"ja":"強火で炒める。","vi":"Xào bằng lửa lớn."},
    {"ja":"強火で煮込むと焦げる。","vi":"Nấu lửa to sẽ bị cháy."},
    {"ja":"強火にしてから中火にする。","vi":"Đặt lửa lớn rồi chuyển lửa vừa."}
  ],
  "v6081": [
    {"ja":"痛いところを押さえた。","vi":"Tôi nhấn vào chỗ đau."},
    {"ja":"感情を押さえて冷静に対応した。","vi":"Kiểm soát cảm xúc rồi phản ứng bình tĩnh."},
    {"ja":"コストを押さえる工夫をした。","vi":"Làm cách để kiểm soát chi phí."}
  ],
  "v6082": [
    {"ja":"求人サイトで仕事を探した。","vi":"Tôi tìm việc trên site tuyển dụng."},
    {"ja":"求人広告を出して人を集める。","vi":"Đăng quảng cáo tuyển dụng để tuyển người."},
    {"ja":"求人情報をチェックしている。","vi":"Tôi đang kiểm tra tin tuyển dụng."}
  ]
};

// Add new examples to the end of current content
const newExamplesStr = JSON.stringify(newExamples, null, 0);
const lastBraceIndex = currentContent.lastIndexOf('}');

// Insert before the final };
currentContent = currentContent.slice(0, lastBraceIndex) + ',' + newExamplesStr + currentContent.slice(lastBraceIndex);

// Write back
fs.writeFileSync('examples-data.js', currentContent, 'utf8');

console.log('Added 48 new examples (v6035-v6082)');

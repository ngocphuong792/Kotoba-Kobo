/**
 * Add new-vocab.md words into theme n2 with Hán Việt + 2 examples.
 * Usage: node nguon/add-new-vocab-n2.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(root, "vocab-data.js"), "utf8"));
eval(fs.readFileSync(path.join(root, "examples-data.js"), "utf8"));

const data = window.VOCAB_DATA;
const EXAMPLES = window.EXAMPLES_DATA;

/** @type {Array<{w:string,r:string,m:string,examples:Array<{ja:string,vi:string}>}>} */
const NEW = [
  {
    w: "ひざ",
    r: "ひざ",
    m: "TẤT — đầu gối (膝)",
    examples: [
      { ja: "転んでひざをすりむいてしまった。", vi: "Tôi ngã và trầy đầu gối." },
      { ja: "長時間座っていたらひざが痛くなった。", vi: "Ngồi lâu quá nên đầu gối bị đau." },
    ],
  },
  {
    w: "治療",
    r: "ちりょう",
    m: "ĐIỀU TRỊ — điều trị, chữa trị",
    examples: [
      { ja: "この病気は早期に治療すれば完治します。", vi: "Bệnh này nếu điều trị sớm thì có thể khỏi hẳn." },
      { ja: "入院して一週間治療を受けた。", vi: "Tôi nhập viện và được điều trị một tuần." },
    ],
  },
  {
    w: "批評",
    r: "ひひょう",
    m: "PHÊ BÌNH — phê bình, nhận xét (thường về nghệ thuật/sách)",
    examples: [
      { ja: "専門家がその映画を厳しく批評した。", vi: "Chuyên gia đã phê bình bộ phim đó khá gay gắt." },
      { ja: "本の批評を読んでから買うことにした。", vi: "Tôi đọc nhận xét về cuốn sách rồi mới quyết định mua." },
    ],
  },
  {
    w: "掲載",
    r: "けいさい",
    m: "KÊ TẢI — đăng tải, đăng lên (báo, web, tạp chí)",
    examples: [
      { ja: "記事が新聞に掲載された。", vi: "Bài viết đã được đăng trên báo." },
      { ja: "募集要項はホームページに掲載しています。", vi: "Điều kiện tuyển dụng được đăng trên trang chủ." },
    ],
  },
  {
    w: "納める",
    r: "おさめる",
    m: "NẠP — nộp, đóng (thuế, học phí); thu vào; đặt vào",
    examples: [
      { ja: "来月までに税金を納める必要があります。", vi: "Cần nộp thuế trước cuối tháng sau." },
      { ja: "書類を箱に納めて保管した。", vi: "Tôi bỏ giấy tờ vào hộp để bảo quản." },
    ],
  },
  {
    w: "貯める",
    r: "ためる",
    m: "TRỮ — tích cóp, tiết kiệm (tiền)",
    examples: [
      { ja: "旅行のために毎月お金を貯めている。", vi: "Tôi tiết kiệm tiền hàng tháng để đi du lịch." },
      { ja: "ポイントを貯めて景品と交換した。", vi: "Tôi tích điểm rồi đổi lấy quà." },
    ],
  },
  {
    w: "求める",
    r: "もとめる",
    m: "CẦU — tìm kiếm, yêu cầu, mong muốn",
    examples: [
      { ja: "お客様はより高い品質を求めている。", vi: "Khách hàng đang yêu cầu chất lượng cao hơn." },
      { ja: "助けを求める声が聞こえた。", vi: "Tôi nghe thấy tiếng kêu cứu." },
    ],
  },
  {
    w: "参照",
    r: "さんしょう",
    m: "THAM CHIẾU — tham chiếu, tham khảo",
    examples: [
      { ja: "詳細は別紙を参照してください。", vi: "Chi tiết xin hãy tham chiếu tờ đính kèm." },
      { ja: "マニュアルを参照しながら設定を進めた。", vi: "Tôi vừa tham khảo hướng dẫn vừa tiến hành cài đặt." },
    ],
  },
  {
    w: "焦げる",
    r: "こげる",
    m: "TIÊU — cháy khét, bị cháy (thức ăn, đồ vật)",
    examples: [
      { ja: "パンを入れすぎて焦げてしまった。", vi: "Cho bánh mì vào lâu quá nên bị cháy." },
      { ja: "肉の表面がこんがり焦げている。", vi: "Bề mặt thịt cháy xém vàng đẹp." },
    ],
  },
  {
    w: "異文化",
    r: "いぶんか",
    m: "DỊ VĂN HÓA — văn hóa khác, văn hóa dị biệt",
    examples: [
      { ja: "異文化コミュニケーションを学ぶ授業がある。", vi: "Có môn học về giao tiếp liên văn hóa." },
      { ja: "海外生活で異文化に触れる機会が増えた。", vi: "Sống ở nước ngoài giúp tôi tiếp xúc nhiều hơn với nền văn hóa khác." },
    ],
  },
  {
    w: "年代順",
    r: "ねんだいじゅん",
    m: "NIÊN ĐẠI THUẬN — theo thứ tự niên đại / năm tháng",
    examples: [
      { ja: "写真を年代順に並べ替えた。", vi: "Tôi sắp xếp lại ảnh theo thứ tự niên đại." },
      { ja: "資料は年代順に整理されています。", vi: "Tài liệu được sắp xếp theo thứ tự thời gian." },
    ],
  },
  {
    w: "管理下",
    r: "かんりか",
    m: "QUẢN LÝ HẠ — dưới sự quản lý / kiểm soát",
    examples: [
      { ja: "この施設は市の管理下にある。", vi: "Cơ sở này nằm dưới sự quản lý của thành phố." },
      { ja: "子供は親の管理下で行動すべきだ。", vi: "Trẻ em nên hành động dưới sự quản lý của bố mẹ." },
    ],
  },
  {
    w: "主成分",
    r: "しゅせいぶん",
    m: "CHỦ THÀNH PHẦN — thành phần chính",
    examples: [
      { ja: "この薬の主成分は抗生物質です。", vi: "Thành phần chính của thuốc này là kháng sinh." },
      { ja: "成分表で主成分を確認してください。", vi: "Hãy kiểm tra thành phần chính trên bảng thành phần." },
    ],
  },
  {
    w: "安易",
    r: "あんい",
    m: "AN DỊ — dễ dãi, qua loa, thiếu thận trọng",
    examples: [
      { ja: "安易な判断は後で問題になる。", vi: "Quyết định dễ dãi sau này sẽ thành vấn đề." },
      { ja: "安易に契約しないほうがいい。", vi: "Tốt hơn là đừng ký hợp đồng một cách dễ dãi." },
    ],
  },
  {
    w: "率直に",
    r: "そっちょくに",
    m: "SUẤT TRỰC — một cách thẳng thắn, bộc trực",
    examples: [
      { ja: "率直に意見を聞かせてください。", vi: "Hãy cho tôi nghe ý kiến một cách thẳng thắn." },
      { ja: "彼は率直に自分の失敗を認めた。", vi: "Anh ấy thẳng thắn thừa nhận thất bại của mình." },
    ],
  },
  {
    w: "短気",
    r: "たんき",
    m: "ĐOẢN KHÍ — nóng tính, thiếu kiên nhẫn",
    examples: [
      { ja: "彼は短気で、すぐに怒ってしまう。", vi: "Anh ấy nóng tính, dễ nổi giận ngay." },
      { ja: "短気を起こさず、冷静に対応しよう。", vi: "Đừng nóng giận, hãy xử lý bình tĩnh." },
    ],
  },
  {
    w: "最低",
    r: "さいてい",
    m: "TỐI ĐÊ — thấp nhất; tồi tệ nhất (cũng dùng để chê)",
    examples: [
      { ja: "今月の売上は過去最低だった。", vi: "Doanh số tháng này là mức thấp nhất từ trước đến nay." },
      { ja: "約束を破るなんて最低だ。", vi: "Thất hứa như vậy thật là tệ hại." },
    ],
  },
  {
    w: "成立",
    r: "せいりつ",
    m: "THÀNH LẬP — thành lập; được thông qua / hình thành",
    examples: [
      { ja: "新しい法案が国会で成立した。", vi: "Dự luật mới đã được thông qua tại Quốc hội." },
      { ja: "両者の合意が成立した。", vi: "Hai bên đã đạt được thỏa thuận." },
    ],
  },
  {
    w: "採集",
    r: "さいしゅう",
    m: "THÁI TẬP — thu thập, sưu tầm (mẫu vật, dữ liệu)",
    examples: [
      { ja: "山で植物の標本を採集した。", vi: "Tôi đã thu thập mẫu thực vật trên núi." },
      { ja: "昆虫採集が趣味です。", vi: "Sở thích của tôi là sưu tầm côn trùng." },
    ],
  },
  {
    w: "取得",
    r: "しゅとく",
    m: "THỦ ĐẮC — lấy được, đạt được (chứng chỉ, quyền, thông tin)",
    examples: [
      { ja: "去年、運転免許を取得した。", vi: "Năm ngoái tôi đã lấy được bằng lái xe." },
      { ja: "必要な資格を取得してから応募します。", vi: "Tôi sẽ ứng tuyển sau khi lấy được chứng chỉ cần thiết." },
    ],
  },
  {
    w: "だぶだぶ",
    r: "だぶだぶ",
    m: "rộng thùng thình, quá rộng (quần áo); đầy ắp (chất lỏng)",
    examples: [
      { ja: "このシャツはだぶだぶで着にくい。", vi: "Áo sơ mi này rộng thùng thình nên khó mặc." },
      { ja: "スープをだぶだぶに入れすぎた。", vi: "Tôi đổ canh đầy ắp quá mức." },
    ],
  },
  {
    w: "一般",
    r: "いっぱん",
    m: "NHẤT BAN — nói chung, thông thường, đại chúng",
    examples: [
      { ja: "一般の方は立ち入り禁止です。", vi: "Người ngoài / công chúng không được vào." },
      { ja: "一般的に言えば、早寝早起きは体にいい。", vi: "Nói chung thì ngủ sớm dậy sớm tốt cho sức khỏe." },
    ],
  },
  {
    w: "充満",
    r: "じゅうまん",
    m: "SUNG MÃN — tràn ngập, đầy ắp (khí, mùi, cảm xúc)",
    examples: [
      { ja: "部屋に煙が充満している。", vi: "Khói đang tràn ngập căn phòng." },
      { ja: "会場は緊張感が充満していた。", vi: "Không khí căng thẳng tràn ngập hội trường." },
    ],
  },
  {
    w: "伝染",
    r: "でんせん",
    m: "TRUYỀN NHIỄM — lây nhiễm, truyền nhiễm",
    examples: [
      { ja: "インフルエンザが全国に伝染している。", vi: "Cúm đang lây lan khắp cả nước." },
      { ja: "不安は人から人へ伝染しやすい。", vi: "Sự bất an dễ lây từ người này sang người khác." },
    ],
  },
  {
    w: "進行",
    r: "しんこう",
    m: "TIẾN HÀNH — tiến hành, diễn tiến; tiến triển (bệnh)",
    examples: [
      { ja: "会議は予定どおり進行している。", vi: "Cuộc họp đang tiến hành đúng kế hoạch." },
      { ja: "病気の進行を抑える治療が必要だ。", vi: "Cần điều trị để kìm hãm sự tiến triển của bệnh." },
    ],
  },
  {
    w: "引き止める",
    r: "ひきとめる",
    m: "DẪN CHỈ — giữ lại, can ngăn không cho đi",
    examples: [
      { ja: "帰りかけた友人を引き止めた。", vi: "Tôi giữ bạn lại khi người ấy sắp về." },
      { ja: "部長が退職を引き止めたそうだ。", vi: "Nghe nói trưởng phòng đã can ngăn việc nghỉ việc." },
    ],
  },
  {
    w: "取り付ける",
    r: "とりつける",
    m: "THỦ PHÓ — lắp đặt; đạt được (đồng ý, hợp đồng)",
    examples: [
      { ja: "壁にエアコンを取り付けた。", vi: "Tôi đã lắp điều hòa lên tường." },
      { ja: "取引先の同意を取り付けることができた。", vi: "Tôi đã đạt được sự đồng ý của đối tác." },
    ],
  },
  {
    w: "持ち寄る",
    r: "もちよる",
    m: "TRÌ KÝ — mang đến góp lại, cùng mang đến",
    examples: [
      { ja: "各自料理を持ち寄ってパーティーをした。", vi: "Ai mang món gì thì mang, rồi tổ chức tiệc." },
      { ja: "意見を持ち寄って改善策を考えた。", vi: "Chúng tôi góp ý kiến rồi nghĩ biện pháp cải thiện." },
    ],
  },
  {
    w: "受け入れる",
    r: "うけいれる",
    m: "THỤ NHẬP — tiếp nhận, chấp nhận",
    examples: [
      { ja: "会社は新しい提案を受け入れた。", vi: "Công ty đã chấp nhận đề xuất mới." },
      { ja: "留学生を家庭に受け入れる制度がある。", vi: "Có chế độ tiếp nhận du học sinh vào gia đình." },
    ],
  },
  {
    w: "企画",
    r: "きかく",
    m: "KỲ HỌA — lên kế hoạch, dự án, lên ý tưởng",
    examples: [
      { ja: "新商品の企画を担当している。", vi: "Tôi đang phụ trách lập kế hoạch sản phẩm mới." },
      { ja: "来月のイベント企画を提出した。", vi: "Tôi đã nộp kế hoạch sự kiện tháng sau." },
    ],
  },
  {
    w: "ライバル",
    r: "ライバル",
    m: "đối thủ, người cạnh tranh",
    examples: [
      { ja: "彼は仕事上のライバルだ。", vi: "Anh ấy là đối thủ trong công việc." },
      { ja: "ライバル企業との競争が激しい。", vi: "Cạnh tranh với công ty đối thủ rất gay gắt." },
    ],
  },
  {
    w: "ゲスト",
    r: "ゲスト",
    m: "khách mời, vị khách",
    examples: [
      { ja: "今日の番組のゲストは有名な作家だ。", vi: "Khách mời chương trình hôm nay là một nhà văn nổi tiếng." },
      { ja: "結婚式に特別ゲストが来る予定です。", vi: "Dự kiến sẽ có khách đặc biệt đến đám cưới." },
    ],
  },
  {
    w: "頼もしい",
    r: "たのもしい",
    m: "LẠI — đáng tin cậy, vững vàng, tạo cảm giác yên tâm",
    examples: [
      { ja: "彼は若くて頼もしい社員だ。", vi: "Anh ấy là nhân viên trẻ mà rất đáng tin cậy." },
      { ja: "頼り頼もしい笑顔に元気をもらった。", vi: "Nụ cười đáng tin ấy khiến tôi thấy có thêm sức sống." },
    ],
  },
  {
    w: "親しい",
    r: "したしい",
    m: "THÂN — thân thiết, gần gũi",
    examples: [
      { ja: "彼女とは学生時代から親しい。", vi: "Tôi thân với cô ấy từ thời sinh viên." },
      { ja: "親しい友人に相談した。", vi: "Tôi đã hỏi ý kiến người bạn thân." },
    ],
  },
  {
    w: "懐かしい",
    r: "なつかしい",
    m: "HOÀI — gợi nhớ, nhớ lại cảm xúc ngày xưa",
    examples: [
      { ja: "この曲を聞くと学生時代が懐かしい。", vi: "Nghe bài này lại thấy nhớ thời sinh viên." },
      { ja: "懐かしい友人と久しぶりに会った。", vi: "Tôi gặp lại người bạn cũ gợi nhiều kỷ niệm." },
    ],
  },
  {
    w: "じかに",
    r: "じかに",
    m: "TRỰC — trực tiếp, tận tay (直に)",
    examples: [
      { ja: "本人にじかに話を聞いた。", vi: "Tôi đã nghe trực tiếp từ chính người đó." },
      { ja: "書類をじかに渡してください。", vi: "Xin hãy trao tận tay giấy tờ." },
    ],
  },
  {
    w: "衝突",
    r: "しょうとつ",
    m: "XUNG ĐỘT — va chạm; xung đột (ý kiến, lợi ích)",
    examples: [
      { ja: "交差点で車が衝突した。", vi: "Xe đã va chạm tại ngã tư." },
      { ja: "意見の衝突を避けて話し合いましょう。", vi: "Hãy trao đổi để tránh xung đột ý kiến." },
    ],
  },
  {
    w: "ぶつかる",
    r: "ぶつかる",
    m: "va vào, đụng phải; gặp phải (khó khăn)",
    examples: [
      { ja: "角で人とぶつかってしまった。", vi: "Tôi vô tình va phải người ở góc đường." },
      { ja: "プロジェクトで大きな壁にぶつかった。", vi: "Dự án gặp phải một bức tường lớn / trở ngại lớn." },
    ],
  },
  {
    w: "卑怯",
    r: "ひきょう",
    m: "BỈ KHIẾP — hèn hạ, đê tiện, chơi xấu",
    examples: [
      { ja: "陰で悪口を言うのは卑怯だ。", vi: "Nói xấu sau lưng là hành vi hèn hạ." },
      { ja: "卑怯な手を使って勝っても意味がない。", vi: "Thắng bằng thủ đoạn đê tiện cũng chẳng có ý nghĩa." },
    ],
  },
  {
    w: "発達",
    r: "はったつ",
    m: "PHÁT ĐẠT — phát triển (khả năng, công nghệ, cơ thể)",
    examples: [
      { ja: "子供の言語能力が発達してきた。", vi: "Khả năng ngôn ngữ của trẻ đang phát triển." },
      { ja: "近年、通信技術が急速に発達した。", vi: "Những năm gần đây công nghệ viễn thông phát triển nhanh." },
    ],
  },
  {
    w: "向上",
    r: "こうじょう",
    m: "HƯỚNG THƯỢNG — nâng cao, cải thiện theo hướng tốt hơn",
    examples: [
      { ja: "サービス品質の向上に取り組んでいる。", vi: "Chúng tôi đang nỗ lực nâng cao chất lượng dịch vụ." },
      { ja: "毎日の練習で実力が向上した。", vi: "Nhờ luyện tập hàng ngày mà thực lực được nâng cao." },
    ],
  },
  {
    w: "引退",
    r: "いんたい",
    m: "DẪN THOÁI — giải nghệ, rút lui khỏi vị trí / sân chơi",
    examples: [
      { ja: "彼は今シーズン限りで引退すると発表した。", vi: "Anh ấy tuyên bố sẽ giải nghệ sau mùa giải này." },
      { ja: "長い選手生活に幕を閉じ、引退した。", vi: "Kết thúc sự nghiệp vận động viên dài lâu, anh ấy đã giải nghệ." },
    ],
  },
  {
    w: "うまく",
    r: "うまく",
    m: "khéo léo, suôn sẻ, thành công (良く／上手く)",
    examples: [
      { ja: "今日のプレゼンはうまくいった。", vi: "Buổi thuyết trình hôm nay diễn ra suôn sẻ." },
      { ja: "うまく説明できなくて困った。", vi: "Tôi gặp khó vì không giải thích được một cách khéo léo." },
    ],
  },
  {
    w: "生じる",
    r: "しょうじる",
    m: "SINH — phát sinh, nảy sinh",
    examples: [
      { ja: "誤解が生じないよう、はっきり説明した。", vi: "Tôi giải thích rõ để không phát sinh hiểu lầm." },
      { ja: "システム障害から多くの問題が生じた。", vi: "Từ sự cố hệ thống đã phát sinh nhiều vấn đề." },
    ],
  },
  {
    w: "誤解",
    r: "ごかい",
    m: "NGỘ GIẢI — hiểu lầm, hiểu sai",
    examples: [
      { ja: "私の説明不足で誤解を招いてしまった。", vi: "Do tôi giải thích thiếu nên gây ra hiểu lầm." },
      { ja: "それは誤解です。本当はそういう意味ではありません。", vi: "Đó là hiểu lầm. Thực ra không phải nghĩa như vậy." },
    ],
  },
];

// Fix typo in 頼もしい example
NEW.find((x) => x.w === "頼もしい").examples[1] = {
  ja: "頼もしい笑顔に元気をもらった。",
  vi: "Nụ cười đáng tin ấy khiến tôi thấy có thêm sức sống.",
};

const byWord = new Map(NEW.map((x) => [x.w, x]));
const n2Theme = data.themes.find((t) => t.id === "n2");
if (!n2Theme) throw new Error("theme n2 missing");

let updated = 0;
let added = 0;
const addedIds = [];

for (const entry of NEW) {
  const existing = data.items.find((i) => i.t === "n2" && i.w === entry.w);
  if (existing) {
    existing.r = entry.r || existing.r;
    existing.m = entry.m;
    existing.s = "Từ vựng N2";
    // ensure at least 2 examples; prefer new classic ones as first two if old look weak
    const old = EXAMPLES[existing.id] || [];
    EXAMPLES[existing.id] = [...entry.examples, ...old.filter((e) => !entry.examples.some((n) => n.ja === e.ja))].slice(0, 5);
    updated++;
  } else {
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
    EXAMPLES[id] = entry.examples.slice(0, 2);
    addedIds.push(id);
    added++;
  }
}

n2Theme.count = data.items.filter((i) => i.t === "n2").length;
data.total = data.items.length;

fs.writeFileSync(path.join(root, "vocab-data.js"), "window.VOCAB_DATA = " + JSON.stringify(data) + ";\n");
fs.writeFileSync(path.join(root, "examples-data.js"), "window.EXAMPLES_DATA = " + JSON.stringify(EXAMPLES) + ";\n");

console.log({
  added,
  updated,
  n2Count: n2Theme.count,
  total: data.total,
  sampleNew: addedIds[0] && data.items.find((i) => i.id === addedIds[0]),
  sampleEx: addedIds[0] && EXAMPLES[addedIds[0]],
});

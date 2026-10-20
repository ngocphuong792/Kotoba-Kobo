/**
 * Nhóm ngữ pháp N2 + sơ đồ tư duy (SVG, offline).
 * Phân loại theo dạng thức / chức năng gần nhau.
 */
(function (global) {
  const GROUPS = [
    { id: "mono", name: "もの・もん", color: "#1f6f7a", test: /もの|もんか|んだもの/ },
    { id: "wake", name: "わけ", color: "#c45c26", test: /わけ/ },
    { id: "bakari", name: "ばかり", color: "#2f7d4a", test: /ばかり/ },
    { id: "kagiri", name: "限り・だけ・のみ", color: "#6b4c9a", test: /限|だけに|だけは|のみ|Vるだけ|たいだけ|るだけV|これだけ/ },
    { id: "tokoro", name: "ところ・どころ", color: "#b45309", test: /ところ|どころ/ },
    {
      id: "you",
      name: "よう・みたい・らしい",
      color: "#0f4a52",
      test: /ように|ようだ|ようが|ようがない|みたい|かのように|ような|らしい|そうにない|今にも～そう|今にも/,
    },
    {
      id: "suitei",
      name: "推測・断定・可能",
      color: "#8a3a2a",
      test: /はず|違いない|決まっている|かもしれない|かねない|得る|得ない|まい|おそれ|っこない|てもおかしくない|のではないか|のだろうか|のだろう/,
    },
    {
      id: "joken",
      name: "条件・仮定",
      color: "#1f6f7a",
      test: /たら|れば|なら|とすると|とすれば|としたら|たとえ|としても|であれ|仮に|ないことには|にしては|わりには|からには|～ては$|いずれにしても|してでも|るまでだ|までのことだ|以上（|～以上/,
    },
    {
      id: "gyakusetsu",
      name: "逆接・対比",
      color: "#c45c26",
      test: /ものの|ながら|くせに|一方|に対して|反面|どころか|とはいえ|にもかかわらず|といっても|かわりに|そのかわり|かえって|むしろ|Aよりむしろ|^ただ$|ただ（|ただし|もっとも|てもかまわない/,
    },
    {
      id: "genin",
      name: "原因・理由・結果",
      color: "#2f7d4a",
      test: /ため|せい|おかげ|ものだから|もので|ばかりに|からこそ|によって|したがって|その結果|勢いだ|いきおいだ/,
    },
    {
      id: "mokuteki",
      name: "目的・根拠・範囲",
      color: "#6b4c9a",
      test: /ために|を通じて|をもとに|を基に|に基づ|に沿っ|に従っ|に応じ|に向け|をめぐっ|において|のもと|にわたっ|に関わる|を問わず|によらず|を除き|を含め|に欠かせない|に達する|に上る|にのぼる|にとどまる|に至る|に至って|に応えて|に代わって|に次いで|についで|を込めて|を前にして|の中で/,
    },
    {
      id: "fuka",
      name: "付加・程度・限定",
      color: "#b45309",
      test: /うえに|そのうえ|に加え|ばかりか|ばかりでなく|だけでなく|さえ|すら|ほど|くらい|ぐらい|あまり|しかも|はもとより|抜き|にしかない|でしかない|しかない|それなりに/,
    },
    {
      id: "jikan",
      name: "時間・段階",
      color: "#0f4a52",
      test: /うちに|次第|末|あげく|たところ|きり|つつ|かけ|初めて|際に|にあたって|につれ|に伴|ついに|たとたん|たびに|以来|それ以来|先に|ついでに|とともに|上で|の上で|すると|以来/,
    },
    {
      id: "kanjou",
      name: "感情・評価・難易",
      color: "#8a3a2a",
      test: /てたまらない|てならない|てしかた|てしょうがない|ものがある|というものだ|にすぎない|情け|愉快|がたい|がち|気味|ぎみ|ずにはいられない/,
    },
    {
      id: "keigoish",
      name: "依頼・変化・敬語",
      color: "#1f6f7a",
      test: /てほしい|ようにして|ようになり|ことになる|ことになっ|ことにする|としよう|させて|おわび|お～になり|お～し|お越し|伺う|てみないでしょうか|てみせる|（ら）れる|自発/,
    },
    {
      id: "hitei",
      name: "否定・不要・強制感",
      color: "#5c3d2e",
      test: /ようがない|とても～ない|ことはない|こともない|することもない|すべきではない|のではなく|のではない|ずに|ずにおく|すぎずに|でもかまわない|どうでも|ほかない|よりほかない|もしない|ないでもない/,
    },
    {
      id: "setsuzoku",
      name: "接続・言い換え・列挙",
      color: "#2a4a6b",
      test: /すなわち|あるいは|および|それでも|だって|とか|なり～なり|だったり|とも～とも|たか～なかった|ても～なくても|ということは|という$|とのこと|であり|へと|向き|とおりに|どおりに|なんか|～でも$|^～でも$|要するに/,
    },
    {
      id: "fukushi",
      name: "副詞・指示・程度語",
      color: "#c45c26",
      test: /なかなか|まさか|そのうち|必ずしも|まず|いったい|しばしば|常に|突然|順調|まったく|こういう|そういう|ああいう|どういう|明確に|もともと|まさに|どうにか|果たして|今にも|むしろ|至って|そのつもり/,
    },
    { id: "sonota", name: "Các dạng khác", color: "#5a6a74", test: /.*/ },
  ];

  function classify(item) {
    const w = String(item.w || "");
    const reading = String(item.r || "");
    for (const g of GROUPS) {
      if (g.id === "sonota") continue;
      if (g.test.test(w) || g.test.test(reading)) return g;
    }
    return GROUPS[GROUPS.length - 1];
  }

  function groupN2Grammar(items) {
    const map = new Map(GROUPS.map((g) => [g.id, { ...g, items: [] }]));
    for (const it of items) {
      if (it.t !== "n2_grammar") continue;
      const g = classify(it);
      map.get(g.id).items.push(it);
    }
    return GROUPS.map((g) => map.get(g.id)).filter((g) => g.items.length);
  }

  global.N2_GRAMMAR_MINDMAP = {
    GROUPS,
    groupN2Grammar,
    classify,
  };
})(typeof window !== "undefined" ? window : global);

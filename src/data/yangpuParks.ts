// Park Buddies Yangpu district park demo data
// All data in this file is demo content, not verified by field investigation, and is for feature demonstration only.

import type { Park, PlantDiscovery, Buddy } from "../models/types";

// ===========================================================================
// Gongqing Forest Park — Plants and Buddy
// ===========================================================================

const gongqingParkPlants: PlantDiscovery[] = [
  {
    id: "gp-metasequoia",
    parkId: "gongqing-park",
    name: "水杉",
    scientificName: "Metasequoia glyptostroboides",
    clues: [
      {
        id: "gp-metasequoia-clue-1",
        type: "leaf",
        text: "叶子细细的,像一排排小羽毛贴在枝条上。",
      },
      {
        id: "gp-metasequoia-clue-2",
        type: "bark",
        text: "树干笔直,树皮红褐色,会一条条剥落。",
      },
      {
        id: "gp-metasequoia-clue-3",
        type: "description",
        text: "它喜欢长在水边,秋天叶子变成漂亮的铁锈红。",
      },
    ],
    knowledge:
      "水杉是柏科水杉属落叶乔木,中国特有孑遗植物,被誉为\u201C活化石\u201D。叶对生,条形,扁平,秋叶红褐色。喜湿润,常生于水边。1941年在中国被重新发现,引起植物学界轰动。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "水杉曾经只在化石里被发现,后来在中国被找到活的,让全世界惊喜。",
    nextObserve: "看看水杉的叶子是不是两两相对,像小梳子一样整齐。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了水杉的羽毛叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 20" stroke="#8B5A3C" stroke-width="4"/><g fill="#C46A3C"><ellipse cx="50" cy="18" rx="8" ry="6"/><ellipse cx="38" cy="35" rx="10" ry="5"/><ellipse cx="62" cy="35" rx="10" ry="5"/><ellipse cx="35" cy="55" rx="12" ry="5"/><ellipse cx="65" cy="55" rx="12" ry="5"/><ellipse cx="40" cy="75" rx="12" ry="5"/><ellipse cx="60" cy="75" rx="12" ry="5"/></g></svg>',
    position: { lng: 121.5255, lat: 31.2985 },
    detailedIntro:
      "水杉是柏科水杉属的落叶乔木,为中国特有的孑遗植物,被誉为\u201C活化石\u201D。它曾一度仅见于化石记录,1941年在四川万县被重新发现活体植株,轰动了全球植物学界。叶片对生、条形扁平,秋季转为铁锈红色,格外绚丽。水杉喜生于水边湿地,常成片种植形成壮美的杉林景观,共青森林公园内的水杉林是上海最知名的水杉观赏地之一。",
    habitat: "喜温暖湿润,耐水湿,常生于水边河畔,适宜深厚肥沃的微酸性土壤。",
    uses: "优秀的滨水绿化和风景林树种,秋叶红褐绚丽;也是珍贵的孑遗植物,具重要科研价值。",
    culturalNote: "水杉被誉为植物界\u201C活化石\u201D,是中国植物学重大发现之一,曾作为国礼赠送外国,象征友谊与珍稀。",
  },
  {
    id: "gp-ginkgo",
    parkId: "gongqing-park",
    name: "银杏",
    scientificName: "Ginkgo biloba",
    clues: [
      {
        id: "gp-ginkgo-clue-1",
        type: "leaf",
        text: "它的叶子像一把小扇子,秋天会变成金黄色。",
      },
      {
        id: "gp-ginkgo-clue-2",
        type: "bark",
        text: "树皮灰褐色,纵向裂开,像老人的皱纹。",
      },
      {
        id: "gp-ginkgo-clue-3",
        type: "description",
        text: "它是活化石,在地球上已经生活了上亿年。",
      },
    ],
    knowledge:
      "银杏是裸子植物银杏科银杏属的唯一现存物种,被誉为\u201C活化石\u201D。其叶片呈扇形,叶脉平行,秋季变为金黄。雌雄异株,种子俗称白果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "银杏的叶子其实不是一片,而是许多裂片拼成的扇形,像小扇子一样。",
    nextObserve: "秋天再来一次,看看满地金黄的扇形落叶。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了银杏的金色叶子徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 Q48 60 45 45" stroke="#8B6F47" stroke-width="4" fill="none"/><path d="M50 90 Q52 60 55 45" stroke="#8B6F47" stroke-width="3" fill="none"/><g fill="#F5C542" stroke="#C49A2A" stroke-width="1"><path d="M42 40 Q37 35 39 27 Q47 30 49 38 Z"/><path d="M58 40 Q63 35 61 27 Q53 30 51 38 Z"/><path d="M50 38 Q45 30 50 22 Q55 30 50 38 Z"/></g><circle cx="50" cy="37" r="2" fill="#8B6F47"/></svg>',
    position: { lng: 121.5285, lat: 31.2965 },
    detailedIntro:
      "银杏是现存最古老的种子植物之一,历史可追溯至2.7亿年前。它的扇形叶片在秋季变为金黄色,是上海秋季最具代表性的景观树种。银杏雌雄异株,雄株高大挺拔,雌株秋季结出白果。共青森林公园内成片的银杏林在深秋满目金黄,是市民赏秋的热门去处。",
    habitat: "喜光,耐寒耐旱,对土壤适应性强,生长缓慢但寿命极长。",
    uses: "优良的行道树和庭院树种,秋季金黄落叶景观绝佳;种子(白果)可食用和入药。",
    culturalNote: "银杏被誉为\u201C活化石\u201D,在中国常种植于古刹名寺,象征长寿与坚韧。",
  },
  {
    id: "gp-osmanthus",
    parkId: "gongqing-park",
    name: "桂花",
    scientificName: "Osmanthus fragrans",
    clues: [
      {
        id: "gp-osmanthus-clue-1",
        type: "flower",
        text: "秋天还没见到它,就先闻到了甜甜的香气。",
      },
      {
        id: "gp-osmanthus-clue-2",
        type: "leaf",
        text: "叶子硬硬的,边缘有小小的刺状锯齿。",
      },
      {
        id: "gp-osmanthus-clue-3",
        type: "description",
        text: "花小小的,有金黄也有淡黄,藏在叶子中间。",
      },
    ],
    knowledge:
      "桂花是木犀科木犀属常绿乔木,原产中国。叶革质,椭圆形,边缘常有锯齿。花期9-10月,花簇生叶腋,极香。品种分金桂、银桂、丹桂、四季桂等。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "桂花的花朵小得像米粒,但香气能飘到几十米远,是\u201C看不见的香\u201D。",
    nextObserve: "凑近闻一闻,看看是不是真的很甜,再找找金黄的小花藏在哪里。",
    isSeasonal: true,
    seasonMonths: [9, 10],
    unlockReward: "解锁了桂花的甜蜜香囊徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 40" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="35" cy="42" rx="10" ry="5" transform="rotate(-20 35 42)"/><ellipse cx="65" cy="42" rx="10" ry="5" transform="rotate(20 65 42)"/><ellipse cx="50" cy="32" rx="9" ry="5"/></g><g fill="#F5C542"><circle cx="40" cy="38" r="2"/><circle cx="46" cy="35" r="2"/><circle cx="55" cy="38" r="2"/><circle cx="60" cy="35" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5270, lat: 31.2990 },
    detailedIntro:
      "桂花是中国传统十大名花之一,已有2500余年栽培历史。它的花朵虽小如米粒,但芳香浓郁,秋日盛开时满园飘香。桂花分为金桂、银桂、丹桂和四季桂四大类群,花色从淡黄到橙红不等。除了观赏,桂花还可制作桂花糕、桂花酒和桂花茶,深受人们喜爱。",
    habitat: "喜温暖湿润、阳光充足的环境,耐半阴,要求排水良好的微酸性土壤。",
    uses: "重要的香花树种,花可窨制花茶、酿造桂花酒、制作糕点;也是优良的庭院和行道绿化树种。",
    culturalNote: "桂花在我国栽培历史悠久,\u201C蟾宫折桂\u201D以桂喻科举登第,象征荣誉与吉祥。",
  },
  {
    id: "gp-camphor",
    parkId: "gongqing-park",
    name: "香樟",
    scientificName: "Cinnamomum camphora",
    clues: [
      {
        id: "gp-camphor-clue-1",
        type: "leaf",
        text: "叶子揉一揉,会有一股清凉的樟脑香。",
      },
      {
        id: "gp-camphor-clue-2",
        type: "bark",
        text: "树皮有不规则的裂纹,像拼图碎片。",
      },
      {
        id: "gp-camphor-clue-3",
        type: "description",
        text: "它长得很高大,树冠圆圆的像一把绿色的大伞。",
      },
    ],
    knowledge:
      "香樟是樟科樟属常绿大乔木,是上海市市树。全株含樟脑香气,叶互生,卵形,叶脉离基三出。木材防虫,常用于制作家具和箱柜。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "香樟是上海的市树,揉一揉它的叶子,手上会留下凉凉的香味。",
    nextObserve: "摘一片叶子揉一揉,闻闻是不是有清凉的味道。",
    isSeasonal: false,
    unlockReward: "解锁了香樟的清凉香气徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 65" stroke="#6B4E2F" stroke-width="5"/><ellipse cx="50" cy="35" rx="35" ry="25" fill="#3A6B35"/><ellipse cx="35" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="65" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="50" cy="28" rx="20" ry="15" fill="#5A8B55"/></svg>',
    position: { lng: 121.5265, lat: 31.2970 },
    detailedIntro:
      "香樟是樟科樟属的常绿大乔木,也是上海市的市树。全株散发独特的樟脑清香,叶片互生、卵形,叶脉呈离基三出。树冠圆整如伞,四季常青,是优秀的遮荫树种。香樟木材含有天然樟脑,防虫耐腐,自古便是制作箱柜、家具的上等材料。共青森林公园内香樟成荫,浓荫蔽日,是夏日纳凉的好去处。",
    habitat: "喜温暖湿润、阳光充足气候,根系发达,对土壤要求不严,寿命长且生长较快。",
    uses: "优良的行道树和庭荫树;木材防虫耐腐,可提取樟脑和樟油,用于医药及工业。",
    culturalNote: "香樟是上海市树,江南一带常以古樟为村落风水树,寓意庇荫与长寿。",
  },
  {
    id: "gp-cherry",
    parkId: "gongqing-park",
    name: "樱花",
    scientificName: "Prunus serrulata",
    clues: [
      {
        id: "gp-cherry-clue-1",
        type: "flower",
        text: "春天里它开出粉白色的小花,一簇簇的像云朵。",
      },
      {
        id: "gp-cherry-clue-2",
        type: "leaf",
        text: "叶子边缘有小锯齿,形状像小椭圆。",
      },
      {
        id: "gp-cherry-clue-3",
        type: "description",
        text: "风一吹,花瓣就纷纷扬扬落下来,像粉色的雪。",
      },
    ],
    knowledge:
      "樱花是蔷薇科李属的落叶乔木,花期短暂,通常在3-4月盛开。花单瓣或重瓣,颜色从白到深粉。花瓣先端有缺刻,是辨认樱花的特征之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "樱花花瓣的尖端有个小缺口,就像被咬了一小口,这是它的小秘密。",
    nextObserve: "数一数一朵樱花有几片花瓣,大多数是5片哦。",
    isSeasonal: true,
    seasonMonths: [3, 4],
    unlockReward: "解锁了樱花的粉色花瓣徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#8B6F47" stroke-width="4"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="35" cy="30" r="8"/><circle cx="65" cy="30" r="8"/><circle cx="50" cy="20" r="9"/><circle cx="42" cy="45" r="6"/><circle cx="58" cy="45" r="6"/></g><g fill="#FFE4A1"><circle cx="50" cy="32" r="3"/></g></svg>',
    position: { lng: 121.5295, lat: 31.2980 },
    detailedIntro:
      "樱花是蔷薇科李属的落叶乔木,花期短暂而绚烂,通常在3至4月间盛开。花朵单瓣或重瓣,颜色从纯白到深粉,花瓣先端有缺刻,是辨认樱花的重要特征。盛开时满树繁花如云似霞,微风拂过花瓣纷飞,形成浪漫的花雨景观。共青森林公园的樱花林在春季花开如海,是赏樱的绝佳去处。",
    habitat: "喜阳光充足、温暖湿润的环境,要求排水良好的微酸性土壤。",
    uses: "春季重要的观花树种,常成片种植形成花海景观,也是城市公园和滨水绿地的优选树种。",
    culturalNote: "樱花象征春日与美好,花期短暂常被赋予惜春的文化意涵,赏樱是深受喜爱的春日习俗。",
  },
  {
    id: "gp-magnolia",
    parkId: "gongqing-park",
    name: "广玉兰",
    scientificName: "Magnolia grandiflora",
    clues: [
      {
        id: "gp-magnolia-clue-1",
        type: "leaf",
        text: "叶子又大又厚,正面油绿发亮,背面有锈色的绒毛。",
      },
      {
        id: "gp-magnolia-clue-2",
        type: "flower",
        text: "初夏开出白色大花,像一只只白瓷杯。",
      },
      {
        id: "gp-magnolia-clue-3",
        type: "description",
        text: "花谢之后,会结出有趣的聚合果,像一颗小松球。",
      },
    ],
    knowledge:
      "广玉兰是木兰科北美木兰属常绿乔木,原产北美。叶革质,背面有锈色绒毛。花期5-6月,花大白色,芳香。果实为聚合蓇葖果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "广玉兰的叶子背面有一层棕色的绒毛,摸起来毛茸茸的,像小毯子。",
    nextObserve: "翻一片叶子看看背面,感受一下那层绒绒的触感。",
    isSeasonal: false,
    unlockReward: "解锁了广玉兰的洁白花朵徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 55" stroke="#6B4E2F" stroke-width="5"/><g fill="#3A6B35"><ellipse cx="38" cy="48" rx="12" ry="5" transform="rotate(-25 38 48)"/><ellipse cx="62" cy="48" rx="12" ry="5" transform="rotate(25 62 48)"/><ellipse cx="50" cy="40" rx="10" ry="5"/></g><g fill="#FFFAF0" stroke="#E8D5B8" stroke-width="1"><path d="M50 35 Q44 28 45 18 Q50 25 50 35 Z"/><path d="M50 35 Q56 28 55 18 Q50 25 50 35 Z"/></g><circle cx="50" cy="33" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.5250, lat: 31.2960 },
    detailedIntro:
      "广玉兰是木兰科北美木兰属的常绿乔木,原产于北美洲东南部。它的叶片革质肥厚,正面油绿发亮,背面密生锈色绒毛,触感独特。初夏时节开出硕大的白色花朵,形似白瓷杯,芳香浓郁。花谢后结出聚生蓇葖果,外观酷似小松球,十分有趣。共青森林公园内广玉兰四季常青,初夏花开时满树白花,颇为壮观。",
    habitat: "喜温暖湿润气候,较耐阴,宜生于肥沃排水良好的微酸性土壤。",
    uses: "优良的庭荫树和行道树,四季常青,初夏白花芳香,是公园和道路绿化的常用树种。",
    culturalNote: "广玉兰自北美引入中国后广为栽培,因叶厚花大、常绿不凋,象征坚贞与高洁。",
  },
  {
    id: "gp-tulip-tree",
    parkId: "gongqing-park",
    name: "鹅掌楸",
    scientificName: "Liriodendron chinense",
    clues: [
      {
        id: "gp-tulip-tree-clue-1",
        type: "leaf",
        text: "叶子像一件小马褂,顶端平平的,两侧各有一小裂。",
      },
      {
        id: "gp-tulip-tree-clue-2",
        type: "bark",
        text: "树皮灰白色,平滑,老时有细裂纹。",
      },
      {
        id: "gp-tulip-tree-clue-3",
        type: "description",
        text: "初夏开出绿色小花,形似小郁金香,藏在叶丛中。",
      },
    ],
    knowledge:
      "鹅掌楸是木兰科鹅掌楸属落叶乔木,中国特有孑遗植物。叶形奇特似马褂,故又称\u201C马褂木\u201D。花期5月,花杯状,黄绿色。是古老的第三纪孑遗植物。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "鹅掌楸的叶子像古人穿的马褂,所以它还有一个有趣的名字叫\u201C马褂木\u201D。",
    nextObserve: "找一片叶子看看,是不是像一件小衣服,有两个袖子。",
    isSeasonal: false,
    unlockReward: "解锁了鹅掌楸的马褂叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 45" stroke="#6B4E2F" stroke-width="4"/><g fill="#5A8B55"><path d="M50 40 L40 35 L35 28 L42 25 L50 30 L58 25 L65 28 L60 35 L50 40 Z"/></g><g fill="#4A7B45"><ellipse cx="40" cy="55" rx="8" ry="4"/><ellipse cx="60" cy="55" rx="8" ry="4"/></g></svg>',
    position: { lng: 121.5305, lat: 31.2975 },
    detailedIntro:
      "鹅掌楸是木兰科鹅掌楸属的落叶乔木,中国特有的孑遗植物。其叶片形似马褂,顶端平截、两侧各有一裂片,宛如小衣服,故又称\u201C马褂木\u201D,辨识度极高。5月开花,花朵杯状、黄绿色,形似郁金香。鹅掌楸是古老的第三纪孑遗植物,具有重要的科学研究价值。共青森林公园内鹅掌楸叶形奇特,深受游客喜爱。",
    habitat: "喜温暖湿润气候,耐寒,适宜肥沃排水良好的酸性土壤,多生于山地沟谷。",
    uses: "珍贵的孑遗树种和观赏树种,叶形奇特可作庭院和公园绿化;木材纹理细致,可制家具。",
    culturalNote: "鹅掌楸是中国特有的孑遗植物,叶形如马褂而充满趣味,被视为植物界的\u201C活化石\u201D之一。",
  },
  {
    id: "gp-crape-myrtle",
    parkId: "gongqing-park",
    name: "紫薇",
    scientificName: "Lagerstroemia indica",
    clues: [
      {
        id: "gp-crape-myrtle-clue-1",
        type: "flower",
        text: "夏天开出皱皱的粉紫色小花,一簇一簇的。",
      },
      {
        id: "gp-crape-myrtle-clue-2",
        type: "bark",
        text: "树皮很光滑,像被剥掉了一样,摸起来凉凉的。",
      },
      {
        id: "gp-crape-myrtle-clue-3",
        type: "description",
        text: "它的花期很长,能开整整一个夏天,又叫“百日红”。",
      },
    ],
    knowledge:
      "紫薇是千屈菜科紫薇属落叶灌木或小乔木。树皮光滑,花玫红或粉红,花瓣皱缩。花期6-9月,长达百日以上,故又称“百日红”。树干光滑,轻搔之全树微动,俗称“怕痒树”。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫薇树干光滑,用手轻轻一挠,整棵树都会痒得发抖,所以叫“怕痒树”。",
    nextObserve: "用手轻轻挠一挠紫薇的树干,看看它会不会“怕痒”。",
    isSeasonal: true,
    seasonMonths: [7, 8, 9],
    unlockReward: "解锁了紫薇的百日红徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="38" cy="50" rx="8" ry="4"/><ellipse cx="62" cy="50" rx="8" ry="4"/></g><g fill="#C490D8" stroke="#A070B8" stroke-width="0.5"><circle cx="35" cy="35" r="7"/><circle cx="65" cy="35" r="7"/><circle cx="50" cy="25" r="8"/><circle cx="45" cy="45" r="6"/><circle cx="55" cy="45" r="6"/></g><g fill="#F5C542"><circle cx="35" cy="35" r="2"/><circle cx="65" cy="35" r="2"/><circle cx="50" cy="25" r="2"/></g></svg>',
    position: { lng: 121.5280, lat: 31.2970 },
    detailedIntro:
      "紫薇是千屈菜科紫薇属的落叶灌木或小乔木,原产中国。树皮光滑呈灰白色,花色从玫红到粉紫不等,花瓣边缘皱缩如褶边。花期长达百日以上,从6月持续到9月,故又称“百日红”。树干光滑,轻轻搔之全树微动,俗称“怕痒树”,深受孩童喜爱。共青森林公园内紫薇夏花烂漫,是盛夏赏花的一大亮点。",
    habitat: "喜温暖湿润、阳光充足环境,耐旱耐寒,对土壤要求不严,半阴亦可生长。",
    uses: "优秀的夏花树种,花期长、花色艳,常用于庭院、道路和公园绿化,也是制作盆景的好材料。",
    culturalNote: "紫薇自古为园林名花,唐宋诗词中多有吟咏,“百日红”之名道出其花期绵长的可贵。",
  },
  {
    id: "gp-hackberry",
    parkId: "gongqing-park",
    name: "朴树",
    scientificName: "Celtis sinensis",
    clues: [
      {
        id: "gp-hackberry-clue-1",
        type: "bark",
        text: "树皮灰褐色,粗糙不平,像老人的手掌。",
      },
      {
        id: "gp-hackberry-clue-2",
        type: "leaf",
        text: "叶子卵形,边缘有细锯齿,摸起来有点粗糙。",
      },
      {
        id: "gp-hackberry-clue-3",
        type: "description",
        text: "秋天枝头结出一颗颗橙色的小果子,鸟儿最爱来啄食。",
      },
    ],
    knowledge:
      "朴树是大麻科朴属落叶大乔木,原产中国。树皮粗糙不裂,叶卵形互生,边缘上半部有锯齿。花期4月,果近球形,橙红色,9-10月成熟。树形高大,枝条舒展,是优良的庭荫树。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "朴树的果子虽小却很甜,是鸟儿秋天的美食站,有朴树的地方总热闹非凡。",
    nextObserve: "秋天来看看,说不定能看到一群鸟儿在枝头抢着吃果子。",
    isSeasonal: false,
    unlockReward: "解锁了朴树的粗糙树皮徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 40" stroke="#6B4E2F" stroke-width="6"/><path d="M50 55 L35 45" stroke="#6B4E2F" stroke-width="3"/><path d="M50 55 L65 45" stroke="#6B4E2F" stroke-width="3"/><g fill="#3A6B35"><ellipse cx="38" cy="38" rx="14" ry="10" transform="rotate(-15 38 38)"/><ellipse cx="62" cy="38" rx="14" ry="10" transform="rotate(15 62 38)"/><ellipse cx="50" cy="28" rx="16" ry="12"/></g><g fill="#E88A3E"><circle cx="35" cy="50" r="2.5"/><circle cx="55" cy="52" r="2.5"/><circle cx="65" cy="48" r="2.5"/></g></svg>',
    position: { lng: 121.5265, lat: 31.2985 },
    detailedIntro:
      "朴树是大麻科朴属的落叶大乔木,原产中国。树皮灰褐色,粗糙而不开裂,触摸有明显的粗粝感。叶片卵形互生,边缘上半部具细锯齿,表面粗糙。4月开花,花小而不显眼。果近球形,9-10月成熟时变为橙红色,是鸟类的重要食源。朴树树形高大,枝条舒展,寿命长,是优秀的庭荫树和行道树。共青森林公园内朴树老树苍劲,浓荫覆地,秋日硕果引鸟,生机盎然。",
    habitat: "喜光稍耐阴,耐旱耐瘠,对土壤要求不严,根系发达,抗风力强,寿命长。",
    uses: "优良庭荫树和行道树,木材坚硬可制器具;果实可榨油;也是制作盆景的优良素材。",
    culturalNote: "朴树在中国南方乡村常作风水树和村落树,因其朴实无华、苍劲古拙而备受珍视。",
  },
  {
    id: "gp-yucca",
    parkId: "gongqing-park",
    name: "丝兰",
    scientificName: "Yucca filamentosa",
    clues: [
      {
        id: "gp-yucca-clue-1",
        type: "leaf",
        text: "叶子像一把把绿色的剑,又硬又尖,从地面长出来。",
      },
      {
        id: "gp-yucca-clue-2",
        type: "flower",
        text: "夏天从叶丛中抽出一根高高的花茎,开满白色铃铛般的花。",
      },
      {
        id: "gp-yucca-clue-3",
        type: "description",
        text: "叶子的边缘有细细的白丝,像被人撕成了条条。",
      },
    ],
    knowledge:
      "丝兰是天门冬科丝兰属常绿灌木,原产北美。叶丛生,剑形,坚硬,边缘有分离的白色细丝。花期7-9月,花茎高耸,花白色下垂,呈铃铛状。夜间花香浓郁,由丝兰蛾传粉。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "丝兰叶边的白丝一拉就能拉出长长的线,古人用它来缝东西,真是天然的缝线。",
    nextObserve: "小心地拉一拉叶子边缘的白丝,看看能拉多长。",
    isSeasonal: true,
    seasonMonths: [7, 8, 9],
    unlockReward: "解锁了丝兰的宝剑叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><g stroke="#3A6B35" stroke-width="3" fill="none" stroke-linecap="round"><path d="M50 90 Q48 60 45 25"/><path d="M50 90 Q52 60 55 25"/><path d="M50 90 Q45 65 35 30"/><path d="M50 90 Q55 65 65 30"/><path d="M50 90 Q42 62 25 35"/><path d="M50 90 Q58 62 75 35"/></g><path d="M50 25 L50 15" stroke="#3A6B35" stroke-width="2"/><g fill="#FFFAF0" stroke="#E8D5B8" stroke-width="0.5"><ellipse cx="50" cy="15" rx="4" ry="6"/><ellipse cx="45" cy="18" rx="3" ry="5"/><ellipse cx="55" cy="18" rx="3" ry="5"/></g></svg>',
    position: { lng: 121.5290, lat: 31.2990 },
    detailedIntro:
      "丝兰是天门冬科丝兰属的常绿灌木,原产于北美洲东部。叶片丛生呈莲座状,剑形,坚硬革质,边缘有分离的白色丝状纤维,拉之不断,十分独特。7-9月从叶丛中抽出高耸的花茎,悬挂满白色铃铛状花朵,夜间花香浓郁,由丝兰蛾专性传粉,是动植物协同进化的经典案例。共青森林公园内丝兰点缀于草坪一角,四季常青,夏秋花开如雪,别具异域风情。",
    habitat: "喜光,耐旱耐寒,对土壤要求不严,在排水良好的沙质土壤中生长最佳。",
    uses: "观赏价值高,常用于花境、路边和岩石园造景;叶片纤维可制绳索;花可食用。",
    culturalNote: "丝兰原产北美,引入中国后广为栽培,其叶如剑、花如铃,兼具刚柔之美。",
  },
  {
    id: "gp-silk-tree",
    parkId: "gongqing-park",
    name: "合欢",
    scientificName: "Albizia julibrissin",
    clues: [
      {
        id: "gp-silk-tree-clue-1",
        type: "leaf",
        text: "叶子像含羞草一样,一排排小叶片像羽毛,到了晚上会合拢。",
      },
      {
        id: "gp-silk-tree-clue-2",
        type: "flower",
        text: "夏天树顶开满粉红色的绒球花,像一团团小烟花。",
      },
      {
        id: "gp-silk-tree-clue-3",
        type: "bark",
        text: "树皮灰褐色,不太光滑,有淡淡的纵向裂纹。",
      },
    ],
    knowledge:
      "合欢是豆科合欢属落叶乔木,原产中国。二回羽状复叶,小叶夜间合拢,昼开夜合,故名“合欢”。花期6-7月,花丝细长,粉红色,聚成绒球状,十分美丽。果为扁平荚果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "合欢的叶子白天张开、晚上合拢,像在睡觉一样,所以叫“夜合树”。",
    nextObserve: "白天和傍晚各来看一次,看看叶子是不是真的会合拢。",
    isSeasonal: true,
    seasonMonths: [6, 7],
    unlockReward: "解锁了合欢的绒球花徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 45" stroke="#6B4E2F" stroke-width="5"/><g fill="#3A6B35"><ellipse cx="35" cy="40" rx="14" ry="8" transform="rotate(-20 35 40)"/><ellipse cx="65" cy="40" rx="14" ry="8" transform="rotate(20 65 40)"/><ellipse cx="50" cy="30" rx="16" ry="10"/></g><g fill="#F8A0B4" stroke="#E0789A" stroke-width="0.5"><circle cx="35" cy="30" r="6"/><circle cx="65" cy="30" r="6"/><circle cx="50" cy="22" r="7"/></g><g stroke="#E0789A" stroke-width="1.5" fill="none"><line x1="35" y1="30" x2="30" y2="22"/><line x1="35" y1="30" x2="40" y2="22"/><line x1="35" y1="30" x2="35" y2="20"/><line x1="65" y1="30" x2="60" y2="22"/><line x1="65" y1="30" x2="70" y2="22"/><line x1="65" y1="30" x2="65" y2="20"/></g></svg>',
    position: { lng: 121.5275, lat: 31.2965 },
    detailedIntro:
      "合欢是豆科合欢属的落叶乔木,原产中国。其叶片为二回羽状复叶,小叶昼开夜合,黄昏时分叶片缓缓合拢,宛如入睡,故得名“合欢”,又称“夜合树”。6-7月盛开,花丝细长如绒线,粉红色,聚成蓬松的绒球状,远望如粉色烟花,蔚为壮观。果为扁平荚果,秋末成熟。共青森林公园内合欢夏季花开满树,粉云浮动,是夏荫赏花的佳处。",
    habitat: "喜光,耐旱耐寒,对土壤适应性强,生长较快,根系较浅,宜避风口。",
    uses: "优美的庭荫树和行道树,花形独特极具观赏性;树皮和花可入药,有安神解郁之效。",
    culturalNote: "合欢自古寓意夫妻和睦、合家欢乐,“夜合”之名寄托了人们对团圆与美好的向往。",
  },
];

const gongqingParkBuddy: Buddy = {
  id: "gp-buddy-sensen",
  parkId: "gongqing-park",
  name: "森森",
  intro: "一棵住在水杉林深处的树精,安静守护着林中的小动物,偶尔会摇落几片叶子打招呼。",
  silhouetteSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 30 Q70 35 65 60 Q50 72 35 60 Q30 35 50 30 Z" fill="#3A3A3A"/><rect x="48" y="72" width="4" height="15" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 28 Q72 33 67 60 Q50 72 33 60 Q28 33 50 28 Z" fill="#4A7C3F"/><rect x="47" y="72" width="6" height="15" fill="#2D5025"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 25 Q74 30 68 60 Q50 74 32 60 Q26 30 50 25 Z" fill="#4A7C3F" stroke="#2D5025" stroke-width="2"/><rect x="46" y="74" width="8" height="14" rx="2" fill="#2D5025"/><circle cx="42" cy="48" r="3" fill="#FFF"/><circle cx="42" cy="49" r="1.5" fill="#2B2B2B"/><circle cx="58" cy="48" r="3" fill="#FFF"/><circle cx="58" cy="49" r="1.5" fill="#2B2B2B"/><path d="M44 56 Q50 60 56 56" stroke="#2D5025" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="38" cy="54" r="2" fill="#F8B4C0" opacity="0.7"/><circle cx="62" cy="54" r="2" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 2 },
};

// ===========================================================================
// Huangxing Park — Plants and Buddy
// ===========================================================================

const huangxingParkPlants: PlantDiscovery[] = [
  {
    id: "hp-cherry",
    parkId: "huangxing-park",
    name: "樱花",
    scientificName: "Prunus serrulata",
    clues: [
      {
        id: "hp-cherry-clue-1",
        type: "flower",
        text: "春天里它开出粉白色的小花,一簇簇的像云朵。",
      },
      {
        id: "hp-cherry-clue-2",
        type: "leaf",
        text: "叶子边缘有小锯齿,形状像小椭圆。",
      },
      {
        id: "hp-cherry-clue-3",
        type: "description",
        text: "风一吹,花瓣就纷纷扬扬落下来,像粉色的雪。",
      },
    ],
    knowledge:
      "樱花是蔷薇科李属的落叶乔木,花期短暂,通常在3-4月盛开。花单瓣或重瓣,颜色从白到深粉。花瓣先端有缺刻,是辨认樱花的特征之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "樱花花瓣的尖端有个小缺口,就像被咬了一小口,这是它的小秘密。",
    nextObserve: "数一数一朵樱花有几片花瓣,大多数是5片哦。",
    isSeasonal: true,
    seasonMonths: [3, 4],
    unlockReward: "解锁了樱花的粉色花瓣徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#8B6F47" stroke-width="4"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="35" cy="30" r="8"/><circle cx="65" cy="30" r="8"/><circle cx="50" cy="20" r="9"/><circle cx="42" cy="45" r="6"/><circle cx="58" cy="45" r="6"/></g><g fill="#FFE4A1"><circle cx="50" cy="32" r="3"/><circle cx="40" cy="32" r="2"/><circle cx="60" cy="32" r="2"/></g></svg>',
    position: { lng: 121.5145, lat: 31.2840 },
    detailedIntro:
      "樱花是蔷薇科李属的落叶乔木,花期短暂而绚烂,通常在3至4月间盛开。花朵单瓣或重瓣,颜色从纯白到深粉,花瓣先端有缺刻,是辨认樱花的重要特征。盛开时满树繁花如云似霞,微风拂过花瓣纷飞,形成浪漫的花雨景观。黄兴公园的樱花大道是杨浦区春季赏樱的热门去处。",
    habitat: "喜阳光充足、温暖湿润的环境,要求排水良好的微酸性土壤。",
    uses: "春季重要的观花树种,常成片种植形成花海景观,也是城市公园和滨水绿地的优选树种。",
    culturalNote: "樱花象征春日与美好,花期短暂常被赋予惜春的文化意涵,赏樱是深受喜爱的春日习俗。",
  },
  {
    id: "hp-magnolia",
    parkId: "huangxing-park",
    name: "广玉兰",
    scientificName: "Magnolia grandiflora",
    clues: [
      {
        id: "hp-magnolia-clue-1",
        type: "leaf",
        text: "叶子又大又厚,正面油绿发亮,背面有锈色的绒毛。",
      },
      {
        id: "hp-magnolia-clue-2",
        type: "flower",
        text: "初夏开出白色大花,像一只只白瓷杯。",
      },
      {
        id: "hp-magnolia-clue-3",
        type: "description",
        text: "花谢之后,会结出有趣的聚合果,像一颗小松球。",
      },
    ],
    knowledge:
      "广玉兰是木兰科北美木兰属常绿乔木,原产北美。叶革质,背面有锈色绒毛。花期5-6月,花大白色,芳香。果实为聚合蓇葖果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "广玉兰的叶子背面有一层棕色的绒毛,摸起来毛茸茸的,像小毯子。",
    nextObserve: "翻一片叶子看看背面,感受一下那层绒绒的触感。",
    isSeasonal: false,
    unlockReward: "解锁了广玉兰的洁白花朵徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 55" stroke="#6B4E2F" stroke-width="5"/><g fill="#3A6B35"><ellipse cx="38" cy="48" rx="12" ry="5" transform="rotate(-25 38 48)"/><ellipse cx="62" cy="48" rx="12" ry="5" transform="rotate(25 62 48)"/><ellipse cx="50" cy="40" rx="10" ry="5"/></g><g fill="#FFFAF0" stroke="#E8D5B8" stroke-width="1"><path d="M50 35 Q44 28 45 18 Q50 25 50 35 Z"/><path d="M50 35 Q56 28 55 18 Q50 25 50 35 Z"/><path d="M50 35 Q42 30 35 28 Q44 33 50 35 Z"/><path d="M50 35 Q58 30 65 28 Q56 33 50 35 Z"/></g><circle cx="50" cy="33" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.5170, lat: 31.2825 },
    detailedIntro:
      "广玉兰是木兰科北美木兰属的常绿乔木,原产于北美洲东南部。它的叶片革质肥厚,正面油绿发亮,背面密生锈色绒毛,触感独特。初夏时节开出硕大的白色花朵,形似白瓷杯,芳香浓郁。花谢后结出聚生蓇葖果,外观酷似小松球,十分有趣。四季常青,是优秀的庭荫和行道树种。",
    habitat: "喜温暖湿润气候,较耐阴,宜生于肥沃排水良好的微酸性土壤。",
    uses: "优良的庭荫树和行道树,四季常青,初夏白花芳香,是公园和道路绿化的常用树种。",
    culturalNote: "广玉兰自北美引入中国后广为栽培,因叶厚花大、常绿不凋,象征坚贞与高洁。",
  },
  {
    id: "hp-crape-myrtle",
    parkId: "huangxing-park",
    name: "紫薇",
    scientificName: "Lagerstroemia indica",
    clues: [
      {
        id: "hp-crape-myrtle-clue-1",
        type: "flower",
        text: "夏天开出皱皱的粉紫色小花,一簇一簇的。",
      },
      {
        id: "hp-crape-myrtle-clue-2",
        type: "bark",
        text: "树皮很光滑,像被剥掉了一样,摸起来凉凉的。",
      },
      {
        id: "hp-crape-myrtle-clue-3",
        type: "description",
        text: "它的花期很长,能开整整一个夏天,又叫\u201C百日红\u201D。",
      },
    ],
    knowledge:
      "紫薇是千屈菜科紫薇属落叶灌木或小乔木。树皮光滑,花玫红或粉红,花瓣皱缩。花期6-9月,长达百日以上,故又称\u201C百日红\u201D。树干光滑,轻搔之全树微动,俗称\u201C怕痒树\u201D。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫薇树干光滑,用手轻轻一挠,整棵树都会痒得发抖,所以叫\u201C怕痒树\u201D。",
    nextObserve: "用手轻轻挠一挠紫薇的树干,看看它会不会\u201C怕痒\u201D。",
    isSeasonal: true,
    seasonMonths: [7, 8, 9],
    unlockReward: "解锁了紫薇的百日红徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="38" cy="50" rx="8" ry="4"/><ellipse cx="62" cy="50" rx="8" ry="4"/></g><g fill="#C490D8" stroke="#A070B8" stroke-width="0.5"><circle cx="35" cy="35" r="7"/><circle cx="65" cy="35" r="7"/><circle cx="50" cy="25" r="8"/><circle cx="45" cy="45" r="6"/><circle cx="55" cy="45" r="6"/></g><g fill="#F5C542"><circle cx="35" cy="35" r="2"/><circle cx="65" cy="35" r="2"/><circle cx="50" cy="25" r="2"/></g></svg>',
    position: { lng: 121.5155, lat: 31.2815 },
    detailedIntro:
      "紫薇是千屈菜科紫薇属的落叶灌木或小乔木,原产中国。它的树皮光滑,呈灰白色,花色从玫红到粉紫不等,花瓣边缘皱缩如褶边,别具特色。花期长达百日以上,从6月持续到9月,故又称\u201C百日红\u201D。最有趣的是,紫薇树干光滑,轻轻搔之全树微动,俗称\u201C怕痒树\u201D,深受孩童喜爱。",
    habitat: "喜温暖湿润、阳光充足环境,耐旱耐寒,对土壤要求不严,半阴亦可生长。",
    uses: "优秀的夏花树种,花期长、花色艳,常用于庭院、道路和公园绿化,也是制作盆景的好材料。",
    culturalNote: "紫薇自古为园林名花,唐宋诗词中多有吟咏,\u201C百日红\u201D之名道出其花期绵长的可贵。",
  },
  {
    id: "hp-ginkgo",
    parkId: "huangxing-park",
    name: "银杏",
    scientificName: "Ginkgo biloba",
    clues: [
      {
        id: "hp-ginkgo-clue-1",
        type: "leaf",
        text: "它的叶子像一把小扇子,秋天会变成金黄色。",
      },
      {
        id: "hp-ginkgo-clue-2",
        type: "bark",
        text: "树皮灰褐色,纵向裂开,像老人的皱纹。",
      },
      {
        id: "hp-ginkgo-clue-3",
        type: "description",
        text: "它是活化石,在地球上已经生活了上亿年。",
      },
    ],
    knowledge:
      "银杏是裸子植物银杏科银杏属的唯一现存物种,被誉为\u201C活化石\u201D。其叶片呈扇形,叶脉平行,秋季变为金黄。雌雄异株,种子俗称白果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "银杏的叶子其实不是一片,而是许多裂片拼成的扇形,像小扇子一样。",
    nextObserve: "秋天再来一次,看看满地金黄的扇形落叶。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了银杏的金色叶子徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 Q48 60 45 45" stroke="#8B6F47" stroke-width="4" fill="none"/><path d="M50 90 Q52 60 55 45" stroke="#8B6F47" stroke-width="3" fill="none"/><g fill="#F5C542" stroke="#C49A2A" stroke-width="1"><path d="M42 40 Q37 35 39 27 Q47 30 49 38 Z"/><path d="M58 40 Q63 35 61 27 Q53 30 51 38 Z"/><path d="M50 38 Q45 30 50 22 Q55 30 50 38 Z"/></g><circle cx="50" cy="37" r="2" fill="#8B6F47"/></svg>',
    position: { lng: 121.5160, lat: 31.2845 },
    detailedIntro:
      "银杏是现存最古老的种子植物之一,历史可追溯至2.7亿年前。它的扇形叶片在秋季变为金黄色,是上海秋季最具代表性的景观树种。银杏雌雄异株,雄株高大挺拔,雌株秋季结出白果。作为行道树和公园树种,银杏寿命极长,常被赋予长寿和坚韧的寓意。黄兴公园内的银杏大道在深秋金黄耀眼,落叶铺地如毯。",
    habitat: "喜光,耐寒耐旱,对土壤适应性强,生长缓慢但寿命极长。",
    uses: "优良的行道树和庭院树种,秋季金黄落叶景观绝佳;种子(白果)可食用和入药。",
    culturalNote: "银杏被誉为\u201C活化石\u201D,在中国常种植于古刹名寺,象征长寿与坚韧。",
  },
  {
    id: "hp-osmanthus",
    parkId: "huangxing-park",
    name: "桂花",
    scientificName: "Osmanthus fragrans",
    clues: [
      {
        id: "hp-osmanthus-clue-1",
        type: "flower",
        text: "秋天还没见到它,就先闻到了甜甜的香气。",
      },
      {
        id: "hp-osmanthus-clue-2",
        type: "leaf",
        text: "叶子硬硬的,边缘有小小的刺状锯齿。",
      },
      {
        id: "hp-osmanthus-clue-3",
        type: "description",
        text: "花小小的,有金黄也有淡黄,藏在叶子中间。",
      },
    ],
    knowledge:
      "桂花是木犀科木犀属常绿乔木,原产中国。叶革质,椭圆形,边缘常有锯齿。花期9-10月,花簇生叶腋,极香。品种分金桂、银桂、丹桂、四季桂等。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "桂花的花朵小得像米粒,但香气能飘到几十米远,是\u201C看不见的香\u201D。",
    nextObserve: "凑近闻一闻,看看是不是真的很甜,再找找金黄的小花藏在哪里。",
    isSeasonal: true,
    seasonMonths: [9, 10],
    unlockReward: "解锁了桂花的甜蜜香囊徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 40" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="35" cy="42" rx="10" ry="5" transform="rotate(-20 35 42)"/><ellipse cx="65" cy="42" rx="10" ry="5" transform="rotate(20 65 42)"/><ellipse cx="50" cy="32" rx="9" ry="5"/></g><g fill="#F5C542"><circle cx="40" cy="38" r="2"/><circle cx="46" cy="35" r="2"/><circle cx="55" cy="38" r="2"/><circle cx="60" cy="35" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5140, lat: 31.2820 },
    detailedIntro:
      "桂花是中国传统十大名花之一,已有2500余年栽培历史。它的花朵虽小如米粒,但芳香浓郁,秋日盛开时满园飘香。桂花分为金桂、银桂、丹桂和四季桂四大类群,花色从淡黄到橙红不等。除了观赏,桂花还可制作桂花糕、桂花酒和桂花茶,深受人们喜爱。黄兴公园内桂花散植各处,秋日行园,香气随人。",
    habitat: "喜温暖湿润、阳光充足的环境,耐半阴,要求排水良好的微酸性土壤。",
    uses: "重要的香花树种,花可窨制花茶、酿造桂花酒、制作糕点;也是优良的庭院和行道绿化树种。",
    culturalNote: "桂花在我国栽培历史悠久,\u201C蟾宫折桂\u201D以桂喻科举登第,象征荣誉与吉祥。",
  },
  {
    id: "hp-camphor",
    parkId: "huangxing-park",
    name: "香樟",
    scientificName: "Cinnamomum camphora",
    clues: [
      {
        id: "hp-camphor-clue-1",
        type: "leaf",
        text: "叶子揉一揉,会有一股清凉的樟脑香。",
      },
      {
        id: "hp-camphor-clue-2",
        type: "bark",
        text: "树皮有不规则的裂纹,像拼图碎片。",
      },
      {
        id: "hp-camphor-clue-3",
        type: "description",
        text: "它长得很高大,树冠圆圆的像一把绿色的大伞。",
      },
    ],
    knowledge:
      "香樟是樟科樟属常绿大乔木,是上海市市树。全株含樟脑香气,叶互生,卵形,叶脉离基三出。木材防虫,常用于制作家具和箱柜。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "香樟是上海的市树,揉一揉它的叶子,手上会留下凉凉的香味。",
    nextObserve: "摘一片叶子揉一揉,闻闻是不是有清凉的味道。",
    isSeasonal: false,
    unlockReward: "解锁了香樟的清凉香气徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 65" stroke="#6B4E2F" stroke-width="5"/><ellipse cx="50" cy="35" rx="35" ry="25" fill="#3A6B35"/><ellipse cx="35" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="65" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="50" cy="28" rx="20" ry="15" fill="#5A8B55"/></svg>',
    position: { lng: 121.5175, lat: 31.2835 },
    detailedIntro:
      "香樟是樟科樟属的常绿大乔木,也是上海市的市树。全株散发独特的樟脑清香,叶片互生、卵形,叶脉呈离基三出。树冠圆整如伞,四季常青,是优秀的遮荫树种。香樟木材含有天然樟脑,防虫耐腐,自古便是制作箱柜、家具的上等材料。黄兴公园内香樟成行,浓荫如盖,为游人提供清凉的休憩空间。",
    habitat: "喜温暖湿润、阳光充足气候,根系发达,对土壤要求不严,寿命长且生长较快。",
    uses: "优良的行道树和庭荫树;木材防虫耐腐,可提取樟脑和樟油,用于医药及工业。",
    culturalNote: "香樟是上海市树,江南一带常以古樟为村落风水树,寓意庇荫与长寿。",
  },
  {
    id: "hp-wintersweet",
    parkId: "huangxing-park",
    name: "腊梅",
    scientificName: "Chimonanthus praecox",
    clues: [
      {
        id: "hp-wintersweet-clue-1",
        type: "flower",
        text: "冬天它就开花了,小小的黄花挂在光秃秃的枝条上。",
      },
      {
        id: "hp-wintersweet-clue-2",
        type: "description",
        text: "香气清甜,在冷冷的空气里特别明显。",
      },
      {
        id: "hp-wintersweet-clue-3",
        type: "bark",
        text: "枝条灰褐色,有明显的皮孔,像一个个小点点。",
      },
    ],
    knowledge:
      "腊梅是腊梅科腊梅属落叶灌木。花期12月至翌年2月,花黄色,蜡质,芳香。先花后叶,寒冬开放,故名腊梅。与梅花不同科,仅因同开于严寒而常被相提并论。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "腊梅不是梅花,它俩只是恰好在冬天开花,其实连亲戚都算不上。",
    nextObserve: "闻闻它的香味,再看看花瓣是不是像涂了一层蜡。",
    isSeasonal: true,
    seasonMonths: [12, 1, 2],
    unlockReward: "解锁了腊梅的寒香徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><path d="M50 50 L35 42" stroke="#6B4E2F" stroke-width="2"/><path d="M50 50 L65 42" stroke="#6B4E2F" stroke-width="2"/><g fill="#E8C530" stroke="#C4A020" stroke-width="0.5"><circle cx="35" cy="38" r="6"/><circle cx="65" cy="38" r="6"/><circle cx="50" cy="28" r="7"/></g><g fill="#8B5A2B"><circle cx="35" cy="38" r="2"/><circle cx="65" cy="38" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5150, lat: 31.2830 },
    detailedIntro:
      "腊梅是腊梅科腊梅属的落叶灌木,原产中国。与梅花虽同开于严冬,却并非同科植物,只是因花时相近而得名\u201C腊梅\u201D。花期12月至翌年2月,先花后叶,花黄色、蜡质,芳香清冽,在寒风中格外醒目。腊梅花被片外轮蜡黄、内轮带紫条纹,花瓣触感如蜡,是其独特之处。黄兴公园的腊梅在隆冬凌寒怒放,暗香浮动,是冬游寻芳的好去处。",
    habitat: "喜光耐寒,耐旱忌涝,适宜肥沃排水良好的微酸性土壤,适应性强。",
    uses: "冬季重要香花灌木,孤植或丛植于庭院、公园,也是制作盆景和切花的优良材料。",
    culturalNote: "腊梅凌寒而开,常被喻为坚贞不屈的象征,与梅、竹、菊并称\u201C冬日四友\u201D,深受文人喜爱。",
  },
  {
    id: "hx-wisteria",
    parkId: "huangxing-park",
    name: "紫藤",
    scientificName: "Wisteria sinensis",
    clues: [
      {
        id: "hx-wisteria-clue-1",
        type: "flower",
        text: "春天垂下一串串紫色花穗,像紫色的瀑布。",
      },
      {
        id: "hx-wisteria-clue-2",
        type: "leaf",
        text: "叶子像羽毛,一排排小叶片整整齐齐。",
      },
      {
        id: "hx-wisteria-clue-3",
        type: "bark",
        text: "藤蔓粗粗的,像绳子一样缠绕在架子上。",
      },
    ],
    knowledge:
      "紫藤是豆科紫藤属落叶藤本,原产中国。茎左旋缠绕,羽状复叶。花期4月,花紫色,排成下垂的总状花序,长可达30厘米。先花后叶或花叶同放,盛花时紫瀑垂帘,蔚为壮观。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫藤的藤蔓是向左旋着往上爬的,你可以在架子上找找它旋转的方向。",
    nextObserve: "找一串最长花穗,数一数有多少朵小花排成一列。",
    isSeasonal: true,
    seasonMonths: [4, 5],
    unlockReward: "解锁了紫藤的紫色花瀑徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M20 20 Q50 18 80 20" stroke="#6B4E2F" stroke-width="3" fill="none"/><g fill="#9B7FC4" stroke="#7B5F9A" stroke-width="0.5"><ellipse cx="30" cy="35" rx="4" ry="6"/><ellipse cx="35" cy="42" rx="4" ry="6"/><ellipse cx="40" cy="49" rx="4" ry="6"/><ellipse cx="45" cy="56" rx="4" ry="6"/><ellipse cx="50" cy="35" rx="4" ry="6"/><ellipse cx="55" cy="42" rx="4" ry="6"/><ellipse cx="60" cy="49" rx="4" ry="6"/><ellipse cx="65" cy="56" rx="4" ry="6"/><ellipse cx="70" cy="35" rx="4" ry="6"/><ellipse cx="75" cy="42" rx="4" ry="6"/></g><g fill="#3A6B35"><ellipse cx="25" cy="22" rx="5" ry="3"/><ellipse cx="50" cy="20" rx="5" ry="3"/><ellipse cx="75" cy="22" rx="5" ry="3"/></g></svg>',
    position: { lng: 121.5165, lat: 31.2815 },
    detailedIntro:
      "紫藤是豆科紫藤属的落叶藤本植物,原产中国,栽培历史悠久。茎干左旋缠绕,可攀附数十米。羽状复叶,小叶7-13枚。4月开花,花紫色至淡紫,排成下垂的总状花序,长20-30厘米,盛开时如紫色瀑布垂挂棚架,芳香怡人。黄兴公园紫藤廊架春季花瀑如帘,是杨浦区赏紫藤的经典去处,游人络绎不绝。",
    habitat: "喜光,耐寒耐旱,对土壤要求不严,根系发达,宜设牢固棚架供其攀附。",
    uses: "著名棚架观赏藤本,花穗壮丽,常用于花架、廊道和庭院造景;花可食用,茎皮可入药。",
    culturalNote: "紫藤在中国栽培千余年,李白诗云“紫藤挂云木,花蔓宜阳春”,寓意浪漫与绵长。",
  },
  {
    id: "hx-cattail",
    parkId: "huangxing-park",
    name: "香蒲",
    scientificName: "Typha orientalis",
    clues: [
      {
        id: "hx-cattail-clue-1",
        type: "description",
        text: "长在水边,叶子又高又扁,像一把把绿色的剑插在水中。",
      },
      {
        id: "hx-cattail-clue-2",
        type: "flower",
        text: "夏天茎顶长出一个深棕色的毛毛虫状花穗,毛茸茸的。",
      },
      {
        id: "hx-cattail-clue-3",
        type: "leaf",
        text: "叶子从根部长出来,又长又窄,摸起来很光滑。",
      },
    ],
    knowledge:
      "香蒲是香蒲科香蒲属多年生水生草本,原产中国。根茎匍匐于泥中,叶丛生,狭线形。花期6-8月,花茎高挺,雌雄花同序,雄花在上,雌花在下形成棕色棒状花穗,俗称“蒲棒”。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "香蒲的棕色蒲棒摸起来毛茸茸的,里面全是种子,风一吹就像下棕色雪。",
    nextObserve: "找一根蒲棒,轻轻捏一捏,感受它的毛茸茸。",
    isSeasonal: false,
    unlockReward: "解锁了香蒲的蒲棒徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M0 85 Q50 80 100 85" stroke="#5A8B55" stroke-width="3" fill="none"/><g stroke="#3A6B35" stroke-width="4" fill="none"><path d="M40 85 L35 30"/><path d="M50 85 L50 25"/><path d="M60 85 L65 30"/></g><ellipse cx="50" cy="38" rx="4" ry="12" fill="#8B6B3A" stroke="#6B4E2F" stroke-width="0.5"/><g stroke="#F5C542" stroke-width="1" fill="none"><line x1="50" y1="26" x2="48" y2="18"/><line x1="50" y1="26" x2="52" y2="18"/></g></svg>',
    position: { lng: 121.5135, lat: 31.2845 },
    detailedIntro:
      "香蒲是香蒲科香蒲属的多年生水生草本植物,广泛分布于中国各地。根茎匍匐于浅水泥中,叶片丛生,狭长线形,高可达1.5米。6-8月开花,花茎直立,雄花序在上,雌花序在下形成棕色圆柱状花穗,俗称“蒲棒”,极具辨识度。黄兴公园湖边香蒲成丛,蒲棒挺立,为水岸增添了野趣与生机。",
    habitat: "喜生于浅水、沼泽及河湖边缘,喜光,根茎在泥中越冬,适应性强。",
    uses: "水景绿化植物,可净化水质;蒲棒和花粉(蒲黄)可入药;叶可编织蒲席和蒲包。",
    culturalNote: "香蒲与水相伴,古人以其叶编席、以花粉入药,是江南水乡的标志性植物之一。",
  },
  {
    id: "hx-purple-leaf-plum",
    parkId: "huangxing-park",
    name: "红叶李",
    scientificName: "Prunus cerasifera 'Atropurpurea'",
    clues: [
      {
        id: "hx-purple-leaf-plum-clue-1",
        type: "leaf",
        text: "叶子是紫红色的,从春天长出来到秋天一直紫。",
      },
      {
        id: "hx-purple-leaf-plum-clue-2",
        type: "flower",
        text: "春天先开花后长叶,小花粉白色,单瓣,开满枝条。",
      },
      {
        id: "hx-purple-leaf-plum-clue-3",
        type: "bark",
        text: "树皮紫褐色,年轻枝条也带紫色。",
      },
    ],
    knowledge:
      "红叶李是蔷薇科李属樱桃李的紫叶栽培品种,落叶小乔木。叶紫红色,常年不褪。花期3月,花淡粉白色,单瓣。果暗红色,小而酸涩。以叶色独特著称,是著名的色叶树种。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "红叶李的叶子从春天到秋天都是紫红色的,像一棵永远穿着紫色外衣的树。",
    nextObserve: "对比一下红叶李和旁边绿叶树的差别,看看紫红色有多特别。",
    isSeasonal: true,
    seasonMonths: [3, 4],
    unlockReward: "解锁了红叶李的紫叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 45" stroke="#6B4E2F" stroke-width="5"/><g fill="#6B2D5C"><ellipse cx="35" cy="40" rx="13" ry="9" transform="rotate(-20 35 40)"/><ellipse cx="65" cy="40" rx="13" ry="9" transform="rotate(20 65 40)"/><ellipse cx="50" cy="30" rx="15" ry="10"/></g><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="35" cy="35" r="3"/><circle cx="50" cy="25" r="3"/><circle cx="65" cy="35" r="3"/><circle cx="42" cy="42" r="2.5"/><circle cx="58" cy="42" r="2.5"/></g></svg>',
    position: { lng: 121.5175, lat: 31.2820 },
    detailedIntro:
      "红叶李是蔷薇科李属樱桃李的紫叶栽培品种,落叶小乔木。全年叶片呈紫红色,色彩醒目,是城市绿化中最常用的色叶树种之一。3月开花,花淡粉白色,单瓣,先花或花叶同放。果暗紫红色,小而酸涩。黄兴公园内红叶李成列种植,春季花白叶紫,夏秋紫叶如盖,为公园增添了一抹亮丽的色彩。",
    habitat: "喜光,稍耐阴,耐寒,对土壤要求不严,在排水良好的土壤中生长最佳。",
    uses: "优秀的色叶树种,常用于公园、道路和庭院绿化,以其紫红色叶片提供色彩对比。",
    culturalNote: "红叶李以紫叶闻名,虽非中国传统名花,却以独特的叶色丰富了现代城市园林的色彩。",
  },
  {
    id: "hx-rose-of-sharon",
    parkId: "huangxing-park",
    name: "木槿",
    scientificName: "Hibiscus syriacus",
    clues: [
      {
        id: "hx-rose-of-sharon-clue-1",
        type: "flower",
        text: "夏天开出粉紫色的花,花瓣有褶皱,中间有长长的花蕊。",
      },
      {
        id: "hx-rose-of-sharon-clue-2",
        type: "leaf",
        text: "叶子像小手掌,有三道浅裂,边缘有锯齿。",
      },
      {
        id: "hx-rose-of-sharon-clue-3",
        type: "description",
        text: "每天清晨花开,傍晚花谢,一朵只开一天,叫“朝开暮落”。",
      },
    ],
    knowledge:
      "木槿是锦葵科木槿属落叶灌木,原产中国。叶卵形或菱状卵形,常三裂。花期7-9月,花单生,粉紫、紫红或白色,花瓣皱缩。每朵花朝开暮落,故称“朝开暮落花”,但花蕾连续不断,整体花期可达百日。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "木槿每朵花只开一天,但天天都有新花开放,像永不罢休的勤花能手。",
    nextObserve: "清晨来看花,傍晚再来看看,是不是花已经合上了。",
    isSeasonal: true,
    seasonMonths: [7, 8, 9],
    unlockReward: "解锁了木槿的朝开暮落徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 40" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="35" cy="48" rx="10" ry="5" transform="rotate(-25 35 48)"/><ellipse cx="65" cy="48" rx="10" ry="5" transform="rotate(25 65 48)"/></g><circle cx="50" cy="28" r="12" fill="#C490D8" stroke="#A070B8" stroke-width="1"/><g stroke="#F5C542" stroke-width="1" fill="none"><line x1="50" y1="28" x2="50" y2="18"/><line x1="50" y1="28" x2="44" y2="20"/><line x1="50" y1="28" x2="56" y2="20"/></g><circle cx="50" cy="28" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.5155, lat: 31.2840 },
    detailedIntro:
      "木槿是锦葵科木槿属的落叶灌木,原产中国,栽培历史逾千年。叶卵形或菱状卵形,常三裂。7-9月开花,花单生叶腋,花色有粉紫、紫红、白等,花瓣皱缩如褶边,花蕊细长突出。最特别的是每朵花朝开暮落,寿命仅一天,但花蕾连续不断,整体花期可长达三个月。黄兴公园内木槿夏秋花开不辍,是赏夏花的优良树种。",
    habitat: "喜光,耐寒耐旱,对土壤要求不严,耐修剪,适应性强,生长较快。",
    uses: "优良的夏秋花灌木,常用于绿篱、庭院和公园;茎皮纤维可制绳造纸;花可食用和入药。",
    culturalNote: "木槿在中国栽培历史悠久,“朝开暮落花”常被吟咏,寓意坚韧与生生不息。",
  },
];

const huangxingParkBuddy: Buddy = {
  id: "hp-buddy-huahua",
  parkId: "huangxing-park",
  name: "花花",
  intro: "一朵爱凑热闹的花精,春天总在樱花枝头跳来跳去,把花瓣撒到游客头上。",
  silhouetteSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><circle cx="50" cy="40" r="18" fill="#3A3A3A"/><rect x="48" y="55" width="4" height="25" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><circle cx="50" cy="40" r="18" fill="#6B8E5A"/><rect x="47" y="55" width="6" height="25" fill="#3F5E32"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><circle cx="50" cy="38" r="20" fill="#6B8E5A" stroke="#3F5E32" stroke-width="2"/><rect x="46" y="56" width="8" height="24" rx="2" fill="#3F5E32"/><circle cx="43" cy="36" r="3.5" fill="#FFF"/><circle cx="43" cy="37" r="1.8" fill="#2B2B2B"/><circle cx="57" cy="36" r="3.5" fill="#FFF"/><circle cx="57" cy="37" r="1.8" fill="#2B2B2B"/><path d="M45 44 Q50 48 55 44" stroke="#3F5E32" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="40" cy="42" r="2" fill="#F8B4C0" opacity="0.7"/><circle cx="60" cy="42" r="2" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 2 },
};

// ===========================================================================
// Yangpu Park — Plants and Buddy
// ===========================================================================

const yangpuParkPlants: PlantDiscovery[] = [
  {
    id: "yp-camphor",
    parkId: "yangpu-park",
    name: "香樟",
    scientificName: "Cinnamomum camphora",
    clues: [
      {
        id: "yp-camphor-clue-1",
        type: "leaf",
        text: "叶子揉一揉,会有一股清凉的樟脑香。",
      },
      {
        id: "yp-camphor-clue-2",
        type: "bark",
        text: "树皮有不规则的裂纹,像拼图碎片。",
      },
      {
        id: "yp-camphor-clue-3",
        type: "description",
        text: "它长得很高大,树冠圆圆的像一把绿色的大伞。",
      },
    ],
    knowledge:
      "香樟是樟科樟属常绿大乔木,是上海市市树。全株含樟脑香气,叶互生,卵形,叶脉离基三出。木材防虫,常用于制作家具和箱柜。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "香樟是上海的市树,揉一揉它的叶子,手上会留下凉凉的香味。",
    nextObserve: "摘一片叶子揉一揉,闻闻是不是有清凉的味道。",
    isSeasonal: false,
    unlockReward: "解锁了香樟的清凉香气徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 65" stroke="#6B4E2F" stroke-width="5"/><path d="M50 65 L35 50" stroke="#6B4E2F" stroke-width="2"/><path d="M50 65 L65 50" stroke="#6B4E2F" stroke-width="2"/><ellipse cx="50" cy="35" rx="35" ry="25" fill="#3A6B35"/><ellipse cx="35" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="65" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="50" cy="28" rx="20" ry="15" fill="#5A8B55"/></svg>',
    position: { lng: 121.5225, lat: 31.2760 },
    detailedIntro:
      "香樟是樟科樟属的常绿大乔木,也是上海市的市树。全株散发独特的樟脑清香,叶片互生、卵形,叶脉呈离基三出。树冠圆整如伞,四季常青,是优秀的遮荫树种。香樟木材含有天然樟脑,防虫耐腐,自古便是制作箱柜、家具的上等材料。杨浦公园内有多株百年香樟,枝繁叶茂,浓荫蔽日。",
    habitat: "喜温暖湿润、阳光充足气候,根系发达,对土壤要求不严,寿命长且生长较快。",
    uses: "优良的行道树和庭荫树;木材防虫耐腐,可提取樟脑和樟油,用于医药及工业。",
    culturalNote: "香樟是上海市树,江南一带常以古樟为村落风水树,寓意庇荫与长寿。",
  },
  {
    id: "yp-wisteria",
    parkId: "yangpu-park",
    name: "紫藤",
    scientificName: "Wisteria sinensis",
    clues: [
      {
        id: "yp-wisteria-clue-1",
        type: "flower",
        text: "春天它垂下一串串紫色的花,像瀑布一样。",
      },
      {
        id: "yp-wisteria-clue-2",
        type: "description",
        text: "老藤弯弯绕绕,像粗粗的绳子缠在架子上。",
      },
      {
        id: "yp-wisteria-clue-3",
        type: "leaf",
        text: "叶子是羽状的,像一排排小扇子排在一起。",
      },
    ],
    knowledge:
      "紫藤是豆科紫藤属落叶藤本,茎左旋缠绕。花期4-5月,总状花序下垂,花紫色或淡紫色。叶为奇数羽状复叶,小叶7-13枚。是优良的棚架绿化植物。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫藤的花序可以长达30厘米,一串上能开几十朵小花。",
    nextObserve: "数一数一串紫藤上开了多少朵小花。",
    isSeasonal: true,
    seasonMonths: [4, 5],
    unlockReward: "解锁了紫藤的紫色花瀑布徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M20 30 Q50 25 80 30" stroke="#8B6F47" stroke-width="3" fill="none"/><g fill="#9B7BC8"><ellipse cx="35" cy="40" rx="3" ry="5"/><ellipse cx="40" cy="50" rx="3" ry="5"/><ellipse cx="45" cy="58" rx="3" ry="5"/><ellipse cx="50" cy="40" rx="3" ry="5"/><ellipse cx="55" cy="50" rx="3" ry="5"/><ellipse cx="60" cy="58" rx="3" ry="5"/><ellipse cx="65" cy="40" rx="3" ry="5"/><ellipse cx="70" cy="50" rx="3" ry="5"/></g><g fill="#7C9885"><ellipse cx="28" cy="28" rx="4" ry="2"/><ellipse cx="50" cy="25" rx="4" ry="2"/><ellipse cx="72" cy="28" rx="4" ry="2"/></g></svg>',
    position: { lng: 121.5250, lat: 31.2740 },
    detailedIntro:
      "紫藤是豆科紫藤属的落叶藤本植物,老藤左旋缠绕,可攀附棚架长成花廊。每年4至5月间,总状花序自架顶垂下,可达30厘米以上,紫蓝色花朵密集成串,宛如紫色瀑布。叶片为奇数羽状复叶,小叶7至13枚,排列整齐如羽。紫藤是江南园林中最具诗意的棚架植物之一,杨浦公园的花架长廊在春末紫藤垂挂,蔚为壮观。",
    habitat: "喜光耐旱,是适应性强的藤本植物,对土壤要求不严,宜攀附棚架或老树生长。",
    uses: "优良的棚架、花廊绿化藤本,花序下垂如瀑,观赏价值极高;花可食用和酿酒。",
    culturalNote: "紫藤在唐宋诗词中常被吟咏,象征缠绵情意与高洁气韵,是江南古典园林的代表性藤蔓。",
  },
  {
    id: "yp-wintersweet",
    parkId: "yangpu-park",
    name: "腊梅",
    scientificName: "Chimonanthus praecox",
    clues: [
      {
        id: "yp-wintersweet-clue-1",
        type: "flower",
        text: "冬天它就开花了,小小的黄花挂在光秃秃的枝条上。",
      },
      {
        id: "yp-wintersweet-clue-2",
        type: "description",
        text: "香气清甜,在冷冷的空气里特别明显。",
      },
      {
        id: "yp-wintersweet-clue-3",
        type: "bark",
        text: "枝条灰褐色,有明显的皮孔,像一个个小点点。",
      },
    ],
    knowledge:
      "腊梅是腊梅科腊梅属落叶灌木。花期12月至翌年2月,花黄色,蜡质,芳香。先花后叶,寒冬开放,故名腊梅。与梅花不同科,仅因同开于严寒而常被相提并论。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "腊梅不是梅花,它俩只是恰好在冬天开花,其实连亲戚都算不上。",
    nextObserve: "闻闻腊梅的香味,再看看花瓣是不是像涂了一层蜡。",
    isSeasonal: true,
    seasonMonths: [12, 1, 2],
    unlockReward: "解锁了腊梅的寒香徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><path d="M50 50 L35 42" stroke="#6B4E2F" stroke-width="2"/><path d="M50 50 L65 42" stroke="#6B4E2F" stroke-width="2"/><g fill="#E8C530" stroke="#C4A020" stroke-width="0.5"><circle cx="35" cy="38" r="6"/><circle cx="65" cy="38" r="6"/><circle cx="50" cy="28" r="7"/><circle cx="42" cy="48" r="5"/><circle cx="58" cy="48" r="5"/></g><g fill="#8B5A2B"><circle cx="35" cy="38" r="2"/><circle cx="65" cy="38" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5235, lat: 31.2735 },
    detailedIntro:
      "腊梅是腊梅科腊梅属的落叶灌木,原产中国。与梅花虽同开于严冬,却并非同科植物,只是因花时相近而得名\u201C腊梅\u201D。花期12月至翌年2月,先花后叶,花黄色、蜡质,芳香清冽,在寒风中格外醒目。腊梅花被片外轮蜡黄、内轮带紫条纹,花瓣触感如蜡,是其独特之处。杨浦公园的腊梅在隆冬时节凌寒怒放,暗香浮动,是冬游寻芳的好去处。",
    habitat: "喜光耐寒,耐旱忌涝,适宜肥沃排水良好的微酸性土壤,适应性强。",
    uses: "冬季重要香花灌木,孤植或丛植于庭院、公园,也是制作盆景和切花的优良材料。",
    culturalNote: "腊梅凌寒而开,常被喻为坚贞不屈的象征,与梅、竹、菊并称\u201C冬日四友\u201D,深受文人喜爱。",
  },
  {
    id: "yp-ginkgo",
    parkId: "yangpu-park",
    name: "银杏",
    scientificName: "Ginkgo biloba",
    clues: [
      {
        id: "yp-ginkgo-clue-1",
        type: "leaf",
        text: "它的叶子像一把小扇子,秋天会变成金黄色。",
      },
      {
        id: "yp-ginkgo-clue-2",
        type: "bark",
        text: "树皮灰褐色,纵向裂开,像老人的皱纹。",
      },
      {
        id: "yp-ginkgo-clue-3",
        type: "description",
        text: "它是活化石,在地球上已经生活了上亿年。",
      },
    ],
    knowledge:
      "银杏是裸子植物银杏科银杏属的唯一现存物种,被誉为\u201C活化石\u201D。其叶片呈扇形,叶脉平行,秋季变为金黄。雌雄异株,种子俗称白果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "银杏的叶子其实不是一片,而是许多裂片拼成的扇形,像小扇子一样。",
    nextObserve: "秋天再来一次,看看满地金黄的扇形落叶。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了银杏的金色叶子徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 Q48 60 45 45" stroke="#8B6F47" stroke-width="4" fill="none"/><path d="M50 90 Q52 60 55 45" stroke="#8B6F47" stroke-width="3" fill="none"/><g fill="#F5C542" stroke="#C49A2A" stroke-width="1"><path d="M42 40 Q37 35 39 27 Q47 30 49 38 Z"/><path d="M58 40 Q63 35 61 27 Q53 30 51 38 Z"/><path d="M50 38 Q45 30 50 22 Q55 30 50 38 Z"/></g><circle cx="50" cy="37" r="2" fill="#8B6F47"/></svg>',
    position: { lng: 121.5245, lat: 31.2765 },
    detailedIntro:
      "银杏是现存最古老的种子植物之一,历史可追溯至2.7亿年前。它的扇形叶片在秋季变为金黄色,是上海秋季最具代表性的景观树种。银杏雌雄异株,雄株高大挺拔,雌株秋季结出白果。作为行道树和公园树种,银杏寿命极长,常被赋予长寿和坚韧的寓意。杨浦公园内的银杏在深秋金黄耀眼,落叶铺地如毯。",
    habitat: "喜光,耐寒耐旱,对土壤适应性强,生长缓慢但寿命极长。",
    uses: "优良的行道树和庭院树种,秋季金黄落叶景观绝佳;种子(白果)可食用和入药。",
    culturalNote: "银杏被誉为\u201C活化石\u201D,在中国常种植于古刹名寺,象征长寿与坚韧。",
  },
  {
    id: "yp-osmanthus",
    parkId: "yangpu-park",
    name: "桂花",
    scientificName: "Osmanthus fragrans",
    clues: [
      {
        id: "yp-osmanthus-clue-1",
        type: "flower",
        text: "秋天还没见到它,就先闻到了甜甜的香气。",
      },
      {
        id: "yp-osmanthus-clue-2",
        type: "leaf",
        text: "叶子硬硬的,边缘有小小的刺状锯齿。",
      },
      {
        id: "yp-osmanthus-clue-3",
        type: "description",
        text: "花小小的,有金黄也有淡黄,藏在叶子中间。",
      },
    ],
    knowledge:
      "桂花是木犀科木犀属常绿乔木,原产中国。叶革质,椭圆形,边缘常有锯齿。花期9-10月,花簇生叶腋,极香。品种分金桂、银桂、丹桂、四季桂等。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "桂花的花朵小得像米粒,但香气能飘到几十米远,是\u201C看不见的香\u201D。",
    nextObserve: "凑近闻一闻,看看是不是真的很甜,再找找金黄的小花藏在哪里。",
    isSeasonal: true,
    seasonMonths: [9, 10],
    unlockReward: "解锁了桂花的甜蜜香囊徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 40" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="35" cy="42" rx="10" ry="5" transform="rotate(-20 35 42)"/><ellipse cx="65" cy="42" rx="10" ry="5" transform="rotate(20 65 42)"/><ellipse cx="50" cy="32" rx="9" ry="5"/></g><g fill="#F5C542"><circle cx="40" cy="38" r="2"/><circle cx="46" cy="35" r="2"/><circle cx="55" cy="38" r="2"/><circle cx="60" cy="35" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5220, lat: 31.2745 },
    detailedIntro:
      "桂花是中国传统十大名花之一,已有2500余年栽培历史。它的花朵虽小如米粒,但芳香浓郁,秋日盛开时满园飘香。桂花分为金桂、银桂、丹桂和四季桂四大类群,花色从淡黄到橙红不等。除了观赏,桂花还可制作桂花糕、桂花酒和桂花茶,深受人们喜爱。杨浦公园内桂花散植各处,秋日行园,香气随人。",
    habitat: "喜温暖湿润、阳光充足的环境,耐半阴,要求排水良好的微酸性土壤。",
    uses: "重要的香花树种,花可窨制花茶、酿造桂花酒、制作糕点;也是优良的庭院和行道绿化树种。",
    culturalNote: "桂花在我国栽培历史悠久,\u201C蟾宫折桂\u201D以桂喻科举登第,象征荣誉与吉祥。",
  },
  {
    id: "yp-crape-myrtle",
    parkId: "yangpu-park",
    name: "紫薇",
    scientificName: "Lagerstroemia indica",
    clues: [
      {
        id: "yp-crape-myrtle-clue-1",
        type: "flower",
        text: "夏天开出皱皱的粉紫色小花,一簇一簇的。",
      },
      {
        id: "yp-crape-myrtle-clue-2",
        type: "bark",
        text: "树皮很光滑,像被剥掉了一样,摸起来凉凉的。",
      },
      {
        id: "yp-crape-myrtle-clue-3",
        type: "description",
        text: "它的花期很长,能开整整一个夏天,又叫\u201C百日红\u201D。",
      },
    ],
    knowledge:
      "紫薇是千屈菜科紫薇属落叶灌木或小乔木。树皮光滑,花玫红或粉红,花瓣皱缩。花期6-9月,长达百日以上,故又称\u201C百日红\u201D。树干光滑,轻搔之全树微动,俗称\u201C怕痒树\u201D。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫薇树干光滑,用手轻轻一挠,整棵树都会痒得发抖,所以叫\u201C怕痒树\u201D。",
    nextObserve: "用手轻轻挠一挠它的树干,看看它会不会\u201C怕痒\u201D。",
    isSeasonal: true,
    seasonMonths: [7, 8, 9],
    unlockReward: "解锁了紫薇的百日红徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="38" cy="50" rx="8" ry="4"/><ellipse cx="62" cy="50" rx="8" ry="4"/></g><g fill="#C490D8" stroke="#A070B8" stroke-width="0.5"><circle cx="35" cy="35" r="7"/><circle cx="65" cy="35" r="7"/><circle cx="50" cy="25" r="8"/></g><g fill="#F5C542"><circle cx="50" cy="25" r="2"/></g></svg>',
    position: { lng: 121.5255, lat: 31.2750 },
    detailedIntro:
      "紫薇是千屈菜科紫薇属的落叶灌木或小乔木,原产中国。它的树皮光滑,呈灰白色,花色从玫红到粉紫不等,花瓣边缘皱缩如褶边,别具特色。花期长达百日以上,从6月持续到9月,故又称\u201C百日红\u201D。最有趣的是,紫薇树干光滑,轻轻搔之全树微动,俗称\u201C怕痒树\u201D,深受孩童喜爱。杨浦公园内紫薇夏秋花开不断,是夏日赏花的好去处。",
    habitat: "喜温暖湿润、阳光充足环境,耐旱耐寒,对土壤要求不严,半阴亦可生长。",
    uses: "优秀的夏花树种,花期长、花色艳,常用于庭院、道路和公园绿化,也是制作盆景的好材料。",
    culturalNote: "紫薇自古为园林名花,唐宋诗词中多有吟咏,\u201C百日红\u201D之名道出其花期绵长的可贵。",
  },
  {
    id: "yp-crabapple",
    parkId: "yangpu-park",
    name: "海棠",
    scientificName: "Malus spectabilis",
    clues: [
      {
        id: "yp-crabapple-clue-1",
        type: "flower",
        text: "春天开出粉红色一簇簇的花,像小酒杯。",
      },
      {
        id: "yp-crabapple-clue-2",
        type: "leaf",
        text: "叶子卵形,边缘有小锯齿,嫩叶常带红晕。",
      },
      {
        id: "yp-crabapple-clue-3",
        type: "description",
        text: "花谢后结出小小的果子,秋天会变红。",
      },
    ],
    knowledge:
      "海棠是蔷薇科苹果属落叶小乔木。花期4-5月,花粉红或白色,花叶同放。果近球形,秋季成熟。是重要的春季观花树种,自古为园林名花。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "海棠的花和叶常常同时冒出来,花在叶间绽放,像害羞的小朋友探出头。",
    nextObserve: "看看海棠花是不是粉粉的,再找找有没有小小的果实藏在叶子里。",
    isSeasonal: true,
    seasonMonths: [4, 5],
    unlockReward: "解锁了海棠的粉红花杯徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 45" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="40" cy="55" rx="8" ry="4"/><ellipse cx="60" cy="55" rx="8" ry="4"/><ellipse cx="50" cy="40" rx="7" ry="4"/></g><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="38" cy="38" r="6"/><circle cx="62" cy="38" r="6"/><circle cx="50" cy="28" r="7"/></g><g fill="#F5C542"><circle cx="38" cy="38" r="1.5"/><circle cx="62" cy="38" r="1.5"/></g></svg>',
    position: { lng: 121.5230, lat: 31.2755 },
    detailedIntro:
      "海棠是蔷薇科苹果属的落叶小乔木,原产中国,栽培历史悠久。花期4至5月,花叶同放,花粉红或白色,簇生枝头,娇艳动人。花谢后结出近球形小果,秋季转为红黄,可观可食。海棠自古为园林名花,有\u201C花中神仙\u201D之誉,在古典园林中常与玉兰、牡丹配植,寓意\u201C玉堂富贵\u201D。杨浦公园内海棠春日繁花满枝,是赏春的重要看点。",
    habitat: "喜阳光充足环境,耐寒耐旱,适宜肥沃排水良好的土壤,适应性强。",
    uses: "重要的春季观花树种,花色娇艳,常用于庭院和公园绿化;果实可制作蜜饯。",
    culturalNote: "海棠自古为园林名花,\u201C海棠春睡\u201D的典故出自唐明皇,象征娇艳与美好。",
  },
  {
    id: "yp-camellia",
    parkId: "yangpu-park",
    name: "山茶",
    scientificName: "Camellia japonica",
    clues: [
      {
        id: "yp-camellia-clue-1",
        type: "leaf",
        text: "叶子厚厚的,边缘有小锯齿,一年四季都是绿的。",
      },
      {
        id: "yp-camellia-clue-2",
        type: "flower",
        text: "冬天开大红的花,花瓣层层叠叠,像小碗一样。",
      },
      {
        id: "yp-camellia-clue-3",
        type: "bark",
        text: "树皮光滑,灰白色,小枝条是绿色的。",
      },
    ],
    knowledge:
      "山茶是山茶科山茶属常绿灌木或小乔木。叶革质,表面深绿有光泽。花期11月至次年4月,花色有红、白、粉等,重瓣品种层层叠叠。是中国传统十大名花之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "山茶花冬天也能开得热热闹闹,是名副其实的“耐寒勇士”。",
    nextObserve: "数数山茶花有几层花瓣,看看是不是像叠起来的小碗。",
    isSeasonal: true,
    seasonMonths: [1, 2, 3],
    unlockReward: "解锁了山茶的冬红锦碗徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="38" cy="58" rx="10" ry="5" transform="rotate(-20 38 58)"/><ellipse cx="62" cy="58" rx="10" ry="5" transform="rotate(20 62 58)"/></g><circle cx="50" cy="35" r="14" fill="#D42E2E" stroke="#B02020" stroke-width="1"/><g fill="#FF6B6B" stroke="#B02020" stroke-width="0.5"><circle cx="44" cy="30" r="5"/><circle cx="56" cy="30" r="5"/><circle cx="50" cy="24" r="5"/><circle cx="42" cy="38" r="5"/><circle cx="58" cy="38" r="5"/></g><circle cx="50" cy="34" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.5240, lat: 31.2760 },
    detailedIntro:
      "山茶是山茶科山茶属的常绿灌木或小乔木,原产中国,栽培历史悠久。叶革质,表面深绿有光泽,边缘有细锯齿。花期极长,从11月可开至次年4月,花色有红、白、粉及复色,重瓣品种花瓣层层叠叠,花型饱满。山茶是中国传统十大名花之一,有“花中珍品”之誉。杨浦公园内山茶冬春红花点缀于绿叶之间,是冬季赏花的重要树种。",
    habitat: "喜温暖湿润气候,耐阴,适宜肥沃排水良好的微酸性土壤,不耐严寒和烈日。",
    uses: "重要的冬春观花植物,常用于庭院、公园绿化;花可入药,种子可榨油。",
    culturalNote: "山茶是中国传统十大名花之一,自古被视为花中珍品,象征坚韧与傲骨。",
  },
  {
    id: "yp-plum",
    parkId: "yangpu-park",
    name: "梅花",
    scientificName: "Prunus mume",
    clues: [
      {
        id: "yp-plum-clue-1",
        type: "flower",
        text: "冬天光秃秃的枝条上开满粉白色小花,有淡淡清香。",
      },
      {
        id: "yp-plum-clue-2",
        type: "bark",
        text: "树皮黑褐色,有纵向裂纹,小枝带绿色。",
      },
      {
        id: "yp-plum-clue-3",
        type: "description",
        text: "花先开,叶后长,花谢后结出圆圆的小梅子。",
      },
    ],
    knowledge:
      "梅花是蔷薇科杏属落叶小乔木。花期12月至次年3月,先花后叶,花色有白、粉、红等,有清香。果近球形,成熟时变黄。是中国传统名花,被誉为“岁寒三友”之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "梅花不怕冷,越冷越开花,古人说它“凌寒独自开”。",
    nextObserve: "凑近闻闻梅花的香,数数一朵花有几个花瓣。",
    isSeasonal: true,
    seasonMonths: [1, 2, 3],
    unlockReward: "解锁了梅花的凌寒傲骨徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 Q45 60 48 40 Q50 25 52 40 Q55 60 50 90" stroke="#4A3A2A" stroke-width="4" fill="none"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="38" cy="35" r="6"/><circle cx="62" cy="38" r="6"/><circle cx="50" cy="22" r="7"/></g><g fill="#F5C542"><circle cx="38" cy="35" r="1.5"/><circle cx="62" cy="38" r="1.5"/><circle cx="50" cy="22" r="1.5"/></g></svg>',
    position: { lng: 121.5225, lat: 31.2745 },
    detailedIntro:
      "梅花是蔷薇科杏属的落叶小乔木,原产中国,栽培历史超过三千年。花期12月至次年3月,先花后叶,单生或簇生,花色有白、粉、红等,花瓣五片,有清香。花谢后结出近球形核果,成熟时黄色,即梅子。梅花是中国传统名花之首,与松、竹并称“岁寒三友”,象征坚韧不拔、傲骨凛然。杨浦公园内梅花冬春绽放,暗香浮动,是冬季赏花的重要看点。",
    habitat: "喜温暖,耐寒性强,喜阳光充足,适宜肥沃排水良好的土壤,寿命长。",
    uses: "重要的冬春观花植物,常用于庭院和公园;果实可食用,也可制作蜜饯和入药。",
    culturalNote: "梅花是中国传统文化中最重要的花卉之一,“岁寒三友”之一,象征坚韧与高洁。",
  },
  {
    id: "yp-southern-magnolia",
    parkId: "yangpu-park",
    name: "广玉兰",
    scientificName: "Magnolia grandiflora",
    clues: [
      {
        id: "yp-southern-magnolia-clue-1",
        type: "leaf",
        text: "叶子又大又厚,正面油绿发亮,背面有锈色绒毛。",
      },
      {
        id: "yp-southern-magnolia-clue-2",
        type: "flower",
        text: "夏天开白色大花,像荷花一样,有浓郁香气。",
      },
      {
        id: "yp-southern-magnolia-clue-3",
        type: "description",
        text: "树形高大挺拔,四季常绿,是公园里的大个子。",
      },
    ],
    knowledge:
      "广玉兰是木兰科木兰属常绿大乔木。叶革质,表面深绿有光泽,背面密被锈色绒毛。花期5-7月,花大如荷,白色,有浓郁香气。原产北美,中国广泛栽培。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "广玉兰的花大得像小荷花,所以也叫“荷花玉兰”。",
    nextObserve: "摸摸叶子背面,是不是有毛茸茸的感觉。",
    isSeasonal: true,
    seasonMonths: [6, 7],
    unlockReward: "解锁了广玉兰的荷香巨叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 95 L50 55" stroke="#6B4E2F" stroke-width="5"/><g fill="#2E5A2A"><ellipse cx="32" cy="65" rx="14" ry="7" transform="rotate(-30 32 65)"/><ellipse cx="68" cy="65" rx="14" ry="7" transform="rotate(30 68 65)"/><ellipse cx="50" cy="50" rx="12" ry="7"/></g><g fill="#FFF" stroke="#E8E8E8" stroke-width="0.5"><ellipse cx="50" cy="30" rx="8" ry="14"/><ellipse cx="42" cy="30" rx="6" ry="12" transform="rotate(-25 42 30)"/><ellipse cx="58" cy="30" rx="6" ry="12" transform="rotate(25 58 30)"/></g><circle cx="50" cy="35" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.5250, lat: 31.2765 },
    detailedIntro:
      "广玉兰是木兰科木兰属的常绿大乔木,原产北美东南部,中国广泛栽培。株型高大挺拔,四季常绿。叶革质,表面深绿油亮,背面密被锈色绒毛,触之可感。花期5-7月,花大如荷,乳白色,花瓣厚实,有浓郁香气,形似荷花故又名“荷花玉兰”。花谢后结出聚合果,似松果。杨浦公园内广玉兰巍然矗立,夏初花开时满树白花,香飘数里。",
    habitat: "喜温暖湿润气候,喜光稍耐阴,适宜肥沃排水良好的土壤,抗污染力强。",
    uses: "优良的常绿行道树和庭院树,花大而香;叶可入药,树姿雄伟,具观赏与生态价值。",
    culturalNote: "广玉兰原产北美,引入中国后广为栽培,因其花似荷花而得名“荷花玉兰”。",
  },
  {
    id: "yp-willow",
    parkId: "yangpu-park",
    name: "垂柳",
    scientificName: "Salix babylonica",
    clues: [
      {
        id: "yp-willow-clue-1",
        type: "leaf",
        text: "叶子又细又长,像绿色的小眉毛,风一吹就飘。",
      },
      {
        id: "yp-willow-clue-2",
        type: "bark",
        text: "树皮灰褐色,有纵裂,老树会变得很粗糙。",
      },
      {
        id: "yp-willow-clue-3",
        type: "description",
        text: "枝条软软地垂下来,像绿色的瀑布,长在水边。",
      },
    ],
    knowledge:
      "垂柳是杨柳科柳属落叶乔木。枝条细长下垂。叶披针形,边缘有细锯齿。花期3-4月,先花后叶。喜水湿,常生于河岸湖滨,枝条柔美是标志特征。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "垂柳的枝条可以垂到地面,风一吹就像绿色的珠帘在飘。",
    nextObserve: "看看柳枝是不是真的垂下来了,摸摸叶子是不是又细又长。",
    isSeasonal: false,
    unlockReward: "解锁了垂柳的绿帘垂瀑徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 30" stroke="#6B4E2F" stroke-width="5"/><g stroke="#5A8B55" stroke-width="1.5" fill="none"><path d="M48 30 Q40 40 38 80"/><path d="M50 30 Q45 50 43 85"/><path d="M52 30 Q55 45 57 75"/><path d="M54 30 Q60 40 62 80"/></g><g fill="#5A8B55"><ellipse cx="38" cy="55" rx="1.5" ry="3" transform="rotate(-20 38 55)"/><ellipse cx="43" cy="65" rx="1.5" ry="3" transform="rotate(-10 43 65)"/><ellipse cx="57" cy="55" rx="1.5" ry="3" transform="rotate(20 57 55)"/><ellipse cx="62" cy="65" rx="1.5" ry="3" transform="rotate(15 62 65)"/></g></svg>',
    position: { lng: 121.5215, lat: 31.2735 },
    detailedIntro:
      "垂柳是杨柳科柳属的落叶乔木,原产中国,自古为园林水景的重要树种。枝条细长柔韧,自然下垂,随风飘拂。叶披针形,边缘有细锯齿,嫩绿新翠。花期3-4月,先花后叶。垂柳喜水湿,常生于河岸湖滨,根须发达,有固土护岸之效。杨浦公园水畔垂柳依依,春日嫩绿如烟,是江南水乡园林的经典意境。",
    habitat: "喜水湿,耐涝,常生于河岸湖滨,生长迅速,适应性强,喜光。",
    uses: "重要的水边绿化树种,枝条柔美常用于园林水景;木材可用,树皮可入药。",
    culturalNote: "垂柳自古是诗词中常见的意象,“碧玉妆成一树高,万条垂下绿丝绦”,象征柔情与春意。",
  },
];

const yangpuParkBuddy: Buddy = {
  id: "yp-buddy-xiangxiang",
  parkId: "yangpu-park",
  name: "香香",
  intro: "一团爱飘来飘去的香精,最喜欢在腊梅和紫藤开花的时候到处撒香气。",
  silhouetteSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 25 Q60 30 58 45 Q55 60 50 55 Q45 60 42 45 Q40 30 50 25 Z" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 22 Q62 28 60 45 Q56 62 50 56 Q44 62 40 45 Q38 28 50 22 Z" fill="#7C9885"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 20 Q64 26 62 46 Q57 65 50 58 Q43 65 38 46 Q36 26 50 20 Z" fill="#7C9885" stroke="#445548" stroke-width="2"/><circle cx="45" cy="38" r="3.5" fill="#FFF"/><circle cx="45" cy="39" r="1.8" fill="#2B2B2B"/><circle cx="55" cy="38" r="3.5" fill="#FFF"/><circle cx="55" cy="39" r="1.8" fill="#2B2B2B"/><path d="M46 46 Q50 50 54 46" stroke="#445548" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="42" cy="44" r="2" fill="#F8B4C0" opacity="0.7"/><circle cx="58" cy="44" r="2" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 2 },
};

// ===========================================================================
// Fuxing Island Park — Plants and Buddy
// ===========================================================================

const fuxingParkPlants: PlantDiscovery[] = [
  {
    id: "fp-willow",
    parkId: "fuxing-park",
    name: "柳树",
    scientificName: "Salix babylonica",
    clues: [
      {
        id: "fp-willow-clue-1",
        type: "leaf",
        text: "叶子又细又长,像小小的绿色眉毛。",
      },
      {
        id: "fp-willow-clue-2",
        type: "description",
        text: "枝条软软地垂下来,风一吹就像在梳辫子。",
      },
      {
        id: "fp-willow-clue-3",
        type: "bark",
        text: "树皮灰褐色,有浅浅的裂纹。",
      },
    ],
    knowledge:
      "柳树是杨柳科柳属落叶乔木。枝条细长下垂,叶条状披针形。花期3-4月,先花后叶,花为柔荑花序。喜水湿,常生于河畔,是典型的滨水绿化树种。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "柳树的枝条在水里插一插就能生根发芽,生命力特别顽强。",
    nextObserve: "看看柳条的顶端是不是真的垂向水面,像不像在照镜子。",
    isSeasonal: false,
    unlockReward: "解锁了柳树的垂丝徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 25" stroke="#6B4E2F" stroke-width="5"/><ellipse cx="50" cy="20" rx="25" ry="12" fill="#5A8B55"/><g stroke="#4A7B45" stroke-width="1.5" fill="none"><path d="M30 25 Q28 50 25 80"/><path d="M38 28 Q36 55 34 85"/><path d="M50 30 Q50 55 50 88"/><path d="M62 28 Q64 55 66 85"/><path d="M70 25 Q72 50 75 80"/></g></svg>',
    position: { lng: 121.5290, lat: 31.2705 },
    detailedIntro:
      "柳树是杨柳科柳属的落叶乔木,枝条细长柔软、自然下垂,叶片条状披针形,是江南水乡最具代表性的滨水树种。花期3至4月,先花后叶,柔荑花序在早春随风轻摆。柳树喜水湿,常生于河畔湖滨,枝条垂入水面,倒影成趣,自古便是园林造景的经典元素。复兴岛公园三面环水,沿河柳树成荫,是观赏垂柳映水的绝佳去处。",
    habitat: "喜水湿,耐涝,常生于河畔湖滨,对土壤要求不严,生长迅速但寿命较短。",
    uses: "重要的滨水绿化和护岸树种,枝条可编筐,树皮可入药,也是园林造景的经典植物。",
    culturalNote: "\u201C昔我往矣,杨柳依依\u201D,柳树在《诗经》中已入诗,因\u201C柳\u201D谐音\u201C留\u201D,常作送别寄思之物。",
  },
  {
    id: "fp-oleander",
    parkId: "fuxing-park",
    name: "夹竹桃",
    scientificName: "Nerium oleander",
    clues: [
      {
        id: "fp-oleander-clue-1",
        type: "flower",
        text: "夏天开出粉红色的小花,像一个个小喇叭。",
      },
      {
        id: "fp-oleander-clue-2",
        type: "leaf",
        text: "叶子又长又窄,像柳树的叶子但更硬。",
      },
      {
        id: "fp-oleander-clue-3",
        type: "description",
        text: "它很厉害,能抵抗有害气体,但全株有毒,不能碰。",
      },
    ],
    knowledge:
      "夹竹桃是夹竹桃科夹竹桃属常绿灌木。叶革质,条状披针形。花期6-10月,花红或粉白,单瓣或重瓣。全株含强心苷,有剧毒,但抗污染能力极强,是优良的工矿绿化树种。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "夹竹桃虽然全株有毒,但它的叶子能吸收有害气体,是城市的\u201C空气净化器\u201D。",
    nextObserve: "数一数一朵夹竹桃的花有几个花瓣,看看是不是5片。",
    isSeasonal: true,
    seasonMonths: [6, 7, 8],
    unlockReward: "解锁了夹竹桃的粉喇叭徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 40" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="35" cy="50" rx="10" ry="4" transform="rotate(-20 35 50)"/><ellipse cx="65" cy="50" rx="10" ry="4" transform="rotate(20 65 50)"/><ellipse cx="50" cy="38" rx="8" ry="4"/></g><g fill="#E85A8A" stroke="#C44070" stroke-width="0.5"><circle cx="38" cy="35" r="5"/><circle cx="62" cy="35" r="5"/><circle cx="50" cy="25" r="6"/><circle cx="45" cy="42" r="4"/><circle cx="55" cy="42" r="4"/></g><g fill="#F5C542"><circle cx="38" cy="35" r="1.5"/><circle cx="62" cy="35" r="1.5"/><circle cx="50" cy="25" r="1.5"/></g></svg>',
    position: { lng: 121.5310, lat: 31.2690 },
    detailedIntro:
      "夹竹桃是夹竹桃科夹竹桃属的常绿灌木,原产地中海地区。叶片革质、条状披针形,形似柳叶而更厚硬。花期6至10月,花朵粉红或白色,单瓣或重瓣,形如小喇叭,簇生枝顶。夹竹桃全株含强心苷类物质,有剧毒,但其抗污染、抗烟尘能力极强,能吸收二氧化硫等有害气体,是工矿区和道路绿化的优选树种。复兴岛公园沿河夹竹桃成片,夏秋花开不断,花影映水,格外动人。",
    habitat: "喜温暖湿润、阳光充足环境,耐旱耐湿,抗污染极强,对土壤要求不严。",
    uses: "优良的抗污染绿化树种,常用于工矿、道路和滨水绿化;全株可入药但有毒,须谨慎使用。",
    culturalNote: "夹竹桃因叶似竹、花似桃而得名,虽美丽却有毒,常被赋予\u201C危险的美\u201D之寓意。",
  },
  {
    id: "fp-reed",
    parkId: "fuxing-park",
    name: "芦苇",
    scientificName: "Phragmites australis",
    clues: [
      {
        id: "fp-reed-clue-1",
        type: "leaf",
        text: "叶子又长又窄,像一条条绿色的丝带。",
      },
      {
        id: "fp-reed-clue-2",
        type: "description",
        text: "秋天顶端抽出毛茸茸的花穗,风一吹就摇摆。",
      },
      {
        id: "fp-reed-clue-3",
        type: "bark",
        text: "茎是空心的,一节一节的,像小竹子。",
      },
    ],
    knowledge:
      "芦苇是禾本科芦苇属多年生高大草本,常生于水边湿地。茎直立,中空,具节。叶鞘抱茎,叶片条形。圆锥花序顶生,秋季成熟后呈灰白色絮状。根状茎发达,有固土护岸作用。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "芦苇的茎是空心的,风一吹就会沙沙响,像大自然的小风铃。",
    nextObserve: "听一听风吹过芦苇丛的声音,是不是沙沙的。",
    isSeasonal: false,
    unlockReward: "解锁了芦苇的毛绒风铃徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="92" rx="42" ry="5" fill="#A8C8D8" opacity="0.5"/><path d="M35 92 L35 30" stroke="#7C9885" stroke-width="2"/><path d="M50 92 L50 20" stroke="#7C9885" stroke-width="2"/><path d="M65 92 L65 35" stroke="#7C9885" stroke-width="2"/><g fill="#B8A878"><ellipse cx="35" cy="25" rx="4" ry="10"/><ellipse cx="50" cy="15" rx="5" ry="12"/><ellipse cx="65" cy="30" rx="4" ry="10"/></g><g stroke="#5B8C5A" stroke-width="1.5" fill="none"><path d="M35 50 Q30 45 28 40"/><path d="M50 45 Q45 40 43 35"/><path d="M65 55 Q70 50 72 45"/></g></svg>',
    position: { lng: 121.5300, lat: 31.2710 },
    detailedIntro:
      "芦苇是禾本科芦苇属的多年生高大草本,常成片生长于湖泊、河岸与湿地边缘。茎秆直立中空,具明显的节,可高达2至3米。叶片条形,边缘锐利;秋季顶端抽出大型圆锥花序,成熟后呈灰白絮状,随风摇曳如浪。芦苇根系发达,有固土护岸、净化水质的生态作用,也是水鸟栖息的重要生境。复兴岛公园四面环水,河岸芦苇丛生,是观察水生生态的绝佳去处。",
    habitat: "典型的湿生植物,喜水湿,常生于湖畔河岸、沼泽湿地,根状茎发达,蔓延迅速。",
    uses: "湿地生态修复与护岸植物;茎秆可编席造纸,花序可作扫帚,亦是水鸟重要栖息生境。",
    culturalNote: "\u201C蒹葭苍苍,白露为霜\u201D,芦苇自古入诗,在《诗经》中即为寄托思慕与怅惘的经典意象。",
  },
  {
    id: "fp-metasequoia",
    parkId: "fuxing-park",
    name: "水杉",
    scientificName: "Metasequoia glyptostroboides",
    clues: [
      {
        id: "fp-metasequoia-clue-1",
        type: "leaf",
        text: "叶子细细的,像一排排小羽毛贴在枝条上。",
      },
      {
        id: "fp-metasequoia-clue-2",
        type: "bark",
        text: "树干笔直,树皮红褐色,会一条条剥落。",
      },
      {
        id: "fp-metasequoia-clue-3",
        type: "description",
        text: "它喜欢长在水边,秋天叶子变成漂亮的铁锈红。",
      },
    ],
    knowledge:
      "水杉是柏科水杉属落叶乔木,中国特有孑遗植物,被誉为\u201C活化石\u201D。叶对生,条形,扁平,秋叶红褐色。喜湿润,常生于水边。1941年在中国被重新发现,引起植物学界轰动。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "水杉曾经只在化石里被发现,后来在中国被找到活的,让全世界惊喜。",
    nextObserve: "看看它的叶子是不是两两相对,像小梳子一样整齐。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了水杉的羽毛叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 20" stroke="#8B5A3C" stroke-width="4"/><g fill="#C46A3C"><ellipse cx="50" cy="18" rx="8" ry="6"/><ellipse cx="38" cy="35" rx="10" ry="5"/><ellipse cx="62" cy="35" rx="10" ry="5"/><ellipse cx="35" cy="55" rx="12" ry="5"/><ellipse cx="65" cy="55" rx="12" ry="5"/></g></svg>',
    position: { lng: 121.5285, lat: 31.2695 },
    detailedIntro:
      "水杉是柏科水杉属的落叶乔木,为中国特有的孑遗植物,被誉为\u201C活化石\u201D。它曾一度仅见于化石记录,1941年在四川万县被重新发现活体植株,轰动了全球植物学界。叶片对生、条形扁平,秋季转为铁锈红色,格外绚丽。水杉喜生于水边湿地,常成片种植形成壮美的杉林景观。复兴岛公园四面环水,水杉临水而立,秋日红叶映水,格外动人。",
    habitat: "喜温暖湿润,耐水湿,常生于水边河畔,适宜深厚肥沃的微酸性土壤。",
    uses: "优秀的滨水绿化和风景林树种,秋叶红褐绚丽;也是珍贵的孑遗植物,具重要科研价值。",
    culturalNote: "水杉被誉为植物界\u201C活化石\u201D,是中国植物学重大发现之一,曾作为国礼赠送外国,象征友谊与珍稀。",
  },
  {
    id: "fp-cherry",
    parkId: "fuxing-park",
    name: "樱花",
    scientificName: "Prunus serrulata",
    clues: [
      {
        id: "fp-cherry-clue-1",
        type: "flower",
        text: "春天里它开出粉白色的小花,一簇簇的像云朵。",
      },
      {
        id: "fp-cherry-clue-2",
        type: "leaf",
        text: "叶子边缘有小锯齿,形状像小椭圆。",
      },
      {
        id: "fp-cherry-clue-3",
        type: "description",
        text: "风一吹,花瓣就纷纷扬扬落下来,像粉色的雪。",
      },
    ],
    knowledge:
      "樱花是蔷薇科李属的落叶乔木,花期短暂,通常在3-4月盛开。花单瓣或重瓣,颜色从白到深粉。花瓣先端有缺刻,是辨认樱花的特征之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "樱花花瓣的尖端有个小缺口,就像被咬了一小口,这是它的小秘密。",
    nextObserve: "数一数一朵樱花有几片花瓣,大多数是5片哦。",
    isSeasonal: true,
    seasonMonths: [3, 4],
    unlockReward: "解锁了樱花的粉色花瓣徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#8B6F47" stroke-width="4"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="35" cy="30" r="8"/><circle cx="65" cy="30" r="8"/><circle cx="50" cy="20" r="9"/></g><g fill="#FFE4A1"><circle cx="50" cy="32" r="3"/></g></svg>',
    position: { lng: 121.5295, lat: 31.2688 },
    detailedIntro:
      "樱花是蔷薇科李属的落叶乔木,花期短暂而绚烂,通常在3至4月间盛开。花朵单瓣或重瓣,颜色从纯白到深粉,花瓣先端有缺刻,是辨认樱花的重要特征。盛开时满树繁花如云似霞,微风拂过花瓣纷飞,形成浪漫的花雨景观。复兴岛公园的樱花在春日临水绽放,花影映水,是江岛赏樱的佳处。",
    habitat: "喜阳光充足、温暖湿润的环境,要求排水良好的微酸性土壤。",
    uses: "春季重要的观花树种,常成片种植形成花海景观,也是城市公园和滨水绿地的优选树种。",
    culturalNote: "樱花象征春日与美好,花期短暂常被赋予惜春的文化意涵,赏樱是深受喜爱的春日习俗。",
  },
  {
    id: "fp-jasmine",
    parkId: "fuxing-park",
    name: "迎春花",
    scientificName: "Jasminum nudiflorum",
    clues: [
      {
        id: "fp-jasmine-clue-1",
        type: "flower",
        text: "早春枝条上就开满小黄花,像一串串金色的小喇叭。",
      },
      {
        id: "fp-jasmine-clue-2",
        type: "description",
        text: "花先开,叶子后长,开花时枝条光秃秃的。",
      },
      {
        id: "fp-jasmine-clue-3",
        type: "bark",
        text: "枝条细细长长,绿色,弯弯地垂下来。",
      },
    ],
    knowledge:
      "迎春花是木犀科素馨属落叶灌木。花期2-3月,先花后叶,花黄色,单生叶腋。枝条细长拱形下垂。因早春开放,故名\u201C迎春\u201D,是春季最早开放的花木之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "迎春花是春天最早开的花之一,它一开,就知道春天真的来了。",
    nextObserve: "看看它的枝条是不是绿色的,花是不是像小喇叭。",
    isSeasonal: true,
    seasonMonths: [2, 3],
    unlockReward: "解锁了迎春花的金色小喇叭徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 Q48 60 45 30" stroke="#5A8B55" stroke-width="3" fill="none"/><path d="M50 90 Q52 60 55 30" stroke="#5A8B55" stroke-width="3" fill="none"/><g fill="#F5C542" stroke="#C49A2A" stroke-width="0.5"><ellipse cx="45" cy="30" rx="5" ry="4"/><ellipse cx="55" cy="30" rx="5" ry="4"/><ellipse cx="40" cy="45" rx="5" ry="4"/><ellipse cx="60" cy="45" rx="5" ry="4"/><ellipse cx="48" cy="55" rx="5" ry="4"/></g></svg>',
    position: { lng: 121.5315, lat: 31.2708 },
    detailedIntro:
      "迎春花是木犀科素馨属的落叶灌木,原产中国。枝条细长,呈拱形下垂,翠绿可人。花期2至3月,先花后叶,花黄色、单生叶腋,形如小喇叭,是春季最早开放的花木之一,故名\u201C迎春\u201D。迎春花开放时枝条光秃,金黄花朵密缀枝头,宣告春的到来。复兴岛公园临水的迎春花在早春率先绽放,金黄映水,是寻春的绝佳去处。",
    habitat: "喜温暖湿润、阳光充足环境,耐寒耐旱,对土壤要求不严,适应性强。",
    uses: "重要的早春观花灌木,常用于护坡、路边和滨水绿化;枝条下垂,也是盆景的好材料。",
    culturalNote: "迎春花因早春率先开放而得名,象征春回大地、万物复苏,深受人们喜爱。",
  },
  {
    id: "fp-acorus",
    parkId: "fuxing-park",
    name: "菖蒲",
    scientificName: "Acorus calamus",
    clues: [
      {
        id: "fp-acorus-clue-1",
        type: "leaf",
        text: "叶子又扁又长,像一把把绿色的剑竖在水边。",
      },
      {
        id: "fp-acorus-clue-2",
        type: "description",
        text: "它长在水边或浅水里,根茎横着在泥里爬。",
      },
      {
        id: "fp-acorus-clue-3",
        type: "bark",
        text: "揉一揉叶子,会闻到一股特别的清香。",
      },
    ],
    knowledge:
      "菖蒲是天南星科菖蒲属多年生湿生草本。叶剑形,中脉明显,揉之有香气。肉穗花序圆柱形。常生于水边湿地,根茎横走。是中国传统文化中的\u201C花草四雅\u201D之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "端午节时,人们会把菖蒲和艾草挂在门口,据说可以驱邪避虫。",
    nextObserve: "揉一揉它的叶子,闻闻是不是有一股清香。",
    isSeasonal: false,
    unlockReward: "解锁了菖蒲的水边青剑徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="92" rx="42" ry="5" fill="#A8C8D8" opacity="0.5"/><g stroke="#5A8B55" stroke-width="3" fill="none"><path d="M30 92 L25 20"/><path d="M40 92 L38 15"/><path d="M50 92 L50 10"/><path d="M60 92 L62 15"/><path d="M70 92 L75 20"/></g><g fill="#B8A878"><ellipse cx="50" cy="12" rx="3" ry="6" fill="#5A8B55"/></g></svg>',
    position: { lng: 121.5280, lat: 31.2712 },
    detailedIntro:
      "菖蒲是天南星科菖蒲属的多年生湿生草本,常成片生长于水边、沼泽与浅水之中。叶片剑形、中脉明显,挺拔如剑,揉之有清香。肉穗花序圆柱形,黄绿色。根茎横走,有固土护岸的生态作用。菖蒲是中国传统文化中\u201C花草四雅\u201D之一,端午时节常与艾草同悬门楣,以驱邪避疫。复兴岛公园水边菖蒲丛生,是观察水生植物的佳处。",
    habitat: "典型的湿生植物,喜水湿,常生于河岸湖滨、沼泽浅水,根茎横走,蔓延迅速。",
    uses: "湿地生态修复与护岸植物;根茎可入药,叶可制香,亦是端午民俗的重要植物。",
    culturalNote: "菖蒲是传统\u201C花草四雅\u201D之一,端午节悬菖蒲于门楣以驱邪避疫,是重要的民俗植物。",
  },
  {
    id: "fx-crape-myrtle",
    parkId: "fuxing-park",
    name: "紫薇",
    scientificName: "Lagerstroemia indica",
    clues: [
      {
        id: "fx-crape-myrtle-clue-1",
        type: "bark",
        text: "树皮光滑,摸起来像滑梯,掉了皮露出新皮。",
      },
      {
        id: "fx-crape-myrtle-clue-2",
        type: "flower",
        text: "夏天开一大团紫红色的花,花瓣皱皱的。",
      },
      {
        id: "fx-crape-myrtle-clue-3",
        type: "description",
        text: "轻轻挠挠树干,枝头的小叶子会抖起来,所以叫“痒痒树”。",
      },
    ],
    knowledge:
      "紫薇是千屈菜科紫薇属落叶灌木或小乔木。树皮光滑,叶对生。花期7-9月,花色有紫红、粉、白等,花瓣皱缩如褶边。因树皮光滑,轻挠树干枝叶微颤,俗称“痒痒树”。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫薇又叫“痒痒树”,挠挠它的树干,叶子会抖动!",
    nextObserve: "试试轻轻挠挠紫薇的树干,看看叶子会不会抖。",
    isSeasonal: true,
    seasonMonths: [7, 8, 9],
    unlockReward: "解锁了紫薇的痒痒皱花徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 95 L50 50" stroke="#8E7B6B" stroke-width="5"/><g fill="#3A6B35"><ellipse cx="38" cy="60" rx="9" ry="4" transform="rotate(-20 38 60)"/><ellipse cx="62" cy="60" rx="9" ry="4" transform="rotate(20 62 60)"/></g><g fill="#C490D8" stroke="#A070B8" stroke-width="0.5"><circle cx="40" cy="35" r="8"/><circle cx="60" cy="35" r="8"/><circle cx="50" cy="22" r="9"/></g><g fill="#F5C542"><circle cx="40" cy="35" r="2"/><circle cx="60" cy="35" r="2"/><circle cx="50" cy="22" r="2"/></g></svg>',
    position: { lng: 121.5300, lat: 31.2700 },
    detailedIntro:
      "紫薇是千屈菜科紫薇属的落叶灌木或小乔木,原产中国,栽培历史悠久。树皮光滑,每年自然脱落,新老交替。叶对生,椭圆形。花期7-9月,顶生圆锥花序,花色有紫红、粉红、白等,花瓣皱缩如褶边,花蕊细长。因树皮光滑,轻挠树干则枝叶微颤,俗称“痒痒树”。紫薇花期长达百日,又称“百日红”。复兴岛公园内紫薇夏秋花开不辍,是赏夏花的优良树种。",
    habitat: "喜光,耐寒耐旱,对土壤要求不严,耐修剪,适应性强,生长较慢。",
    uses: "优良的夏秋花木,常用于庭院和公园;木材坚硬,可制小型器具;根叶可入药。",
    culturalNote: "紫薇在中国栽培历史悠久,因花期长达百日而称“百日红”,唐宋诗人多有吟咏。",
  },
  {
    id: "fx-pomegranate",
    parkId: "fuxing-park",
    name: "石榴",
    scientificName: "Punica granatum",
    clues: [
      {
        id: "fx-pomegranate-clue-1",
        type: "flower",
        text: "夏天开红红的花,像小喇叭一样,花瓣皱皱的。",
      },
      {
        id: "fx-pomegranate-clue-2",
        type: "description",
        text: "花谢后结出圆圆的果子,秋天果皮裂开会露出红宝石。",
      },
      {
        id: "fx-pomegranate-clue-3",
        type: "leaf",
        text: "叶子小小的,长椭圆形,对生在枝条上。",
      },
    ],
    knowledge:
      "石榴是千屈菜科石榴属落叶灌木或小乔木。叶对生,长椭圆形。花期5-7月,花红色,钟形,花瓣皱缩。果近球形,秋季成熟,果皮裂开露出红色多汁的种子。原产中亚,中国栽培历史悠久。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "石榴果里藏着一颗颗红宝石一样的种子,一颗就是一颗小小的种子。",
    nextObserve: "看看石榴花是不是红红的像小喇叭,再找找有没有圆圆的小果子。",
    isSeasonal: true,
    seasonMonths: [6, 7, 8],
    unlockReward: "解锁了石榴的红宝石果徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 95 L50 50" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="40" cy="58" rx="8" ry="4"/><ellipse cx="60" cy="58" rx="8" ry="4"/></g><g fill="#E84545" stroke="#C03030" stroke-width="0.5"><circle cx="42" cy="35" r="7"/><circle cx="58" cy="35" r="7"/><circle cx="50" cy="25" r="8"/></g><g fill="#F5C542"><circle cx="42" cy="35" r="1.5"/><circle cx="58" cy="35" r="1.5"/><circle cx="50" cy="25" r="1.5"/></g></svg>',
    position: { lng: 121.5295, lat: 31.2695 },
    detailedIntro:
      "石榴是千屈菜科石榴属的落叶灌木或小乔木,原产中亚,中国栽培历史逾两千年。叶对生,长椭圆形,新叶嫩红。花期5-7月,花红色或橙红,钟形,花瓣皱缩如褶边。花谢后结出近球形浆果,秋季成熟,果皮变为黄红色,自然裂开露出晶莹红色种子,多汁可食。石榴在中国传统文化中象征多子多福。复兴岛公园内石榴夏花红艳,秋果累累,可观可赏。",
    habitat: "喜温暖,耐旱,喜光,适宜肥沃排水良好的土壤,适应性强,寿命长。",
    uses: "花果兼赏的优良树种,常用于庭院和公园;果实可食用,果皮和根皮可入药。",
    culturalNote: "石榴在中国象征多子多福,“榴开百子”是传统吉祥图案,常入诗词与画。",
  },
  {
    id: "fx-water-lily",
    parkId: "fuxing-park",
    name: "睡莲",
    scientificName: "Nymphaea tetragona",
    clues: [
      {
        id: "fx-water-lily-clue-1",
        type: "leaf",
        text: "叶子圆圆的飘在水面上,像一个个绿色的小盘子。",
      },
      {
        id: "fx-water-lily-clue-2",
        type: "flower",
        text: "花浮在水面上,白天开晚上合,像在睡觉。",
      },
      {
        id: "fx-water-lily-clue-3",
        type: "description",
        text: "整株都长在水里,根扎在池塘底部的泥里。",
      },
    ],
    knowledge:
      "睡莲是睡莲科睡莲属多年生水生草本。叶浮于水面,圆形,有缺口。花浮于水面,昼开夜合,花色有白、粉、黄、红等。根茎生于水底泥中。是著名的水生观赏植物。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "睡莲真的会“睡觉”,白天开花,到了晚上就把花瓣合起来。",
    nextObserve: "白天来看看睡莲开着,晚上再来看看是不是合上了。",
    isSeasonal: true,
    seasonMonths: [6, 7, 8, 9],
    unlockReward: "解锁了睡莲的水面浮梦徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="90" rx="45" ry="6" fill="#A8C8D8" opacity="0.5"/><g fill="#3A8B55"><ellipse cx="35" cy="75" rx="14" ry="6" transform="rotate(-10 35 75)"/><ellipse cx="65" cy="75" rx="14" ry="6" transform="rotate(10 65 75)"/></g><g fill="#FFF" stroke="#F8B4C0" stroke-width="0.5"><ellipse cx="50" cy="50" rx="7" ry="14"/><ellipse cx="44" cy="50" rx="5" ry="12" transform="rotate(-25 44 50)"/><ellipse cx="56" cy="50" rx="5" ry="12" transform="rotate(25 56 50)"/></g><circle cx="50" cy="50" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.5285, lat: 31.2705 },
    detailedIntro:
      "睡莲是睡莲科睡莲属的多年生水生草本,广泛分布于温带和热带地区。叶浮于水面,近圆形,基部有V形缺口,表面深绿。花浮于水面之上,昼开夜合,花色有白、粉、黄、红、紫等,花瓣多层排列。根茎粗壮,生于水底泥中。睡莲是著名的水生观赏植物,有“水中女神”之美誉。复兴岛公园水塘内睡莲夏秋绽放,碧叶浮波,红花映水,是赏水生植物的佳处。",
    habitat: "典型的水生植物,生于池塘湖泊浅水区,根茎生于泥中,喜阳光充足,静水环境。",
    uses: "重要的水生观赏植物,常用于水景园和池塘绿化;根茎可食用,花可制香精。",
    culturalNote: "睡莲在东西方文化中均受喜爱,莫奈的睡莲画举世闻名,被誉为“水中女神”。",
  },
  {
    id: "fx-hydrangea",
    parkId: "fuxing-park",
    name: "八仙花",
    scientificName: "Hydrangea macrophylla",
    clues: [
      {
        id: "fx-hydrangea-clue-1",
        type: "flower",
        text: "一大团花球,小花一朵挨着一朵,颜色蓝蓝粉粉的。",
      },
      {
        id: "fx-hydrangea-clue-2",
        type: "leaf",
        text: "叶子大大的,边缘有锯齿,对着长在枝上。",
      },
      {
        id: "fx-hydrangea-clue-3",
        type: "description",
        text: "花的颜色会变,有的蓝有的粉,跟土里酸碱有关。",
      },
    ],
    knowledge:
      "八仙花是绣球花科绣球属落叶灌木。叶对生,大而厚。花期6-8月,花球状,由众多小花组成。花色随土壤酸碱度变化,酸性偏蓝,碱性偏粉。是优良的夏季观花植物。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "八仙花的颜色会变魔术,土酸变蓝,土碱变粉,是天然的酸碱指示剂。",
    nextObserve: "看看八仙花球是不是蓝蓝粉粉的,数数一个小花球上有多少小花。",
    isSeasonal: true,
    seasonMonths: [6, 7, 8],
    unlockReward: "解锁了八仙花的变色花球徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 95 L50 60" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="38" cy="70" rx="12" ry="6" transform="rotate(-15 38 70)"/><ellipse cx="62" cy="70" rx="12" ry="6" transform="rotate(15 62 70)"/></g><g fill="#7DA8E8" stroke="#5A88C8" stroke-width="0.5"><circle cx="40" cy="35" r="6"/><circle cx="60" cy="35" r="6"/><circle cx="50" cy="25" r="7"/><circle cx="44" cy="45" r="5"/><circle cx="56" cy="45" r="5"/></g><g fill="#C8A0E8" stroke="#A070B8" stroke-width="0.5"><circle cx="45" cy="30" r="3"/><circle cx="55" cy="38" r="3"/></g></svg>',
    position: { lng: 121.5310, lat: 31.2690 },
    detailedIntro:
      "八仙花是绣球花科绣球属的落叶灌木,又称绣球花,原产中国和日本。叶对生,大而厚,椭圆形。花期6-8月,顶生伞房状聚伞花序,呈球状,由众多小花密集组成,花色有蓝、紫、粉、白等。最特别的是花色随土壤酸碱度变化,酸性土偏蓝,碱性土偏粉,是天然的酸碱指示剂。八仙花是夏季重要的观花植物。复兴岛公园内八仙花夏初盛开,花球满枝,蓝粉交织,是赏夏花的佳处。",
    habitat: "喜温暖半阴环境,忌烈日,喜肥沃排水良好的酸性土壤,花色随酸碱度变化。",
    uses: "优良的夏季观花植物,常用于庭院和公园;可盆栽观赏,也是切花材料。",
    culturalNote: "八仙花在中国栽培历史悠久,因花如绣球而得名,“八仙”之名寓意花团锦簇。",
  },
];

const fuxingParkBuddy: Buddy = {
  id: "fp-buddy-daodao",
  parkId: "fuxing-park",
  name: "岛岛",
  intro: "黄浦江里冒出的一滴小水珠精,住在复兴岛边的芦苇丛里,喜欢跟着潮水来来回回。",
  silhouetteSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 25 Q68 28 65 50 Q60 68 50 65 Q40 68 35 50 Q32 28 50 25 Z" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 22 Q70 25 67 50 Q62 70 50 66 Q38 70 33 50 Q30 25 50 22 Z" fill="#5B7C99"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 20 Q72 23 68 50 Q63 72 50 68 Q37 72 32 50 Q28 23 50 20 Z" fill="#5B7C99" stroke="#3A5468" stroke-width="2"/><circle cx="44" cy="42" r="3.5" fill="#FFF"/><circle cx="44" cy="43" r="1.8" fill="#2B2B2B"/><circle cx="56" cy="42" r="3.5" fill="#FFF"/><circle cx="56" cy="43" r="1.8" fill="#2B2B2B"/><path d="M45 50 Q50 54 55 50" stroke="#3A5468" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="40" cy="48" r="2" fill="#F8B4C0" opacity="0.7"/><circle cx="60" cy="48" r="2" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 2 },
};

// ===========================================================================
// Jiangpu Park — Plants and Buddy
// ===========================================================================

const jiangpuParkPlants: PlantDiscovery[] = [
  {
    id: "jp-osmanthus",
    parkId: "jiangpu-park",
    name: "桂花",
    scientificName: "Osmanthus fragrans",
    clues: [
      {
        id: "jp-osmanthus-clue-1",
        type: "flower",
        text: "秋天还没见到它,就先闻到了甜甜的香气。",
      },
      {
        id: "jp-osmanthus-clue-2",
        type: "leaf",
        text: "叶子硬硬的,边缘有小小的刺状锯齿。",
      },
      {
        id: "jp-osmanthus-clue-3",
        type: "description",
        text: "花小小的,有金黄也有淡黄,藏在叶子中间。",
      },
    ],
    knowledge:
      "桂花是木犀科木犀属常绿乔木,原产中国。叶革质,椭圆形,边缘常有锯齿。花期9-10月,花簇生叶腋,极香。品种分金桂、银桂、丹桂、四季桂等。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "桂花的花朵小得像米粒,但香气能飘到几十米远,是\u201C看不见的香\u201D。",
    nextObserve: "凑近闻一闻,看看是不是真的很甜,再找找金黄的小花藏在哪里。",
    isSeasonal: true,
    seasonMonths: [9, 10],
    unlockReward: "解锁了桂花的甜蜜香囊徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 40" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="35" cy="42" rx="10" ry="5" transform="rotate(-20 35 42)"/><ellipse cx="65" cy="42" rx="10" ry="5" transform="rotate(20 65 42)"/><ellipse cx="50" cy="32" rx="9" ry="5"/></g><g fill="#F5C542"><circle cx="40" cy="38" r="2"/><circle cx="46" cy="35" r="2"/><circle cx="55" cy="38" r="2"/><circle cx="60" cy="35" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5170, lat: 31.2885 },
    detailedIntro:
      "桂花是中国传统十大名花之一,已有2500余年栽培历史。它的花朵虽小如米粒,但芳香浓郁,秋日盛开时满园飘香。桂花分为金桂、银桂、丹桂和四季桂四大类群,花色从淡黄到橙红不等。除了观赏,桂花还可制作桂花糕、桂花酒和桂花茶,是深受喜爱的香花植物。江浦公园内桂花树散植各处,秋日行园,香气随人。",
    habitat: "喜温暖湿润、阳光充足的环境,耐半阴,要求排水良好的微酸性土壤。",
    uses: "重要的香花树种,花可窨制花茶、酿造桂花酒、制作糕点;也是优良的庭院和行道绿化树种。",
    culturalNote: "桂花在我国栽培历史悠久,\u201C蟾宫折桂\u201D以桂喻科举登第,象征荣誉与吉祥。",
  },
  {
    id: "jp-ginkgo",
    parkId: "jiangpu-park",
    name: "银杏",
    scientificName: "Ginkgo biloba",
    clues: [
      {
        id: "jp-ginkgo-clue-1",
        type: "leaf",
        text: "它的叶子像一把小扇子,秋天会变成金黄色。",
      },
      {
        id: "jp-ginkgo-clue-2",
        type: "bark",
        text: "树皮灰褐色,纵向裂开,像老人的皱纹。",
      },
      {
        id: "jp-ginkgo-clue-3",
        type: "description",
        text: "它是活化石,在地球上已经生活了上亿年。",
      },
    ],
    knowledge:
      "银杏是裸子植物银杏科银杏属的唯一现存物种,被誉为\u201C活化石\u201D。其叶片呈扇形,叶脉平行,秋季变为金黄。雌雄异株,种子俗称白果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "银杏的叶子其实不是一片,而是许多裂片拼成的扇形,像小扇子一样。",
    nextObserve: "秋天再来一次,看看满地金黄的扇形落叶。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了银杏的金色叶子徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 Q48 60 45 45" stroke="#8B6F47" stroke-width="4" fill="none"/><path d="M50 90 Q52 60 55 45" stroke="#8B6F47" stroke-width="3" fill="none"/><g fill="#F5C542" stroke="#C49A2A" stroke-width="1"><path d="M42 40 Q37 35 39 27 Q47 30 49 38 Z"/><path d="M58 40 Q63 35 61 27 Q53 30 51 38 Z"/><path d="M50 38 Q45 30 50 22 Q55 30 50 38 Z"/></g><circle cx="50" cy="37" r="2" fill="#8B6F47"/></svg>',
    position: { lng: 121.5190, lat: 31.2875 },
    detailedIntro:
      "银杏是现存最古老的种子植物之一,历史可追溯至2.7亿年前。它的扇形叶片在秋季变为金黄色,是上海秋季最具代表性的景观树种。银杏雌雄异株,雄株高大挺拔,雌株秋季结出白果。作为行道树和公园树种,银杏寿命极长,常被赋予长寿和坚韧的寓意。江浦公园内的银杏在深秋金黄耀眼,落叶铺地如毯。",
    habitat: "喜光,耐寒耐旱,对土壤适应性强,生长缓慢但寿命极长。",
    uses: "优良的行道树和庭院树种,秋季金黄落叶景观绝佳;种子(白果)可食用和入药。",
    culturalNote: "银杏被誉为\u201C活化石\u201D,在中国常种植于古刹名寺,象征长寿与坚韧。",
  },
  {
    id: "jp-camellia",
    parkId: "jiangpu-park",
    name: "茶花",
    scientificName: "Camellia japonica",
    clues: [
      {
        id: "jp-camellia-clue-1",
        type: "flower",
        text: "冬天和早春开出大红的花,花瓣一层叠一层。",
      },
      {
        id: "jp-camellia-clue-2",
        type: "leaf",
        text: "叶子又硬又亮,边缘有小刺,像小锯子。",
      },
      {
        id: "jp-camellia-clue-3",
        type: "description",
        text: "花朵凋谢时,是整朵掉下来的,不是一片片散落。",
      },
    ],
    knowledge:
      "茶花是山茶科山茶属常绿灌木或小乔木。叶革质,互生,边缘有细锯齿。花期11月至翌年4月,花单瓣或重瓣,颜色丰富。原产中国,栽培历史悠久,是中国传统名花。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "茶花凋谢时整朵掉落,古人觉得它很有骨气,所以又叫\u201C断头花\u201D。",
    nextObserve: "看看地上的茶花是不是整朵的,再数数有几层花瓣。",
    isSeasonal: true,
    seasonMonths: [12, 1, 2, 3],
    unlockReward: "解锁了茶花的红绸徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 45" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="35" cy="50" rx="10" ry="5"/><ellipse cx="65" cy="50" rx="10" ry="5"/><ellipse cx="50" cy="42" rx="8" ry="4"/></g><g fill="#E84050" stroke="#B83040" stroke-width="0.5"><circle cx="38" cy="38" r="8"/><circle cx="62" cy="38" r="8"/><circle cx="50" cy="28" r="9"/></g><g fill="#F5C542"><circle cx="38" cy="38" r="2"/><circle cx="62" cy="38" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5180, lat: 31.2890 },
    detailedIntro:
      "茶花是山茶科山茶属的常绿灌木或小乔木,原产中国,栽培历史已逾千年。叶片革质,油绿发亮,边缘具细锯齿。花期11月至翌年4月,从隆冬开到初春,花朵单瓣或重瓣,色彩从大红到粉白,艳而不俗。最特别的是,茶花凋谢时整朵脱落,而非花瓣片片飘散,古人视为坚贞有骨气的象征。江浦公园的茶花在冬日凌寒绽放,是冬春寻芳的重要看点。",
    habitat: "喜温暖湿润、半阴环境,忌烈日直射,要求酸性、肥沃排水良好的土壤。",
    uses: "重要的冬春观花灌木,花型丰富色彩艳丽,常用于庭院、公园和盆栽观赏;种子可榨油。",
    culturalNote: "茶花是中国十大名花之一,古人赞其\u201C艳而不妖、凌寒而开\u201D,象征坚贞与高洁。",
  },
  {
    id: "jp-camphor",
    parkId: "jiangpu-park",
    name: "香樟",
    scientificName: "Cinnamomum camphora",
    clues: [
      {
        id: "jp-camphor-clue-1",
        type: "leaf",
        text: "叶子揉一揉,会有一股清凉的樟脑香。",
      },
      {
        id: "jp-camphor-clue-2",
        type: "bark",
        text: "树皮有不规则的裂纹,像拼图碎片。",
      },
      {
        id: "jp-camphor-clue-3",
        type: "description",
        text: "它长得很高大,树冠圆圆的像一把绿色的大伞。",
      },
    ],
    knowledge:
      "香樟是樟科樟属常绿大乔木,是上海市市树。全株含樟脑香气,叶互生,卵形,叶脉离基三出。木材防虫,常用于制作家具和箱柜。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "香樟是上海的市树,揉一揉它的叶子,手上会留下凉凉的香味。",
    nextObserve: "摘一片叶子揉一揉,闻闻是不是有清凉的味道。",
    isSeasonal: false,
    unlockReward: "解锁了香樟的清凉香气徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 65" stroke="#6B4E2F" stroke-width="5"/><ellipse cx="50" cy="35" rx="35" ry="25" fill="#3A6B35"/><ellipse cx="35" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="65" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="50" cy="28" rx="20" ry="15" fill="#5A8B55"/></svg>',
    position: { lng: 121.5165, lat: 31.2870 },
    detailedIntro:
      "香樟是樟科樟属的常绿大乔木,也是上海市的市树。全株散发独特的樟脑清香,叶片互生、卵形,叶脉呈离基三出。树冠圆整如伞,四季常青,是优秀的遮荫树种。香樟木材含有天然樟脑,防虫耐腐,自古便是制作箱柜、家具的上等材料。江浦公园内香樟成行,为社区游人提供四季常青的休憩空间。",
    habitat: "喜温暖湿润、阳光充足气候,根系发达,对土壤要求不严,寿命长且生长较快。",
    uses: "优良的行道树和庭荫树;木材防虫耐腐,可提取樟脑和樟油,用于医药及工业。",
    culturalNote: "香樟是上海市树,江南一带常以古樟为村落风水树,寓意庇荫与长寿。",
  },
  {
    id: "jp-crape-myrtle",
    parkId: "jiangpu-park",
    name: "紫薇",
    scientificName: "Lagerstroemia indica",
    clues: [
      {
        id: "jp-crape-myrtle-clue-1",
        type: "flower",
        text: "夏天开出皱皱的粉紫色小花,一簇一簇的。",
      },
      {
        id: "jp-crape-myrtle-clue-2",
        type: "bark",
        text: "树皮很光滑,像被剥掉了一样,摸起来凉凉的。",
      },
      {
        id: "jp-crape-myrtle-clue-3",
        type: "description",
        text: "它的花期很长,能开整整一个夏天,又叫\u201C百日红\u201D。",
      },
    ],
    knowledge:
      "紫薇是千屈菜科紫薇属落叶灌木或小乔木。树皮光滑,花玫红或粉红,花瓣皱缩。花期6-9月,长达百日以上,故又称\u201C百日红\u201D。树干光滑,轻搔之全树微动,俗称\u201C怕痒树\u201D。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫薇树干光滑,用手轻轻一挠,整棵树都会痒得发抖,所以叫\u201C怕痒树\u201D。",
    nextObserve: "用手轻轻挠一挠它的树干,看看它会不会\u201C怕痒\u201D。",
    isSeasonal: true,
    seasonMonths: [7, 8, 9],
    unlockReward: "解锁了紫薇的百日红徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="38" cy="50" rx="8" ry="4"/><ellipse cx="62" cy="50" rx="8" ry="4"/></g><g fill="#C490D8" stroke="#A070B8" stroke-width="0.5"><circle cx="35" cy="35" r="7"/><circle cx="65" cy="35" r="7"/><circle cx="50" cy="25" r="8"/></g><g fill="#F5C542"><circle cx="50" cy="25" r="2"/></g></svg>',
    position: { lng: 121.5195, lat: 31.2885 },
    detailedIntro:
      "紫薇是千屈菜科紫薇属的落叶灌木或小乔木,原产中国。它的树皮光滑,呈灰白色,花色从玫红到粉紫不等,花瓣边缘皱缩如褶边,别具特色。花期长达百日以上,从6月持续到9月,故又称\u201C百日红\u201D。最有趣的是,紫薇树干光滑,轻轻搔之全树微动,俗称\u201C怕痒树\u201D,深受孩童喜爱。江浦公园内紫薇夏秋花开不断,是社区夏日赏花的亮点。",
    habitat: "喜温暖湿润、阳光充足环境,耐旱耐寒,对土壤要求不严,半阴亦可生长。",
    uses: "优秀的夏花树种,花期长、花色艳,常用于庭院、道路和公园绿化,也是制作盆景的好材料。",
    culturalNote: "紫薇自古为园林名花,唐宋诗词中多有吟咏,\u201C百日红\u201D之名道出其花期绵长的可贵。",
  },
  {
    id: "jp-wintersweet",
    parkId: "jiangpu-park",
    name: "腊梅",
    scientificName: "Chimonanthus praecox",
    clues: [
      {
        id: "jp-wintersweet-clue-1",
        type: "flower",
        text: "冬天它就开花了,小小的黄花挂在光秃秃的枝条上。",
      },
      {
        id: "jp-wintersweet-clue-2",
        type: "description",
        text: "香气清甜,在冷冷的空气里特别明显。",
      },
      {
        id: "jp-wintersweet-clue-3",
        type: "bark",
        text: "枝条灰褐色,有明显的皮孔,像一个个小点点。",
      },
    ],
    knowledge:
      "腊梅是腊梅科腊梅属落叶灌木。花期12月至翌年2月,花黄色,蜡质,芳香。先花后叶,寒冬开放,故名腊梅。与梅花不同科,仅因同开于严寒而常被相提并论。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "腊梅不是梅花,它俩只是恰好在冬天开花,其实连亲戚都算不上。",
    nextObserve: "闻闻它的香味,再看看花瓣是不是像涂了一层蜡。",
    isSeasonal: true,
    seasonMonths: [12, 1, 2],
    unlockReward: "解锁了腊梅的寒香徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><path d="M50 50 L35 42" stroke="#6B4E2F" stroke-width="2"/><path d="M50 50 L65 42" stroke="#6B4E2F" stroke-width="2"/><g fill="#E8C530" stroke="#C4A020" stroke-width="0.5"><circle cx="35" cy="38" r="6"/><circle cx="65" cy="38" r="6"/><circle cx="50" cy="28" r="7"/></g><g fill="#8B5A2B"><circle cx="35" cy="38" r="2"/><circle cx="65" cy="38" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5175, lat: 31.2865 },
    detailedIntro:
      "腊梅是腊梅科腊梅属的落叶灌木,原产中国。与梅花虽同开于严冬,却并非同科植物,只是因花时相近而得名\u201C腊梅\u201D。花期12月至翌年2月,先花后叶,花黄色、蜡质,芳香清冽,在寒风中格外醒目。腊梅花被片外轮蜡黄、内轮带紫条纹,花瓣触感如蜡,是其独特之处。江浦公园的腊梅在隆冬凌寒怒放,暗香浮动,是冬日寻芳的好去处。",
    habitat: "喜光耐寒,耐旱忌涝,适宜肥沃排水良好的微酸性土壤,适应性强。",
    uses: "冬季重要香花灌木,孤植或丛植于庭院、公园,也是制作盆景和切花的优良材料。",
    culturalNote: "腊梅凌寒而开,常被喻为坚贞不屈的象征,与梅、竹、菊并称\u201C冬日四友\u201D,深受文人喜爱。",
  },
  {
    id: "jp-wisteria",
    parkId: "jiangpu-park",
    name: "紫藤",
    scientificName: "Wisteria sinensis",
    clues: [
      {
        id: "jp-wisteria-clue-1",
        type: "flower",
        text: "春天它垂下一串串紫色的花,像瀑布一样。",
      },
      {
        id: "jp-wisteria-clue-2",
        type: "description",
        text: "老藤弯弯绕绕,像粗粗的绳子缠在架子上。",
      },
      {
        id: "jp-wisteria-clue-3",
        type: "leaf",
        text: "叶子是羽状的,像一排排小扇子排在一起。",
      },
    ],
    knowledge:
      "紫藤是豆科紫藤属落叶藤本,茎左旋缠绕。花期4-5月,总状花序下垂,花紫色或淡紫色。叶为奇数羽状复叶,小叶7-13枚。是优良的棚架绿化植物。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫藤的花序可以长达30厘米,一串上能开几十朵小花。",
    nextObserve: "数一数一串紫藤上开了多少朵小花。",
    isSeasonal: true,
    seasonMonths: [4, 5],
    unlockReward: "解锁了紫藤的紫色花瀑布徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M20 30 Q50 25 80 30" stroke="#8B6F47" stroke-width="3" fill="none"/><g fill="#9B7BC8"><ellipse cx="35" cy="40" rx="3" ry="5"/><ellipse cx="40" cy="50" rx="3" ry="5"/><ellipse cx="45" cy="58" rx="3" ry="5"/><ellipse cx="50" cy="40" rx="3" ry="5"/><ellipse cx="55" cy="50" rx="3" ry="5"/><ellipse cx="60" cy="58" rx="3" ry="5"/><ellipse cx="65" cy="40" rx="3" ry="5"/><ellipse cx="70" cy="50" rx="3" ry="5"/></g><g fill="#7C9885"><ellipse cx="28" cy="28" rx="4" ry="2"/><ellipse cx="50" cy="25" rx="4" ry="2"/><ellipse cx="72" cy="28" rx="4" ry="2"/></g></svg>',
    position: { lng: 121.5185, lat: 31.2895 },
    detailedIntro:
      "紫藤是豆科紫藤属的落叶藤本植物,老藤左旋缠绕,可攀附棚架长成花廊。每年4至5月间,总状花序自架顶垂下,可达30厘米以上,紫蓝色花朵密集成串,宛如紫色瀑布。叶片为奇数羽状复叶,小叶7至13枚,排列整齐如羽。紫藤是江南园林中最具诗意的棚架植物之一,江浦公园的花架在春末紫藤垂挂,蔚为壮观。",
    habitat: "喜光耐旱,是适应性强的藤本植物,对土壤要求不严,宜攀附棚架或老树生长。",
    uses: "优良的棚架、花廊绿化藤本,花序下垂如瀑,观赏价值极高;花可食用和酿酒。",
    culturalNote: "紫藤在唐宋诗词中常被吟咏,象征缠绵情意与高洁气韵,是江南古典园林的代表性藤蔓。",
  },
  {
    id: "jp-southern-magnolia",
    parkId: "jiangpu-park",
    name: "广玉兰",
    scientificName: "Magnolia grandiflora",
    clues: [
      {
        id: "jp-southern-magnolia-clue-1",
        type: "leaf",
        text: "叶子又大又厚,正面油绿发亮,背面有锈色的绒毛。",
      },
      {
        id: "jp-southern-magnolia-clue-2",
        type: "flower",
        text: "初夏开出碗大的白花,像一只只白瓷杯。",
      },
      {
        id: "jp-southern-magnolia-clue-3",
        type: "bark",
        text: "树皮灰褐色,有浅浅的裂纹,小枝上长着锈色绒毛。",
      },
    ],
    knowledge:
      "广玉兰是木兰科北美木兰属常绿乔木,原产北美。叶革质,背面有锈色绒毛。花期5-6月,花大白色,芳香。果实为聚合蓇葖果,形似小松球。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "广玉兰的花朵大得能托住一整只手掌,是公园里最大的花之一。",
    nextObserve: "摸一摸叶子背面那层棕色的绒毛,是不是毛茸茸的。",
    isSeasonal: false,
    unlockReward: "解锁了广玉兰的白瓷杯徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 55" stroke="#6B4E2F" stroke-width="5"/><g fill="#3A6B35"><ellipse cx="38" cy="50" rx="12" ry="5" transform="rotate(-25 38 50)"/><ellipse cx="62" cy="50" rx="12" ry="5" transform="rotate(25 62 50)"/><ellipse cx="50" cy="42" rx="10" ry="5"/></g><g fill="#FFFAF0" stroke="#E8D5B8" stroke-width="1"><ellipse cx="50" cy="32" rx="8" ry="6"/><ellipse cx="44" cy="30" rx="5" ry="8" transform="rotate(-30 44 30)"/><ellipse cx="56" cy="30" rx="5" ry="8" transform="rotate(30 56 30)"/></g><circle cx="50" cy="33" r="2.5" fill="#F5C542"/></svg>',
    position: { lng: 121.5175, lat: 31.289 },
    detailedIntro:
      "广玉兰是木兰科北美木兰属的常绿乔木,原产于北美洲东南部。它的叶片革质肥厚,正面油绿发亮,背面密生锈色绒毛,触感独特。初夏时节开出硕大的白色花朵,形似白瓷杯,芳香浓郁。花谢后结出聚生蓇葖果,外观酷似小松球,十分有趣。江浦公园内广玉兰四季常青,初夏白花满树,浓荫蔽日,是夏日休憩的好去处。",
    habitat: "喜温暖湿润气候,较耐阴,宜生于肥沃排水良好的微酸性土壤。",
    uses: "优良的庭荫树和行道树,四季常青,初夏白花芳香;木材可用作装饰材料。",
    culturalNote: "广玉兰自北美引入中国后广为栽培,因叶厚花大、常绿不凋,象征坚贞与高洁。",
  },
  {
    id: "jp-cherry",
    parkId: "jiangpu-park",
    name: "樱花",
    scientificName: "Prunus serrulata",
    clues: [
      {
        id: "jp-cherry-clue-1",
        type: "flower",
        text: "春天里它开出粉白色的小花,一簇簇的像云朵。",
      },
      {
        id: "jp-cherry-clue-2",
        type: "leaf",
        text: "叶子边缘有小锯齿,形状像小椭圆。",
      },
      {
        id: "jp-cherry-clue-3",
        type: "bark",
        text: "树皮上有横着的小条纹,像一环环的横纹。",
      },
    ],
    knowledge:
      "樱花是蔷薇科李属落叶乔木,花期3-4月。花单瓣或重瓣,粉白至深粉。花瓣先端有缺刻,是辨认樱花的特征。树皮有横裂皮孔,呈环状条纹。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "樱花花瓣的尖端有个小缺口,就像被咬了一小口,这是它的小秘密。",
    nextObserve: "数一数一朵樱花有几片花瓣,大多数是5片哦。",
    isSeasonal: true,
    seasonMonths: [3, 4],
    unlockReward: "解锁了樱花的粉色云朵徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#8B6F47" stroke-width="4"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="35" cy="30" r="8"/><circle cx="65" cy="30" r="8"/><circle cx="50" cy="20" r="9"/></g><g fill="#FFE4A1"><circle cx="50" cy="32" r="3"/></g></svg>',
    position: { lng: 121.5165, lat: 31.287 },
    detailedIntro:
      "樱花是蔷薇科李属的落叶乔木,花期短暂而绚烂,通常在3至4月间盛开。花朵单瓣或重瓣,颜色从纯白到深粉,花瓣先端有缺刻,是辨认樱花的重要特征。盛开时满树繁花如云似霞,微风拂过花瓣纷飞,形成浪漫的花雨景观。江浦公园的樱花在春日盛开,粉花满枝,是春季踏青赏花的好去处。",
    habitat: "喜阳光充足、温暖湿润的环境,要求排水良好的微酸性土壤。",
    uses: "春季重要的观花树种,常成片种植形成花海景观,是城市公园和庭院绿化的优选树种。",
    culturalNote: "樱花象征春日与美好,花期短暂常被赋予惜春的文化意涵,赏樱是深受喜爱的春日习俗。",
  },
  {
    id: "jp-pomegranate",
    parkId: "jiangpu-park",
    name: "石榴",
    scientificName: "Punica granatum",
    clues: [
      {
        id: "jp-pomegranate-clue-1",
        type: "flower",
        text: "夏天开出红红的像小喇叭一样的花。",
      },
      {
        id: "jp-pomegranate-clue-2",
        type: "leaf",
        text: "叶子小小的,长椭圆形,对生在枝条上。",
      },
      {
        id: "jp-pomegranate-clue-3",
        type: "description",
        text: "秋天会结出圆圆的大果子,头顶有个小皇冠。",
      },
    ],
    knowledge:
      "石榴是千屈菜科石榴属落叶灌木或小乔木。叶对生,长椭圆形。花期5-6月,花红色,筒状。果实为浆果,球形,外果皮革质,宿存萼片形成皇冠状。种子外种皮肉质可食。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "一颗石榴里能藏几百颗晶莹的籽,每一颗都裹着甜甜的红外衣。",
    nextObserve: "秋天找一颗石榴果,看看头顶的小皇冠,再数数里面有多少籽。",
    isSeasonal: true,
    seasonMonths: [5, 6],
    unlockReward: "解锁了石榴的红宝石徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 88 L50 45" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="42" cy="40" rx="5" ry="3" transform="rotate(-20 42 40)"/><ellipse cx="58" cy="40" rx="5" ry="3" transform="rotate(20 58 40)"/><ellipse cx="50" cy="35" rx="5" ry="3"/></g><g fill="#C44030"><circle cx="50" cy="25" r="12"/></g><g fill="#3A6B35"><path d="M45 18 L42 12 L47 16 L50 10 L53 16 L58 12 L55 18 Z"/></g></svg>',
    position: { lng: 121.519, lat: 31.2885 },
    detailedIntro:
      "石榴是千屈菜科石榴属的落叶灌木或小乔木,原产于西亚地区,在中国已有两千余年的栽培历史。叶片对生,长椭圆形,嫩叶带红色。初夏开出鲜红色的筒状花朵,浓艳夺目。秋季结出球形果实,顶部宿存的萼片形似皇冠,十分独特。果实内种子众多,外种皮肉质晶莹多汁,酸甜可口。江浦公园的石榴树初夏红花灿烂,秋日硕果累累,是夏秋观花赏果的佳品。",
    habitat: "喜温暖向阳环境,耐旱耐瘠,对土壤要求不严,以排水良好的沙质壤土为佳。",
    uses: "花果兼赏的优良树种;果实可食,富含维生素C;果皮可入药,有收敛止泻之效。",
    culturalNote: "石榴在中国文化中象征多子多福、红火兴旺,是传统园林中寓意吉祥的果木。",
  },
  {
    id: "jp-silk-tree",
    parkId: "jiangpu-park",
    name: "合欢",
    scientificName: "Albizia julibrissin",
    clues: [
      {
        id: "jp-silk-tree-clue-1",
        type: "flower",
        text: "夏天开出一簇簇粉红色的绒球花,毛茸茸的。",
      },
      {
        id: "jp-silk-tree-clue-2",
        type: "leaf",
        text: "叶子像含羞草一样,一到晚上就会合拢起来。",
      },
      {
        id: "jp-silk-tree-clue-3",
        type: "bark",
        text: "树皮灰褐色,树冠像撑开的一把大绿伞。",
      },
    ],
    knowledge:
      "合欢是豆科合欢属落叶乔木。二回偶数羽状复叶,小叶夜合昼开。花期6-7月,花丝细长粉红,聚成头状花序如绒球。树冠伞形扁平,枝条舒展。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "合欢的叶子像有闹钟一样,天黑了就自动合上睡觉,所以又叫夜合树。",
    nextObserve: "傍晚去看看它的叶子,是不是正在一片片地合拢。",
    isSeasonal: true,
    seasonMonths: [6, 7],
    unlockReward: "解锁了合欢的粉绒球徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 45" stroke="#6B4E2F" stroke-width="4"/><ellipse cx="50" cy="35" rx="30" ry="20" fill="#5A8B55"/><g fill="#E88A9E"><circle cx="35" cy="28" r="6"/><circle cx="50" cy="22" r="7"/><circle cx="65" cy="28" r="6"/></g><g stroke="#E88A9E" stroke-width="0.8" fill="none"><line x1="35" y1="28" x2="28" y2="20"/><line x1="35" y1="28" x2="42" y2="20"/><line x1="50" y1="22" x2="43" y2="14"/><line x1="50" y1="22" x2="57" y2="14"/><line x1="65" y1="28" x2="58" y2="20"/><line x1="65" y1="28" x2="72" y2="20"/></g></svg>',
    position: { lng: 121.518, lat: 31.2868 },
    detailedIntro:
      "合欢是豆科合欢属的落叶乔木,树冠伞形开展,姿态优美。最奇特的是它的叶片——二回偶数羽状复叶,小叶昼开夜合,傍晚时分叶片渐渐合拢,仿佛进入睡眠,故又名夜合树。盛夏时节,枝头缀满粉红色绒球花序,花丝细长如丝缨,远观如云霞。江浦公园的合欢树夏日绒花满树,绿伞如盖,是夏日纳凉赏花的佳处。",
    habitat: "喜光,耐旱耐瘠,对土壤适应性强,生长较快,适宜温暖气候。",
    uses: "优良的庭荫树和行道树,夏日粉花满树,观赏价值高;树皮可入药,有安神活血之效。",
    culturalNote: "\u201C合欢\u201D寓意夫妻和睦、消忿解怨,自古为宅院中常植的吉祥树,象征合家欢乐。",
  },
];

const jiangpuParkBuddy: Buddy = {
  id: "jp-buddy-yaya",
  parkId: "jiangpu-park",
  name: "芽芽",
  intro: "一颗刚从土里冒出头的小芽精,对世界充满好奇,什么都想问个为什么。",
  silhouetteSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="80" rx="18" ry="6" fill="#3A3A3A"/><path d="M50 80 Q47 60 50 40 Q53 60 50 80" fill="#3A3A3A"/><ellipse cx="50" cy="38" rx="10" ry="6" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="80" rx="18" ry="6" fill="#8B7355"/><path d="M50 80 Q47 60 50 42 Q53 60 50 80" fill="#8B7355"/><ellipse cx="50" cy="38" rx="11" ry="7" fill="#8B7355"/><ellipse cx="40" cy="42" rx="6" ry="4" fill="#8B7355" transform="rotate(-30 40 42)"/><ellipse cx="60" cy="42" rx="6" ry="4" fill="#8B7355" transform="rotate(30 60 42)"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="80" rx="18" ry="6" fill="#8B7355"/><path d="M50 80 Q47 60 50 40 Q53 60 50 80" fill="#A0825D" stroke="#5C4A35" stroke-width="1"/><ellipse cx="50" cy="37" rx="12" ry="8" fill="#8B7355" stroke="#5C4A35" stroke-width="1.5"/><ellipse cx="40" cy="42" rx="7" ry="4" fill="#8B7355" stroke="#5C4A35" stroke-width="1" transform="rotate(-35 40 42)"/><ellipse cx="60" cy="42" rx="7" ry="4" fill="#8B7355" stroke="#5C4A35" stroke-width="1" transform="rotate(35 60 42)"/><circle cx="46" cy="36" r="3" fill="#FFF"/><circle cx="46" cy="37" r="1.5" fill="#2B2B2B"/><circle cx="54" cy="36" r="3" fill="#FFF"/><circle cx="54" cy="37" r="1.5" fill="#2B2B2B"/><path d="M47 42 Q50 45 53 42" stroke="#5C4A35" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="42" cy="40" r="2" fill="#F8B4C0" opacity="0.7"/><circle cx="58" cy="40" r="2" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 2 },
};

// ===========================================================================
// Songhe Park — Plants and Buddy
// ===========================================================================

const songheParkPlants: PlantDiscovery[] = [
  {
    id: "sh-pine",
    parkId: "songhe-park",
    name: "黑松",
    scientificName: "Pinus thunbergii",
    clues: [
      {
        id: "sh-pine-clue-1",
        type: "leaf",
        text: "叶子是针状的,两根两根扎成一束,摸起来会扎手。",
      },
      {
        id: "sh-pine-clue-2",
        type: "bark",
        text: "树皮黑灰色,裂成一块块像龟甲的纹路。",
      },
      {
        id: "sh-pine-clue-3",
        type: "description",
        text: "它四季常青,冬天也不落叶,树形像一把撑开的绿伞。",
      },
    ],
    knowledge:
      "黑松是松科松属常绿乔木,原产日本。针叶2针一束,粗硬。树皮黑灰色,裂成鳞状块片。喜海岸环境,抗风耐盐,是优良的防风和园林树种。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "黑松的树皮裂开后像龟甲的纹路,摸起来粗糙又结实。",
    nextObserve: "数一数一束里有几根针叶,是不是正好两根。",
    isSeasonal: false,
    unlockReward: "解锁了黑松的常青针叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 30" stroke="#4A3A2A" stroke-width="5"/><ellipse cx="50" cy="25" rx="30" ry="20" fill="#2D5A2D"/><ellipse cx="35" cy="35" rx="15" ry="12" fill="#3A6B35"/><ellipse cx="65" cy="35" rx="15" ry="12" fill="#3A6B35"/></svg>',
    position: { lng: 121.5130, lat: 31.2695 },
    detailedIntro:
      "黑松是松科松属的常绿乔木,原产日本,因树皮黑灰色而得名。针叶2针一束,粗硬刺手,四季常青不凋。树皮深裂成鳞状块片,形如龟甲。黑松喜海岸环境,抗风耐盐,生长缓慢但姿态苍劲,是制作盆景和园林造景的上佳树种。松鹤公园以\u201C松鹤\u201D为名,园内黑松苍劲挺拔,与园名相得益彰。",
    habitat: "喜光,耐寒耐旱,抗风耐盐,对土壤要求不严,适宜海岸和瘠薄环境。",
    uses: "优良的防风林和园林观赏树种,姿态苍劲,亦为盆景名木;木材可供建筑。",
    culturalNote: "松树自古象征坚贞与长寿,\u201C松鹤延年\u201D是传统吉祥图案,寓意福寿绵长。",
  },
  {
    id: "sh-wintersweet",
    parkId: "songhe-park",
    name: "腊梅",
    scientificName: "Chimonanthus praecox",
    clues: [
      {
        id: "sh-wintersweet-clue-1",
        type: "flower",
        text: "冬天它就开花了,小小的黄花挂在光秃秃的枝条上。",
      },
      {
        id: "sh-wintersweet-clue-2",
        type: "description",
        text: "香气清甜,在冷冷的空气里特别明显。",
      },
      {
        id: "sh-wintersweet-clue-3",
        type: "bark",
        text: "枝条灰褐色,有明显的皮孔,像一个个小点点。",
      },
    ],
    knowledge:
      "腊梅是腊梅科腊梅属落叶灌木。花期12月至翌年2月,花黄色,蜡质,芳香。先花后叶,寒冬开放,故名腊梅。与梅花不同科,仅因同开于严寒而常被相提并论。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "腊梅不是梅花,它俩只是恰好在冬天开花,其实连亲戚都算不上。",
    nextObserve: "闻闻它的香味,再看看花瓣是不是像涂了一层蜡。",
    isSeasonal: true,
    seasonMonths: [12, 1, 2],
    unlockReward: "解锁了腊梅的寒香徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><path d="M50 50 L35 42" stroke="#6B4E2F" stroke-width="2"/><path d="M50 50 L65 42" stroke="#6B4E2F" stroke-width="2"/><g fill="#E8C530" stroke="#C4A020" stroke-width="0.5"><circle cx="35" cy="38" r="6"/><circle cx="65" cy="38" r="6"/><circle cx="50" cy="28" r="7"/></g><g fill="#8B5A2B"><circle cx="35" cy="38" r="2"/><circle cx="65" cy="38" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5145, lat: 31.2695 },
    detailedIntro:
      "腊梅是腊梅科腊梅属的落叶灌木,原产中国。与梅花虽同开于严冬,却并非同科植物,只是因花时相近而得名\u201C腊梅\u201D。花期12月至翌年2月,先花后叶,花黄色、蜡质,芳香清冽,在寒风中格外醒目。腊梅花被片外轮蜡黄、内轮带紫条纹,花瓣触感如蜡,是其独特之处。松鹤公园的腊梅在隆冬凌寒怒放,暗香浮动,与苍劲松柏相映成趣。",
    habitat: "喜光耐寒,耐旱忌涝,适宜肥沃排水良好的微酸性土壤,适应性强。",
    uses: "冬季重要香花灌木,孤植或丛植于庭院、公园,也是制作盆景和切花的优良材料。",
    culturalNote: "腊梅凌寒而开,常被喻为坚贞不屈的象征,与梅、竹、菊并称\u201C冬日四友\u201D,深受文人喜爱。",
  },
  {
    id: "sh-crape-myrtle",
    parkId: "songhe-park",
    name: "紫薇",
    scientificName: "Lagerstroemia indica",
    clues: [
      {
        id: "sh-crape-myrtle-clue-1",
        type: "flower",
        text: "夏天开出皱皱的粉紫色小花,一簇一簇的。",
      },
      {
        id: "sh-crape-myrtle-clue-2",
        type: "bark",
        text: "树皮很光滑,像被剥掉了一样,摸起来凉凉的。",
      },
      {
        id: "sh-crape-myrtle-clue-3",
        type: "description",
        text: "它的花期很长,能开整整一个夏天,又叫\u201C百日红\u201D。",
      },
    ],
    knowledge:
      "紫薇是千屈菜科紫薇属落叶灌木或小乔木。树皮光滑,花玫红或粉红,花瓣皱缩。花期6-9月,长达百日以上,故又称\u201C百日红\u201D。树干光滑,轻搔之全树微动,俗称\u201C怕痒树\u201D。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "紫薇树干光滑,用手轻轻一挠,整棵树都会痒得发抖,所以叫\u201C怕痒树\u201D。",
    nextObserve: "用手轻轻挠一挠它的树干,看看它会不会\u201C怕痒\u201D。",
    isSeasonal: true,
    seasonMonths: [7, 8, 9],
    unlockReward: "解锁了紫薇的百日红徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="38" cy="50" rx="8" ry="4"/><ellipse cx="62" cy="50" rx="8" ry="4"/></g><g fill="#C490D8" stroke="#A070B8" stroke-width="0.5"><circle cx="35" cy="35" r="7"/><circle cx="65" cy="35" r="7"/><circle cx="50" cy="25" r="8"/></g><g fill="#F5C542"><circle cx="50" cy="25" r="2"/></g></svg>',
    position: { lng: 121.5135, lat: 31.2705 },
    detailedIntro:
      "紫薇是千屈菜科紫薇属的落叶灌木或小乔木,原产中国。它的树皮光滑,呈灰白色,花色从玫红到粉紫不等,花瓣边缘皱缩如褶边,别具特色。花期长达百日以上,从6月持续到9月,故又称\u201C百日红\u201D。最有趣的是,紫薇树干光滑,轻轻搔之全树微动,俗称\u201C怕痒树\u201D,深受孩童喜爱。松鹤公园内紫薇夏秋花开不断,为清幽的松林增添了一抹亮色。",
    habitat: "喜温暖湿润、阳光充足环境,耐旱耐寒,对土壤要求不严,半阴亦可生长。",
    uses: "优秀的夏花树种,花期长、花色艳,常用于庭院、道路和公园绿化,也是制作盆景的好材料。",
    culturalNote: "紫薇自古为园林名花,唐宋诗词中多有吟咏,\u201C百日红\u201D之名道出其花期绵长的可贵。",
  },
  {
    id: "sh-osmanthus",
    parkId: "songhe-park",
    name: "桂花",
    scientificName: "Osmanthus fragrans",
    clues: [
      {
        id: "sh-osmanthus-clue-1",
        type: "flower",
        text: "秋天还没见到它,就先闻到了甜甜的香气。",
      },
      {
        id: "sh-osmanthus-clue-2",
        type: "leaf",
        text: "叶子硬硬的,边缘有小小的刺状锯齿。",
      },
      {
        id: "sh-osmanthus-clue-3",
        type: "description",
        text: "花小小的,有金黄也有淡黄,藏在叶子中间。",
      },
    ],
    knowledge:
      "桂花是木犀科木犀属常绿乔木,原产中国。叶革质,椭圆形,边缘常有锯齿。花期9-10月,花簇生叶腋,极香。品种分金桂、银桂、丹桂、四季桂等。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "桂花的花朵小得像米粒,但香气能飘到几十米远,是\u201C看不见的香\u201D。",
    nextObserve: "凑近闻一闻,看看是不是真的很甜,再找找金黄的小花藏在哪里。",
    isSeasonal: true,
    seasonMonths: [9, 10],
    unlockReward: "解锁了桂花的甜蜜香囊徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 40" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="35" cy="42" rx="10" ry="5" transform="rotate(-20 35 42)"/><ellipse cx="65" cy="42" rx="10" ry="5" transform="rotate(20 65 42)"/><ellipse cx="50" cy="32" rx="9" ry="5"/></g><g fill="#F5C542"><circle cx="40" cy="38" r="2"/><circle cx="46" cy="35" r="2"/><circle cx="55" cy="38" r="2"/><circle cx="60" cy="35" r="2"/><circle cx="50" cy="28" r="2"/></g></svg>',
    position: { lng: 121.5155, lat: 31.2690 },
    detailedIntro:
      "桂花是中国传统十大名花之一,已有2500余年栽培历史。它的花朵虽小如米粒,但芳香浓郁,秋日盛开时满园飘香。桂花分为金桂、银桂、丹桂和四季桂四大类群,花色从淡黄到橙红不等。除了观赏,桂花还可制作桂花糕、桂花酒和桂花茶,深受人们喜爱。松鹤公园内桂花散植各处,秋日行园,桂香与松香交织,别有韵味。",
    habitat: "喜温暖湿润、阳光充足的环境,耐半阴,要求排水良好的微酸性土壤。",
    uses: "重要的香花树种,花可窨制花茶、酿造桂花酒、制作糕点;也是优良的庭院和行道绿化树种。",
    culturalNote: "桂花在我国栽培历史悠久,\u201C蟾宫折桂\u201D以桂喻科举登第,象征荣誉与吉祥。",
  },
  {
    id: "sh-nandina",
    parkId: "songhe-park",
    name: "南天竹",
    scientificName: "Nandina domestica",
    clues: [
      {
        id: "sh-nandina-clue-1",
        type: "leaf",
        text: "叶子像羽毛一样,一层层展开,冬天会变红。",
      },
      {
        id: "sh-nandina-clue-2",
        type: "description",
        text: "秋天结出一串串红色的小圆果,像红色的珠子。",
      },
      {
        id: "sh-nandina-clue-3",
        type: "bark",
        text: "茎秆细细的,一节一节,像小竹子。",
      },
    ],
    knowledge:
      "南天竹是小檗科南天竹属常绿灌木。二至三回羽状复叶,小叶椭圆。果期10-11月,浆果球形,鲜红。茎丛生,有节。是传统的观叶观果植物,冬季红叶红果尤为艳丽。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "南天竹不是竹子,只是因为茎秆有节、姿态像竹,才得了这个名字。",
    nextObserve: "看看它的叶子是不是像羽毛,再找找有没有红红的小果子。",
    isSeasonal: true,
    seasonMonths: [10, 11, 12],
    unlockReward: "解锁了南天竹的红果徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#6B4E2F" stroke-width="3"/><g fill="#5A8B55"><ellipse cx="40" cy="55" rx="6" ry="3"/><ellipse cx="60" cy="55" rx="6" ry="3"/><ellipse cx="45" cy="45" rx="5" ry="3"/><ellipse cx="55" cy="45" rx="5" ry="3"/><ellipse cx="50" cy="38" rx="4" ry="3"/></g><g fill="#E84050"><circle cx="42" cy="32" r="3"/><circle cx="50" cy="28" r="3"/><circle cx="58" cy="32" r="3"/><circle cx="46" cy="25" r="3"/><circle cx="54" cy="25" r="3"/></g></svg>',
    position: { lng: 121.5140, lat: 31.2710 },
    detailedIntro:
      "南天竹是小檗科南天竹属的常绿灌木,原产中国。虽名\u201C竹\u201D却非竹,只因茎秆有节、姿态似竹而得名。二至三回羽状复叶,小叶椭圆,冬季常转为红色。果期10至11月,浆果球形鲜红,累累成串,经冬不落,观赏价值极高。南天竹是传统的观叶观果植物,在古典园林中常植于山石旁或廊下。松鹤公园内南天竹冬日红叶红果,与苍松相映,增添冬日的暖意。",
    habitat: "喜温暖湿润、半阴环境,耐寒,要求肥沃排水良好的土壤,适应性强。",
    uses: "重要的观叶观果灌木,冬季红叶红果尤为艳丽,常用于庭院、公园和盆栽观赏。",
    culturalNote: "南天竹果红叶美,寓意吉祥如意,是传统岁朝清供和年节装饰的常见植物。",
  },
  {
    id: "sh-podocarpus",
    parkId: "songhe-park",
    name: "罗汉松",
    scientificName: "Podocarpus macrophyllus",
    clues: [
      {
        id: "sh-podocarpus-clue-1",
        type: "leaf",
        text: "叶子又细又长,硬硬的,螺旋状长在枝条上。",
      },
      {
        id: "sh-podocarpus-clue-2",
        type: "description",
        text: "种子下面有个红紫色的小托,像穿着袈裟的小罗汉。",
      },
      {
        id: "sh-podocarpus-clue-3",
        type: "bark",
        text: "树皮灰褐色,有纵向裂纹,老树会片状剥落。",
      },
    ],
    knowledge:
      "罗汉松是罗汉松科罗汉松属常绿乔木。叶条状披针形,螺旋状互生。种子卵形,生于肉质种托上,种托红紫色,形似罗汉披袈裟,故名罗汉松。是优良的园林和盆景树种。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "罗汉松的种子下面有个红紫色的小托,像穿着袈裟的小罗汉,名字就是这么来的。",
    nextObserve: "找找看它的种子,下面是不是有个红紫色的小托。",
    isSeasonal: false,
    unlockReward: "解锁了罗汉松的罗汉果徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 30" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="40" cy="45" rx="5" ry="3" transform="rotate(-30 40 45)"/><ellipse cx="60" cy="45" rx="5" ry="3" transform="rotate(30 60 45)"/><ellipse cx="42" cy="35" rx="5" ry="3" transform="rotate(-20 42 35)"/><ellipse cx="58" cy="35" rx="5" ry="3" transform="rotate(20 58 35)"/><ellipse cx="50" cy="28" rx="5" ry="3"/></g><g fill="#C44060"><circle cx="50" cy="22" r="4"/></g><g fill="#3A6B35"><ellipse cx="50" cy="18" rx="3" ry="2"/></g></svg>',
    position: { lng: 121.5125, lat: 31.2705 },
    detailedIntro:
      "罗汉松是罗汉松科罗汉松属的常绿乔木,原产中国。叶条状披针形,螺旋状互生,四季常青。最有趣的是它的种子:种子卵形,生于肉质种托上,种托成熟时红紫色,整体形似披袈裟的罗汉,故得名\u201C罗汉松\u201D。罗汉松姿态苍劲,寿命悠长,是制作盆景和园林造景的珍贵树种。松鹤公园内罗汉松与黑松相伴,松柏常青,正合\u201C松鹤\u201D之意。",
    habitat: "喜温暖湿润、半阴环境,耐寒性较弱,要求肥沃排水良好的微酸性土壤。",
    uses: "珍贵的园林观赏和盆景树种,姿态苍劲寿命长;木材纹理细致,可制家具。",
    culturalNote: "罗汉松因种子形似披袈裟罗汉而得名,在传统文化中象征长寿与吉祥,常植于寺庙和庭院。",
  },
  {
    id: "sh-cypress",
    parkId: "songhe-park",
    name: "柏树",
    scientificName: "Platycladus orientalis",
    clues: [
      {
        id: "sh-cypress-clue-1",
        type: "leaf",
        text: "叶子是细小的鳞片状,紧紧贴在枝条上,像鱼鳞一样。",
      },
      {
        id: "sh-cypress-clue-2",
        type: "bark",
        text: "树皮红褐色,会裂成长条薄片剥落。",
      },
      {
        id: "sh-cypress-clue-3",
        type: "description",
        text: "它四季常绿,树冠窄窄的像个尖塔,直指天空。",
      },
    ],
    knowledge:
      "柏树是柏科侧柏属常绿乔木,中国特产树种。叶鳞片状,交互对生,紧贴枝条。球果近卵形,种鳞木质。树姿挺拔,寿命悠长,耐修剪。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "柏树的叶子不是一片片展开的,而是像鱼鳞一样一片叠一片紧紧贴在枝条上。",
    nextObserve: "摸一摸它的枝条,是不是觉得鳞片状的叶子紧紧贴着,滑滑的。",
    isSeasonal: false,
    unlockReward: "解锁了柏树的鳞甲叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 92 L50 80" stroke="#6B4E2F" stroke-width="5"/><g fill="#3A6B35"><path d="M50 80 L42 65 L58 65 Z"/><path d="M50 65 L40 50 L60 50 Z"/><path d="M50 50 L38 35 L62 35 Z"/><path d="M50 35 L36 20 L64 20 Z"/></g></svg>',
    position: { lng: 121.513, lat: 31.2705 },
    detailedIntro:
      "柏树是柏科侧柏属的常绿乔木,为中国特产树种,栽培历史悠久。其叶片呈鳞片状,交互对生,紧密贴附于枝条上,触感光滑。树姿挺拔,树冠窄塔形,四季常青。柏树寿命极长,常见于古寺名刹和陵园。松鹤公园内柏树与松树相伴,松柏常青,正合松鹤延年之意。",
    habitat: "喜光,耐旱耐寒,对土壤适应性强,喜石灰质深厚土壤,生长缓慢但寿命极长。",
    uses: "优良的园林绿化和绿篱树种;木材芳香耐腐,可制家具及雕刻;枝叶可入药。",
    culturalNote: "柏树自古为陵墓和寺庙常见树种,象征坚毅与永恒,与松并称,寓意松柏长青。",
  },
  {
    id: "sh-cedar",
    parkId: "songhe-park",
    name: "雪松",
    scientificName: "Cedrus deodara",
    clues: [
      {
        id: "sh-cedar-clue-1",
        type: "leaf",
        text: "叶子是细细的针状,有长有短,有的软软地垂下来。",
      },
      {
        id: "sh-cedar-clue-2",
        type: "description",
        text: "树冠尖尖的像一座宝塔,枝条一层层地平展出来。",
      },
      {
        id: "sh-cedar-clue-3",
        type: "bark",
        text: "树皮灰褐色,有深裂纹,摸起来粗糙扎手。",
      },
    ],
    knowledge:
      "雪松是松科雪松属常绿乔木,原产喜马拉雅山区。树冠塔形,侧枝平展轮生。叶针形,长短不一。球果直立卵形。是世界四大行道树之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "雪松的枝条像一层的楼梯一样整整齐齐地排开,从下往上一层比一层窄。",
    nextObserve: "数一数它的树冠有几层枝条,看看是不是一层层地铺开。",
    isSeasonal: false,
    unlockReward: "解锁了雪松的宝塔冠徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 82" stroke="#6B4E2F" stroke-width="4"/><g fill="#4A6B3A"><ellipse cx="50" cy="78" rx="18" ry="4"/><ellipse cx="50" cy="64" rx="15" ry="4"/><ellipse cx="50" cy="50" rx="12" ry="4"/><ellipse cx="50" cy="38" rx="9" ry="3"/><ellipse cx="50" cy="28" rx="6" ry="3"/></g><path d="M50 82 L50 22" stroke="#6B4E2F" stroke-width="2" fill="none"/></svg>',
    position: { lng: 121.5145, lat: 31.271 },
    detailedIntro:
      "雪松是松科雪松属的常绿大乔木,原产于喜马拉雅山西部高山地区。其树姿雄伟挺拔,树冠呈塔形,侧枝平展轮生,层次分明,由下至上渐次收窄,远观如绿色宝塔。叶片针形,长短不一,柔软下垂。雪松是世界著名的观赏树种,与南洋杉、金钱松、日本金松、巨杉合称世界五大公园树种。松鹤公园内雪松挺拔俊秀,塔形树冠为冬季增添绿意。",
    habitat: "喜光,稍耐阴,喜温和凉润气候,要求土层深厚排水良好的微酸性土壤。",
    uses: "世界著名的观赏树种,树形雄伟,常孤植于草坪或列植于道路两侧作景观树。",
    culturalNote: "雪松原产喜马拉雅,树姿雄伟庄重,引入中国后广为栽植,是城市公园的标志性景观树。",
  },
  {
    id: "sh-plum-blossom",
    parkId: "songhe-park",
    name: "梅花",
    scientificName: "Prunus mume",
    clues: [
      {
        id: "sh-plum-blossom-clue-1",
        type: "flower",
        text: "冬天还没长叶子,它就先开出粉色或白色的小花,有淡淡清香。",
      },
      {
        id: "sh-plum-blossom-clue-2",
        type: "bark",
        text: "树皮灰褐色,有浅裂纹,枝条常常弯弯曲曲的。",
      },
      {
        id: "sh-plum-blossom-clue-3",
        type: "description",
        text: "花谢之后才长出圆卵形的小叶子,边缘有小细齿。",
      },
    ],
    knowledge:
      "梅花是蔷薇科杏属落叶小乔木。花期极早,冬末春初先叶开放。花单生或簇生,花瓣5枚,白至粉红,芳香。品种繁多,枝姿苍劲,是中国传统名花。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "梅花是最不怕冷的花之一,冬天冒雪开花,所以叫凌寒独自开。",
    nextObserve: "凑近闻一闻梅花,是不是有淡淡的幽香,再看看花有几片花瓣。",
    isSeasonal: true,
    seasonMonths: [1, 2],
    unlockReward: "解锁了梅花的凌寒香徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 55" stroke="#6B4E2F" stroke-width="4"/><path d="M50 55 Q40 48 35 50" stroke="#6B4E2F" stroke-width="2" fill="none"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="35" cy="48" r="5"/><circle cx="50" cy="40" r="6"/><circle cx="62" cy="48" r="5"/></g><g fill="#F5C542"><circle cx="35" cy="48" r="1.5"/><circle cx="50" cy="40" r="1.5"/><circle cx="62" cy="48" r="1.5"/></g></svg>',
    position: { lng: 121.5125, lat: 31.269 },
    detailedIntro:
      "梅花是蔷薇科杏属的落叶小乔木,原产于中国,已有三千余年的栽培历史。梅花最独特的习性是在冬末春初先叶开放,于严寒中绽放幽香,花期极早。花单生或簇生,花瓣5枚,颜色从纯白到粉红,有浓郁清香。枝干苍劲虬曲,姿态古朴。松鹤公园内梅花冬末盛开,暗香浮动,与松柏相伴,正合松鹤延年、梅骨傲霜之意。",
    habitat: "喜温暖,耐寒性强,要求阳光充足和通风良好的环境,对土壤要求不严。",
    uses: "重要的早春观花树种,树姿古朴苍劲;果实可食可制梅脯、梅酒,花果叶根均可入药。",
    culturalNote: "梅花是中国十大名花之首,以凌寒独开、傲骨冰心象征坚贞不屈,与松、竹并称岁寒三友。",
  },
  {
    id: "sh-winter-jasmine",
    parkId: "songhe-park",
    name: "迎春花",
    scientificName: "Jasminum nudiflorum",
    clues: [
      {
        id: "sh-winter-jasmine-clue-1",
        type: "flower",
        text: "早春时节枝条上开满小黄花,六片花瓣像小喇叭。",
      },
      {
        id: "sh-winter-jasmine-clue-2",
        type: "description",
        text: "枝条又细又长,绿色的,弯弯地垂下来像瀑布。",
      },
      {
        id: "sh-winter-jasmine-clue-3",
        type: "leaf",
        text: "叶子是三片小叶组成的复叶,到很晚才长出来。",
      },
    ],
    knowledge:
      "迎春花是木犀科素馨属落叶灌木。枝条细长拱形下垂,绿色四棱。花先叶开放,黄色,高脚碟状,通常6裂。花期2-3月,是最早报春的花木之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "迎春花枝条上没有叶子就先开满了花,好像着急地喊春天快来。",
    nextObserve: "数一数小黄花的裂片,看看是不是刚好6片像小星星。",
    isSeasonal: true,
    seasonMonths: [2, 3],
    unlockReward: "解锁了迎春花的报春金徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M30 90 Q35 60 40 30" stroke="#5A8B35" stroke-width="3" fill="none"/><path d="M50 90 Q48 60 45 25" stroke="#5A8B35" stroke-width="3" fill="none"/><path d="M70 90 Q68 60 60 30" stroke="#5A8B35" stroke-width="3" fill="none"/><g fill="#F5C542" stroke="#D4A52A" stroke-width="0.5"><circle cx="40" cy="30" r="5"/><circle cx="45" cy="25" r="5"/><circle cx="60" cy="30" r="5"/><circle cx="35" cy="45" r="4"/><circle cx="55" cy="40" r="4"/></g></svg>',
    position: { lng: 121.5155, lat: 31.2695 },
    detailedIntro:
      "迎春花是木犀科素馨属的落叶灌木,因在早春最早开放而得名。其枝条细长,绿色,呈拱形下垂,宛如绿色瀑布。花朵先叶开放,鲜黄色,高脚碟状,通常6裂,花冠形如小喇叭。花期2至3月,是报春的使者。松鹤公园内迎春花早春沿路边开放,金黄一片,为初春增添暖意,与松柏的常绿相映成趣。",
    habitat: "喜光,耐寒耐旱,对土壤要求不严,适应性强,枝条着地即能生根。",
    uses: "重要的早春观花灌木,常栽于路边、坡地或做绿篱;花可入药,有清热解毒之效。",
    culturalNote: "迎春花因最早报春而得名,象征希望与新生,是初春带来暖意的吉祥花木。",
  },
];

const songheParkBuddy: Buddy = {
  id: "sh-buddy-songsong",
  parkId: "songhe-park",
  name: "松松",
  intro: "一缕藏在松针丛里的松精,最爱在清晨的松林间打太极,偶尔会抖落几颗松果当礼物。",
  silhouetteSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="40" rx="20" ry="22" fill="#3A3A3A"/><rect x="46" y="60" width="8" height="20" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="40" rx="20" ry="22" fill="#4A6B3A"/><rect x="46" y="60" width="8" height="20" fill="#2D4A25"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="38" rx="22" ry="24" fill="#4A6B3A" stroke="#2D4A25" stroke-width="2"/><rect x="44" y="60" width="12" height="22" rx="2" fill="#2D4A25"/><circle cx="43" cy="36" r="3.5" fill="#FFF"/><circle cx="43" cy="37" r="1.8" fill="#2B2B2B"/><circle cx="57" cy="36" r="3.5" fill="#FFF"/><circle cx="57" cy="37" r="1.8" fill="#2B2B2B"/><path d="M44 44 Q50 48 56 44" stroke="#2D4A25" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="40" cy="42" r="2" fill="#F8B4C0" opacity="0.7"/><circle cx="60" cy="42" r="2" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 4 },
};

// ===========================================================================
// Heping Park — Plants and Buddy
// ===========================================================================

const hepingParkPlants: PlantDiscovery[] = [
  {
    id: "he-ginkgo",
    parkId: "heping-park",
    name: "银杏",
    scientificName: "Ginkgo biloba",
    clues: [
      {
        id: "he-ginkgo-clue-1",
        type: "leaf",
        text: "它的叶子像一把小扇子,秋天会变成金黄色。",
      },
      {
        id: "he-ginkgo-clue-2",
        type: "bark",
        text: "树皮灰褐色,纵向裂开,像老人的皱纹。",
      },
      {
        id: "he-ginkgo-clue-3",
        type: "description",
        text: "它是活化石,在地球上已经生活了上亿年。",
      },
    ],
    knowledge:
      "银杏是裸子植物银杏科银杏属的唯一现存物种,被誉为\u201C活化石\u201D。其叶片呈扇形,叶脉平行,秋季变为金黄。雌雄异株,种子俗称白果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "银杏的叶子其实不是一片,而是许多裂片拼成的扇形,像小扇子一样。",
    nextObserve: "秋天再来一次,看看满地金黄的扇形落叶。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了银杏的金色叶子徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 Q48 60 45 45" stroke="#8B6F47" stroke-width="4" fill="none"/><path d="M50 90 Q52 60 55 45" stroke="#8B6F47" stroke-width="3" fill="none"/><g fill="#F5C542" stroke="#C49A2A" stroke-width="1"><path d="M42 40 Q37 35 39 27 Q47 30 49 38 Z"/><path d="M58 40 Q63 35 61 27 Q53 30 51 38 Z"/><path d="M50 38 Q45 30 50 22 Q55 30 50 38 Z"/></g><circle cx="50" cy="37" r="2" fill="#8B6F47"/></svg>',
    position: { lng: 121.5050, lat: 31.2785 },
    detailedIntro:
      "银杏是现存最古老的种子植物之一,历史可追溯至2.7亿年前。它的扇形叶片在秋季变为金黄色,是上海秋季最具代表性的景观树种。银杏雌雄异株,雄株高大挺拔,雌株秋季结出白果。作为行道树和公园树种,银杏寿命极长,常被赋予长寿和坚韧的寓意。和平公园内的银杏大道在深秋金黄耀眼,落叶铺地如毯,是秋日赏景的亮点。",
    habitat: "喜光,耐寒耐旱,对土壤适应性强,生长缓慢但寿命极长。",
    uses: "优良的行道树和庭院树种,秋季金黄落叶景观绝佳;种子(白果)可食用和入药。",
    culturalNote: "银杏被誉为\u201C活化石\u201D,在中国常种植于古刹名寺,象征长寿与坚韧。",
  },
  {
    id: "he-cherry",
    parkId: "heping-park",
    name: "樱花",
    scientificName: "Prunus serrulata",
    clues: [
      {
        id: "he-cherry-clue-1",
        type: "flower",
        text: "春天里它开出粉白色的小花,一簇簇的像云朵。",
      },
      {
        id: "he-cherry-clue-2",
        type: "leaf",
        text: "叶子边缘有小锯齿,形状像小椭圆。",
      },
      {
        id: "he-cherry-clue-3",
        type: "description",
        text: "风一吹,花瓣就纷纷扬扬落下来,像粉色的雪。",
      },
    ],
    knowledge:
      "樱花是蔷薇科李属的落叶乔木,花期短暂,通常在3-4月盛开。花单瓣或重瓣,颜色从白到深粉。花瓣先端有缺刻,是辨认樱花的特征之一。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "樱花花瓣的尖端有个小缺口,就像被咬了一小口,这是它的小秘密。",
    nextObserve: "数一数一朵樱花有几片花瓣,大多数是5片哦。",
    isSeasonal: true,
    seasonMonths: [3, 4],
    unlockReward: "解锁了樱花的粉色花瓣徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#8B6F47" stroke-width="4"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><circle cx="35" cy="30" r="8"/><circle cx="65" cy="30" r="8"/><circle cx="50" cy="20" r="9"/></g><g fill="#FFE4A1"><circle cx="50" cy="32" r="3"/></g></svg>',
    position: { lng: 121.5070, lat: 31.2775 },
    detailedIntro:
      "樱花是蔷薇科李属的落叶乔木,花期短暂而绚烂,通常在3至4月间盛开。花朵单瓣或重瓣,颜色从纯白到深粉,花瓣先端有缺刻,是辨认樱花的重要特征。盛开时满树繁花如云似霞,微风拂过花瓣纷飞,形成浪漫的花雨景观。和平公园的樱花在春日盛开,粉花映湖,是春季赏樱的热门去处。",
    habitat: "喜阳光充足、温暖湿润的环境,要求排水良好的微酸性土壤。",
    uses: "春季重要的观花树种,常成片种植形成花海景观,也是城市公园和滨水绿地的优选树种。",
    culturalNote: "樱花象征春日与美好,花期短暂常被赋予惜春的文化意涵,赏樱是深受喜爱的春日习俗。",
  },
  {
    id: "he-camphor",
    parkId: "heping-park",
    name: "香樟",
    scientificName: "Cinnamomum camphora",
    clues: [
      {
        id: "he-camphor-clue-1",
        type: "leaf",
        text: "叶子揉一揉,会有一股清凉的樟脑香。",
      },
      {
        id: "he-camphor-clue-2",
        type: "bark",
        text: "树皮有不规则的裂纹,像拼图碎片。",
      },
      {
        id: "he-camphor-clue-3",
        type: "description",
        text: "它长得很高大,树冠圆圆的像一把绿色的大伞。",
      },
    ],
    knowledge:
      "香樟是樟科樟属常绿大乔木,是上海市市树。全株含樟脑香气,叶互生,卵形,叶脉离基三出。木材防虫,常用于制作家具和箱柜。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "香樟是上海的市树,揉一揉它的叶子,手上会留下凉凉的香味。",
    nextObserve: "摘一片叶子揉一揉,闻闻是不是有清凉的味道。",
    isSeasonal: false,
    unlockReward: "解锁了香樟的清凉香气徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 65" stroke="#6B4E2F" stroke-width="5"/><ellipse cx="50" cy="35" rx="35" ry="25" fill="#3A6B35"/><ellipse cx="35" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="65" cy="43" rx="18" ry="13" fill="#4A7B45"/><ellipse cx="50" cy="28" rx="20" ry="15" fill="#5A8B55"/></svg>',
    position: { lng: 121.5055, lat: 31.2790 },
    detailedIntro:
      "香樟是樟科樟属的常绿大乔木,也是上海市的市树。全株散发独特的樟脑清香,叶片互生、卵形,叶脉呈离基三出。树冠圆整如伞,四季常青,是优秀的遮荫树种。香樟木材含有天然樟脑,防虫耐腐,自古便是制作箱柜、家具的上等材料。和平公园内香樟成荫,浓荫如盖,为市民提供清凉的休憩空间。",
    habitat: "喜温暖湿润、阳光充足气候,根系发达,对土壤要求不严,寿命长且生长较快。",
    uses: "优良的行道树和庭荫树;木材防虫耐腐,可提取樟脑和樟油,用于医药及工业。",
    culturalNote: "香樟是上海市树,江南一带常以古樟为村落风水树,寓意庇荫与长寿。",
  },
  {
    id: "he-magnolia",
    parkId: "heping-park",
    name: "广玉兰",
    scientificName: "Magnolia grandiflora",
    clues: [
      {
        id: "he-magnolia-clue-1",
        type: "leaf",
        text: "叶子又大又厚,正面油绿发亮,背面有锈色的绒毛。",
      },
      {
        id: "he-magnolia-clue-2",
        type: "flower",
        text: "初夏开出白色大花,像一只只白瓷杯。",
      },
      {
        id: "he-magnolia-clue-3",
        type: "description",
        text: "花谢之后,会结出有趣的聚合果,像一颗小松球。",
      },
    ],
    knowledge:
      "广玉兰是木兰科北美木兰属常绿乔木,原产北美。叶革质,背面有锈色绒毛。花期5-6月,花大白色,芳香。果实为聚合蓇葖果。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "广玉兰的叶子背面有一层棕色的绒毛,摸起来毛茸茸的,像小毯子。",
    nextObserve: "翻一片叶子看看背面,感受一下那层绒绒的触感。",
    isSeasonal: false,
    unlockReward: "解锁了广玉兰的洁白花朵徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 55" stroke="#6B4E2F" stroke-width="5"/><g fill="#3A6B35"><ellipse cx="38" cy="48" rx="12" ry="5" transform="rotate(-25 38 48)"/><ellipse cx="62" cy="48" rx="12" ry="5" transform="rotate(25 62 48)"/><ellipse cx="50" cy="40" rx="10" ry="5"/></g><g fill="#FFFAF0" stroke="#E8D5B8" stroke-width="1"><path d="M50 35 Q44 28 45 18 Q50 25 50 35 Z"/><path d="M50 35 Q56 28 55 18 Q50 25 50 35 Z"/></g><circle cx="50" cy="33" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.5065, lat: 31.2785 },
    detailedIntro:
      "广玉兰是木兰科北美木兰属的常绿乔木,原产于北美洲东南部。它的叶片革质肥厚,正面油绿发亮,背面密生锈色绒毛,触感独特。初夏时节开出硕大的白色花朵,形似白瓷杯,芳香浓郁。花谢后结出聚生蓇葖果,外观酷似小松球,十分有趣。和平公园内广玉兰四季常青,初夏白花满树,是夏初赏花的看点。",
    habitat: "喜温暖湿润气候,较耐阴,宜生于肥沃排水良好的微酸性土壤。",
    uses: "优良的庭荫树和行道树,四季常青,初夏白花芳香,是公园和道路绿化的常用树种。",
    culturalNote: "广玉兰自北美引入中国后广为栽培,因叶厚花大、常绿不凋,象征坚贞与高洁。",
  },
  {
    id: "he-metasequoia",
    parkId: "heping-park",
    name: "水杉",
    scientificName: "Metasequoia glyptostroboides",
    clues: [
      {
        id: "he-metasequoia-clue-1",
        type: "leaf",
        text: "叶子细细的,像一排排小羽毛贴在枝条上。",
      },
      {
        id: "he-metasequoia-clue-2",
        type: "bark",
        text: "树干笔直,树皮红褐色,会一条条剥落。",
      },
      {
        id: "he-metasequoia-clue-3",
        type: "description",
        text: "它喜欢长在水边,秋天叶子变成漂亮的铁锈红。",
      },
    ],
    knowledge:
      "水杉是柏科水杉属落叶乔木,中国特有孑遗植物,被誉为\u201C活化石\u201D。叶对生,条形,扁平,秋叶红褐色。喜湿润,常生于水边。1941年在中国被重新发现,引起植物学界轰动。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "水杉曾经只在化石里被发现,后来在中国被找到活的,让全世界惊喜。",
    nextObserve: "看看它的叶子是不是两两相对,像小梳子一样整齐。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了水杉的羽毛叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 20" stroke="#8B5A3C" stroke-width="4"/><g fill="#C46A3C"><ellipse cx="50" cy="18" rx="8" ry="6"/><ellipse cx="38" cy="35" rx="10" ry="5"/><ellipse cx="62" cy="35" rx="10" ry="5"/><ellipse cx="35" cy="55" rx="12" ry="5"/><ellipse cx="65" cy="55" rx="12" ry="5"/></g></svg>',
    position: { lng: 121.5045, lat: 31.2770 },
    detailedIntro:
      "水杉是柏科水杉属的落叶乔木,为中国特有的孑遗植物,被誉为\u201C活化石\u201D。它曾一度仅见于化石记录,1941年在四川万县被重新发现活体植株,轰动了全球植物学界。叶片对生、条形扁平,秋季转为铁锈红色,格外绚丽。水杉喜生于水边湿地,常成片种植形成壮美的杉林景观。和平公园内水杉临湖而立,秋日红叶映水,是秋赏的绝佳去处。",
    habitat: "喜温暖湿润,耐水湿,常生于水边河畔,适宜深厚肥沃的微酸性土壤。",
    uses: "优秀的滨水绿化和风景林树种,秋叶红褐绚丽;也是珍贵的孑遗植物,具重要科研价值。",
    culturalNote: "水杉被誉为植物界\u201C活化石\u201D,是中国植物学重大发现之一,曾作为国礼赠送外国,象征友谊与珍稀。",
  },
  {
    id: "he-lotus",
    parkId: "heping-park",
    name: "荷花",
    scientificName: "Nelumbo nucifera",
    clues: [
      {
        id: "he-lotus-clue-1",
        type: "leaf",
        text: "叶子又大又圆,像一把把绿色的小伞撑在水面上。",
      },
      {
        id: "he-lotus-clue-2",
        type: "flower",
        text: "夏天开出粉红色的大花,挺出水面,像小莲花座。",
      },
      {
        id: "he-lotus-clue-3",
        type: "description",
        text: "叶子和花上总有小水珠滚来滚去,怎么也打不湿。",
      },
    ],
    knowledge:
      "荷花是莲科莲属多年生水生草本。叶圆形,盾状,挺出水面。花期6-8月,花粉红或白色。根状茎(藕)横走于水底泥中。是重要的水生观赏和经济植物,在中国栽培历史悠久。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "荷叶表面有微小的凸起,水珠在上面滚来滚去,把叶面上的灰尘也一起带走,这就是\u201C荷叶自洁效应\u201D。",
    nextObserve: "往荷叶上洒点水,看看水珠是不是滚来滚去,打不湿叶子。",
    isSeasonal: true,
    seasonMonths: [6, 7, 8],
    unlockReward: "解锁了荷花的出水芙蓉徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="90" rx="42" ry="6" fill="#A8C8D8" opacity="0.5"/><g fill="#4A8B45"><ellipse cx="30" cy="80" rx="14" ry="6"/><ellipse cx="70" cy="80" rx="14" ry="6"/><ellipse cx="50" cy="72" rx="16" ry="7"/></g><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="0.5"><path d="M50 60 Q42 50 44 35 Q50 45 50 60 Z"/><path d="M50 60 Q58 50 56 35 Q50 45 50 60 Z"/><path d="M50 60 Q40 55 35 45 Q48 55 50 60 Z"/><path d="M50 60 Q60 55 65 45 Q52 55 50 60 Z"/></g><circle cx="50" cy="55" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.5065, lat: 31.2792 },
    detailedIntro:
      "荷花是莲科莲属的多年生水生草本,原产中国,栽培历史悠久。叶片圆形盾状,挺出水面,碧绿如盖。花期6至8月,花粉红或白色,亭亭玉立,清香远溢。根状茎(藕)横走于水底泥中,是重要的水生蔬菜。荷花\u201C出淤泥而不染\u201D,自古为文人雅士推崇。和平公园湖面夏日荷花盛开,碧叶红花,是夏日赏荷的绝佳去处。",
    habitat: "典型的水生植物,喜温暖阳光充足环境,要求静水、肥沃的塘泥,不耐寒。",
    uses: "重要的水生观赏植物;藕可食用,莲子可食可药,全株各部分均有药用价值。",
    culturalNote: "荷花\u201C出淤泥而不染,濯清涟而不妖\u201D,自古象征高洁,是佛教和传统文化中的重要意象。",
  },
  {
    id: "he-maple",
    parkId: "heping-park",
    name: "枫树",
    scientificName: "Acer palmatum",
    clues: [
      {
        id: "he-maple-clue-1",
        type: "leaf",
        text: "叶子像小手掌一样,有五到七个尖尖的裂片。",
      },
      {
        id: "he-maple-clue-2",
        type: "description",
        text: "秋天叶子会变成漂亮的红色或橙色,像一团火。",
      },
      {
        id: "he-maple-clue-3",
        type: "bark",
        text: "树皮灰褐色,光滑,小枝细细的伸展开来。",
      },
    ],
    knowledge:
      "枫树是无患子科槭属落叶小乔木。叶掌状分裂,5至7裂,对生。秋叶变红或橙黄,色彩绚丽。翅果,两两相对如蝶翅。是著名的秋色叶树种。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "枫树的叶子是两两相对的,连果实也成对长着翅膀,像小蝴蝶一样转着飞下来。",
    nextObserve: "捡一片红枫叶,数一数它有几个裂片,看看像不像张开的手指。",
    isSeasonal: true,
    seasonMonths: [11],
    unlockReward: "解锁了枫树的红叶掌徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#6B4E2F" stroke-width="4"/><g fill="#C44030"><path d="M50 45 L35 35 L30 42 L40 48 Z"/><path d="M50 45 L65 35 L70 42 L60 48 Z"/><path d="M50 45 L40 25 L48 22 L50 40 Z"/><path d="M50 45 L60 25 L52 22 L50 40 Z"/><path d="M50 45 L50 20"/></g></svg>',
    position: { lng: 121.505, lat: 31.279 },
    detailedIntro:
      "枫树是无患子科槭属的落叶小乔木,原产于中国和日本。其叶片掌状分裂,通常5至7裂,裂片尖锐如手指张开,形态优雅。秋季气温下降,叶片逐渐变为鲜红或橙红色,色彩绚烂,是秋季最具代表性的色叶树种。枫树树形小巧精致,枝条层叠,也常制作成盆景。和平公园的枫树秋季红叶如火,为秋日湖畔增添一抹绚烂的暖色。",
    habitat: "喜温和湿润气候,耐半阴,要求肥沃排水良好的微酸性土壤,忌烈日暴晒。",
    uses: "重要的秋色叶观赏树种,常孤植或丛植于庭院、水畔;也可制作盆景,姿态古朴雅致。",
    culturalNote: "\u201C停车坐爱枫林晚,霜叶红于二月花\u201D,枫叶在古诗词中是秋思的经典意象,象征绚烂与成熟。",
  },
  {
    id: "he-willow",
    parkId: "heping-park",
    name: "垂柳",
    scientificName: "Salix babylonica",
    clues: [
      {
        id: "he-willow-clue-1",
        type: "leaf",
        text: "叶子又细又长,像小小的绿色眉毛。",
      },
      {
        id: "he-willow-clue-2",
        type: "description",
        text: "枝条细细软软地垂下来,风一吹就飘来飘去,像绿色的帘子。",
      },
      {
        id: "he-willow-clue-3",
        type: "bark",
        text: "树皮暗灰色,有纵裂,长在水边弯着腰。",
      },
    ],
    knowledge:
      "垂柳是杨柳科柳属落叶乔木。小枝细长下垂。叶条状披针形,互生。花雌雄异株,葇荑花序。喜水湿,常生于河湖岸边。枝条柔韧,生根迅速。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "垂柳的枝条着地就能扎根长出新树,是一位繁殖小能手。",
    nextObserve: "摇一摇垂下来的柳条,看看是不是又软又韧,像绿色的鞭子。",
    isSeasonal: false,
    unlockReward: "解锁了垂柳的绿丝绦徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 35" stroke="#6B4E2F" stroke-width="5"/><g stroke="#5A8B35" stroke-width="2" fill="none"><path d="M40 35 Q35 60 33 85"/><path d="M45 35 Q43 55 41 85"/><path d="M55 35 Q57 55 59 85"/><path d="M60 35 Q65 60 67 85"/></g><g fill="#5A8B35"><ellipse cx="50" cy="30" rx="25" ry="12"/></g></svg>',
    position: { lng: 121.507, lat: 31.278 },
    detailedIntro:
      "垂柳是杨柳科柳属的落叶乔木,枝条细长柔韧,自然下垂,姿态优美飘逸。叶片条状披针形,互生,嫩绿轻盈。垂柳喜水湿,常生于河湖岸边,枝条拂水,形成柳岸水影的经典景观。和平公园湖畔垂柳成行,春日嫩绿如烟,枝条拂水,是水边漫步赏景的佳处。",
    habitat: "喜水湿,耐涝,生长迅速,要求湿润肥沃的土壤,常生于河岸湖畔。",
    uses: "重要的水滨绿化树种,姿态优美;枝条柔韧可编筐;木材轻软可制家具;根系发达有固堤作用。",
    culturalNote: "\u201C碧玉妆成一树高,万条垂下绿丝绦\u201D,垂柳在古诗中是春日与柔情的经典意象,象征离别与思念。",
  },
  {
    id: "he-yulan",
    parkId: "heping-park",
    name: "玉兰",
    scientificName: "Magnolia denudata",
    clues: [
      {
        id: "he-yulan-clue-1",
        type: "flower",
        text: "春天还没长叶子,就先开出满树白色大花,像一只只白鸽停在枝头。",
      },
      {
        id: "he-yulan-clue-2",
        type: "description",
        text: "花瓣厚厚的有九片,排成三层,外面带着淡淡的粉。",
      },
      {
        id: "he-yulan-clue-3",
        type: "bark",
        text: "树皮灰褐色,枝条粗壮挺直,冬天的花芽毛茸茸的。",
      },
    ],
    knowledge:
      "玉兰是木兰科玉兰属落叶乔木。花先叶开放,花期3月,花大白色,芳香,花被9片,分3轮。冬芽大,密被灰绿色长毛。聚合果圆柱形,种子红色。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "玉兰的花芽在秋天就准备好了,外面裹着一层毛茸茸的外套过冬,春天一到就开花。",
    nextObserve: "找一找冬天的花芽,看看是不是毛茸茸的像小笔头。",
    isSeasonal: true,
    seasonMonths: [3],
    unlockReward: "解锁了玉兰的白鸽花徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 55" stroke="#6B4E2F" stroke-width="4"/><g fill="#FFFAF0" stroke="#E8D5B8" stroke-width="1"><path d="M50 45 Q40 35 42 22 Q50 30 50 45 Z"/><path d="M50 45 Q60 35 58 22 Q50 30 50 45 Z"/><path d="M50 45 Q38 40 30 30 Q44 36 50 45 Z"/><path d="M50 45 Q62 40 70 30 Q56 36 50 45 Z"/></g><circle cx="50" cy="42" r="3" fill="#F5C542"/></svg>',
    position: { lng: 121.506, lat: 31.277 },
    detailedIntro:
      "玉兰是木兰科玉兰属的落叶乔木,原产于中国中部,已有两千余年栽培历史。其最迷人的特征是先花后叶,早春时节满树白花,花瓣9枚分3轮排列,洁白如玉,芳香清雅。冬季花芽密被灰绿色绒毛,如毛笔头,春来绽放。玉兰花朵硕大,盛放时满树如雪,落瓣时如白玉坠地。和平公园的玉兰春季盛开,白花满枝,亭亭玉立,是春日赏花的佳处。",
    habitat: "喜阳光充足,稍耐阴,喜肥沃排水良好的微酸性土壤,忌积水和严寒。",
    uses: "著名的早春观花树种,花大而香;花瓣可食可提取精油;树皮和花蕾可入药。",
    culturalNote: "玉兰又名望春花、木兰,自唐宋起即为名贵花木,象征高洁清雅,常植于宅院和寺庙。",
  },
  {
    id: "he-crabapple",
    parkId: "heping-park",
    name: "海棠",
    scientificName: "Malus spectabilis",
    clues: [
      {
        id: "he-crabapple-clue-1",
        type: "flower",
        text: "春天开出一簇簇粉红色的花,重重叠叠的像小玫瑰。",
      },
      {
        id: "he-crabapple-clue-2",
        type: "leaf",
        text: "叶子卵形,边缘有细钝齿,嫩叶时带点红色。",
      },
      {
        id: "he-crabapple-clue-3",
        type: "bark",
        text: "树皮灰褐色,枝条紫褐色,小枝粗壮。",
      },
    ],
    knowledge:
      "海棠是蔷薇科苹果属落叶小乔木。叶卵形,有钝齿。花4-5朵簇生,半重瓣,粉红色。果近球形,黄色。花期4月,是重要的春季观花树。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "海棠的花骨朵是深粉色的,开了之后变浅,一棵树上能有好几种深浅的粉。",
    nextObserve: "比一比花骨朵和盛开的花,颜色是不是深浅不一样。",
    isSeasonal: true,
    seasonMonths: [4],
    unlockReward: "解锁了海棠的胭脂红徽章!",
    fullSvg:
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><path d="M50 90 L50 50" stroke="#6B4E2F" stroke-width="4"/><g fill="#3A6B35"><ellipse cx="40" cy="50" rx="6" ry="3" transform="rotate(-20 40 50)"/><ellipse cx="60" cy="50" rx="6" ry="3" transform="rotate(20 60 50)"/></g><g fill="#E88A9E"><circle cx="35" cy="35" r="7"/><circle cx="50" cy="28" r="8"/><circle cx="65" cy="35" r="7"/></g><g fill="#F8B4C0"><circle cx="35" cy="35" r="4"/><circle cx="50" cy="28" r="5"/><circle cx="65" cy="35" r="4"/></g></svg>',
    position: { lng: 121.5045, lat: 31.2785 },
    detailedIntro:
      "海棠是蔷薇科苹果属的落叶小乔木,原产于中国,栽培历史悠久。花期4月,花4至5朵簇生,半重瓣,花蕾深红,绽放后粉红,层层叠叠,娇艳动人。叶片卵形,嫩叶带红。秋季结出球形黄色小果,亦可观赏。海棠花姿潇洒,艳而不俗,素有花中神仙之称。和平公园的海棠春日花满枝头,粉红如云,是春日赏花的亮点。",
    habitat: "喜阳光充足,耐寒,要求肥沃排水良好的土壤,对环境适应性强。",
    uses: "重要的春季观花树种,花果兼赏;果可食可制蜜饯;也是盆景的优良材料。",
    culturalNote: "海棠素有花中神仙之称,与玉兰、牡丹、桂花合配寓意玉棠富贵,是传统园林的吉祥花木。",
  },
];

const hepingParkBuddy: Buddy = {
  id: "he-buddy-hehe",
  parkId: "heping-park",
  name: "和和",
  intro: "一只衔着橄榄枝的小白鸽精,最爱在湖面上盘旋,把和平的祝福撒给每一位来公园的人。",
  silhouetteSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="50" rx="18" ry="20" fill="#3A3A3A"/><circle cx="50" cy="28" r="8" fill="#3A3A3A"/><path d="M50 28 L58 22" stroke="#3A3A3A" stroke-width="3"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="50" rx="18" ry="20" fill="#9AB8C8"/><circle cx="50" cy="28" r="8" fill="#9AB8C8"/><path d="M50 28 L58 22" stroke="#8B6F47" stroke-width="2"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#FDF6E3"/><ellipse cx="50" cy="50" rx="18" ry="20" fill="#FFFAF0" stroke="#C8D5B8" stroke-width="2"/><circle cx="50" cy="28" r="9" fill="#FFFAF0" stroke="#C8D5B8" stroke-width="2"/><path d="M50 28 L60 22" stroke="#8B6F47" stroke-width="2.5"/><g fill="#5A8B55"><ellipse cx="62" cy="20" rx="6" ry="2.5" transform="rotate(-15 62 20)"/></g><circle cx="47" cy="27" r="2.5" fill="#FFF"/><circle cx="47" cy="28" r="1.3" fill="#2B2B2B"/><path d="M44 35 Q50 40 56 35" stroke="#C8D5B8" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="42" cy="33" r="2" fill="#F8B4C0" opacity="0.7"/><circle cx="58" cy="33" r="2" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 4 },
};

// ===========================================================================
// Yangpu district park data summary
// ===========================================================================

export const yangpuParks: Park[] = [
  {
    id: "gongqing-park",
    name: "共青森林公园",
    district: "杨浦区",
    intro: "共青森林公园位于杨浦区嫩江路,是上海最大的森林式公园。园内水杉林茂密,秋有金黄银杏,秋日桂花飘香,是市民亲近自然的城市绿洲。",
    lng: 121.5270,
    lat: 31.2975,
    boundary: [
      [
        [121.5240, 31.2955],
        [121.5300, 31.2955],
        [121.5310, 31.2995],
        [121.5250, 31.2995],
        [121.5240, 31.2955],
      ],
    ],
    trails: [
      [
        [121.5250, 31.2960],
        [121.5280, 31.2975],
        [121.5290, 31.2990],
      ],
    ],
    mapSource: "openstreetmap",
    hasReliableInternalMap: false,
    plants: gongqingParkPlants,
    buddy: gongqingParkBuddy,
    themeColor: "#4A7C3F",
    themeColorDark: "#2D5025",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,植物分布为示意位置,未经实地调查核实",
  },
  {
    id: "huangxing-park",
    name: "黄兴公园",
    district: "杨浦区",
    intro: "黄兴公园位于杨浦区控江路,以纪念黄兴先生而得名。园内春有樱花烂漫,夏有广玉兰白花如杯,紫薇花期绵长,是周边居民晨练散步的好去处。",
    lng: 121.5155,
    lat: 31.2830,
    boundary: [
      [
        [121.5130, 31.2810],
        [121.5180, 31.2810],
        [121.5180, 31.2850],
        [121.5130, 31.2850],
        [121.5130, 31.2810],
      ],
    ],
    trails: [
      [
        [121.5140, 31.2820],
        [121.5170, 31.2830],
        [121.5150, 31.2845],
      ],
    ],
    mapSource: "openstreetmap",
    hasReliableInternalMap: false,
    plants: huangxingParkPlants,
    buddy: huangxingParkBuddy,
    themeColor: "#6B8E5A",
    themeColorDark: "#3F5E32",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,植物分布为示意位置,未经实地调查核实",
  },
  {
    id: "yangpu-park",
    name: "杨浦公园",
    district: "杨浦区",
    intro: "杨浦公园位于双阳路,是杨浦区历史悠久的综合性公园。园内百年香樟浓荫蔽日,春末紫藤如瀑,隆冬腊梅凌寒怒放,四季各有景致。",
    lng: 121.5235,
    lat: 31.2750,
    boundary: [
      [
        [121.5210, 31.2730],
        [121.5260, 31.2730],
        [121.5260, 31.2770],
        [121.5210, 31.2770],
        [121.5210, 31.2730],
      ],
    ],
    trails: [
      [
        [121.5220, 31.2740],
        [121.5250, 31.2755],
        [121.5230, 31.2765],
      ],
    ],
    mapSource: "openstreetmap",
    hasReliableInternalMap: false,
    plants: yangpuParkPlants,
    buddy: yangpuParkBuddy,
    themeColor: "#7C9885",
    themeColorDark: "#445548",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,植物分布为示意位置,未经实地调查核实",
  },
  {
    id: "fuxing-park",
    name: "复兴岛公园",
    district: "杨浦区",
    intro: "复兴岛公园位于黄浦江上的复兴岛,是上海罕见的岛屿公园。园内垂柳映水,夹竹桃夏秋花开不断,芦苇丛生,是观察滨水生态的静谧去处。",
    lng: 121.5300,
    lat: 31.2700,
    boundary: [
      [
        [121.5275, 31.2685],
        [121.5325, 31.2685],
        [121.5325, 31.2715],
        [121.5275, 31.2715],
        [121.5275, 31.2685],
      ],
    ],
    trails: [
      [
        [121.5285, 31.2690],
        [121.5315, 31.2700],
        [121.5295, 31.2710],
      ],
    ],
    mapSource: "openstreetmap",
    hasReliableInternalMap: false,
    plants: fuxingParkPlants,
    buddy: fuxingParkBuddy,
    themeColor: "#5B7C99",
    themeColorDark: "#3A5468",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,植物分布为示意位置,未经实地调查核实",
  },
  {
    id: "jiangpu-park",
    name: "江浦公园",
    district: "杨浦区",
    intro: "江浦公园位于杨浦区江浦路,是周边社区休闲健身的小型公园。园内桂花秋日飘香,银杏深秋金黄,茶花冬春凌寒绽放,是闹中取静的社区绿洲。",
    lng: 121.5180,
    lat: 31.2880,
    boundary: [
      [
        [121.5160, 31.2865],
        [121.5200, 31.2865],
        [121.5200, 31.2895],
        [121.5160, 31.2895],
        [121.5160, 31.2865],
      ],
    ],
    trails: [
      [
        [121.5170, 31.2870],
        [121.5190, 31.2880],
        [121.5175, 31.2890],
      ],
    ],
    mapSource: "openstreetmap",
    hasReliableInternalMap: false,
    plants: jiangpuParkPlants,
    buddy: jiangpuParkBuddy,
    themeColor: "#8B7355",
    themeColorDark: "#5C4A35",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,植物分布为示意位置,未经实地调查核实",
  },
  {
    id: "songhe-park",
    name: "松鹤公园",
    district: "杨浦区",
    intro:
      "松鹤公园位于杨浦区控江路,以松鹤命名,寓意长寿吉祥。园内松柏常青,环境清幽,是周边居民晨练休闲的好去处。",
    lng: 121.5140,
    lat: 31.2700,
    boundary: [
      [
        [121.5120, 31.2685],
        [121.5160, 31.2685],
        [121.5160, 31.2715],
        [121.5120, 31.2715],
        [121.5120, 31.2685],
      ],
    ],
    trails: [
      [
        [121.5125, 31.2690],
        [121.5150, 31.2700],
        [121.5130, 31.2710],
      ],
    ],
    mapSource: "openstreetmap",
    hasReliableInternalMap: false,
    plants: songheParkPlants,
    buddy: songheParkBuddy,
    themeColor: "#6B7F3F",
    themeColorDark: "#3F4A24",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,植物分布为示意位置,未经实地调查核实",
  },
  {
    id: "heping-park",
    name: "和平公园",
    district: "杨浦区",
    intro:
      "和平公园位于杨浦区大连路,是杨浦区最大的综合性公园之一。园内湖光树影,四季分明,是市民亲近自然的城市绿洲。",
    lng: 121.5060,
    lat: 31.2780,
    boundary: [
      [
        [121.5040, 31.2765],
        [121.5080, 31.2765],
        [121.5080, 31.2795],
        [121.5040, 31.2795],
        [121.5040, 31.2765],
      ],
    ],
    trails: [
      [
        [121.5045, 31.2770],
        [121.5070, 31.2780],
        [121.5055, 31.2790],
      ],
    ],
    mapSource: "openstreetmap",
    hasReliableInternalMap: false,
    plants: hepingParkPlants,
    buddy: hepingParkBuddy,
    themeColor: "#5B8C7A",
    themeColorDark: "#3A5C4E",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,植物分布为示意位置,未经实地调查核实",
  },
];

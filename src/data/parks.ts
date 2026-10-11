// Park Buddies demo park data
// All data in this file is demo content, not verified by field investigation, and is for feature demonstration only.

import type { Park, PlantDiscovery, Buddy } from "../models/types";

// ===========================================================================
// People's Park — Plants and Buddy
// ===========================================================================

const peoplesParkPlants: PlantDiscovery[] = [
  {
    id: "pp-ginkgo",
    parkId: "peoples-park",
    name: "银杏",
    scientificName: "Ginkgo biloba",
    clues: [
      {
        id: "pp-ginkgo-clue-1",
        type: "leaf",
        text: "它的叶子像一把小扇子,秋天会变成金黄色。",
      },
      {
        id: "pp-ginkgo-clue-2",
        type: "bark",
        text: "树皮灰褐色,纵向裂开,像老人的皱纹。",
      },
      {
        id: "pp-ginkgo-clue-3",
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
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 180 Q95 120 90 90" stroke="#8B6F47" stroke-width="8" fill="none"/><path d="M100 180 Q105 120 110 90" stroke="#8B6F47" stroke-width="6" fill="none"/><g fill="#F5C542" stroke="#C49A2A" stroke-width="1.5"><path d="M85 75 Q75 65 78 50 Q90 55 95 70 Z"/><path d="M115 75 Q125 65 122 50 Q110 55 105 70 Z"/><path d="M100 70 Q92 55 100 40 Q108 55 100 70 Z"/></g><circle cx="100" cy="72" r="3" fill="#8B6F47"/></svg>',
    position: { lng: 121.4740, lat: 31.2325 },
    detailedIntro:
      "银杏是现存最古老的种子植物之一,历史可追溯至2.7亿年前。它的扇形叶片在秋季变为金黄色,是上海秋季最具代表性的景观树种。银杏雌雄异株,雄株高大挺拔,雌株秋季结出白果。作为行道树和公园树种,银杏寿命极长,常被赋予长寿和坚韧的寓意。",
    habitat: "喜光,耐寒耐旱,对土壤适应性强,生长缓慢但寿命极长。",
    uses: "优良的行道树和庭院树种,秋季金黄落叶景观绝佳;种子(白果)可食用和入药。",
    culturalNote: "银杏被誉为\u201C活化石\u201D,在中国常种植于古刹名寺,象征长寿与坚韧。",
  },
  {
    id: "pp-cherry",
    parkId: "peoples-park",
    name: "樱花",
    scientificName: "Prunus serrulata",
    clues: [
      {
        id: "pp-cherry-clue-1",
        type: "flower",
        text: "春天里它开出粉白色的小花,一簇簇的像云朵。",
      },
      {
        id: "pp-cherry-clue-2",
        type: "leaf",
        text: "叶子边缘有小锯齿,形状像小椭圆。",
      },
      {
        id: "pp-cherry-clue-3",
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
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 180 L100 100" stroke="#8B6F47" stroke-width="6"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="1"><circle cx="70" cy="60" r="14"/><circle cx="130" cy="60" r="14"/><circle cx="100" cy="40" r="16"/><circle cx="85" cy="85" r="12"/><circle cx="115" cy="85" r="12"/></g><g fill="#FFE4A1"><circle cx="100" cy="65" r="5"/><circle cx="78" cy="65" r="3"/><circle cx="122" cy="65" r="3"/></g></svg>',
    position: { lng: 121.4760, lat: 31.2315 },
    detailedIntro:
      "樱花是蔷薇科李属的落叶乔木,花期短暂而绚烂,通常在3至4月间盛开。花朵单瓣或重瓣,颜色从纯白到深粉,花瓣先端有缺刻,是辨认樱花的重要特征。盛开时满树繁花如云似霞,微风拂过花瓣纷飞,形成浪漫的花雨景观。樱花虽花期不长,却正因短暂而被格外珍惜。",
    habitat: "喜阳光充足、温暖湿润的环境,要求排水良好的微酸性土壤。",
    uses: "春季重要的观花树种,常成片种植形成花海景观,也是城市公园和滨水绿地的优选树种。",
    culturalNote: "樱花象征春日与美好,花期短暂常被赋予惜春的文化意涵,赏樱是深受喜爱的春日习俗。",
  },
  {
    id: "pp-magnolia",
    parkId: "peoples-park",
    name: "广玉兰",
    scientificName: "Magnolia grandiflora",
    clues: [
      {
        id: "pp-magnolia-clue-1",
        type: "leaf",
        text: "叶子又大又厚,正面油绿发亮,背面有锈色的绒毛。",
      },
      {
        id: "pp-magnolia-clue-2",
        type: "flower",
        text: "初夏开出白色大花,像一只只白瓷杯。",
      },
      {
        id: "pp-magnolia-clue-3",
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
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 180 L100 110" stroke="#6B4E2F" stroke-width="7"/><g fill="#3A6B35"><ellipse cx="75" cy="95" rx="22" ry="10" transform="rotate(-25 75 95)"/><ellipse cx="125" cy="95" rx="22" ry="10" transform="rotate(25 125 95)"/><ellipse cx="100" cy="80" rx="18" ry="8"/></g><g fill="#FFFAF0" stroke="#E8D5B8" stroke-width="1.5"><path d="M100 70 Q88 55 90 35 Q100 50 100 70 Z"/><path d="M100 70 Q112 55 110 35 Q100 50 100 70 Z"/><path d="M100 70 Q85 60 70 55 Q88 65 100 70 Z"/><path d="M100 70 Q115 60 130 55 Q112 65 100 70 Z"/></g><circle cx="100" cy="65" r="6" fill="#F5C542"/></svg>',
    position: { lng: 121.4755, lat: 31.2330 },
    detailedIntro:
      "广玉兰是木兰科北美木兰属的常绿乔木,原产于北美洲东南部。它的叶片革质肥厚,正面油绿发亮,背面密生锈色绒毛,触感独特。初夏时节开出硕大的白色花朵,形似白瓷杯,芳香浓郁。花谢后结出聚生蓇葖果,外观酷似小松球,十分有趣。",
    habitat: "喜温暖湿润气候,较耐阴,宜生于肥沃排水良好的微酸性土壤。",
    uses: "优良的庭荫树和行道树,四季常青,初夏白花芳香,是公园和道路绿化的常用树种。",
    culturalNote: "广玉兰自北美引入中国后广为栽培,因叶厚花大、常绿不凋,象征坚贞与高洁。",
  },
];

const peoplesParkBuddy: Buddy = {
  id: "pp-buddy-xiaoye",
  parkId: "peoples-park",
  name: "小叶",
  intro: "一片从老银杏树上飘下来的小叶子精灵,喜欢和人玩捉迷藏。",
  silhouetteSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 60 Q140 70 130 120 Q100 140 70 120 Q60 70 100 60 Z" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 55 Q145 65 135 125 Q100 145 65 125 Q55 65 100 55 Z" fill="#7C9885"/><path d="M100 60 L100 130" stroke="#445548" stroke-width="2"/><path d="M100 90 Q85 85 78 95" stroke="#445548" stroke-width="1.5" fill="none"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 55 Q145 65 135 125 Q100 145 65 125 Q55 65 100 55 Z" fill="#7C9885" stroke="#445548" stroke-width="2"/><path d="M100 60 L100 130" stroke="#445548" stroke-width="2"/><circle cx="85" cy="95" r="5" fill="#FFFFFF"/><circle cx="85" cy="96" r="2.5" fill="#2B2B2B"/><circle cx="115" cy="95" r="5" fill="#FFFFFF"/><circle cx="115" cy="96" r="2.5" fill="#2B2B2B"/><path d="M88 110 Q100 118 112 110" stroke="#445548" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="78" cy="108" r="3" fill="#F8B4C0" opacity="0.7"/><circle cx="122" cy="108" r="3" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 3 },
};

// ===========================================================================
// Zhongshan Park — Plants and Buddy
// ===========================================================================

const zhongshanParkPlants: PlantDiscovery[] = [
  {
    id: "zp-osmanthus",
    parkId: "zhongshan-park",
    name: "桂花",
    scientificName: "Osmanthus fragrans",
    clues: [
      {
        id: "zp-osmanthus-clue-1",
        type: "flower",
        text: "秋天还没见到它,就先闻到了甜甜的香气。",
      },
      {
        id: "zp-osmanthus-clue-2",
        type: "leaf",
        text: "叶子硬硬的,边缘有小小的刺状锯齿。",
      },
      {
        id: "zp-osmanthus-clue-3",
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
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 180 L100 80" stroke="#6B4E2F" stroke-width="6"/><g fill="#3A6B35"><ellipse cx="70" cy="85" rx="18" ry="9" transform="rotate(-20 70 85)"/><ellipse cx="130" cy="85" rx="18" ry="9" transform="rotate(20 130 85)"/><ellipse cx="100" cy="65" rx="16" ry="8"/></g><g fill="#F5C542"><circle cx="80" cy="75" r="3"/><circle cx="88" cy="70" r="3"/><circle cx="95" cy="78" r="3"/><circle cx="120" cy="75" r="3"/><circle cx="112" cy="70" r="3"/><circle cx="105" cy="78" r="3"/><circle cx="100" cy="58" r="3"/></g></svg>',
    position: { lng: 121.4190, lat: 31.2205 },
    detailedIntro:
      "桂花是中国传统十大名花之一,已有2500余年栽培历史。它的花朵虽小如米粒,但芳香浓郁,秋日盛开时满园飘香。桂花分为金桂、银桂、丹桂和四季桂四大类群,花色从淡黄到橙红不等。除了观赏,桂花还可制作桂花糕、桂花酒和桂花茶。",
    habitat: "喜温暖湿润、阳光充足的环境,耐半阴,要求排水良好的微酸性土壤。",
    uses: "重要的香花树种,花可窨制花茶、酿造桂花酒、制作糕点;也是优良的庭院和行道绿化树种。",
    culturalNote: "桂花在我国栽培历史悠久,\u201C蟾宫折桂\u201D以桂喻科举登第,象征荣誉与吉祥。",
  },
  {
    id: "zp-camphor",
    parkId: "zhongshan-park",
    name: "香樟",
    scientificName: "Cinnamomum camphora",
    clues: [
      {
        id: "zp-camphor-clue-1",
        type: "leaf",
        text: "叶子揉一揉,会有一股清凉的樟脑香。",
      },
      {
        id: "zp-camphor-clue-2",
        type: "bark",
        text: "树皮有不规则的裂纹,像拼图碎片。",
      },
      {
        id: "zp-camphor-clue-3",
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
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 180 L100 130" stroke="#6B4E2F" stroke-width="8"/><path d="M100 130 L70 100" stroke="#6B4E2F" stroke-width="4"/><path d="M100 130 L130 100" stroke="#6B4E2F" stroke-width="4"/><ellipse cx="100" cy="70" rx="70" ry="50" fill="#3A6B35"/><ellipse cx="70" cy="85" rx="35" ry="25" fill="#4A7B45"/><ellipse cx="130" cy="85" rx="35" ry="25" fill="#4A7B45"/><ellipse cx="100" cy="55" rx="40" ry="30" fill="#5A8B55"/><g fill="#2A5B25"><ellipse cx="80" cy="70" rx="8" ry="4"/><ellipse cx="120" cy="65" rx="8" ry="4"/><ellipse cx="100" cy="85" rx="8" ry="4"/></g></svg>',
    position: { lng: 121.4210, lat: 31.2195 },
    detailedIntro:
      "香樟是樟科樟属的常绿大乔木,也是上海市的市树。全株散发独特的樟脑清香,叶片互生、卵形,叶脉呈离基三出。树冠圆整如伞,四季常青,是优秀的遮荫树种。香樟木材含有天然樟脑,防虫耐腐,自古便是制作箱柜、家具的上等材料。",
    habitat: "喜温暖湿润、阳光充足气候,根系发达,对土壤要求不严,寿命长且生长较快。",
    uses: "优良的行道树和庭荫树;木材防虫耐腐,可提取樟脑和樟油,用于医药及工业。",
    culturalNote: "香樟是上海市树,江南一带常以古樟为村落风水树,寓意庇荫与长寿。",
  },
  {
    id: "zp-wisteria",
    parkId: "zhongshan-park",
    name: "紫藤",
    scientificName: "Wisteria sinensis",
    clues: [
      {
        id: "zp-wisteria-clue-1",
        type: "flower",
        text: "春天它垂下一串串紫色的花,像瀑布一样。",
      },
      {
        id: "zp-wisteria-clue-2",
        type: "description",
        text: "老藤弯弯绕绕,像粗粗的绳子缠在架子上。",
      },
      {
        id: "zp-wisteria-clue-3",
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
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M40 60 Q100 50 160 60" stroke="#8B6F47" stroke-width="5" fill="none"/><path d="M60 60 Q70 80 65 75" stroke="#8B6F47" stroke-width="3" fill="none"/><g fill="#9B7BC8"><ellipse cx="70" cy="80" rx="5" ry="8"/><ellipse cx="80" cy="95" rx="5" ry="8"/><ellipse cx="90" cy="108" rx="5" ry="8"/><ellipse cx="100" cy="80" rx="5" ry="8"/><ellipse cx="110" cy="95" rx="5" ry="8"/><ellipse cx="120" cy="108" rx="5" ry="8"/><ellipse cx="130" cy="80" rx="5" ry="8"/><ellipse cx="140" cy="95" rx="5" ry="8"/><ellipse cx="150" cy="108" rx="5" ry="8"/></g><g fill="#7C9885"><ellipse cx="55" cy="55" rx="6" ry="3"/><ellipse cx="85" cy="52" rx="6" ry="3"/><ellipse cx="115" cy="52" rx="6" ry="3"/><ellipse cx="145" cy="55" rx="6" ry="3"/></g></svg>',
    position: { lng: 121.4205, lat: 31.2210 },
    detailedIntro:
      "紫藤是豆科紫藤属的落叶藤本植物,老藤左旋缠绕,可攀附棚架长成花廊。每年4至5月间,总状花序自架顶垂下,可达30厘米以上,紫蓝色花朵密集成串,宛如紫色瀑布。叶片为奇数羽状复叶,小叶7至13枚,排列整齐如羽。紫藤是江南园林中最具诗意的棚架植物之一。",
    habitat: "喜光耐旱,是适应性强的藤本植物,对土壤要求不严,宜攀附棚架或老树生长。",
    uses: "优良的棚架、花廊绿化藤本,花序下垂如瀑,观赏价值极高;花可食用和酿酒。",
    culturalNote: "紫藤在唐宋诗词中常被吟咏,象征缠绵情意与高洁气韵,是江南古典园林的代表性藤蔓。",
  },
];

const zhongshanParkBuddy: Buddy = {
  id: "zp-buddy-yaya",
  parkId: "zhongshan-park",
  name: "芽芽",
  intro: "一颗刚从土里冒出头的小芽精灵,对世界充满好奇。",
  silhouetteSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><ellipse cx="100" cy="150" rx="35" ry="12" fill="#3A3A3A"/><path d="M100 150 Q95 110 100 75 Q105 110 100 150" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><ellipse cx="100" cy="150" rx="35" ry="12" fill="#8B7355"/><path d="M100 150 Q96 115 100 80 Q104 115 100 150" fill="#8B7355"/><ellipse cx="100" cy="75" rx="18" ry="10" fill="#7C9885"/><ellipse cx="85" cy="80" rx="10" ry="6" fill="#7C9885" transform="rotate(-30 85 80)"/><ellipse cx="115" cy="80" rx="10" ry="6" fill="#7C9885" transform="rotate(30 115 80)"/></svg>',
  fullSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><ellipse cx="100" cy="150" rx="35" ry="12" fill="#8B7355"/><path d="M100 150 Q96 115 100 80 Q104 115 100 150" fill="#A0825D" stroke="#5C4A35" stroke-width="1.5"/><ellipse cx="100" cy="75" rx="20" ry="14" fill="#7C9885" stroke="#445548" stroke-width="1.5"/><ellipse cx="82" cy="82" rx="12" ry="7" fill="#7C9885" stroke="#445548" stroke-width="1.5" transform="rotate(-35 82 82)"/><ellipse cx="118" cy="82" rx="12" ry="7" fill="#7C9885" stroke="#445548" stroke-width="1.5" transform="rotate(35 118 82)"/><circle cx="92" cy="73" r="4" fill="#FFFFFF"/><circle cx="92" cy="74" r="2" fill="#2B2B2B"/><circle cx="108" cy="73" r="4" fill="#FFFFFF"/><circle cx="108" cy="74" r="2" fill="#2B2B2B"/><path d="M94 82 Q100 86 106 82" stroke="#445548" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="85" cy="80" r="2.5" fill="#F8B4C0" opacity="0.7"/><circle cx="115" cy="80" r="2.5" fill="#F8B4C0" opacity="0.7"/></svg>',
  unlockCondition: { discoverCount: 3 },
};

// ===========================================================================
// Century Park — Plants and Buddy
// ===========================================================================

const centuryParkPlants: PlantDiscovery[] = [
  {
    id: "cp-metasequoia",
    parkId: "century-park",
    name: "水杉",
    scientificName: "Metasequoia glyptostroboides",
    clues: [
      {
        id: "cp-metasequoia-clue-1",
        type: "leaf",
        text: "叶子细细的,像一排排小羽毛贴在枝条上。",
      },
      {
        id: "cp-metasequoia-clue-2",
        type: "bark",
        text: "树干笔直,树皮红褐色,会一条条剥落。",
      },
      {
        id: "cp-metasequoia-clue-3",
        type: "description",
        text: "它喜欢长在水边,秋天叶子变成漂亮的铁锈红。",
      },
    ],
    knowledge:
      "水杉是柏科水杉属落叶乔木,中国特有孑遗植物,被誉为\u201C活化石\u201D。叶对生,条形,扁平,秋叶红褐色。喜湿润,常生于水边。1941年在中国被重新发现,引起植物学界轰动。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "水杉曾经只在化石里被发现,后来在中国被找到活的,让全世界惊喜。",
    nextObserve: "看看水杉的叶子是不是两两相对,像小梳子一样整齐。",
    isSeasonal: false,
    unlockReward: "解锁了水杉的羽毛叶徽章!",
    fullSvg:
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 180 L100 40" stroke="#8B5A3C" stroke-width="7"/><path d="M100 60 L70 50" stroke="#8B5A3C" stroke-width="3"/><path d="M100 60 L130 50" stroke="#8B5A3C" stroke-width="3"/><path d="M100 90 L65 80" stroke="#8B5A3C" stroke-width="3"/><path d="M100 90 L135 80" stroke="#8B5A3C" stroke-width="3"/><path d="M100 120 L60 110" stroke="#8B5A3C" stroke-width="3"/><path d="M100 120 L140 110" stroke="#8B5A3C" stroke-width="3"/><g fill="#C46A3C"><ellipse cx="100" cy="35" rx="14" ry="10"/><ellipse cx="82" cy="55" rx="16" ry="8"/><ellipse cx="118" cy="55" rx="16" ry="8"/><ellipse cx="78" cy="85" rx="18" ry="8"/><ellipse cx="122" cy="85" rx="18" ry="8"/><ellipse cx="74" cy="115" rx="18" ry="8"/><ellipse cx="126" cy="115" rx="18" ry="8"/></g></svg>',
    position: { lng: 121.5485, lat: 31.2290 },
    detailedIntro:
      "水杉是柏科水杉属的落叶乔木,为中国特有的孑遗植物,被誉为\u201C活化石\u201D。它曾一度仅见于化石记录,1941年在四川万县被重新发现活体植株,轰动了全球植物学界。叶片对生、条形扁平,秋季转为铁锈红色,格外绚丽。水杉喜生于水边湿地,常成片种植形成壮美的杉林景观。",
    habitat: "喜温暖湿润,耐水湿,常生于水边河畔,适宜深厚肥沃的微酸性土壤。",
    uses: "优秀的滨水绿化和风景林树种,秋叶红褐绚丽;也是珍贵的孑遗植物,具重要科研价值。",
    culturalNote: "水杉被誉为植物界\u201C活化石\u201D,是中国植物学重大发现之一,曾作为国礼赠送外国,象征友谊与珍稀。",
  },
  {
    id: "cp-lotus",
    parkId: "century-park",
    name: "荷花",
    scientificName: "Nelumbo nucifera",
    clues: [
      {
        id: "cp-lotus-clue-1",
        type: "flower",
        text: "夏天水面上开着大大的粉红色花朵,像一盏灯。",
      },
      {
        id: "cp-lotus-clue-2",
        type: "leaf",
        text: "叶子又圆又大,像绿色的盘子漂在水上。",
      },
      {
        id: "cp-lotus-clue-3",
        type: "description",
        text: "花谢了之后,会露出一个像花洒一样的莲蓬。",
      },
    ],
    knowledge:
      "荷花是莲科莲属多年生水生草本。根状茎(藕)横生于水底淤泥中。叶圆形,盾状,高出水面。花期6-9月,花单生,粉红或白色。花托呈蜂窝状,即莲蓬,内结莲子。",
    knowledgeSource: "演示内容,仅供参考",
    funFact: "荷叶表面有很多小凸起,水珠在上面滚来滚去却不会湿,这叫\u201C荷叶效应\u201D。",
    nextObserve: "看看荷叶上的水珠是不是圆滚滚的,不沾湿叶子。",
    isSeasonal: true,
    seasonMonths: [7, 8],
    unlockReward: "解锁了荷花的出水芙蓉徽章!",
    fullSvg:
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><ellipse cx="100" cy="170" rx="80" ry="12" fill="#A8C8D8" opacity="0.6"/><ellipse cx="70" cy="165" rx="28" ry="8" fill="#5B8C5A"/><ellipse cx="130" cy="168" rx="25" ry="7" fill="#5B8C5A"/><path d="M100 165 L100 100" stroke="#5B8C5A" stroke-width="4"/><g fill="#F8B4C0" stroke="#E88A9E" stroke-width="1.5"><path d="M100 95 Q85 75 88 50 Q100 70 100 95 Z"/><path d="M100 95 Q115 75 112 50 Q100 70 100 95 Z"/><path d="M100 95 Q80 85 65 65 Q90 80 100 95 Z"/><path d="M100 95 Q120 85 135 65 Q110 80 100 95 Z"/><path d="M100 95 Q90 80 75 55 Q95 75 100 95 Z"/><path d="M100 95 Q110 80 125 55 Q105 75 100 95 Z"/></g><ellipse cx="100" cy="95" rx="8" ry="6" fill="#F5C542"/><circle cx="95" cy="93" r="1.5" fill="#8B6F47"/><circle cx="103" cy="95" r="1.5" fill="#8B6F47"/><circle cx="100" cy="98" r="1.5" fill="#8B6F47"/></svg>',
    position: { lng: 121.5515, lat: 31.2280 },
    detailedIntro:
      "荷花是莲科莲属的多年生水生草本,根状茎(藕)横生于水底淤泥之中。叶片圆形盾状,高高挺出水面,直径可达60厘米以上。花期6至9月,花朵单生于花梗顶端,粉红或洁白,清香远溢。花谢后花托膨大形成蜂窝状的莲蓬,内结莲子。荷叶表面的微观凸起使水珠滚动不沾,被称为\u201C荷叶效应\u201D。",
    habitat: "水生植物,喜温暖、阳光充足和静水环境,根茎生于淤泥,叶花挺出水面。",
    uses: "重要的水景观赏植物,花叶俱美;藕、莲子可食用,荷叶、莲心可入药。",
    culturalNote: "荷花自古被誉为\u201C花中君子\u201D,出淤泥而不染象征高洁清雅,是中国文学与艺术中的经典意象。",
  },
  {
    id: "cp-reed",
    parkId: "century-park",
    name: "芦苇",
    scientificName: "Phragmites australis",
    clues: [
      {
        id: "cp-reed-clue-1",
        type: "leaf",
        text: "叶子又长又窄,像一条条绿色的丝带。",
      },
      {
        id: "cp-reed-clue-2",
        type: "description",
        text: "秋天顶端抽出毛茸茸的花穗,风一吹就摇摆。",
      },
      {
        id: "cp-reed-clue-3",
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
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><ellipse cx="100" cy="180" rx="85" ry="10" fill="#A8C8D8" opacity="0.5"/><path d="M70 180 L70 60" stroke="#7C9885" stroke-width="3"/><path d="M100 180 L100 40" stroke="#7C9885" stroke-width="3"/><path d="M130 180 L130 70" stroke="#7C9885" stroke-width="3"/><g fill="#8B9A82" stroke="#6B7B65" stroke-width="1"><ellipse cx="70" cy="55" rx="8" ry="18"/><ellipse cx="100" cy="35" rx="10" ry="22"/><ellipse cx="130" cy="65" rx="8" ry="18"/></g><g stroke="#5B8C5A" stroke-width="2" fill="none"><path d="M70 100 Q60 95 55 85"/><path d="M100 90 Q90 85 85 75"/><path d="M130 110 Q140 105 145 95"/></g><g fill="#B8A878" opacity="0.6"><circle cx="68" cy="50" r="2"/><circle cx="72" cy="55" r="1.5"/><circle cx="98" cy="30" r="2"/><circle cx="102" cy="38" r="1.5"/><circle cx="128" cy="60" r="2"/><circle cx="132" cy="65" r="1.5"/></g></svg>',
    position: { lng: 121.5500, lat: 31.2320 },
    detailedIntro:
      "芦苇是禾本科芦苇属的多年生高大草本,常成片生长于湖泊、河岸与湿地边缘。茎秆直立中空,具明显的节,可高达2至3米。叶片条形,边缘锐利;秋季顶端抽出大型圆锥花序,成熟后呈灰白絮状,随风摇曳如浪。芦苇根系发达,有固土护岸、净化水质的生态作用,也是水鸟栖息的重要生境。",
    habitat: "典型的湿生植物,喜水湿,常生于湖畔河岸、沼泽湿地,根状茎发达,蔓延迅速。",
    uses: "湿地生态修复与护岸植物;茎秆可编席造纸,花序可作扫帚,亦是水鸟重要栖息生境。",
    culturalNote: "\u201C蒹葭苍苍,白露为霜\u201D,芦苇自古入诗,在《诗经》中即为寄托思慕与怅惘的经典意象。",
  },
];

const centuryParkBuddy: Buddy = {
  id: "cp-buddy-fengling",
  parkId: "century-park",
  name: "风铃",
  intro: "一个住在芦苇丛里的风精灵,风一吹它就笑出铃铃的声音。",
  silhouetteSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 70 Q120 80 115 120 Q100 135 85 120 Q80 80 100 70 Z" fill="#3A3A3A"/><rect x="97" y="135" width="6" height="20" fill="#3A3A3A"/></svg>',
  partialSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 65 Q125 75 120 120 Q100 135 80 120 Q75 75 100 65 Z" fill="#5B8C5A"/><rect x="96" y="135" width="8" height="25" fill="#3A5C3A"/><g stroke="#8B9A82" stroke-width="2" fill="none"><path d="M60 60 Q80 50 70 40"/><path d="M140 60 Q120 50 130 40"/><path d="M50 90 Q70 80 55 70"/></g></svg>',
  fullSvg:
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#FDF6E3"/><path d="M100 60 Q128 72 122 120 Q100 138 78 120 Q72 72 100 60 Z" fill="#5B8C5A" stroke="#3A5C3A" stroke-width="2"/><rect x="95" y="135" width="10" height="28" rx="3" fill="#3A5C3A"/><circle cx="90" cy="95" r="5" fill="#FFFFFF"/><circle cx="90" cy="96" r="2.5" fill="#2B2B2B"/><circle cx="110" cy="95" r="5" fill="#FFFFFF"/><circle cx="110" cy="96" r="2.5" fill="#2B2B2B"/><path d="M90 108 Q100 114 110 108" stroke="#3A5C3A" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="82" cy="103" r="3" fill="#F8B4C0" opacity="0.7"/><circle cx="118" cy="103" r="3" fill="#F8B4C0" opacity="0.7"/><g stroke="#8B9A82" stroke-width="2" fill="none" opacity="0.7"><path d="M55 55 Q75 45 65 35"/><path d="M145 55 Q125 45 135 35"/><path d="M45 85 Q65 75 50 65"/><path d="M155 85 Q135 75 150 65"/></g><g fill="#F5C542"><circle cx="155" cy="50" r="3"/><circle cx="50" cy="55" r="3"/><circle cx="150" cy="90" r="2"/><circle cx="55" cy="90" r="2"/></g></svg>',
  unlockCondition: { discoverCount: 3 },
};

// ===========================================================================
// Park data summary
// ===========================================================================

export const demoParks: Park[] = [
  {
    id: "peoples-park",
    name: "人民公园",
    district: "黄浦区",
    intro: "位于上海市中心的人民公园,绿树成荫,是市民休闲散步的好去处。园内有大片银杏和广玉兰,春有樱花烂漫,秋有金黄落叶。",
    lng: 121.475,
    lat: 31.232,
    boundary: [
      [
        [121.4735, 31.2305],
        [121.4775, 31.2305],
        [121.4775, 31.2335],
        [121.4735, 31.2335],
        [121.4735, 31.2305],
      ],
    ],
    trails: [
      [
        [121.4740, 31.2310],
        [121.4760, 31.2320],
        [121.4750, 31.2330],
      ],
    ],
    mapSource: "demo",
    hasReliableInternalMap: false,
    plants: peoplesParkPlants,
    buddy: peoplesParkBuddy,
    themeColor: "#7C9885",
    themeColorDark: "#445548",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,未经实地调查核实",
    attribution: "演示内容,仅供参考",
  },
  {
    id: "zhongshan-park",
    name: "中山公园",
    district: "长宁区",
    intro: "中山公园历史悠久,园内古木参天,尤以百年香樟和大桂花树闻名。春有紫藤如瀑,秋有桂花飘香,四季各有景致。",
    lng: 121.420,
    lat: 31.220,
    boundary: [
      [
        [121.4170, 31.2180],
        [121.4230, 31.2180],
        [121.4230, 31.2220],
        [121.4170, 31.2220],
        [121.4170, 31.2180],
      ],
    ],
    trails: [
      [
        [121.4180, 31.2190],
        [121.4210, 31.2200],
        [121.4200, 31.2210],
      ],
    ],
    mapSource: "demo",
    hasReliableInternalMap: false,
    plants: zhongshanParkPlants,
    buddy: zhongshanParkBuddy,
    themeColor: "#8B7355",
    themeColorDark: "#5C4A35",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,未经实地调查核实",
    attribution: "演示内容,仅供参考",
  },
  {
    id: "century-park",
    name: "世纪公园",
    district: "浦东新区",
    intro: "世纪公园是上海最大的城市公园,拥有大片湖泊和湿地景观。水杉林与荷花池相映成趣,湖畔芦苇随风摇曳,是观察水生植物的绝佳去处。",
    lng: 121.550,
    lat: 31.230,
    boundary: [
      [
        [121.5450, 31.2260],
        [121.5550, 31.2260],
        [121.5550, 31.2340],
        [121.5450, 31.2340],
        [121.5450, 31.2260],
      ],
    ],
    trails: [
      [
        [121.5470, 31.2270],
        [121.5530, 31.2290],
        [121.5500, 31.2330],
      ],
    ],
    mapSource: "demo",
    hasReliableInternalMap: false,
    plants: centuryParkPlants,
    buddy: centuryParkBuddy,
    themeColor: "#5B8C5A",
    themeColorDark: "#3A5C3A",
    dataUpdatedAt: "2026-10-10T10:00:00+08:00",
    dataSource: "演示数据,未经实地调查核实",
    attribution: "演示内容,仅供参考",
  },
];

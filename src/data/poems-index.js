// 古诗词索引（仅 id/title/author/dynasty，用于列表、搜索、分类，减小内存占用）
const poemsIndex = [
  {
    "id": 1,
    "title": "咏鹅",
    "author": "骆宾王",
    "dynasty": "唐"
  },
  {
    "id": 2,
    "title": "江南",
    "author": "汉乐府",
    "dynasty": "汉"
  },
  {
    "id": 3,
    "title": "画",
    "author": "王维",
    "dynasty": "唐"
  },
  {
    "id": 4,
    "title": "悯农（其二）",
    "author": "李绅",
    "dynasty": "唐"
  },
  {
    "id": 5,
    "title": "古朗月行（节选）",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 6,
    "title": "风",
    "author": "李峤",
    "dynasty": "唐"
  },
  {
    "id": 7,
    "title": "春晓",
    "author": "孟浩然",
    "dynasty": "唐"
  },
  {
    "id": 8,
    "title": "赠汪伦",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 9,
    "title": "静夜思",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 10,
    "title": "寻隐者不遇",
    "author": "贾岛",
    "dynasty": "唐"
  },
  {
    "id": 11,
    "title": "池上",
    "author": "白居易",
    "dynasty": "唐"
  },
  {
    "id": 12,
    "title": "小池",
    "author": "杨万里",
    "dynasty": "宋"
  },
  {
    "id": 13,
    "title": "画鸡",
    "author": "唐寅",
    "dynasty": "明"
  },
  {
    "id": 14,
    "title": "梅花",
    "author": "王安石",
    "dynasty": "宋"
  },
  {
    "id": 15,
    "title": "小儿垂钓",
    "author": "胡令能",
    "dynasty": "唐"
  },
  {
    "id": 16,
    "title": "登鹳雀楼",
    "author": "王之涣",
    "dynasty": "唐"
  },
  {
    "id": 17,
    "title": "望庐山瀑布",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 18,
    "title": "江雪",
    "author": "柳宗元",
    "dynasty": "唐"
  },
  {
    "id": 19,
    "title": "夜宿山寺",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 20,
    "title": "敕勒歌",
    "author": "北朝民歌",
    "dynasty": "北朝"
  },
  {
    "id": 21,
    "title": "村居",
    "author": "高鼎",
    "dynasty": "清"
  },
  {
    "id": 22,
    "title": "咏柳",
    "author": "贺知章",
    "dynasty": "唐"
  },
  {
    "id": 23,
    "title": "赋得古原草送别",
    "author": "白居易",
    "dynasty": "唐"
  },
  {
    "id": 24,
    "title": "晓出净慈寺送林子方",
    "author": "杨万里",
    "dynasty": "宋"
  },
  {
    "id": 25,
    "title": "绝句",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 26,
    "title": "悯农（其一）",
    "author": "李绅",
    "dynasty": "唐"
  },
  {
    "id": 27,
    "title": "舟夜书所见",
    "author": "查慎行",
    "dynasty": "清"
  },
  {
    "id": 28,
    "title": "所见",
    "author": "袁枚",
    "dynasty": "清"
  },
  {
    "id": 29,
    "title": "山行",
    "author": "杜牧",
    "dynasty": "唐"
  },
  {
    "id": 30,
    "title": "赠刘景文",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 31,
    "title": "夜书所见",
    "author": "叶绍翁",
    "dynasty": "宋"
  },
  {
    "id": 32,
    "title": "望天门山",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 33,
    "title": "饮湖上初晴后雨",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 34,
    "title": "望洞庭",
    "author": "刘禹锡",
    "dynasty": "唐"
  },
  {
    "id": 35,
    "title": "早发白帝城",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 36,
    "title": "绝句",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 37,
    "title": "惠崇春江晚景",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 38,
    "title": "三衢道中",
    "author": "曾几",
    "dynasty": "宋"
  },
  {
    "id": 39,
    "title": "忆江南",
    "author": "白居易",
    "dynasty": "唐"
  },
  {
    "id": 40,
    "title": "元日",
    "author": "王安石",
    "dynasty": "宋"
  },
  {
    "id": 41,
    "title": "清明",
    "author": "杜牧",
    "dynasty": "唐"
  },
  {
    "id": 42,
    "title": "九月九日忆山东兄弟",
    "author": "王维",
    "dynasty": "唐"
  },
  {
    "id": 43,
    "title": "滁州西涧",
    "author": "韦应物",
    "dynasty": "唐"
  },
  {
    "id": 44,
    "title": "浪淘沙（其一）",
    "author": "刘禹锡",
    "dynasty": "唐"
  },
  {
    "id": 45,
    "title": "鹿柴",
    "author": "王维",
    "dynasty": "唐"
  },
  {
    "id": 46,
    "title": "暮江吟",
    "author": "白居易",
    "dynasty": "唐"
  },
  {
    "id": 47,
    "title": "题西林壁",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 48,
    "title": "雪梅（其一）",
    "author": "卢梅坡",
    "dynasty": "宋"
  },
  {
    "id": 49,
    "title": "出塞（其一）",
    "author": "王昌龄",
    "dynasty": "唐"
  },
  {
    "id": 50,
    "title": "凉州词",
    "author": "王翰",
    "dynasty": "唐"
  },
  {
    "id": 51,
    "title": "夏日绝句",
    "author": "李清照",
    "dynasty": "宋"
  },
  {
    "id": 52,
    "title": "嫦娥",
    "author": "李商隐",
    "dynasty": "唐"
  },
  {
    "id": 53,
    "title": "四时田园杂兴（其二十五）",
    "author": "范成大",
    "dynasty": "宋"
  },
  {
    "id": 54,
    "title": "宿新市徐公店",
    "author": "杨万里",
    "dynasty": "宋"
  },
  {
    "id": 55,
    "title": "清平乐·村居",
    "author": "辛弃疾",
    "dynasty": "宋"
  },
  {
    "id": 56,
    "title": "卜算子·咏梅",
    "author": "毛泽东",
    "dynasty": "近代"
  },
  {
    "id": 57,
    "title": "芙蓉楼送辛渐",
    "author": "王昌龄",
    "dynasty": "唐"
  },
  {
    "id": 58,
    "title": "江畔独步寻花（其六）",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 59,
    "title": "蜂",
    "author": "罗隐",
    "dynasty": "唐"
  },
  {
    "id": 60,
    "title": "独坐敬亭山",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 61,
    "title": "示儿",
    "author": "陆游",
    "dynasty": "宋"
  },
  {
    "id": 62,
    "title": "题临安邸",
    "author": "林升",
    "dynasty": "宋"
  },
  {
    "id": 63,
    "title": "己亥杂诗（其五）",
    "author": "龚自珍",
    "dynasty": "清"
  },
  {
    "id": 64,
    "title": "山居秋暝",
    "author": "王维",
    "dynasty": "唐"
  },
  {
    "id": 65,
    "title": "枫桥夜泊",
    "author": "张继",
    "dynasty": "唐"
  },
  {
    "id": 66,
    "title": "长相思（山一程）",
    "author": "纳兰性德",
    "dynasty": "清"
  },
  {
    "id": 67,
    "title": "渔歌子",
    "author": "张志和",
    "dynasty": "唐"
  },
  {
    "id": 68,
    "title": "四时田园杂兴（其三十一）",
    "author": "范成大",
    "dynasty": "宋"
  },
  {
    "id": 69,
    "title": "稚子弄冰",
    "author": "杨万里",
    "dynasty": "宋"
  },
  {
    "id": 70,
    "title": "村晚",
    "author": "雷震",
    "dynasty": "宋"
  },
  {
    "id": 71,
    "title": "从军行（其四）",
    "author": "王昌龄",
    "dynasty": "唐"
  },
  {
    "id": 72,
    "title": "秋夜将晓出篱门迎凉有感",
    "author": "陆游",
    "dynasty": "宋"
  },
  {
    "id": 73,
    "title": "闻官军收河南河北",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 74,
    "title": "凉州词",
    "author": "王之涣",
    "dynasty": "唐"
  },
  {
    "id": 75,
    "title": "黄鹤楼送孟浩然之广陵",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 76,
    "title": "乡村四月",
    "author": "翁卷",
    "dynasty": "宋"
  },
  {
    "id": 77,
    "title": "宿建德江",
    "author": "孟浩然",
    "dynasty": "唐"
  },
  {
    "id": 78,
    "title": "六月二十七日望湖楼醉书",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 79,
    "title": "西江月·夜行黄沙道中",
    "author": "辛弃疾",
    "dynasty": "宋"
  },
  {
    "id": 80,
    "title": "过故人庄",
    "author": "孟浩然",
    "dynasty": "唐"
  },
  {
    "id": 81,
    "title": "春日",
    "author": "朱熹",
    "dynasty": "宋"
  },
  {
    "id": 82,
    "title": "回乡偶书（其一）",
    "author": "贺知章",
    "dynasty": "唐"
  },
  {
    "id": 83,
    "title": "江南春",
    "author": "杜牧",
    "dynasty": "唐"
  },
  {
    "id": 84,
    "title": "书湖阴先生壁（其一）",
    "author": "王安石",
    "dynasty": "宋"
  },
  {
    "id": 85,
    "title": "观沧海",
    "author": "曹操",
    "dynasty": "东汉"
  },
  {
    "id": 86,
    "title": "闻王昌龄左迁龙标遥有此寄",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 87,
    "title": "次北固山下",
    "author": "王湾",
    "dynasty": "唐"
  },
  {
    "id": 88,
    "title": "天净沙·秋思",
    "author": "马致远",
    "dynasty": "元"
  },
  {
    "id": 89,
    "title": "峨眉山月歌",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 90,
    "title": "江南逢李龟年",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 91,
    "title": "行军九日思长安故园",
    "author": "岑参",
    "dynasty": "唐"
  },
  {
    "id": 92,
    "title": "夜上受降城闻笛",
    "author": "李益",
    "dynasty": "唐"
  },
  {
    "id": 93,
    "title": "秋词（其一）",
    "author": "刘禹锡",
    "dynasty": "唐"
  },
  {
    "id": 94,
    "title": "夜雨寄北",
    "author": "李商隐",
    "dynasty": "唐"
  },
  {
    "id": 95,
    "title": "十一月四日风雨大作（其二）",
    "author": "陆游",
    "dynasty": "宋"
  },
  {
    "id": 96,
    "title": "潼关",
    "author": "谭嗣同",
    "dynasty": "清"
  },
  {
    "id": 97,
    "title": "木兰诗",
    "author": "北朝民歌",
    "dynasty": "北朝"
  },
  {
    "id": 98,
    "title": "竹里馆",
    "author": "王维",
    "dynasty": "唐"
  },
  {
    "id": 99,
    "title": "春夜洛城闻笛",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 100,
    "title": "逢入京使",
    "author": "岑参",
    "dynasty": "唐"
  },
  {
    "id": 101,
    "title": "晚春",
    "author": "韩愈",
    "dynasty": "唐"
  },
  {
    "id": 102,
    "title": "登幽州台歌",
    "author": "陈子昂",
    "dynasty": "唐"
  },
  {
    "id": 103,
    "title": "望岳",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 104,
    "title": "登飞来峰",
    "author": "王安石",
    "dynasty": "宋"
  },
  {
    "id": 105,
    "title": "游山西村",
    "author": "陆游",
    "dynasty": "宋"
  },
  {
    "id": 106,
    "title": "泊秦淮",
    "author": "杜牧",
    "dynasty": "唐"
  },
  {
    "id": 107,
    "title": "贾生",
    "author": "李商隐",
    "dynasty": "唐"
  },
  {
    "id": 108,
    "title": "过松源晨炊漆公店",
    "author": "杨万里",
    "dynasty": "宋"
  },
  {
    "id": 109,
    "title": "约客",
    "author": "赵师秀",
    "dynasty": "宋"
  },
  {
    "id": 110,
    "title": "野望",
    "author": "王绩",
    "dynasty": "唐"
  },
  {
    "id": 111,
    "title": "黄鹤楼",
    "author": "崔颢",
    "dynasty": "唐"
  },
  {
    "id": 112,
    "title": "使至塞上",
    "author": "王维",
    "dynasty": "唐"
  },
  {
    "id": 113,
    "title": "渡荆门送别",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 114,
    "title": "钱塘湖春行",
    "author": "白居易",
    "dynasty": "唐"
  },
  {
    "id": 115,
    "title": "饮酒（其五）",
    "author": "陶渊明",
    "dynasty": "东晋"
  },
  {
    "id": 116,
    "title": "春望",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 117,
    "title": "雁门太守行",
    "author": "李贺",
    "dynasty": "唐"
  },
  {
    "id": 118,
    "title": "赤壁",
    "author": "杜牧",
    "dynasty": "唐"
  },
  {
    "id": 119,
    "title": "渔家傲·秋思",
    "author": "范仲淹",
    "dynasty": "宋"
  },
  {
    "id": 120,
    "title": "江城子·密州出猎",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 121,
    "title": "破阵子·为陈同甫赋壮词以寄之",
    "author": "辛弃疾",
    "dynasty": "宋"
  },
  {
    "id": 122,
    "title": "满江红·写怀",
    "author": "岳飞",
    "dynasty": "宋"
  },
  {
    "id": 123,
    "title": "十五从军征",
    "author": "乐府",
    "dynasty": "汉"
  },
  {
    "id": 124,
    "title": "白雪歌送武判官归京",
    "author": "岑参",
    "dynasty": "唐"
  },
  {
    "id": 125,
    "title": "南乡子·登京口北固亭有怀",
    "author": "辛弃疾",
    "dynasty": "宋"
  },
  {
    "id": 126,
    "title": "过零丁洋",
    "author": "文天祥",
    "dynasty": "宋"
  },
  {
    "id": 127,
    "title": "山坡羊·潼关怀古",
    "author": "张养浩",
    "dynasty": "元"
  },
  {
    "id": 128,
    "title": "相见欢（无言独上西楼）",
    "author": "李煜",
    "dynasty": "南唐"
  },
  {
    "id": 129,
    "title": "关雎",
    "author": "诗经",
    "dynasty": "周"
  },
  {
    "id": 130,
    "title": "蒹葭",
    "author": "诗经",
    "dynasty": "周"
  },
  {
    "id": 131,
    "title": "式微",
    "author": "诗经",
    "dynasty": "周"
  },
  {
    "id": 132,
    "title": "子衿",
    "author": "诗经",
    "dynasty": "周"
  },
  {
    "id": 133,
    "title": "送杜少府之任蜀州",
    "author": "王勃",
    "dynasty": "唐"
  },
  {
    "id": 134,
    "title": "望洞庭湖赠张丞相",
    "author": "孟浩然",
    "dynasty": "唐"
  },
  {
    "id": 135,
    "title": "茅屋为秋风所破歌",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 136,
    "title": "卖炭翁",
    "author": "白居易",
    "dynasty": "唐"
  },
  {
    "id": 137,
    "title": "题破山寺后禅院",
    "author": "常建",
    "dynasty": "唐"
  },
  {
    "id": 138,
    "title": "送友人",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 139,
    "title": "卜算子·黄州定慧院寓居作",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 140,
    "title": "卜算子·咏梅",
    "author": "陆游",
    "dynasty": "宋"
  },
  {
    "id": 141,
    "title": "行路难（其一）",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 142,
    "title": "酬乐天扬州初逢席上见赠",
    "author": "刘禹锡",
    "dynasty": "唐"
  },
  {
    "id": 143,
    "title": "水调歌头",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 144,
    "title": "月夜忆舍弟",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 145,
    "title": "长沙过贾谊宅",
    "author": "刘长卿",
    "dynasty": "唐"
  },
  {
    "id": 146,
    "title": "左迁至蓝关示侄孙湘",
    "author": "韩愈",
    "dynasty": "唐"
  },
  {
    "id": 147,
    "title": "商山早行",
    "author": "温庭筠",
    "dynasty": "唐"
  },
  {
    "id": 148,
    "title": "咸阳城东楼",
    "author": "许浑",
    "dynasty": "唐"
  },
  {
    "id": 149,
    "title": "无题（相见时难）",
    "author": "李商隐",
    "dynasty": "唐"
  },
  {
    "id": 150,
    "title": "行香子·树绕村庄",
    "author": "秦观",
    "dynasty": "宋"
  },
  {
    "id": 151,
    "title": "丑奴儿·书博山道中壁",
    "author": "辛弃疾",
    "dynasty": "宋"
  },
  {
    "id": 152,
    "title": "渔家傲（天接云涛）",
    "author": "李清照",
    "dynasty": "宋"
  },
  {
    "id": 153,
    "title": "静女",
    "author": "诗经",
    "dynasty": "周"
  },
  {
    "id": 154,
    "title": "无衣",
    "author": "诗经",
    "dynasty": "周"
  },
  {
    "id": 155,
    "title": "离骚（节选）",
    "author": "屈原",
    "dynasty": "战国"
  },
  {
    "id": 156,
    "title": "涉江采芙蓉",
    "author": "古诗十九首",
    "dynasty": "汉"
  },
  {
    "id": 157,
    "title": "短歌行",
    "author": "曹操",
    "dynasty": "东汉"
  },
  {
    "id": 158,
    "title": "归园田居（其一）",
    "author": "陶渊明",
    "dynasty": "东晋"
  },
  {
    "id": 159,
    "title": "拟行路难（其四）",
    "author": "鲍照",
    "dynasty": "南朝"
  },
  {
    "id": 160,
    "title": "春江花月夜",
    "author": "张若虚",
    "dynasty": "唐"
  },
  {
    "id": 161,
    "title": "蜀道难",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 162,
    "title": "梦游天姥吟留别",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 163,
    "title": "将进酒",
    "author": "李白",
    "dynasty": "唐"
  },
  {
    "id": 164,
    "title": "燕歌行（并序）",
    "author": "高适",
    "dynasty": "唐"
  },
  {
    "id": 165,
    "title": "蜀相",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 166,
    "title": "客至",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 167,
    "title": "登高",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 168,
    "title": "登岳阳楼",
    "author": "杜甫",
    "dynasty": "唐"
  },
  {
    "id": 169,
    "title": "琵琶行（并序）",
    "author": "白居易",
    "dynasty": "唐"
  },
  {
    "id": 170,
    "title": "李凭箜篌引",
    "author": "李贺",
    "dynasty": "唐"
  },
  {
    "id": 171,
    "title": "菩萨蛮（小山重叠）",
    "author": "温庭筠",
    "dynasty": "唐"
  },
  {
    "id": 172,
    "title": "锦瑟",
    "author": "李商隐",
    "dynasty": "唐"
  },
  {
    "id": 173,
    "title": "虞美人（春花秋月）",
    "author": "李煜",
    "dynasty": "南唐"
  },
  {
    "id": 174,
    "title": "桂枝香·金陵怀古",
    "author": "王安石",
    "dynasty": "宋"
  },
  {
    "id": 175,
    "title": "江城子·乙卯正月二十日夜记梦",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 176,
    "title": "念奴娇·赤壁怀古",
    "author": "苏轼",
    "dynasty": "宋"
  },
  {
    "id": 177,
    "title": "登快阁",
    "author": "黄庭坚",
    "dynasty": "宋"
  },
  {
    "id": 178,
    "title": "鹊桥仙（纤云弄巧）",
    "author": "秦观",
    "dynasty": "宋"
  },
  {
    "id": 179,
    "title": "苏幕遮（燎沉香）",
    "author": "周邦彦",
    "dynasty": "宋"
  },
  {
    "id": 180,
    "title": "声声慢",
    "author": "李清照",
    "dynasty": "宋"
  },
  {
    "id": 181,
    "title": "书愤",
    "author": "陆游",
    "dynasty": "宋"
  },
  {
    "id": 182,
    "title": "临安春雨初霁",
    "author": "陆游",
    "dynasty": "宋"
  },
  {
    "id": 183,
    "title": "念奴娇·过洞庭",
    "author": "张孝祥",
    "dynasty": "宋"
  },
  {
    "id": 184,
    "title": "永遇乐·京口北固亭怀古",
    "author": "辛弃疾",
    "dynasty": "宋"
  },
  {
    "id": 185,
    "title": "菩萨蛮·书江西造口壁",
    "author": "辛弃疾",
    "dynasty": "宋"
  },
  {
    "id": 186,
    "title": "青玉案·元夕",
    "author": "辛弃疾",
    "dynasty": "宋"
  },
  {
    "id": 187,
    "title": "扬州慢（并序）",
    "author": "姜夔",
    "dynasty": "宋"
  },
  {
    "id": 188,
    "title": "朝天子·咏喇叭",
    "author": "王磐",
    "dynasty": "明"
  }
];

export default poemsIndex

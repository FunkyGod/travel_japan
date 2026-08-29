// 专题页数据：围绕 PDF 中“特别呈现 / 计划你的行程”重组为原创的实用决策内容。
// 价格、雪况、开放时间等易变信息只提供判断方法，出发前请以官方公告为准。
export const specialTopics = [
  {
    slug: 'ski',
    emoji: '🎿',
    kicker: 'SNOW NOTES',
    title: '把粉雪玩得刚刚好',
    description: '第一次滑雪不必追求最远雪场：选对交通、雪况和难度，才会把冷空气变成好心情。',
    image: '/images/ski-japan.webp',
    facts: [
      { label: '常见雪季', value: '12 月—次年 3/4 月', note: '不同海拔与雪场会提前或延后开滑' },
      { label: '适合人群', value: '初学者—进阶', note: '先看雪道分级与课程，再看粉雪名气' },
      { label: '行程节奏', value: '3–5 天起', note: '预留天气缓冲，不把每天排满' },
    ],
    highlights: [
      { title: '北海道', body: '二世古、富良野等雪场适合把滑雪和温泉、海鲜放在同一趟旅行里；天气和接驳要单独核对。' },
      { title: '长野', body: '白马、野泽温泉交通相对适合和东京或中部串联，适合想兼顾山景与温泉的行程。' },
      { title: '新潟', body: '苗场、汤泽一带从东京出发较方便，适合第一次试滑或不想长距离换乘的人。' },
    ],
    guides: [
      { emoji: '🧭', title: '先选雪场，再选酒店', body: '把机场或车站到雪场的接驳时间算进预算；住在雪场附近通常更省体力，住温泉街则更适合不全程滑雪的同行者。' },
      { emoji: '🧤', title: '装备优先租，不必全买', body: '雪板、雪鞋与头盔可现场租赁；贴身保暖层、手套、护目镜和防水袜更值得提前准备。' },
      { emoji: '⚠️', title: '雪山安全是第一景点', body: '初学者跟课程走，不进入未开放区域；关注暴雪、风速、缆车停运与道路公告，行程保持可退可改。' },
    ],
    checklist: ['防水外层与备用袜', '护目镜、防晒与润唇膏', '确认租赁尺寸与营业时段', '保存雪场、接驳与天气公告'],
    related: [
      { label: '北海道全景 10 日', to: '/routes/hokkaido-grand' },
      { label: '东北奥入濑·藏王 5 日', to: '/routes/tohoku-oirase' },
      { label: '九州温泉环线 7 日', to: '/routes/kyushu-onsen' },
    ],
    note: '雪场营业、缆车运行、接驳车与道路状况都可能因天气调整；本文只用于规划框架。',
  },
  {
    slug: 'family',
    emoji: '🧸',
    kicker: 'FAMILY RHYTHM',
    title: '带孩子，也能慢慢玩日本',
    description: '亲子行程的关键不是塞满景点，而是每天只设一个主任务，再给吃饭、午休和临时状况留空间。',
    image: '/images/family-aquarium.webp',
    facts: [
      { label: '核心节奏', value: '1 个主场 + 1 个轻松点', note: '把交通换乘和午休当成行程的一部分' },
      { label: '优先选择', value: '室内备选 + 近距离住宿', note: '雨天、酷暑和孩子临时疲惫都能切换' },
      { label: '准备重点', value: '吃饭、厕所、推车', note: '入场预约与儿童规则以官方页面为准' },
    ],
    highlights: [
      { title: '东京', body: '把水族馆、博物馆或公园和同一区域的短距离散步组合，减少一天多次换乘。' },
      { title: '大阪与奈良', body: '环球影城需要单独留出整天；奈良公园适合户外散步，但要提醒孩子与鹿保持距离，不主动喂食。' },
      { title: '冲绳', body: '水族馆、海滩和城市住宿可以交替安排；离岛船班受天气影响，带孩子时要保留回撤方案。' },
    ],
    guides: [
      { emoji: '🗓️', title: '一天只安排一个大项目', body: '大型乐园、动物园或长途移动结束后，不再叠加“必打卡”；把附近便利店、公园和早回酒店视为成功。' },
      { emoji: '🍙', title: '先解决吃饭，再谈景点', body: '高峰期先预约或错峰；准备孩子熟悉的零食，观察过敏原标识，不把临时找餐厅交给运气。' },
      { emoji: '🌦️', title: '每一天都有 Plan B', body: '户外景点旁边配一个室内备选；提前确认婴儿车、电梯、寄存和亲子卫生间信息。' },
    ],
    checklist: ['儿童常用药与英文/日文药名', '轻便推车或背带', '可替换衣物与防雨层', '预约凭证和离线地图'],
    related: [
      { label: '东京经典 5 日', to: '/routes/tokyo-classic' },
      { label: '京都＋奈良＋大阪 7 日', to: '/routes/kansai-triangle' },
      { label: '冲绳海岛 6 日', to: '/routes/okinawa-islands' },
    ],
    note: '景区年龄限制、儿童票、预约和推车政策会变化；出发前请逐一查看官方说明。',
  },
  {
    slug: 'hiking',
    emoji: '🥾',
    kicker: 'TRAIL NOTES',
    title: '走进山里，也走得有准备',
    description: '日本的徒步不只有高山挑战：从古道、溪流到湿地，先按体力和撤退条件选路线。',
    image: '/images/hiking-trail.webp',
    facts: [
      { label: '舒适季节', value: '春季与秋季', note: '高山雪线、梅雨和台风会改变可行性' },
      { label: '难度判断', value: '路程 + 高差 + 撤退', note: '不要只看公里数，山路耗时差异很大' },
      { label: '最低装备', value: '防滑鞋 + 雨具 + 水', note: '山区补给少，离线地图与电量很重要' },
    ],
    highlights: [
      { title: '熊野古道', body: '适合把朝圣文化和森林步道结合；不同支线难度不同，住宿与行李转运要提前规划。' },
      { title: '上高地与阿尔卑斯', body: '河谷散步和高山纵走是两种完全不同的体力需求，先确认山屋、巴士和季节开放情况。' },
      { title: '妻笼—马笼', body: '约 8 公里的古道适合入门体验，但仍有坡度与石路；穿有抓地力的鞋，不要把它当城市步行。' },
    ],
    guides: [
      { emoji: '🗺️', title: '用“撤退点”设计路线', body: '出发前标记最后补水点、巴士站、分岔口与可提前结束的位置；天气转坏时，按计划撤退不是失败。' },
      { emoji: '📍', title: '离线信息先下载', body: '山区信号可能不稳定，保存路线、住宿、交通末班时间和紧急联系人；把手机电量当成安全装备。' },
      { emoji: '🌲', title: '尊重山林与社区', body: '不越过封闭路段，不喂野生动物，不留下垃圾；经过村落、寺社和山屋时保持安静。' },
    ],
    checklist: ['防滑鞋与备用鞋带', '轻量雨衣、防晒与保暖层', '饮水、能量补给与急救包', '离线地图、头灯与充电宝'],
    related: [
      { label: '日本阿尔卑斯徒步 7 日', to: '/routes/alps-trek' },
      { label: '高野山＋熊野古道 6 日', to: '/routes/koyasan-kumano' },
      { label: '名古屋＋高山＋白川乡 5 日', to: '/routes/takayama-shirakawago' },
    ],
    note: '山岳路线请以当地管理部门、山屋与交通运营方的最新公告为准；不要仅凭旧攻略判断能否通行。',
  },
  {
    slug: 'budget',
    emoji: '💴',
    kicker: 'SMART SPEND',
    title: '省下预算，把钱花在值得的地方',
    description: '省钱不是把每一餐都压到最低，而是先固定大项，再用住宿、交通、餐饮和体验的组合换取自由。',
    image: '/images/budget-travel.webp',
    facts: [
      { label: '先算大项', value: '住宿 + 跨城交通', note: '这两项最容易拉开总预算差距' },
      { label: '吃饭策略', value: '一顿重点 + 两顿灵活', note: '便利店、食堂、立食与超市熟食都可轮换' },
      { label: '付款原则', value: '日元为准，汇率仅估算', note: '站内汇率是离线回退值，实际支付看实时汇率' },
    ],
    highlights: [
      { title: '住宿', body: '胶囊、青旅、商务酒店和民宿各有适用场景；连住、错峰和住在交通节点附近，通常比盲目追求低价更省心。' },
      { title: '交通', body: '先算单买车票，再比较区域通票；夜行巴士能省一晚住宿，但要把睡眠和到站后的体力算进去。' },
      { title: '餐饮与体验', body: '午餐吃好、晚餐灵活，免费观景台、城市公园、市场散步和公共文化设施能平衡付费体验。' },
    ],
    guides: [
      { emoji: '🧮', title: '把预算拆成四个信封', body: '住宿、餐饮、市内/跨城交通、门票体验分别设上限；每天只记录大额支出，就足够发现超支来源。' },
      { emoji: '🚉', title: '通票不是默认答案', body: '移动少时刷 IC 卡更灵活；跨城密集移动时才比较区域 Pass。价格、适用线路和兑换方式都要看官方最新规则。' },
      { emoji: '🧁', title: '用免费时段换体验', body: '把一两个高价项目留给真正想做的事，其他时间用街区、河岸、市场与公共空间串起城市。' },
    ],
    checklist: ['记录住宿与跨城交通大项', '准备少量现金并确认支付方式', '比较通票适用范围而非只看价格', '为天气和临时交通预留机动金'],
    related: [
      { label: '东京经典 5 日', to: '/routes/tokyo-classic' },
      { label: '札幌＋小樽 4 日', to: '/routes/sapporo-otaru' },
      { label: '实用贴士', to: '/tips' },
    ],
    note: '所有价格与政策类信息都可能变化；本文提供预算方法，不替代运营方的实时价格与条款。',
  },
  {
    slug: 'updates',
    emoji: '📰',
    kicker: 'WEEKLY BRIEFING',
    title: '本周日本旅行更新',
    description: '把本月影响出行的政策、新路线与新景点整理成一页，看完再去查具体路线。',
    image: '/images/hero-japan.webp',
    facts: [
      { label: '最新核查', value: '2026-08-30', note: '对照 japan-guide.com / JR 官方 / 立山黑部官网 / 京都市交通局' },
      { label: '影响范围', value: '铁路、免税、机场', note: '需要看 JR / 国税厅 / 机场实时公告' },
      { label: '更新频率', value: '每周一次', note: '每周维护与重新对照官方信息' },
    ],
    highlights: [
      { title: 'JR Pass 与 青春 18', body: 'JR Pass 自 2023-10-01 调价后档位为 50,000/80,000/100,000 日元（7/14/21 日），实际价格与渠道折扣按 JR 集团与 japanrailpass.net 公告为准；青春 18 近年常见 5 日券 12,050 日元等档位，具体发售与使用规则以 JR 当季公告为准。' },
      { title: 'Supreme Class 上线', body: '东海道新干线部分 Nozomi / Hikari 推出全包厢豪华车厢；东京—新大阪单人间约 42,000、双人间约 61,000 日元；是否开行按当日调度为准。' },
      { title: '免税改机场退税', body: '2026-11 起，消耗品与一般商品合并办理；离境手续成为退税必要环节，建议提前登记 Visit Japan Web 以缩短机场办理时间。' },
    ],
    guides: [
      { emoji: '📋', title: '出发前一周看这一页', body: '本页只列「会影响行程结构」的变化，更细的票价、预约与开放时间请按官网链接点进去核对。' },
      { emoji: '📅', title: '生效时间先于金额', body: 'JR Pass 价格变动看 JR 集团公告，免税新规是 2026-11，黑部宇奈月峡谷路线计划在 2026 后期启用；同一年里先后有多项政策与新设施生效。' },
      { emoji: '⚠️', title: '把官方链接收藏好', body: 'japan-guide、JR 东海与西日本、国税厅、立山黑部官网是这份情报的源头；攻略只做导览，不替代官方公告。' },
    ],
    checklist: ['查 JR Pass 适用区间与最新价', '看 2026-11 后退税流程变化', '核对机场与酒店预约时间', '收藏官方公告入口'],
    related: [
      { label: '实用贴士', to: '/tips' },
      { label: '交通指南', to: '/transport' },
      { label: '金泽＋能登 5 日', to: '/routes/kanazawa-noto' },
    ],
    note: '本页条目会随每周维护更新；价格、日期与开放信息以运营方实时公告为准。',
  },
]

export const specialBySlug = Object.fromEntries(specialTopics.map(topic => [topic.slug, topic]))

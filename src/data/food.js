export const food = [
  { emoji: '🍣', name: '寿司', region: '东京', desc: '筑地市场的新鲜寿司与全城高档寿司店，是东京的味觉名片。' },
  { emoji: '🍜', name: '拉面', region: '全国', desc: '从博多豚骨到北海道味噌，各地汤头风格迥异。' },
  { emoji: '🐙', name: '章鱼烧', region: '大阪', desc: '大阪街边小吃的代表，外酥内软，热腾腾配酱汁。' },
  { emoji: '🥞', name: '御好烧', region: '大阪', desc: '丰盛的煎饼，道顿堀一带是寻找美味的好去处。' },
  { emoji: '🍱', name: '怀石料理', region: '京都', desc: '京都传统高级料理，讲究时令与摆盘的精致宴席。' },
  { emoji: '🦀', name: '螃蟹料理', region: '北海道', desc: '帝王蟹蒸熟配奶油，是北海道冬季的招牌美味。' },
  { emoji: '🍺', name: '手工精酿啤酒', region: '北海道', desc: '札幌周边精酿兴盛，酿出清爽且有个性的啤酒。' },
  { emoji: '🍜', name: '赞岐乌冬', region: '四国', desc: '香川县的乌冬以劲道与滑顺口感闻名。' },
  { emoji: '🍜', name: '博多拉面', region: '九州', desc: '浓郁猪肉汤与细面，是福冈必吃的一碗。' },
  { emoji: '🍚', name: '牛舌', region: '东北', desc: '炭烤牛舌配柠檬，仙台一带的经典美味。' },
  { emoji: '🥩', name: '飞驒牛', region: '高山', desc: '高山地区的和牛，油花细致，适合烤肉。' },
  { emoji: '🍜', name: '冲绳面', region: '冲绳', desc: '汤面配软嫩腌猪肉，是冲绳的comfort food。' },
  { emoji: '🥬', name: '炒苦瓜', region: '冲绳', desc: '冲绳家常菜，苦瓜与猪肉、豆腐快炒。' },
]

// price 为日元参考价（null 表示无单一参考价），渲染时经 formatYen 统一换算双币
export const budgetEating = [
  { emoji: '🍱', title: '便当与饭团', price: 500, desc: '便利店的便当或饭团，营养又方便。' },
  { emoji: '🍜', title: '吃面省钱', price: 500, desc: '一碗拉面约 500 日元起，荞麦与乌冬更便宜。' },
  { emoji: '🏪', title: '食堂', price: 700, desc: '日本小食堂一顿正餐，茶免费。' },
  { emoji: '🏬', title: '百货地下食品区', price: null, desc: '打烊前约 1 小时常有半价熟食。' },
  { emoji: '💴', title: '百元店', price: null, desc: '许多基础商品是税前 100 日元档，结账金额与商品标价以店铺当日规则为准。' },
]

// 美食页深化：先理解店型与菜单，再决定吃什么。
export const restaurantTypes = [
  { emoji: '🍶', name: '居酒屋', desc: '适合晚餐与小份分享菜；部分店会收座位费或先付小菜费，入店前看菜单说明。' },
  { emoji: '🍣', name: '回转寿司', desc: '按盘色或平板点单，适合快速、可控预算地尝多种寿司；热门店常需取号。' },
  { emoji: '🥢', name: '立食店', desc: '站着快速吃完，常见于车站与市场；适合赶路时解决一餐，不适合久坐聊天。' },
  { emoji: '🍚', name: '食堂', desc: '定食、丼饭与面类选择直接，适合一个人旅行或想吃得规律的时候。' },
  { emoji: '🍵', name: '料亭 / 怀石', desc: '更重视预约、着装与用餐节奏；预算和过敏需求应在预订时提前沟通。' },
  { emoji: '🏪', name: '连锁店', desc: '营业时间稳定、点餐流程清晰，是抵达晚或需要快速补给时的可靠选项。' },
]

export const menuGlossary = [
  { jp: '前菜 / 小鉢', zh: '前菜、小菜' },
  { jp: '刺身', zh: '生鱼片' },
  { jp: '焼き物', zh: '烤物' },
  { jp: '煮物', zh: '炖煮菜' },
  { jp: '定食', zh: '套餐饭' },
  { jp: '丼', zh: '盖饭' },
  { jp: '大盛り', zh: '加大份' },
  { jp: 'お冷', zh: '冰水 / 冷水' },
]

export const orderingTips = [
  { emoji: '🧾', title: '先看是否需要预约', desc: '热门寿司、料亭与小店可能只接预约；没有预约时，准备一个附近备选。' },
  { emoji: '🥜', title: '过敏要说清楚', desc: '把过敏食材写成日文或截图给店员确认；“不吃”与“过敏”是不同程度的需求。' },
  { emoji: '🌱', title: '素食别只说“蔬菜”', desc: '确认是否含鱼高汤、肉汁、虾酱或明胶；严格需求建议提前联系餐厅。' },
  { emoji: '📸', title: '点餐看图也要确认', desc: '机器或菜单的图片仅供参考，套餐内容、份量与是否含税以结账前确认为准。' },
]

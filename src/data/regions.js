// slug 用于路由 /routes?region=<slug> 的地区筛选；图片由 src/data/media.js 集中提供回退映射。
export const regions = [
  { emoji: '🗼', name: '东京', slug: 'tokyo', image: '', desc: '现代都会、米其林餐厅与流行文化的大本营。', highlights: ['浅草寺', '筑地市场', '涩谷', '明治神宫'] },
  { emoji: '🗻', name: '富士山及周边', slug: 'fuji', image: '', desc: '富士五湖、箱根温泉与东京近郊的自然与神社。', highlights: ['河口湖', '箱根', '日光', '镰仓'] },
  { emoji: '🏔️', name: '日本阿尔卑斯与中部', slug: 'alps', image: '', desc: '上高地、立山黑部与高山白川乡，山岳与古村交织。', highlights: ['上高地', '白川乡', '金泽', '立山黑部'] },
  { emoji: '⛩️', name: '京都', slug: 'kyoto', image: '', desc: '寺庙、庭园、艺伎与怀石料理，日本文化之都。', highlights: ['金阁寺', '岚山', '伏见稻荷', '祇园'] },
  { emoji: '🦌', name: '关西', slug: 'kansai', image: '', desc: '大阪美食、奈良大佛、城崎温泉与熊野古道。', highlights: ['大阪', '奈良', '高野山', '城崎'] },
  { emoji: '⛴️', name: '广岛与西部', slug: 'west', image: '', desc: '广岛、宫岛、直岛与濑户内海岛屿艺术。', highlights: ['宫岛', '广岛', '直岛', '尾道'] },
  { emoji: '🌲', name: '东北', slug: 'tohoku', image: '', desc: '仙台、松岛、奥入濑溪流与藏王，本州北部的清幽山海。', highlights: ['松岛', '奥入濑溪流', '藏王温泉', '会津若松'] },
  { emoji: '❄️', name: '北海道', slug: 'hokkaido', image: '', desc: '札幌、富良野、知床与原野国家公园。', highlights: ['札幌', '小樽', '富良野', '知床'] },
  { emoji: '♨️', name: '九州', slug: 'kyushu', image: '', desc: '福冈、别府、由布院、黑川与阿苏火山。', highlights: ['福冈', '别府', '由布院', '黑川'] },
  { emoji: '🌊', name: '四国', slug: 'shikoku', image: '', desc: '松山道后温泉、高松赞岐乌冬与四万十川清流，小而美的四国遍路。', highlights: ['道后温泉', '赞岐乌冬', '鸣门涡潮', '四万十川'] },
  { emoji: '🏝️', name: '冲绳', slug: 'okinawa', image: '', desc: '那霸、庆良间与离岛白沙滩，珊瑚海浮潜。', highlights: ['那霸', '庆良间', '宫古岛', '石垣岛'] },
]

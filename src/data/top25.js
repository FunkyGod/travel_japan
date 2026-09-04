// 每项可跳转到一条路线（routeId）或一个地区（regionSlug），把兴趣点接回攻略。
// image 可由数据覆写；首页当前以 emoji + 路线内链呈现，图片回退见 src/data/media.js。
export const top25 = [
  { emoji: '⛩️', title: '京都的寺庙与庭园', desc: '千余座寺庙里挑几处心仪之所，感受侘寂之美。', tag: '文化', routeId: 'kyoto-classic', image: '' },
  { emoji: '♨️', title: '温泉', desc: '坐进天然热汤，看溪流或雪景，是最放松的仪式。', tag: '温泉', routeId: 'kyushu-onsen', image: '' },
  { emoji: '🍣', title: '日本料理', desc: '从荞麦面到怀石盛宴，美食本身就是旅行的理由。', tag: '美食', routeId: 'kyoto-classic', image: '' },
  { emoji: '🌸', title: '赏樱', desc: '春天在樱花树下野餐、歌唱，感受日本人的花见。', tag: '季节', routeId: 'kyoto-classic', image: '' },
  { emoji: '🛏️', title: '住日式旅馆', desc: '穿浴衣、吃会席、泡汤，体验一晚传统生活。', tag: '住宿', routeId: 'kyushu-onsen', image: '' },
  { emoji: '🏯', title: '城堡', desc: '从姬路城到大阪城，感受武士与幕府时代。', tag: '历史', routeId: 'kansai-hiroshima', image: '' },
  { emoji: '🛍️', title: '在东京购物', desc: '从银座精品到百元店，商品丰富得超乎想象。', tag: '购物', routeId: 'tokyo-classic', image: '' },
  { emoji: '🎋', title: '岚山竹林', desc: '走进京都西部的竹林，绿意让人屏息。', tag: '自然', routeId: 'kyoto-classic', image: '' },
  { emoji: '🗻', title: '富士山', desc: '远观敬畏、近看震撼，日本最受尊敬的景点。', tag: '自然', routeId: 'tokyo-fuji', image: '' },
  { emoji: '🥾', title: '日本阿尔卑斯徒步', desc: '登上高山，住进山间小屋，徒步一周。', tag: '户外', routeId: 'alps-trek', image: '' },
  { emoji: '🦌', title: '奈良大佛', desc: '在东大寺大殿抬头凝视大佛，震撼直达内心。', tag: '文化', routeId: 'kansai-triangle', image: '' },
  { emoji: '🕊️', title: '广岛', desc: '和平公园与资料馆承载沉重历史，城市仍充满活力。', tag: '历史', routeId: 'kansai-hiroshima', image: '' },
  { emoji: '💪', title: '相扑', desc: '看两座"大山"角力，是日本限定体验。', tag: '体育', routeId: 'tokyo-classic', image: '' },
  { emoji: '🪷', title: '高野山奥之院', desc: '在杉木参道与墓园间感受庄严神圣。', tag: '文化', routeId: 'koyasan-kumano', image: '' },
  { emoji: '🎃', title: '直岛当代艺术', desc: '濑户内海的岛屿艺术飞地，黄南瓜与地中美术馆。', tag: '艺术', routeId: 'setouchi-art', image: '' },
  { emoji: '🎿', title: '滑雪', desc: '从阿尔卑斯到北海道，粉雪与温泉双享受。', tag: '户外', routeId: 'hokkaido-grand', image: '' },
  { emoji: '🎭', title: '歌舞伎', desc: '鲜艳服饰与戏剧化动作，离奇又迷人。', tag: '文化', routeId: 'tokyo-classic', image: '' },
  { emoji: '⛰️', title: '熊野古道', desc: '沿古代朝圣道徒步，走进三座神圣神社。', tag: '户外', routeId: 'koyasan-kumano', image: '' },
  { emoji: '🌿', title: '屋久岛', desc: '苔藓森林与原始群山，徒步者的世界遗产。', tag: '自然', regionSlug: 'kyushu', image: '' },
  { emoji: '🦓', title: '能登宝可梦主题机场', desc: '能登里山里海空港自 2026-07-07 起开展宝可梦主题活动，预计持续至 2029 年 9 月末；能登铁道也有联动主题列车。', tag: '季节', routeId: 'kanazawa-noto', image: '' },
  { emoji: '🚶', title: '妻笼–马笼徒步', desc: '旧中山道驿站间的 7.8 公里，穿行农舍与水车。', tag: '户外', routeId: 'takayama-shirakawago', image: '' },
  { emoji: '💃', title: '京都艺伎舞蹈', desc: '春季的华服与舞姿，如梦似幻的舞台奇观。', tag: '文化', routeId: 'kyoto-classic', image: '' },
  { emoji: '🏔️', title: '上高地', desc: '被北阿尔卑斯高峰环绕，河童桥与梓川令人难忘。', tag: '自然', routeId: 'alps-trek', image: '' },
  { emoji: '🏙️', title: '东京现代建筑', desc: '从表参道到台场，当代建筑的露天博物馆。', tag: '建筑', routeId: 'tokyo-classic', image: '' },
  { emoji: '🎏', title: '节日', desc: '祇园祭与各地祭典，感受日本人真正的放松。', tag: '节日', routeId: 'kyoto-classic', image: '' },
  { emoji: '🐻', title: '北海道原野', desc: '日本最北的辽阔土地，最后的原生自然。', tag: '自然', routeId: 'hokkaido-grand', image: '' },
  { emoji: '🚄', title: 'Supreme Class 新干线', desc: '东海道新干线 Supreme Class 将于 2026-10-01 起启动，东京—新大阪个室票价有 42,100 / 60,500 日元起的官方档位。', tag: '交通', routeId: 'tokyo-classic', image: '' },
]

// 供跨组件复用：Top25 → 目标链接
export function top25Target(item) {
  if (item.routeId) return { to: `/routes/${item.routeId}` }
  if (item.regionSlug) return { to: `/routes?region=${item.regionSlug}` }
  return null
}

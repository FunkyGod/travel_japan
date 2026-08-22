// 项目自有视觉资产索引。图片由 imagegen 生成并存放在 public/images/，不依赖远程图床。
const routeImages = {
  'tokyo-classic': '/images/tokyo-night.webp',
  'tokyo-fuji': '/images/fuji-lake.webp',
  'tokyo-karuizawa': '/images/alps-region.svg',
  'kyoto-classic': '/images/hero-japan.webp',
  'kansai-triangle': '/images/kansai-region.svg',
  'kansai-hiroshima': '/images/west-region.svg',
  'koyasan-kumano': '/images/kansai-region.svg',
  'takayama-shirakawago': '/images/alps-region.svg',
  'alps-trek': '/images/alps-region.svg',
  'kanazawa-noto': '/images/alps-region.svg',
  'sapporo-otaru': '/images/hokkaido-region.svg',
  'hokkaido-grand': '/images/hokkaido-region.svg',
  'kyushu-onsen': '/images/kyushu-region.svg',
  'setouchi-art': '/images/west-region.svg',
  'okinawa-islands': '/images/okinawa-lagoon.webp',
  'tohoku-oirase': '/images/tohoku-autumn.webp',
  'tohoku-loop': '/images/tohoku-autumn.webp',
  'shikoku-loop': '/images/shikoku-region.svg',
}

const regionImages = {
  tokyo: '/images/tokyo-night.webp',
  fuji: '/images/fuji-lake.webp',
  alps: '/images/alps-region.svg',
  kyoto: '/images/hero-japan.webp',
  kansai: '/images/kansai-region.svg',
  west: '/images/west-region.svg',
  tohoku: '/images/tohoku-autumn.webp',
  hokkaido: '/images/hokkaido-region.svg',
  kyushu: '/images/kyushu-region.svg',
  shikoku: '/images/shikoku-region.svg',
  okinawa: '/images/okinawa-lagoon.webp',
}

export function imageForRoute(route) {
  return route?.image || routeImages[route?.id] || regionImages[route?.regionSlug] || ''
}

export function imageForRegion(region) {
  return region?.image || regionImages[region?.slug] || ''
}

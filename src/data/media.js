// 项目自有视觉资产索引。图片由 imagegen 生成并存放在 public/images/，不依赖远程图床。
const routeImages = {
  'tokyo-classic': '/images/tokyo-night.webp',
  'tokyo-fuji': '/images/fuji-lake.webp',
  'tohoku-oirase': '/images/tohoku-autumn.webp',
  'tohoku-loop': '/images/tohoku-autumn.webp',
  'okinawa-islands': '/images/okinawa-lagoon.webp',
}

const regionImages = {
  tokyo: '/images/tokyo-night.webp',
  fuji: '/images/fuji-lake.webp',
  kyoto: '/images/hero-japan.webp',
  tohoku: '/images/tohoku-autumn.webp',
  okinawa: '/images/okinawa-lagoon.webp',
}

export function imageForRoute(route) {
  return route?.image || routeImages[route?.id] || ''
}

export function imageForRegion(region) {
  return region?.image || regionImages[region?.slug] || ''
}

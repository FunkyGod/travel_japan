// 简易离线缓存：首次访问后缓存同源 GET 资源，之后断网也能打开。
// 采用「缓存优先、后台更新」策略，适用于 Vite 生成的带哈希静态资源。
const CACHE = 'japan-guide-v2'

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (e) => {
  const { request } = e
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(request)
      const network = fetch(request)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            cache.put(request, res.clone())
          }
          return res
        })
        .catch(() => cached)
      return cached || network
    })
  )
})

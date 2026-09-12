// 简易离线缓存：预缓存应用壳，运行时缓存同源 GET 资源。
// 对导航请求单独兜底到 /index.html，适合 Vue Router 的 history 模式。
const CACHE = 'japan-guide-v6'
const APP_SHELL = [
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/images/hero-japan.webp',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  )
})

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

  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(CACHE)
        return (await cache.match(request)) || cache.match('/index.html')
      })
    )
    return
  }

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

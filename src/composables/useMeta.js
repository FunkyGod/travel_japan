const SITE = '日本旅行手册 · Japan Travel Guide'
const DEFAULT_DESC = '以顶级攻略路线为主线的日本旅游指南，覆盖季节、温泉、美食、文化与实用贴士，樱花粉可爱风手册。'

function setMeta(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOg(prop, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${prop}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', prop)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// 每页切换时更新 title / description / og，供 SEO 抓取
export function applyMeta({ title = '', description = '' } = {}) {
  document.title = title ? `${title} · ${SITE}` : SITE
  const desc = description || DEFAULT_DESC
  setMeta('description', desc)
  setOg('og:title', title || SITE)
  setOg('og:description', desc)
  setOg('og:type', 'website')
  setOg('og:image', '/images/hero-japan.webp')
  setOg('og:url', window.location.href)
  setMeta('twitter:card', 'summary_large_image')
}

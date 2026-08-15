import { ref } from 'vue'

const KEY = 'japan-guide:favorites'

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    const arr = raw ? JSON.parse(raw) : []
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

// 模块级共享状态：所有组件读到同一份收藏列表
const favs = ref(load())

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(favs.value))
  } catch {
    /* 隐私模式等场景下忽略写入失败 */
  }
}

export function useFavorites() {
  const isFav = (id) => favs.value.includes(id)
  const toggle = (id) => {
    const i = favs.value.indexOf(id)
    if (i >= 0) favs.value.splice(i, 1)
    else favs.value.push(id)
    persist()
  }
  const clear = () => {
    favs.value = []
    persist()
  }
  return { favs, isFav, toggle, clear }
}

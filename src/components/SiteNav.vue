<script setup>
import { ref, computed } from 'vue'
import { useFavorites } from '../composables/useFavorites.js'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()
const { favs } = useFavorites()
const favCount = computed(() => favs.value.length)
const isSpecial = computed(() => ['/ski', '/family', '/hiking', '/budget'].includes(route.path))

const links = [
  { to: '/', label: '首页', emoji: '🏠' },
  { to: '/routes', label: '顶级路线', emoji: '🗺️' },
  { to: '/seasons', label: '季节日历', emoji: '🌸' },
  { to: '/onsen', label: '温泉', emoji: '♨️' },
  { to: '/food', label: '美食', emoji: '🍱' },
  { to: '/culture', label: '了解日本', emoji: '🏮' },
  { to: '/transport', label: '交通', emoji: '🚄' },
  { to: '/ski', label: '专题', emoji: '✨' },
  { to: '/tips', label: '实用贴士', emoji: '🧳' },
]
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <router-link to="/" class="brand" @click="open = false">
        <span class="brand-emoji">🌸</span>
        <span class="brand-text">日本旅行手册</span>
      </router-link>

      <nav class="nav-links" :class="{ open }">
        <router-link
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="nav-link"
          :class="{ 'topic-nav-active': l.to === '/ski' && isSpecial }"
          @click="open = false"
        >
          <span>{{ l.emoji }}</span>
          <span>{{ l.label }}</span>
        </router-link>
        <router-link to="/favorites" class="nav-link" @click="open = false">
          <span>💗</span>
          <span>收藏</span>
          <span v-if="favCount" class="nav-badge">{{ favCount }}</span>
        </router-link>
      </nav>

      <div class="nav-actions">
        <router-link to="/search" class="search-btn" aria-label="搜索" @click="open = false">🔍</router-link>
        <button class="menu-btn" @click="open = !open" :aria-expanded="open" aria-label="打开菜单">
          {{ open ? '✕' : '☰' }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 245, 248, 0.86);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-weight: 900;
  font-size: 19px;
  letter-spacing: 0.02em;
  white-space: nowrap;
  flex-shrink: 0;
}
.brand-emoji { font-size: 26px; }
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 14px;
  color: var(--ink-soft);
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.nav-link:hover { background: var(--sakura-100); color: var(--sakura-700); transform: translateY(-1px); }
.nav-link.router-link-active { background: var(--sakura-200); color: var(--sakura-700); }
.nav-link.topic-nav-active { background: var(--sakura-200); color: var(--sakura-700); }
.nav-badge {
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 999px;
  background: var(--sakura-500);
  color: #fff;
  font-size: 11px;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.nav-actions { display: flex; align-items: center; gap: 10px; }
.search-btn {
  border: none;
  background: var(--sakura-100);
  color: var(--sakura-700);
  font-size: 18px;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.menu-btn {
  display: none;
  border: none;
  background: var(--sakura-100);
  color: var(--sakura-700);
  font-size: 22px;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  cursor: pointer;
}

@media (max-width: 800px) {
  .menu-btn { display: block; }
  .nav-links {
    position: absolute;
    top: 70px;
    left: 14px;
    right: 14px;
    flex-direction: column;
    align-items: stretch;
    background: var(--milk);
    border: 1px solid var(--line);
    border-radius: 20px;
    box-shadow: var(--shadow-pop);
    padding: 10px;
    display: none;
  }
  .nav-links.open { display: flex; }
  .nav-link { padding: 13px 14px; }
}
</style>

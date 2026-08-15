<script setup>
import { computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import RouteCard from '../components/RouteCard.vue'
import { useFavorites } from '../composables/useFavorites.js'
import { routes } from '../data/routes.js'

const { favs, clear } = useFavorites()
const items = computed(() => routes.filter(r => favs.value.includes(r.id)))
</script>

<template>
  <div class="page">
    <PageHero
      emoji="💗"
      kicker="My Favorites"
      title="我的收藏"
      description="把想去的路线收进来，慢慢规划你的日本之旅。"
    />

    <div v-if="items.length">
      <div class="fav-bar">
        <span class="fav-count">已收藏 {{ items.length }} 条路线</span>
        <button class="clear" @click="clear">清空收藏</button>
      </div>
      <div class="grid grid-3">
        <RouteCard v-for="r in items" :key="r.id" :route="r" />
      </div>
    </div>

    <div v-else class="empty">
      <p class="empty-emoji">🌸</p>
      <p>还没有收藏任何路线。</p>
      <p class="empty-sub">去路线页逛逛，点卡片左上角的 🤍 就能收进来。</p>
      <router-link to="/routes" class="btn-primary">去探索路线</router-link>
    </div>
  </div>
</template>

<style scoped>
.fav-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 20px; }
.fav-count { color: var(--ink-soft); font-weight: 800; font-size: 14px; }
.clear {
  border: 1px solid var(--sakura-200);
  background: var(--milk);
  color: var(--sakura-600);
  font-weight: 800;
  font-size: 13px;
  padding: 8px 15px;
  border-radius: 999px;
  cursor: pointer;
}
.empty { text-align: center; padding: 48px 0; }
.empty-emoji { font-size: 48px; margin: 0 0 8px; }
.empty p { color: var(--ink-soft); }
.empty-sub { font-size: 14px; color: var(--ink-faint); margin-top: 4px; }
.btn-primary {
  display: inline-flex;
  margin-top: 18px;
  padding: 13px 24px;
  border-radius: 999px;
  background: var(--sakura-500);
  color: #fff;
  font-weight: 800;
  box-shadow: var(--shadow-soft);
}
</style>

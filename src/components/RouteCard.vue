<script setup>
import ImgSlot from './ImgSlot.vue'
import FavButton from './FavButton.vue'
import { imageForRoute } from '../data/media.js'

const props = defineProps({ route: { type: Object, required: true } })
</script>

<template>
  <article class="route-card">
    <router-link :to="`/routes/${route.id}`" class="route-card-link">
      <div class="route-cover">
        <ImgSlot
          :src="imageForRoute(props.route)"
          :emoji="route.emoji"
          :hint="`路线封面 · ${route.title}`"
          ratio="16 / 9"
        />
        <span class="route-days">{{ route.days }}</span>
      </div>
      <div class="route-body">
        <h3 class="route-title">{{ route.title }}</h3>
        <p class="route-subtitle">{{ route.subtitle }}</p>
        <div class="route-tags">
          <span v-for="t in route.tags" :key="t" class="route-tag">{{ t }}</span>
        </div>
        <div class="route-foot">
          <span>探索这条路线</span>
          <span>→</span>
        </div>
      </div>
    </router-link>
    <div class="fav-pos"><FavButton :id="route.id" /></div>
  </article>
</template>

<style scoped>
.route-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  background: var(--card);
  border: 1px solid var(--sakura-100);
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
  overflow: hidden;
}
.route-card:hover { transform: translateY(-5px) rotate(-0.4deg); box-shadow: var(--shadow-pop); }
.route-card-link { display: flex; flex-direction: column; }
.route-cover { position: relative; }
.route-days {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--sakura-700);
  font-weight: 800;
  font-size: 13px;
  box-shadow: var(--shadow-soft);
}
.route-body { display: flex; flex-direction: column; gap: 10px; padding: 18px 20px 20px; }
.route-title { font-size: 20px; font-weight: 900; }
.route-subtitle { margin: 0; color: var(--ink-soft); font-size: 14px; }
.route-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; }
.route-tag {
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-soft);
  background: var(--cream);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 4px 10px;
}
.route-foot {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--line);
  color: var(--sakura-500);
  font-weight: 800;
  font-size: 14px;
}
.fav-pos { position: absolute; top: 10px; left: 10px; }
</style>

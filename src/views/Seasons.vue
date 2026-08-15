<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import { seasons } from '../data/seasons.js'

const activeTag = ref('全部')
const tags = ['全部', '赏花', '红叶', '滑雪', '温泉', '节日', '徒步', '登山', '观光']

const filtered = computed(() => {
  if (activeTag.value === '全部') return seasons
  return seasons.filter(s => s.tags.includes(activeTag.value))
})
</script>

<template>
  <div class="page">
    <PageHero
      emoji="🌸"
      kicker="Season Calendar"
      title="全年季节日历"
      description="樱花、红叶、祭典与滑雪，跟着月份走，就知道什么时候该去哪里。"
    />

    <div class="tag-row">
      <button
        v-for="t in tags"
        :key="t"
        class="filter-tag"
        :class="{ active: activeTag === t }"
        @click="activeTag = t"
      >{{ t }}</button>
    </div>

    <div class="season-grid">
      <div v-for="s in filtered" :key="s.month" class="season-card">
        <div class="season-card-head">
          <span class="season-emoji">{{ s.emoji }}</span>
          <span class="season-month">{{ s.month }} 月</span>
        </div>
        <h2>{{ s.title }}</h2>
        <p>{{ s.desc }}</p>
        <div class="season-tags">
          <span v-for="t in s.tags" :key="t" class="chip">{{ t }}</span>
        </div>
        <ul class="season-highlights">
          <li v-for="h in s.highlights" :key="h">{{ h }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tag-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 20px; }
.filter-tag {
  border: 1px solid var(--sakura-200);
  background: var(--milk);
  color: var(--ink-soft);
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.filter-tag.active { background: var(--sakura-500); color: #fff; border-color: var(--sakura-500); }
.season-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
.season-card {
  background: var(--card);
  border: 1px solid var(--sakura-100);
  border-radius: 22px;
  padding: 20px;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.season-card-head { display: flex; align-items: center; justify-content: space-between; }
.season-emoji { font-size: 34px; }
.season-month { font-weight: 900; color: var(--sakura-400); }
.season-card h2 { font-size: 20px; }
.season-card p { margin: 0; font-size: 14px; color: var(--ink-soft); }
.season-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.season-highlights { margin: 4px 0 0; padding-left: 18px; }
.season-highlights li { font-size: 13px; margin-bottom: 4px; }

@media (max-width: 900px) { .season-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .season-grid { grid-template-columns: 1fr; } }
</style>

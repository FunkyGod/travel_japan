<script setup>
import PageHero from '../components/PageHero.vue'
import { culture } from '../data/culture.js'
</script>

<template>
  <div class="page">
    <PageHero
      emoji="🏮"
      kicker="Understand Japan"
      title="了解日本"
      description="在吃住行之上，还有一层值得慢读的日本——历史、礼仪、艺术与四季，读懂它，旅程会更有味道。"
    />

    <div class="culture-grid">
      <article v-for="c in culture" :key="c.id" class="culture-card">
        <div class="culture-head">
          <span class="culture-emoji">{{ c.emoji }}</span>
          <h2>{{ c.title }}</h2>
        </div>
        <p class="culture-summary">{{ c.summary }}</p>
        <ul class="culture-points">
          <li v-for="p in c.points" :key="p">{{ p }}</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<style scoped>
.culture-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-top: 28px;
}
.culture-card {
  background: var(--card);
  border: 1px solid var(--sakura-100);
  border-radius: 24px;
  padding: 22px;
  box-shadow: var(--shadow-soft);
  break-inside: avoid;
}
.culture-head { display: flex; align-items: center; gap: 12px; }
.culture-emoji { font-size: 32px; }
.culture-head h2 { font-size: 20px; }
.culture-summary { margin: 12px 0 10px; color: var(--ink-soft); font-size: 15px; }
.culture-points { margin: 0; padding-left: 20px; display: grid; gap: 6px; }
.culture-points li { font-size: 14px; }

@media (max-width: 700px) {
  .culture-grid { grid-template-columns: 1fr; }
}
</style>

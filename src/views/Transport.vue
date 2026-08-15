<script setup>
import PageHero from '../components/PageHero.vue'
import SectionHead from '../components/SectionHead.vue'
import { transportModes, passDecision } from '../data/transport.js'
</script>

<template>
  <div class="page">
    <PageHero
      emoji="🚄"
      kicker="Getting Around"
      title="交通指南"
      description="新干线、高速巴士、自驾还是渡轮？先看懂日本的交通版图，再决定要不要买通票。"
    />

    <section class="section">
      <SectionHead kicker="Five Ways" title="五种移动方式" />
      <div class="mode-grid">
        <div v-for="m in transportModes" :key="m.name" class="mode-card">
          <div class="mode-head">
            <span class="mode-emoji">{{ m.emoji }}</span>
            <h3>{{ m.name }}</h3>
          </div>
          <p class="mode-desc">{{ m.desc }}</p>
          <ul class="mode-points">
            <li v-for="p in m.points" :key="p">{{ p }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="Pass or Not" title="通票决策四步" description="别盲目买通票，先算总车费再决定，这才是省钱的关键。" />
      <div class="steps">
        <div v-for="s in passDecision" :key="s.step" class="step-card">
          <span class="step-num">{{ s.step }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mode-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.mode-card {
  background: var(--card);
  border: 1px solid var(--sakura-100);
  border-radius: 22px;
  padding: 20px;
  box-shadow: var(--shadow-soft);
}
.mode-head { display: flex; align-items: center; gap: 12px; }
.mode-emoji { font-size: 32px; }
.mode-head h3 { font-size: 18px; }
.mode-desc { margin: 10px 0 10px; color: var(--ink-soft); font-size: 14px; }
.mode-points { margin: 0; padding-left: 20px; display: grid; gap: 6px; }
.mode-points li { font-size: 14px; }

.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.step-card {
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 20px;
  padding: 18px;
  box-shadow: var(--shadow-soft);
}
.step-num {
  display: inline-flex;
  width: 30px; height: 30px;
  align-items: center; justify-content: center;
  background: var(--sakura-500);
  color: #fff;
  border-radius: 50%;
  font-weight: 900;
  font-size: 14px;
}
.step-card h3 { margin-top: 10px; font-size: 16px; }
.step-card p { margin: 6px 0 0; font-size: 13px; color: var(--ink-soft); }

@media (max-width: 900px) { .steps { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .mode-grid, .steps { grid-template-columns: 1fr; } }
</style>

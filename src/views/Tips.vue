<script setup>
import PageHero from '../components/PageHero.vue'
import SectionHead from '../components/SectionHead.vue'
import { tips, budgetTiers, phrases, moneyRate } from '../data/tips.js'
import { formatYenRange } from '../utils/format.js'
</script>

<template>
  <div class="page">
    <PageHero
      emoji="🧳"
      kicker="Travel Essentials"
      title="实用贴士"
      description="交通卡、通票、现金、网络、退税与礼仪，出发前把这份老玩家攻略装进口袋。"
    />

    <p class="rate-note">💰 {{ moneyRate.note }}</p>

    <div class="tips-list">
      <div v-for="t in tips" :key="t.title" class="tip-card">
        <div class="tip-head">
          <span class="tip-emoji">{{ t.emoji }}</span>
          <h2>{{ t.title }}</h2>
        </div>
        <p class="tip-desc">{{ t.desc }}</p>
        <ul>
          <li v-for="b in t.bullets" :key="b">{{ b }}</li>
        </ul>
      </div>
    </div>

    <section class="section">
      <SectionHead kicker="Daily Budget" title="每日预算怎么排" description="三档参考，帮你把银子花在刀刃上（不含跨城交通）。" />
      <div class="budget-grid">
        <div v-for="b in budgetTiers" :key="b.tier" class="budget-card">
          <div class="budget-head">
            <span class="budget-emoji">{{ b.emoji }}</span>
            <h3>{{ b.tier }}</h3>
            <span class="budget-price">{{ formatYenRange(b.perDay) }}</span>
          </div>
          <p class="budget-desc">{{ b.desc }}</p>
          <ul class="budget-items">
            <li v-for="it in b.items" :key="it.label">
              <strong>{{ it.label }}</strong><span>{{ it.note }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="Survival Phrases" title="应急日语十句" description="不会日语没关系，这几句够你问路、结账、点餐。" />
      <div class="phrase-table">
        <div v-for="p in phrases" :key="p.roman" class="phrase-row">
          <strong class="phrase-jp">{{ p.jp }}</strong>
          <span class="phrase-roman">{{ p.roman }}</span>
          <span class="phrase-zh">{{ p.zh }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.rate-note {
  text-align: center;
  background: var(--lemon);
  border-radius: 999px;
  padding: 10px 16px;
  font-size: 13px;
  color: #7a5c2e;
  width: fit-content;
  margin: 16px auto 0;
}
.tips-list { display: grid; gap: 16px; margin-top: 24px; }
.tip-card {
  background: var(--card);
  border: 1px solid var(--sakura-100);
  border-radius: 22px;
  padding: 22px;
  box-shadow: var(--shadow-soft);
}
.tip-head { display: flex; align-items: center; gap: 12px; }
.tip-emoji { font-size: 30px; }
.tip-head h2 { font-size: 20px; }
.tip-desc { margin: 12px 0 10px; color: var(--ink-soft); font-size: 15px; }
.tip-card ul { margin: 0; padding-left: 20px; }
.tip-card li { margin-bottom: 6px; font-size: 14px; }

.budget-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.budget-card {
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 22px;
  padding: 20px;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.budget-head { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.budget-emoji { font-size: 30px; }
.budget-head h3 { font-size: 20px; }
.budget-price { margin-left: auto; font-size: 13px; font-weight: 800; color: var(--sakura-600); background: var(--sakura-100); padding: 5px 11px; border-radius: 999px; }
.budget-desc { margin: 0; font-size: 13px; color: var(--ink-soft); }
.budget-items { margin: 0; padding: 0; list-style: none; display: grid; gap: 8px; }
.budget-items li { display: flex; flex-direction: column; gap: 2px; border-top: 1px dashed var(--line); padding-top: 8px; }
.budget-items strong { font-size: 13px; color: var(--ink); }
.budget-items span { font-size: 12px; color: var(--ink-soft); }

.phrase-table { background: var(--milk); border: 1px solid var(--sakura-100); border-radius: 20px; overflow: hidden; }
.phrase-row {
  display: grid;
  grid-template-columns: 1.4fr 1.2fr 2fr;
  gap: 14px;
  align-items: baseline;
  padding: 12px 18px;
  border-bottom: 1px solid var(--line);
}
.phrase-row:last-child { border-bottom: none; }
.phrase-jp { color: var(--ink); font-size: 15px; }
.phrase-roman { color: var(--sakura-600); font-size: 13px; }
.phrase-zh { color: var(--ink-soft); font-size: 14px; }

@media (max-width: 900px) { .budget-grid { grid-template-columns: 1fr; } }
@media (max-width: 600px) {
  .phrase-row { grid-template-columns: 1fr; gap: 2px; }
}
</style>

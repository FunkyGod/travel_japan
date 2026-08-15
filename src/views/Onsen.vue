<script setup>
import PageHero from '../components/PageHero.vue'
import SectionHead from '../components/SectionHead.vue'
import { onsen, onsenEtiquette, onsenTerms, springTypes, tattooNote } from '../data/onsen.js'
</script>

<template>
  <div class="page">
    <PageHero
      emoji="♨️"
      kicker="Onsen Guide"
      title="温泉指南"
      description="日本列岛有数千处温泉。先学会礼仪，再挑一处喜欢的热汤，让疲惫慢慢化开。"
    />

    <section class="section">
      <SectionHead kicker="Step by Step" title="温泉礼仪四步走" />
      <div class="steps">
        <div v-for="s in onsenEtiquette" :key="s.step" class="step-card">
          <span class="step-num">{{ s.step }}</span>
          <span class="step-emoji">{{ s.emoji }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="Onsen Picks" title="值得一去的名泉" />
      <div class="onsen-grid">
        <div v-for="o in onsen" :key="o.name" class="onsen-card">
          <div class="onsen-head">
            <span class="onsen-emoji">{{ o.emoji }}</span>
            <span class="onsen-region">{{ o.region }}</span>
          </div>
          <h3>{{ o.name }}</h3>
          <p>{{ o.desc }}</p>
          <div class="onsen-tags">
            <span v-for="t in o.tags" :key="t" class="chip">{{ t }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="Spring Types" title="泉质科普" description="不同泉质功效不同，选对池子事半功倍。" />
      <div class="spring-grid">
        <div v-for="s in springTypes" :key="s.name" class="spring-card">
          <span class="spring-emoji">{{ s.emoji }}</span>
          <strong>{{ s.name }}</strong>
          <p>{{ s.effect }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="Glossary" title="温泉小词典" />
      <div class="terms">
        <div v-for="t in onsenTerms" :key="t.term" class="term-row">
          <strong>{{ t.term }}</strong>
          <span>{{ t.meaning }}</span>
        </div>
      </div>
    </section>

    <p class="tattoo-note">⚠️ {{ tattooNote }}</p>
  </div>
</template>

<style scoped>
.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.step-card {
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 20px;
  padding: 18px;
  text-align: center;
  box-shadow: var(--shadow-soft);
}
.step-num {
  display: inline-flex;
  width: 28px; height: 28px;
  align-items: center; justify-content: center;
  background: var(--sakura-500);
  color: #fff;
  border-radius: 50%;
  font-weight: 900;
  font-size: 13px;
}
.step-emoji { display: block; font-size: 32px; margin: 10px 0 6px; }
.step-card h3 { font-size: 16px; }
.step-card p { margin: 6px 0 0; font-size: 13px; color: var(--ink-soft); }

.onsen-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.onsen-card {
  background: var(--card);
  border: 1px solid var(--sakura-100);
  border-radius: 22px;
  padding: 20px;
  box-shadow: var(--shadow-soft);
}
.onsen-head { display: flex; justify-content: space-between; align-items: center; }
.onsen-emoji { font-size: 30px; }
.onsen-region { font-size: 12px; font-weight: 700; color: var(--ink-faint); }
.onsen-card h3 { margin-top: 10px; font-size: 18px; }
.onsen-card p { margin: 6px 0 12px; font-size: 14px; color: var(--ink-soft); }
.onsen-tags { display: flex; flex-wrap: wrap; gap: 6px; }

.spring-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.spring-card {
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 18px;
  padding: 16px;
  text-align: center;
}
.spring-emoji { font-size: 26px; }
.spring-card strong { display: block; margin-top: 8px; font-size: 14px; }
.spring-card p { margin: 6px 0 0; font-size: 12px; color: var(--ink-soft); }

.tattoo-note {
  margin-top: 24px;
  text-align: center;
  font-size: 13px;
  color: #8a5a12;
  background: var(--lemon);
  border-radius: 14px;
  padding: 12px 16px;
}

.terms { background: var(--milk); border: 1px solid var(--sakura-100); border-radius: 20px; overflow: hidden; }
.term-row {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 12px 18px;
  border-bottom: 1px solid var(--line);
}
.term-row:last-child { border-bottom: none; }
.term-row strong { min-width: 120px; color: var(--sakura-700); }
.term-row span { font-size: 14px; color: var(--ink-soft); }

@media (max-width: 900px) { .steps, .onsen-grid, .spring-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .steps, .onsen-grid, .spring-grid { grid-template-columns: 1fr; } }
</style>

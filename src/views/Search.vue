<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import { routes } from '../data/routes.js'
import { regions } from '../data/regions.js'
import { top25, top25Target } from '../data/top25.js'
import { food } from '../data/food.js'
import { onsen } from '../data/onsen.js'
import { seasons } from '../data/seasons.js'
import { tips } from '../data/tips.js'
import { culture } from '../data/culture.js'
import { transportModes } from '../data/transport.js'
import { specialTopics } from '../data/specials.js'

const route = useRoute()
const q = ref(typeof route.query.q === 'string' ? route.query.q : '')

// 统一搜索索引：每条记录 { kind, title, text, to }
const index = [
  ...routes.map(r => ({
    kind: '路线',
    title: r.title,
    text: [r.subtitle, r.region, r.tags.join(' '), r.highlights.join(' '), r.description, r.stay, r.eat, r.itinerary.map(d => d.title + ' ' + d.detail).join(' ')].join(' '),
    to: `/routes/${r.id}`,
  })),
  ...regions.map(r => ({
    kind: '地区',
    title: r.name,
    text: [r.desc, r.highlights.join(' ')].join(' '),
    to: `/routes?region=${r.slug}`,
  })),
  ...top25.map(t => ({
    kind: '体验',
    title: t.title,
    text: t.desc,
    to: top25Target(t)?.to || '',
  })).filter(x => x.to),
  ...food.map(f => ({
    kind: '美食',
    title: f.name,
    text: [f.region, f.desc].join(' '),
    to: '/food',
  })),
  ...onsen.map(o => ({
    kind: '温泉',
    title: o.name,
    text: [o.region, o.desc, o.tags.join(' ')].join(' '),
    to: '/onsen',
  })),
  ...seasons.map(s => ({
    kind: '季节',
    title: `${s.month} 月 · ${s.title}`,
    text: [s.desc, s.tags.join(' ')].join(' '),
    to: '/seasons',
  })),
  ...tips.map(t => ({
    kind: '贴士',
    title: t.title,
    text: [t.desc, t.bullets.join(' ')].join(' '),
    to: '/tips',
  })),
  ...culture.map(c => ({
    kind: '文化',
    title: c.title,
    text: [c.summary, c.points.join(' ')].join(' '),
    to: '/culture',
  })),
  ...transportModes.map(t => ({
    kind: '交通',
    title: t.name,
    text: [t.desc, t.points.join(' ')].join(' '),
    to: '/transport',
  })),
  ...specialTopics.map(t => ({
    kind: '专题',
    title: t.title,
    text: [t.description, t.highlights.map(h => `${h.title} ${h.body}`).join(' '), t.guides.map(g => `${g.title} ${g.body}`).join(' ')].join(' '),
    to: `/${t.slug}`,
  })),
]

const results = computed(() => {
  const kw = q.value.trim()
  if (!kw) return []
  const lower = kw.toLowerCase()
  return index.filter(i => i.title.toLowerCase().includes(lower) || i.text.toLowerCase().includes(lower))
})

const grouped = computed(() => {
  const groups = {}
  for (const r of results.value) {
    ;(groups[r.kind] ||= []).push(r)
  }
  return groups
})
</script>

<template>
  <div class="page">
    <PageHero
      emoji="🔍"
      kicker="Search"
      title="全站搜索"
      description="跨路线、地区、体验、美食、温泉、季节、文化、交通与专题，一次搜全。"
    />

    <input v-model="q" class="search" type="search" autofocus placeholder="搜任意关键词，例如：温泉 / 京都 / 红叶 / 签证" />

    <p v-if="q && results.length" class="hint">共找到 {{ results.length }} 条结果</p>
    <p v-else-if="q" class="hint">😢 没有匹配「{{ q }}」的内容，换个词试试。</p>

    <section v-for="(list, kind) in grouped" :key="kind" class="section">
      <h2 class="group-title">{{ kind }}</h2>
      <div class="result-list">
        <router-link v-for="r in list" :key="r.title" :to="r.to" class="result-item">
          <span class="result-title">{{ r.title }}</span>
          <span class="result-arrow">→</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
  max-width: 560px;
  display: block;
  margin: 20px auto 0;
  padding: 15px 20px;
  border: 1px solid var(--sakura-200);
  border-radius: 999px;
  font-size: 16px;
  color: var(--ink);
  background: var(--milk);
  outline: none;
  box-shadow: var(--shadow-soft);
}
.search:focus { border-color: var(--sakura-400); }
.hint { text-align: center; color: var(--ink-faint); font-size: 14px; margin-top: 18px; }
.group-title {
  font-size: 18px;
  font-weight: 900;
  color: var(--sakura-600);
  margin-bottom: 10px;
}
.result-list { display: grid; gap: 8px; }
.result-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 14px;
  padding: 13px 16px;
  font-weight: 700;
  transition: transform 0.2s, border-color 0.2s;
}
.result-item:hover { transform: translateY(-2px); border-color: var(--sakura-300); }
.result-arrow { color: var(--sakura-400); font-weight: 900; }
</style>

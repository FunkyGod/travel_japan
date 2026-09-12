<script setup>
import { computed, ref } from 'vue'
import SectionHead from '../components/SectionHead.vue'
import RouteCard from '../components/RouteCard.vue'
import ImgSlot from '../components/ImgSlot.vue'
import { routes } from '../data/routes.js'
import { top25, top25Target } from '../data/top25.js'
import { regions } from '../data/regions.js'
import { seasons } from '../data/seasons.js'
import { imageForRegion } from '../data/media.js'
import { specialTopics } from '../data/specials.js'
import { travelUpdates } from '../data/tips.js'

function fallbackImage(event) {
  const img = event?.target
  if (img && !img.dataset.fallbackApplied) {
    img.dataset.fallbackApplied = '1'
    img.src = '/images/hero-japan.webp'
  }
}

const featuredRoutes = routes.slice(0, 6)
const seasonPeek = seasons.filter(s => [3, 4, 10, 11].includes(s.month))
const latestUpdates = travelUpdates.slice(0, 3)
const topItems = top25.map((item, i) => ({
  ...item,
  num: String(i + 1).padStart(2, '0'),
  target: top25Target(item),
}))

const duration = ref('全部')
const vibe = ref('全部')
const season = ref('全部')

const durationOptions = [
  { value: '全部', label: '天数不限' },
  { value: 'short', label: '3–5 天' },
  { value: 'medium', label: '6–7 天' },
  { value: 'long', label: '8 天以上' },
]
const vibeOptions = ['全部', '城市', '自然', '温泉', '美食', '文化']
const seasonOptions = ['全部', '樱花', '红叶', '雪季', '夏日']
const vibeTags = {
  城市: ['城市漫游', '购物'],
  自然: ['自然风光', '溪流', '海岛', '徒步', '山岳'],
  温泉: ['温泉', '宿坊'],
  美食: ['美食', '海鲜', '街头美食'],
  文化: ['文化', '历史', '艺术'],
}

const recommendedRoutes = computed(() => {
  const scored = routes.map(route => {
    let score = 0
    const routeDays = Number.parseInt(route.days, 10)
    if (duration.value === 'short' && routeDays <= 5) score += 3
    if (duration.value === 'medium' && routeDays >= 6 && routeDays <= 7) score += 3
    if (duration.value === 'long' && routeDays >= 8) score += 3
    if (vibe.value !== '全部' && vibeTags[vibe.value].some(tag => route.tags.includes(tag))) score += 3
    if (season.value !== '全部' && route.season.includes(season.value)) score += 2
    return { route, score }
  })

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.route)
})
</script>

<template>
  <div class="page">
    <section class="home-hero">
      <img class="home-hero-image" src="/images/hero-japan.webp" alt="樱花掩映下的日本古街与远山" @error="fallbackImage" />
      <div class="home-hero-shade"></div>
      <div class="home-hero-copy">
        <p class="hero-kicker">JAPAN, AT YOUR PACE</p>
        <h1>把一趟日本，<br /><em>走成自己的故事。</em></h1>
        <p class="home-hero-desc">从第一次做攻略，到出发前最后一晚，这里把路线、季节、文化与实用细节收进一份能真正用起来的旅行手册。</p>
        <div class="hero-actions hero-actions-left">
          <router-link to="/routes" class="btn-primary">🗺️ 探索 {{ routes.length }} 条路线</router-link>
          <router-link to="/tips" class="btn-ghost btn-ghost-light">出发前必读 ↗</router-link>
        </div>
      </div>
      <div class="hero-sticker">离线也能查<br /><strong>旅行不掉线</strong></div>
    </section>

    <section class="weekly-brief" aria-label="本周日本旅行更新">
      <div class="weekly-brief-head">
        <p class="section-kicker">WEEKLY BRIEFING · 2026-09-13</p>
        <h2>本周会影响出行的 3 件事</h2>
        <router-link to="/updates" class="weekly-brief-more">看完整更新 →</router-link>
      </div>
      <ul class="weekly-brief-list">
        <li v-for="item in latestUpdates" :key="item.title">
          <span class="weekly-brief-tag">{{ item.tag }}</span>
          <div>
            <strong>{{ item.title }}</strong>
            <p>{{ item.summary }}</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="planner-card" aria-labelledby="planner-title">
      <div class="planner-intro">
        <p class="section-kicker">START HERE</p>
        <h2 id="planner-title">先告诉我，你想怎么旅行？</h2>
        <p>用 10 秒缩小选择范围，结果会根据路线天数、主题和季节动态变化。</p>
      </div>
      <div class="planner-controls">
        <label>
          <span>我有几天</span>
          <select v-model="duration">
            <option v-for="option in durationOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </label>
        <label>
          <span>我更想要</span>
          <select v-model="vibe">
            <option v-for="option in vibeOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </label>
        <label>
          <span>我在意季节</span>
          <select v-model="season">
            <option v-for="option in seasonOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </label>
      </div>
      <div class="planner-results">
        <div v-for="(route, index) in recommendedRoutes" :key="route.id" class="planner-result">
          <span class="planner-index">0{{ index + 1 }}</span>
          <div>
            <strong>{{ route.title }}</strong>
            <span>{{ route.subtitle }}</span>
          </div>
          <router-link :to="`/routes/${route.id}`" aria-label="查看路线详情">→</router-link>
        </div>
      </div>
    </section>

    <div class="proof-strip">
      <div><strong>{{ routes.length }}</strong><span>条逐日路线</span></div>
      <div><strong>{{ regions.length }}</strong><span>个地区入口</span></div>
      <div><strong>12</strong><span>个月季节建议</span></div>
      <div><strong>100%</strong><span>本地离线可查</span></div>
    </div>

    <section class="section">
      <SectionHead kicker="精选路线" title="从哪一条开始？" description="挑一条喜欢的路线，打开就是可参考的逐日行程。" />
      <div class="grid grid-3">
        <RouteCard v-for="r in featuredRoutes" :key="r.id" :route="r" />
      </div>
      <div class="more-link">
        <router-link to="/routes">查看全部 {{ routes.length }} 条路线 →</router-link>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="专题入口" title="按旅行方式开始" description="滑雪、亲子、徒步或省钱，先选你真正关心的那一种。" />
      <div class="special-grid">
        <router-link v-for="topic in specialTopics" :key="topic.slug" :to="`/${topic.slug}`" class="special-card">
          <img :src="topic.image" :alt="`${topic.title}专题封面`" loading="lazy" decoding="async" @error="fallbackImage" />
          <div class="special-card-shade"></div>
          <div class="special-card-copy"><span>{{ topic.emoji }} {{ topic.kicker }}</span><strong>{{ topic.title }}</strong></div>
        </router-link>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="Top 25" title="日本最值得做的 25 件事" description="点一下就能跳到你关心的攻略路线。" />
      <div class="top-grid">
        <component
          :is="item.target ? 'router-link' : 'div'"
          v-for="item in topItems"
          :key="item.title"
          :to="item.target ? item.target.to : undefined"
          class="top-item"
          :class="{ clickable: item.target }"
        >
          <span class="top-num">{{ item.num }}</span>
          <span class="top-emoji">{{ item.emoji }}</span>
          <div class="top-text">
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </div>
          <span v-if="item.target" class="top-arrow">→</span>
        </component>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="地区速览" title="日本怎么分块玩" :description="`从东京到冲绳，${regions.length} 个地区各有性格，点击进入该地区路线。`" />
      <div class="grid grid-3">
        <router-link v-for="r in regions" :key="r.name" :to="`/routes?region=${r.slug}`" class="region-card">
          <ImgSlot :src="imageForRegion(r)" :emoji="r.emoji" :hint="`地区图 · ${r.name}`" ratio="16 / 9" />
          <h3>{{ r.name }}</h3>
          <p>{{ r.desc }}</p>
          <div class="region-tags">
            <span v-for="h in r.highlights" :key="h" class="region-tag">{{ h }}</span>
          </div>
        </router-link>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="季节提醒" title="什么时间去最好" description="樱花与红叶最经典，但每个月都有值得前往的理由。" />
      <div class="grid grid-4">
        <div v-for="s in seasonPeek" :key="s.month" class="season-mini">
          <span class="season-emoji">{{ s.emoji }}</span>
          <strong>{{ s.month }} 月</strong>
          <p>{{ s.title }}</p>
        </div>
      </div>
      <div class="more-link">
        <router-link to="/seasons">查看全年 12 个月 →</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-hero {
  position: relative;
  min-height: 500px;
  margin: 8px -24px 0;
  overflow: hidden;
  border-radius: 0 0 38px 38px;
  background: #6d4f59;
  isolation: isolate;
}
.home-hero-image, .home-hero-shade { position: absolute; inset: 0; width: 100%; height: 100%; }
.home-hero-image { object-fit: cover; object-position: center; z-index: -2; }
.home-hero-shade { z-index: -1; background: linear-gradient(90deg, rgba(61, 35, 47, 0.85) 0%, rgba(61, 35, 47, 0.48) 42%, rgba(61, 35, 47, 0.08) 82%), linear-gradient(0deg, rgba(36, 22, 30, 0.38), transparent 45%); }
.home-hero-copy { position: relative; max-width: var(--maxw); margin: 0 auto; padding: 88px 24px 92px; color: #fff; }
.home-hero .hero-kicker { color: #ffd0df; font-size: 12px; letter-spacing: 0.22em; font-weight: 900; }
.home-hero h1 { color: #fff; font-size: clamp(38px, 6vw, 72px); letter-spacing: -0.04em; line-height: 1.12; text-shadow: 0 4px 24px rgba(36, 22, 30, 0.25); }
.home-hero h1 em { color: #ffd5e2; font-style: normal; }
.home-hero-desc { max-width: 520px; margin: 20px 0 0; color: rgba(255,255,255,0.84); font-size: 16px; line-height: 1.8; }
.hero-actions-left { justify-content: flex-start; margin-top: 26px; }
.btn-ghost-light { background: rgba(255,255,255,0.12); color: #fff; border-color: rgba(255,255,255,0.45); backdrop-filter: blur(10px); }
.hero-sticker { position: absolute; right: 7%; bottom: 36px; transform: rotate(5deg); padding: 14px 16px; background: #fff7da; color: #9a6844; border-radius: 12px 12px 14px 4px; box-shadow: 8px 10px 22px rgba(47, 24, 32, 0.18); font-size: 12px; line-height: 1.35; }
.hero-sticker strong { font-size: 15px; }
.planner-card { position: relative; margin: -42px 20px 0; padding: 26px; background: rgba(255,253,249,0.96); border: 1px solid rgba(255,255,255,0.75); border-radius: 28px; box-shadow: 0 18px 50px rgba(131, 64, 89, 0.16); z-index: 2; }
.weekly-brief { margin: 22px 20px 0; padding: 22px 24px; background: var(--lemon); border: 1px solid rgba(240, 180, 80, 0.28); border-radius: 22px; }
.weekly-brief-head { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.weekly-brief-head h2 { font-size: 20px; margin-top: 4px; }
.weekly-brief-more { color: var(--sakura-600); font-weight: 800; font-size: 13px; }
.weekly-brief-list { list-style: none; margin: 14px 0 0; padding: 0; display: grid; gap: 10px; }
.weekly-brief-list li { display: grid; grid-template-columns: 110px 1fr; gap: 14px; align-items: start; padding: 12px 14px; background: rgba(255, 253, 249, 0.78); border-radius: 14px; }
.weekly-brief-tag { color: #7a5c2e; background: #fff7da; font-weight: 900; font-size: 12px; padding: 4px 10px; border-radius: 999px; white-space: nowrap; }
.weekly-brief-list strong { font-size: 15px; }
.weekly-brief-list p { margin: 4px 0 0; color: var(--ink-soft); font-size: 13px; line-height: 1.7; }
@media (max-width: 600px) { .weekly-brief-list li { grid-template-columns: 1fr; } }
.planner-intro h2 { font-size: clamp(23px, 3vw, 30px); }
.planner-intro p:last-child { margin: 8px 0 0; color: var(--ink-soft); font-size: 14px; }
.planner-controls { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 22px; }
.planner-controls label { display: grid; gap: 7px; color: var(--ink-soft); font-size: 12px; font-weight: 800; }
.planner-controls select { appearance: none; width: 100%; padding: 11px 14px; border: 1px solid var(--line); border-radius: 12px; background: var(--cream); color: var(--ink); font: inherit; font-size: 14px; cursor: pointer; }
.planner-results { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 18px; }
.planner-result { display: flex; align-items: center; gap: 10px; min-width: 0; padding: 12px; border-radius: 15px; background: var(--sakura-50); border: 1px solid var(--sakura-100); }
.planner-index { color: var(--sakura-400); font-size: 12px; font-weight: 900; }
.planner-result div { display: grid; gap: 2px; min-width: 0; flex: 1; }
.planner-result strong, .planner-result span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.planner-result strong { font-size: 13px; }
.planner-result div span { color: var(--ink-soft); font-size: 11px; }
.planner-result > a { color: var(--sakura-500); font-size: 20px; font-weight: 900; }
.proof-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin: 26px 0 4px; border: 1px solid var(--line); border-radius: 18px; overflow: hidden; background: var(--line); }
.proof-strip div { display: grid; gap: 2px; padding: 15px; text-align: center; background: rgba(255,253,249,0.78); }
.proof-strip strong { color: var(--sakura-600); font-size: 21px; }
.proof-strip span { color: var(--ink-faint); font-size: 12px; }
.hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
}
.btn-primary, .btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 22px;
  border-radius: 999px;
  font-weight: 800;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary { background: var(--sakura-500); color: #fff; box-shadow: var(--shadow-soft); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: var(--shadow-pop); }
.btn-ghost { background: var(--milk); color: var(--sakura-600); border: 1px solid var(--sakura-200); }
.btn-ghost:hover { transform: translateY(-2px); }

.more-link { margin-top: 22px; text-align: center; }
.more-link a { color: var(--sakura-500); font-weight: 800; }

.top-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.top-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 18px;
  padding: 14px;
}
.top-item.clickable { transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s; }
.top-item.clickable:hover { transform: translateY(-2px); box-shadow: var(--shadow-soft); border-color: var(--sakura-300); }
.top-num { color: var(--sakura-400); font-weight: 900; font-size: 14px; min-width: 26px; }
.top-emoji { font-size: 26px; }
.top-text { flex: 1; }
.top-item strong { font-size: 15px; }
.top-item p { margin: 3px 0 0; font-size: 13px; color: var(--ink-soft); }
.top-arrow { color: var(--sakura-400); font-weight: 900; align-self: center; }

.region-card {
  display: flex;
  flex-direction: column;
  background: var(--card);
  border: 1px solid var(--sakura-100);
  border-radius: var(--radius-md);
  padding: 16px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s, box-shadow 0.2s;
}
.region-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-pop); }
.region-card h3 { margin-top: 12px; font-size: 18px; }
.region-card p { margin: 6px 0 12px; font-size: 14px; color: var(--ink-soft); }
.region-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.region-tag { font-size: 12px; background: var(--sakura-50); color: var(--sakura-600); border-radius: 999px; padding: 4px 9px; }

.season-mini {
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: var(--radius-md);
  padding: 16px;
  text-align: center;
}
.season-emoji { font-size: 28px; }
.season-mini strong { display: block; margin-top: 6px; font-size: 15px; }
.season-mini p { margin: 3px 0 0; font-size: 13px; color: var(--ink-soft); }

.special-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.special-card { position: relative; min-height: 190px; overflow: hidden; border-radius: 22px; background: var(--ink); box-shadow: var(--shadow-soft); }
.special-card img, .special-card-shade { position: absolute; inset: 0; width: 100%; height: 100%; }
.special-card img { object-fit: cover; transition: transform .45s ease; }
.special-card-shade { background: linear-gradient(0deg, rgba(42, 27, 38, .84), rgba(42,27,38,.04) 72%); }
.special-card-copy { position: absolute; inset: auto 16px 16px; display: grid; gap: 7px; color: #fff; }
.special-card-copy span { color: #ffd0df; font-size: 10px; letter-spacing: .13em; font-weight: 900; }
.special-card-copy strong { font-size: 17px; }
.special-card:hover img { transform: scale(1.06); }

@media (max-width: 700px) {
  .home-hero { margin-left: -16px; margin-right: -16px; border-radius: 0 0 28px 28px; min-height: 580px; }
  .home-hero-copy { padding: 70px 22px 120px; }
  .home-hero-image { object-position: 62% center; }
  .home-hero-shade { background: linear-gradient(0deg, rgba(61, 35, 47, 0.82) 0%, rgba(61, 35, 47, 0.22) 78%), linear-gradient(90deg, rgba(61, 35, 47, 0.3), transparent); }
  .hero-sticker { right: 22px; bottom: 28px; }
  .planner-card { margin: -30px 0 0; padding: 20px; border-radius: 22px; }
  .planner-controls, .planner-results, .proof-strip { grid-template-columns: 1fr; }
  .proof-strip { gap: 1px; }
  .top-grid { grid-template-columns: 1fr; }
  .special-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 420px) { .special-grid { grid-template-columns: 1fr; } }
</style>

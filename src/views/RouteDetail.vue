<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { routes } from '../data/routes.js'
import { regions } from '../data/regions.js'
import { formatYenRange } from '../utils/format.js'
import { applyMeta } from '../composables/useMeta.js'
import ImgSlot from '../components/ImgSlot.vue'
import FavButton from '../components/FavButton.vue'
import RouteCard from '../components/RouteCard.vue'
import { imageForRoute } from '../data/media.js'
import { playbookFor } from '../data/routePlaybook.js'

const route = useRoute()
const router = useRouter()

const item = computed(() => routes.find(r => r.id === route.params.id))
const notFound = computed(() => !item.value)

// 相关路线：同地区，排除自身，最多 3 条
const related = computed(() => {
  if (!item.value) return []
  return routes.filter(r => r.regionSlug === item.value.regionSlug && r.id !== item.value.id).slice(0, 3)
})

const regionName = computed(() => {
  if (!item.value) return ''
  const found = regions.find(r => r.slug === item.value.regionSlug)
  return found ? found.name : item.value.region
})

const playbook = computed(() => playbookFor(item.value))
const budgetBreakdown = computed(() => {
  if (!item.value) return []
  const [low, high] = item.value.budget
  const parts = [
    { label: '住宿', ratio: 0.4, emoji: '🏨' },
    { label: '餐饮', ratio: 0.25, emoji: '🍜' },
    { label: '跨城与市内交通', ratio: 0.2, emoji: '🚄' },
    { label: '门票与体验', ratio: 0.15, emoji: '🎟️' },
  ]
  return parts.map(part => ({
    ...part,
    range: [Math.round(low * part.ratio / 1000) * 1000, Math.round(high * part.ratio / 1000) * 1000],
  }))
})

const contextLinks = computed(() => {
  if (!item.value) return []
  const links = [
    { to: '/food', label: '美食地图', note: '按地区找吃什么' },
    { to: '/tips', label: '实用贴士', note: '出发前核对清单' },
    { to: '/seasons', label: '季节日历', note: '看月份与天气节奏' },
  ]
  if (item.value.tags.some(tag => ['温泉', '宿坊'].includes(tag))) links.unshift({ to: '/onsen', label: '温泉指南', note: '礼仪与名泉选择' })
  if (item.value.tags.some(tag => ['徒步', '朝圣', '自然风光'].includes(tag))) links.unshift({ to: '/hiking', label: '徒步专题', note: '难度与装备准备' })
  if (item.value.tags.some(tag => ['亲子', '家庭友好'].includes(tag))) links.unshift({ to: '/family', label: '亲子专题', note: '节奏与 Plan B' })
  return links.slice(0, 4)
})

// 每页动态 SEO：标题与描述跟随当前路线
watch(item, (val) => {
  if (val) applyMeta({ title: val.title, description: val.description })
}, { immediate: true })

function goBack() {
  if (window.history.length > 1) router.back()
  else router.push('/routes')
}

const usefulLinks = [
  { label: '日本国家旅游局 JNTO', url: 'https://www.japan.travel/zh-cn/' },
  { label: 'JR Pass 官方', url: 'https://japanrailpass.net/zh-cn/' },
  { label: '换乘查询 HyperDia', url: 'https://www.hyperdia.com/zh/' },
  { label: '地图与导航', url: 'https://www.google.com/maps' },
]
</script>

<template>
  <div class="page" v-if="item">
    <button class="back" @click="goBack">← 返回</button>

    <div class="detail-cover">
      <ImgSlot :src="imageForRoute(item)" :emoji="item.emoji" :hint="`封面图 · ${item.title}`" ratio="21 / 9" />
    </div>

    <header class="detail-head">
      <p class="detail-kicker">
        <router-link :to="`/routes?region=${item.regionSlug}`" class="region-link">{{ regionName }}</router-link>
      </p>
      <h1>{{ item.title }}</h1>
      <p class="detail-sub">{{ item.subtitle }}</p>
      <div class="detail-tags">
        <span v-for="t in item.tags" :key="t" class="pill">{{ t }}</span>
      </div>
      <div class="detail-fav"><FavButton :id="item.id" label="收藏" /></div>
    </header>

    <div class="detail-stats">
      <div class="stat"><span>🗓️</span><strong>{{ item.days }}</strong><em>行程时长</em></div>
      <div class="stat"><span>🌸</span><strong>{{ item.season }}</strong><em>最佳季节</em></div>
      <div class="stat"><span>💰</span><strong>{{ formatYenRange(item.budget) }}</strong><em>人均预算参考</em></div>
    </div>

    <section class="section">
      <div class="budget-head">
        <div>
          <h2 class="h2">预算怎么拆</h2>
          <p class="muted">按路线总预算做规划分配，不是商家报价；实际支付以实时价格为准。</p>
        </div>
        <strong class="budget-total">{{ formatYenRange(item.budget) }}</strong>
      </div>
      <div class="budget-breakdown">
        <div v-for="part in budgetBreakdown" :key="part.label" class="budget-row">
          <span class="budget-row-label"><span>{{ part.emoji }}</span>{{ part.label }}</span>
          <div class="budget-bar"><i :style="{ width: `${part.ratio * 100}%` }"></i></div>
          <strong>{{ formatYenRange(part.range) }}</strong>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">路线简介</h2>
      <p class="lead">{{ item.description }}</p>
      <div class="highlight-box">
        <h3>✨ 亮点</h3>
        <ul>
          <li v-for="h in item.highlights" :key="h">{{ h }}</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">住哪儿 & 吃什么</h2>
      <div class="stay-eat">
        <div class="se-card">
          <span class="se-emoji">🏨</span>
          <div>
            <h3>住宿建议</h3>
            <p>{{ item.stay }}</p>
          </div>
        </div>
        <div class="se-card">
          <span class="se-emoji">🍽️</span>
          <div>
            <h3>必吃推荐</h3>
            <p>{{ item.eat }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">逐日行程</h2>
      <div class="timeline">
        <div v-for="d in item.itinerary" :key="d.day" class="timeline-item">
          <div class="timeline-dot">第 {{ d.day }} 天</div>
          <div class="timeline-body">
            <h3>{{ d.title }}</h3>
            <p>{{ d.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">交通参考</h2>
      <div class="note-card">
        <ul>
          <li v-for="t in item.transport" :key="t">{{ t }}</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">出行贴士</h2>
      <div class="tip-grid">
        <div v-for="(t, i) in item.tips" :key="i" class="tip-item">
          <span class="tip-emoji">💡</span>
          <p>{{ t }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">导游视角：三处要留余地</h2>
      <div class="playbook-grid">
        <article><span>📸</span><h3>最佳拍照时机</h3><p>{{ playbook.photo }}</p></article>
        <article><span>🌧️</span><h3>遇雨 Plan B</h3><p>{{ playbook.rainy }}</p></article>
        <article><span>🔎</span><h3>出发前核对</h3><p>{{ playbook.check }}</p></article>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">继续准备这趟旅行</h2>
      <div class="context-links">
        <router-link v-for="link in contextLinks" :key="link.to" :to="link.to" class="context-link"><strong>{{ link.label }}</strong><span>{{ link.note }}</span><b>→</b></router-link>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">实用链接</h2>
      <div class="link-grid">
        <a v-for="l in usefulLinks" :key="l.url" :href="l.url" target="_blank" rel="noopener noreferrer" class="link-card">
          <span>🔗</span>{{ l.label }} <em>↗</em>
        </a>
      </div>
    </section>

    <section v-if="related.length" class="section">
      <h2 class="h2">同地区相关路线</h2>
      <div class="grid grid-3">
        <RouteCard v-for="r in related" :key="r.id" :route="r" />
      </div>
    </section>

    <div class="detail-foot">
      <router-link to="/routes" class="btn-primary">浏览更多路线</router-link>
    </div>
  </div>

  <div v-else-if="notFound" class="not-found">
    <p>😢 找不到这条路线</p>
    <router-link to="/routes" class="btn-primary">返回路线总览</router-link>
  </div>
</template>

<style scoped>
.back {
  border: none;
  background: none;
  color: var(--sakura-600);
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 16px;
}
.detail-cover { margin-top: 12px; }
.detail-head { text-align: center; padding: 24px 0 8px; }
.detail-kicker { color: var(--sakura-500); font-weight: 800; letter-spacing: 0.14em; margin: 10px 0 6px; }
.region-link:hover { text-decoration: underline; }
.detail-head h1 { font-size: clamp(30px, 4vw, 44px); font-weight: 900; }
.detail-sub { color: var(--ink-soft); font-size: 17px; margin: 8px 0 0; }
.detail-tags { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
.detail-fav { display: flex; justify-content: center; margin-top: 16px; }

.detail-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 24px;
}
.stat {
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 20px;
  padding: 16px;
  text-align: center;
}
.stat span { font-size: 22px; }
.stat strong { display: block; margin-top: 6px; font-size: 15px; }
.stat em { display: block; margin-top: 3px; font-style: normal; font-size: 12px; color: var(--ink-faint); }
.muted { margin: 0; color: var(--ink-soft); font-size: 13px; }
.budget-head { display: flex; justify-content: space-between; align-items: end; gap: 20px; }
.budget-head .h2 { margin-bottom: 4px; }
.budget-total { color: var(--sakura-600); font-size: 14px; white-space: nowrap; }
.budget-breakdown { display: grid; gap: 12px; margin-top: 15px; padding: 18px; background: var(--milk); border: 1px solid var(--sakura-100); border-radius: 20px; }
.budget-row { display: grid; grid-template-columns: 150px 1fr minmax(150px, 210px); align-items: center; gap: 12px; }
.budget-row-label { display: flex; align-items: center; gap: 7px; font-weight: 800; font-size: 13px; }
.budget-bar { height: 9px; overflow: hidden; border-radius: 999px; background: var(--sakura-100); }
.budget-bar i { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--sakura-300), var(--sakura-500)); }
.budget-row > strong { text-align: right; color: var(--ink-soft); font-size: 12px; }

.h2 { font-size: 24px; font-weight: 900; margin-bottom: 12px; }
.lead { font-size: 16px; color: var(--ink-soft); max-width: 720px; }
.highlight-box, .note-card {
  background: var(--sakura-50);
  border: 1px solid var(--sakura-100);
  border-radius: 20px;
  padding: 18px 20px;
  margin-top: 16px;
}
.highlight-box h3 { font-size: 16px; }
.highlight-box ul, .note-card ul { margin: 10px 0 0; padding-left: 20px; }
.highlight-box li, .note-card li { margin-bottom: 6px; font-size: 14px; }

.stay-eat { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.se-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 18px;
  padding: 16px;
}
.se-emoji { font-size: 28px; }
.se-card h3 { font-size: 16px; }
.se-card p { margin: 6px 0 0; font-size: 14px; color: var(--ink-soft); }

.timeline { position: relative; padding-left: 20px; }
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--sakura-200);
}
.timeline-item { position: relative; margin-bottom: 18px; }
.timeline-dot {
  position: relative;
  display: inline-block;
  background: var(--sakura-100);
  color: var(--sakura-700);
  font-weight: 800;
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 8px;
}
.timeline-body {
  background: var(--card);
  border: 1px solid var(--sakura-100);
  border-radius: 18px;
  padding: 14px 16px;
  box-shadow: var(--shadow-soft);
}
.timeline-body h3 { font-size: 16px; }
.timeline-body p { margin: 6px 0 0; font-size: 14px; color: var(--ink-soft); }

.tip-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 16px;
  padding: 14px;
}
.tip-emoji { font-size: 20px; }
.tip-item p { margin: 0; font-size: 14px; }
.playbook-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.playbook-grid article { padding: 18px; background: var(--sakura-50); border: 1px solid var(--sakura-100); border-radius: 18px; }
.playbook-grid article > span { font-size: 24px; }
.playbook-grid h3 { margin-top: 8px; font-size: 15px; }
.playbook-grid p { margin: 6px 0 0; color: var(--ink-soft); font-size: 13px; }
.context-links { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.context-link { position: relative; display: grid; gap: 3px; padding: 14px; background: var(--milk); border: 1px solid var(--sakura-100); border-radius: 16px; transition: transform .2s, border-color .2s; }
.context-link:hover { transform: translateY(-2px); border-color: var(--sakura-300); }
.context-link strong { font-size: 14px; }
.context-link span { color: var(--ink-soft); font-size: 12px; }
.context-link b { position: absolute; right: 14px; bottom: 11px; color: var(--sakura-500); }

.link-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.link-card {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  border-radius: 16px;
  padding: 14px 16px;
  font-weight: 700;
  transition: transform 0.2s, border-color 0.2s;
}
.link-card:hover { transform: translateY(-2px); border-color: var(--sakura-300); }
.link-card em { margin-left: auto; font-style: normal; color: var(--ink-faint); }

.detail-foot { text-align: center; margin-top: 32px; }
.btn-primary {
  display: inline-flex;
  padding: 13px 24px;
  border-radius: 999px;
  background: var(--sakura-500);
  color: #fff;
  font-weight: 800;
  box-shadow: var(--shadow-soft);
}

.not-found { text-align: center; padding: 60px 0; }
.not-found p { font-size: 20px; color: var(--ink-soft); }

@media (max-width: 700px) {
  .detail-stats { grid-template-columns: 1fr; }
  .tip-grid, .link-grid, .stay-eat { grid-template-columns: 1fr; }
  .budget-head { display: block; }
  .budget-total { display: block; margin-top: 8px; }
  .budget-row { grid-template-columns: 1fr; gap: 5px; }
  .budget-row > strong { text-align: left; }
  .playbook-grid, .context-links { grid-template-columns: 1fr; }
}
</style>

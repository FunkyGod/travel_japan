<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import RouteCard from '../components/RouteCard.vue'
import { routes } from '../data/routes.js'
import { regions } from '../data/regions.js'

const route = useRoute()

const q = ref('')
const tag = ref('全部')
// 从 /routes?region=<slug> 读入地区筛选
const region = ref(route.query.region || '全部')

const allTags = ['全部', ...new Set(routes.flatMap(r => r.tags))]

const regionName = computed(() => {
  if (region.value === '全部') return ''
  const found = regions.find(r => r.slug === region.value)
  return found ? found.name : region.value
})

const filtered = computed(() => {
  return routes.filter(r => {
    const matchQ = !q.value
      || r.title.includes(q.value)
      || r.subtitle.includes(q.value)
      || r.region.includes(q.value)
      || r.tags.some(t => t.includes(q.value))
      || r.highlights.some(h => h.includes(q.value))
    const matchTag = tag.value === '全部' || r.tags.includes(tag.value)
    const matchRegion = region.value === '全部' || r.regionSlug === region.value
    return matchQ && matchTag && matchRegion
  })
})
</script>

<template>
  <div class="page">
    <PageHero
      emoji="🗺️"
      kicker="Top Routes"
      :title="routes.length + ' 条顶级攻略路线'"
      description="基于经典目的地与真实出行数据整理的原创路线，每条都含逐日行程、交通参考与双币预算。"
    />

    <div class="filters">
      <input v-model="q" class="search" type="search" placeholder="搜目的地、路线或亮点，例如：温泉 / 富士山 / 鸟居" />
      <div class="tag-row">
        <button
          v-for="t in allTags"
          :key="t"
          class="filter-tag"
          :class="{ active: tag === t }"
          @click="tag = t"
        >{{ t }}</button>
      </div>
    </div>

    <div class="filter-bar">
      <span v-if="regionName" class="region-active">
        地区：{{ regionName }}
        <button @click="region = '全部'" aria-label="清除地区筛选">✕</button>
      </span>
      <p class="count">{{ filtered.length }} 条路线</p>
    </div>

    <div v-if="filtered.length" class="grid grid-3">
      <RouteCard v-for="r in filtered" :key="r.id" :route="r" />
    </div>
    <div v-else class="empty">
      <p>😢 没有匹配的路线</p>
      <button class="reset" @click="q = ''; tag = '全部'; region = '全部'">重置筛选</button>
    </div>
  </div>
</template>

<style scoped>
.filters { margin-top: 20px; }
.search {
  width: 100%;
  max-width: 520px;
  display: block;
  margin: 0 auto 16px;
  padding: 13px 18px;
  border: 1px solid var(--sakura-200);
  border-radius: 999px;
  font-size: 15px;
  color: var(--ink);
  background: var(--milk);
  outline: none;
  box-shadow: var(--shadow-soft);
}
.search:focus { border-color: var(--sakura-400); }
.tag-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
.filter-tag {
  border: 1px solid var(--sakura-200);
  background: var(--milk);
  color: var(--ink-soft);
  padding: 7px 13px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.filter-tag:hover { transform: translateY(-1px); }
.filter-tag.active { background: var(--sakura-500); border-color: var(--sakura-500); color: #fff; }

.filter-bar { margin-top: 18px; display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; }
.count { color: var(--ink-faint); font-size: 13px; }
.region-active {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--sakura-100);
  color: var(--sakura-700);
  font-weight: 800;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 999px;
}
.region-active button {
  border: none;
  background: none;
  color: var(--sakura-700);
  cursor: pointer;
  font-size: 13px;
  padding: 0;
}

.empty { text-align: center; padding: 48px 0; }
.empty p { color: var(--ink-soft); font-size: 18px; }
.reset {
  border: 1px solid var(--sakura-200);
  background: var(--milk);
  color: var(--sakura-600);
  font-weight: 800;
  padding: 9px 18px;
  border-radius: 999px;
  cursor: pointer;
  margin-top: 12px;
}
</style>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { specialBySlug } from '../data/specials.js'
import { applyMeta } from '../composables/useMeta.js'

function fallbackImage(event) {
  const img = event?.target
  if (img && !img.dataset.fallbackApplied) {
    img.dataset.fallbackApplied = '1'
    img.src = '/images/hero-japan.webp'
  }
}

const route = useRoute()
const topic = computed(() => specialBySlug[route.params.topic])

watch(topic, (value) => {
  if (value) applyMeta({
    title: value.title,
    description: value.description,
  })
}, { immediate: true })
</script>

<template>
  <div v-if="topic" class="page topic-page">
    <section class="topic-hero">
      <img class="topic-hero-image" :src="topic.image" :alt="`${topic.title}专题封面`" @error="fallbackImage" />
      <div class="topic-hero-shade"></div>
      <div class="topic-hero-copy">
        <p class="topic-kicker">{{ topic.emoji }} {{ topic.kicker }}</p>
        <h1>{{ topic.title }}</h1>
        <p>{{ topic.description }}</p>
      </div>
    </section>

    <section class="topic-facts" aria-label="专题速览">
      <div v-for="fact in topic.facts" :key="fact.label" class="topic-fact">
        <span>{{ fact.label }}</span>
        <strong>{{ fact.value }}</strong>
        <small>{{ fact.note }}</small>
      </div>
    </section>

    <section class="section">
      <div class="topic-section-head">
        <div>
          <p class="section-kicker">HOW TO CHOOSE</p>
          <h2 class="section-title">先选对方向，再出发</h2>
        </div>
        <p>把“想去哪里”变成“为什么适合我”。</p>
      </div>
      <div class="topic-highlights">
        <article v-for="(highlight, index) in topic.highlights" :key="highlight.title" class="topic-highlight">
          <span class="topic-highlight-num">0{{ index + 1 }}</span>
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.body }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="topic-section-head">
        <div>
          <p class="section-kicker">FIELD NOTES</p>
          <h2 class="section-title">把攻略变成行动</h2>
        </div>
      </div>
      <div class="topic-guides">
        <article v-for="guide in topic.guides" :key="guide.title" class="topic-guide">
          <span class="topic-guide-emoji">{{ guide.emoji }}</span>
          <div>
            <h3>{{ guide.title }}</h3>
            <p>{{ guide.body }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section topic-bottom-grid">
      <div class="checklist-card">
        <p class="section-kicker">PACK & CHECK</p>
        <h2 class="section-title">出发前小清单</h2>
        <ul>
          <li v-for="item in topic.checklist" :key="item">{{ item }}</li>
        </ul>
      </div>
      <aside class="topic-note">
        <span>📝</span>
        <p>{{ topic.note }}</p>
      </aside>
    </section>

    <section class="section">
      <div class="topic-section-head">
        <div>
          <p class="section-kicker">KEEP EXPLORING</p>
          <h2 class="section-title">把专题接到路线里</h2>
        </div>
      </div>
      <div class="topic-related">
        <router-link v-for="item in topic.related" :key="item.to" :to="item.to" class="topic-related-link">
          <span>{{ item.label }}</span><strong>→</strong>
        </router-link>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <p>😢 找不到这个专题</p>
    <router-link to="/" class="btn-primary">回到首页</router-link>
  </div>
</template>

<style scoped>
.topic-hero {
  position: relative;
  min-height: 360px;
  overflow: hidden;
  border-radius: 0 0 34px 34px;
  background: var(--ink);
  isolation: isolate;
}
.topic-hero-image, .topic-hero-shade { position: absolute; inset: 0; width: 100%; height: 100%; }
.topic-hero-image { object-fit: cover; object-position: center; z-index: -2; }
.topic-hero-shade { z-index: -1; background: linear-gradient(90deg, rgba(48, 31, 42, 0.82), rgba(48, 31, 42, 0.32) 68%, rgba(48,31,42,0.06)); }
.topic-hero-copy { max-width: var(--maxw); margin: 0 auto; padding: 72px 24px 76px; color: #fff; }
.topic-kicker { color: #ffd0df; letter-spacing: .2em; font-size: 12px; font-weight: 900; }
.topic-hero h1 { margin-top: 14px; color: #fff; font-size: clamp(34px, 5vw, 60px); letter-spacing: -.04em; }
.topic-hero-copy > p:last-child { max-width: 560px; margin-top: 16px; color: rgba(255,255,255,.86); font-size: 16px; line-height: 1.8; }
.topic-facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin: -26px 20px 0; position: relative; z-index: 2; border-radius: 22px; overflow: hidden; background: var(--line); box-shadow: var(--shadow-pop); }
.topic-fact { display: grid; gap: 5px; min-height: 122px; padding: 18px; background: rgba(255,253,249,.96); }
.topic-fact span { color: var(--sakura-500); font-size: 12px; font-weight: 900; letter-spacing: .08em; }
.topic-fact strong { font-size: 18px; }
.topic-fact small { color: var(--ink-soft); font-size: 12px; line-height: 1.5; }
.topic-section-head { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 18px; }
.topic-section-head > p { max-width: 280px; margin: 0; color: var(--ink-soft); font-size: 14px; text-align: right; }
.topic-highlights { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.topic-highlight { position: relative; min-height: 190px; padding: 22px; background: var(--milk); border: 1px solid var(--sakura-100); border-radius: 22px; box-shadow: var(--shadow-soft); }
.topic-highlight-num { color: var(--sakura-300); font-size: 14px; font-weight: 900; letter-spacing: .1em; }
.topic-highlight h3 { margin-top: 18px; font-size: 19px; }
.topic-highlight p { margin: 8px 0 0; color: var(--ink-soft); font-size: 14px; line-height: 1.75; }
.topic-guides { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.topic-guide { display: flex; gap: 12px; padding: 18px; background: var(--sakura-50); border: 1px solid var(--sakura-100); border-radius: 18px; }
.topic-guide-emoji { font-size: 28px; line-height: 1; }
.topic-guide h3 { font-size: 16px; }
.topic-guide p { margin: 6px 0 0; color: var(--ink-soft); font-size: 13px; line-height: 1.7; }
.topic-bottom-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 16px; align-items: stretch; }
.checklist-card { padding: 24px; background: var(--lemon); border: 1px solid rgba(240,180,80,.25); border-radius: 24px; }
.checklist-card .section-title { margin-top: 4px; }
.checklist-card ul { display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px 22px; margin: 18px 0 0; padding-left: 20px; }
.checklist-card li { font-size: 14px; color: #795b2b; }
.topic-note { display: flex; gap: 12px; align-items: flex-start; padding: 24px; background: var(--ink); color: #fff; border-radius: 24px 24px 8px 24px; }
.topic-note span { font-size: 25px; }
.topic-note p { margin: 0; color: rgba(255,255,255,.82); font-size: 14px; line-height: 1.8; }
.topic-related { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.topic-related-link { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 16px 18px; background: var(--milk); border: 1px solid var(--sakura-100); border-radius: 16px; font-weight: 800; transition: transform .2s, border-color .2s; }
.topic-related-link:hover { transform: translateY(-2px); border-color: var(--sakura-300); }
.topic-related-link strong { color: var(--sakura-500); font-size: 20px; }
.not-found { text-align: center; padding: 60px 0; }
.btn-primary { display: inline-flex; padding: 13px 24px; border-radius: 999px; background: var(--sakura-500); color: #fff; font-weight: 800; }
@media (max-width: 800px) { .topic-highlights, .topic-guides, .topic-related { grid-template-columns: 1fr; } .topic-bottom-grid { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .topic-hero { min-height: 430px; border-radius: 0 0 28px 28px; } .topic-hero-copy { padding: 64px 22px 86px; } .topic-hero-image { object-position: 62% center; } .topic-hero-shade { background: linear-gradient(0deg, rgba(48,31,42,.86), rgba(48,31,42,.12)); } .topic-facts { grid-template-columns: 1fr; margin: -26px 0 0; } .topic-fact { min-height: auto; } .topic-section-head { display: block; } .topic-section-head > p { margin-top: 8px; text-align: left; } .checklist-card ul { grid-template-columns: 1fr; } }
</style>

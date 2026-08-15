<script setup>
defineProps({
  emoji: { type: String, default: '🌸' },
  kicker: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <section class="hero">
    <div class="hero-badge">{{ emoji }}</div>
    <p v-if="kicker" class="hero-kicker">{{ kicker }}</p>
    <h1 class="hero-title">{{ title }}</h1>
    <p v-if="description" class="hero-desc">{{ description }}</p>
  </section>
</template>

<style scoped>
.hero {
  padding: 40px 0 20px;
  text-align: center;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  font-size: 34px;
  border-radius: 24px;
  background: var(--milk);
  border: 1px solid var(--sakura-100);
  box-shadow: var(--shadow-soft);
  transform: rotate(-6deg);
  margin-bottom: 16px;
}
.hero-kicker {
  margin: 0 0 8px;
  color: var(--sakura-500);
  font-weight: 800;
  letter-spacing: 0.16em;
  font-size: 13px;
  text-transform: uppercase;
}
.hero-title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 900;
  letter-spacing: -0.02em;
}
.hero-desc {
  max-width: 680px;
  margin: 16px auto 0;
  color: var(--ink-soft);
  font-size: 16px;
}
</style>

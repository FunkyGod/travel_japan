<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="section-head">
    <div>
      <p v-if="kicker" class="section-kicker">{{ kicker }}</p>
      <h2 class="section-title">{{ title }}</h2>
      <p v-if="description" class="section-desc">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.section-desc { margin: 8px 0 0; color: var(--ink-soft); font-size: 15px; max-width: 640px; }
</style>

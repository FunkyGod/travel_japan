<script setup>
import { useFavorites } from '../composables/useFavorites.js'

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, default: '' },
})
const { isFav, toggle } = useFavorites()
</script>

<template>
  <button
    class="fav-btn"
    :class="{ on: isFav(props.id) }"
    :aria-pressed="isFav(props.id)"
    :aria-label="label || '收藏这条路线'"
    @click.stop.prevent="toggle(props.id)"
  >
    <span aria-hidden="true">{{ isFav(props.id) ? '💗' : '🤍' }}</span>
    <span v-if="label">{{ isFav(props.id) ? '已收藏' : '收藏' }}</span>
  </button>
</template>

<style scoped>
.fav-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--sakura-200);
  background: var(--milk);
  color: var(--ink-soft);
  font-weight: 800;
  font-size: 13px;
  padding: 7px 13px;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s, color 0.2s;
}
.fav-btn:hover { transform: translateY(-1px); }
.fav-btn.on {
  background: var(--sakura-100);
  color: var(--sakura-700);
  border-color: var(--sakura-300);
}
</style>

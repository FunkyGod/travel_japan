<script setup>
import { ref, watch } from 'vue'

// 图片预留槽位：src 为空时渲染占位框，展示该图应有的内容与风格提示。
// 图片清单详见 docs/图片清单.md，补图时给数据填 image 字段即可。
const failed = ref(false)

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  hint: { type: String, default: '待补充图片' },
  emoji: { type: String, default: '🖼️' },
  ratio: { type: String, default: '16 / 9' },
})

watch(() => props.src, () => {
  failed.value = false
})

function onError() {
  failed.value = true
}
</script>

<template>
  <div class="img-slot" :style="{ aspectRatio: ratio }">
    <img v-if="src && !failed" :src="src" :alt="alt || hint" loading="lazy" decoding="async" @error="onError" />
    <div v-else class="img-slot-empty" role="img" :aria-label="alt || hint">
      <span class="img-slot-emoji">{{ emoji }}</span>
      <span class="img-slot-hint">{{ hint }}</span>
    </div>
  </div>
</template>

<style scoped>
.img-slot {
  overflow: hidden;
  border-radius: 18px;
  background: var(--sakura-50);
  border: 1px dashed var(--sakura-200);
}
.img-slot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.img-slot-empty {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  text-align: center;
}
.img-slot-emoji { font-size: 30px; opacity: 0.7; }
.img-slot-hint {
  font-size: 12px;
  color: var(--ink-faint);
  max-width: 260px;
}
</style>

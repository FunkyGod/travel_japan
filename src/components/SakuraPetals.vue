<script setup>
const petals = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 9 + Math.random() * 8,
  size: 12 + Math.random() * 14,
  opacity: 0.35 + Math.random() * 0.4,
}))
</script>

<template>
  <div class="sakura-layer" aria-hidden="true">
    <span
      v-for="p in petals"
      :key="p.id"
      class="petal"
      :style="{
        left: p.left + '%',
        animationDelay: p.delay + 's',
        animationDuration: p.duration + 's',
        width: p.size + 'px',
        height: p.size * 0.9 + 'px',
        opacity: p.opacity,
      }"
    >❀</span>
  </div>
</template>

<style scoped>
.sakura-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}
.petal {
  position: absolute;
  top: -30px;
  color: var(--sakura-300);
  font-size: 18px;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes fall {
  0% { transform: translateY(-30px) translateX(0) rotate(0deg); }
  50% { transform: translateY(50vh) translateX(24px) rotate(160deg); }
  100% { transform: translateY(108vh) translateX(-14px) rotate(340deg); }
}
</style>

<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-emoji">🌸</span>
        <span>日本旅行手册</span>
      </div>
      <p class="footer-note">
        内容整理自公开旅行资料，供个人出行参考；票价、汇率与政策请以官方实时信息为准。
      </p>
      <p class="footer-meta">© {{ year }} Japan Travel Guide · 周维护更新于 2026-09-11</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  background: rgba(255, 245, 248, 0.6);
  padding: 32px 24px 40px;
  position: relative;
  z-index: 2;
}
.footer-inner {
  max-width: var(--maxw);
  margin: 0 auto;
  text-align: center;
}
.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 900;
  font-size: 17px;
}
.footer-emoji { font-size: 22px; }
.footer-note, .footer-meta {
  margin: 10px auto 0;
  max-width: 640px;
  color: var(--ink-faint);
  font-size: 13px;
}
.footer-meta { font-size: 12px; }
</style>

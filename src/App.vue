<script setup>
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'
import SakuraPetals from './components/SakuraPetals.vue'
</script>

<template>
  <div class="app-shell">
    <SakuraPetals />
    <SiteNav />
    <main class="app-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

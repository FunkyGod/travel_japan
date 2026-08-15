import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/main.css'

createApp(App).use(router).mount('#app')

// 生产环境注册离线 Service Worker（开发环境跳过，避免干扰热更新）
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      /* 注册失败不阻塞主流程 */
    })
  })
}

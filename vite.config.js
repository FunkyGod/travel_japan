import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // history 路由需绝对路径；部署时静态服务器需把所有路由回退到 index.html
  base: '/',
})

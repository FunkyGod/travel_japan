import { createRouter, createWebHistory } from 'vue-router'
import { applyMeta } from '../composables/useMeta.js'

// 懒加载：按页拆分 chunk，减少首屏体积
const Home = () => import('../views/Home.vue')
const Routes = () => import('../views/Routes.vue')
const RouteDetail = () => import('../views/RouteDetail.vue')
const Seasons = () => import('../views/Seasons.vue')
const Onsen = () => import('../views/Onsen.vue')
const Food = () => import('../views/Food.vue')
const Tips = () => import('../views/Tips.vue')
const Culture = () => import('../views/Culture.vue')
const Transport = () => import('../views/Transport.vue')
const Search = () => import('../views/Search.vue')
const Favorites = () => import('../views/Favorites.vue')
const SpecialTopic = () => import('../views/SpecialTopic.vue')

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '首页', description: '以顶级攻略路线为主线的日本旅游指南，覆盖季节、温泉、美食、文化与实用贴士。' } },
  { path: '/routes', name: 'routes', component: Routes, meta: { title: '顶级攻略路线', description: '覆盖日本全国的精深攻略路线，含逐日行程、交通参考与双币预算。' } },
  { path: '/routes/:id', name: 'route-detail', component: RouteDetail, meta: { title: '路线详情' } },
  { path: '/seasons', name: 'seasons', component: Seasons, meta: { title: '季节日历', description: '日本全年 12 个月的季节看点：樱花、红叶、祭典、滑雪与温泉，逐月规划。' } },
  { path: '/onsen', name: 'onsen', component: Onsen, meta: { title: '温泉', description: '日本温泉指南：入浴礼仪、名泉推荐与温泉小词典。' } },
  { path: '/food', name: 'food', component: Food, meta: { title: '美食', description: '日本地区美食地图与省钱吃喝技巧，从寿司到街边小吃。' } },
  { path: '/culture', name: 'culture', component: Culture, meta: { title: '了解日本', description: '历史、礼仪、艺术、建筑、艺伎与四季，读懂日本的文化背景。' } },
  { path: '/transport', name: 'transport', component: Transport, meta: { title: '交通指南', description: '铁路、巴士、自驾、航班与渡轮五大交通方式，以及通票该不该买的决策方法。' } },
  { path: '/tips', name: 'tips', component: Tips, meta: { title: '实用贴士', description: '签证、现金、交通通票、礼仪与紧急号码，出发前必读。' } },
  { path: '/search', name: 'search', component: Search, meta: { title: '搜索', description: '跨路线、美食、温泉、季节、文化与交通的全局搜索。' } },
  { path: '/favorites', name: 'favorites', component: Favorites, meta: { title: '我的收藏', description: '你收藏的日本旅行路线清单。' } },
  { path: '/:topic(ski|family|hiking|budget)', name: 'special-topic', component: SpecialTopic, meta: { title: '旅行专题', description: '围绕滑雪、亲子、徒步与省钱的日本旅行专题。' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

router.afterEach((to) => {
  applyMeta({ title: to.meta?.title, description: to.meta?.description })
})

export default router

# AGENTS.md — travel_japan

日本旅游指南手册 SPA，樱花粉可爱风，离线可用 PWA。

# ## 最重要

1. 要求日本旅游攻略必须真实有效；
2. 要求涉及数值的内容必须准确；
3. 要求代码必须能在cloudflare正常部署成功；
4. 要求内容不能涉及法律层面的侵权；
5. 要求内容必须不涉及个人隐私 或 安全问题；

## 技术栈

- Vue 3 (Composition API + `<script setup>`) + Vue Router 4 + Vite 6
- 纯 CSS（`src/styles/main.css`），无 CSS 框架 / 预处理器
- 无 TypeScript、无测试框架、无 lint 配置

## 常用命令

```bash
npm run dev      # Vite 开发服务器
npm run build    # 生产构建 → dist/
npm run preview  # 本地预览生产构建
```

无 lint / typecheck / test 命令。

## 项目结构

```
src/
  main.js          # 入口，挂载 App + 生产环境注册 SW
  App.vue           # 壳：SakuraPetals + SiteNav + <router-view> + SiteFooter
  router/index.js   # 9 条路由，全部懒加载
  views/            # 页面组件（Home, Routes, RouteDetail, Seasons, Onsen, Food, Tips, Search, Favorites）
  components/       # 通用 UI 组件（PageHero, RouteCard, FavButton, ImgSlot, SiteNav, SiteFooter, SakuraPetals, SectionHead）
  composables/      # useFavorites（localStorage 持久化）、useMeta（动态 SEO title/description/og）
  data/             # 纯 JS 静态数据文件（routes, regions, seasons, onsen, food, tips, top25）
  utils/format.js   # 汇率换算（日元↔人民币，RATE=23.6）
  styles/main.css   # 全局样式 + CSS 变量（樱花粉色系）
public/
  sw.js             # Service Worker，缓存优先策略，仅生产环境激活
  manifest.json     # PWA manifest
```

## 关键约定

- **数据层**：所有内容硬编码在 `src/data/*.js`，无后端、无 API、无数据库。修改内容直接改 data 文件。
- **路由**：`/routes/:id`，id 对应 `routes.js` 中的 `id` 字段（如 `tokyo-classic`）。
- **地区筛选**：region 的 `slug` 字段用于 `routes.js` 的 `regionSlug` 关联和路由筛选。
- **汇率**：`src/utils/format.js` 中的 `RATE` 常量，需随实际汇率更新。
- **收藏功能**：`useFavorites` 用 `localStorage` key `japan-guide:favorites`，模块级共享状态（非 Pinia）。
- **SEO**：路由 `meta` 定义 title/description，`afterEach` 钩子通过 `useMeta.applyMeta` 动态写入 DOM。
- **图片**：data 文件中 `image` 字段目前大多为空字符串，待补图（见 `docs/图片清单.md`）。
- **Service Worker**：仅在 `import.meta.env.PROD` 时注册，开发环境跳过以免干扰 HMR。
- **部署**：`vite.config.js` 使用 `createWebHistory`，部署时静态服务器需将所有路由回退到 `index.html`。

## 风格

- CSS 变量定义在 `main.css` `:root`，主色 `--sakura-500: #f45d87`，背景 `--cream`。
- 中文字体栈：PingFang SC → Hiragino Sans GB → Noto Sans CJK SC → Microsoft YaHei。
- 组件使用 `<script setup>`，不使用 Options API。

## 参考文档

- `docs/产品需求文档.md` — 完整 PRD，含未来扩展计划（6 个新页面）
- `docs/图片清单.md` — 待补图片素材清单
- `docs/网站改进建议.md` — 改进建议

## 注意事项

- `.gitignore` 排除了 `日本LonelyPlanet_OCR全文.txt`（大型 OCR 源文件），勿将其纳入版本控制。
- 构建产物 `dist/` 已被 gitignore，但当前仓库中存在已提交的 dist 目录，注意不要误提交构建产物。

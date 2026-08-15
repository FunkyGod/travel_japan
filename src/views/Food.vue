<script setup>
import PageHero from '../components/PageHero.vue'
import SectionHead from '../components/SectionHead.vue'
import { food, budgetEating, restaurantTypes, menuGlossary, orderingTips } from '../data/food.js'
import { formatYen } from '../utils/format.js'
</script>

<template>
  <div class="page">
    <PageHero
      emoji="🍱"
      kicker="Food Guide"
      title="日本美食地图"
      description="从寿司到拉面，从怀石到街边小吃，跟着地区找到最该吃的那一口。"
    />

    <section class="section">
      <SectionHead kicker="Regional Flavors" title="地区特色美食" />
      <div class="food-grid">
        <div v-for="f in food" :key="f.name" class="food-card">
          <span class="food-emoji">{{ f.emoji }}</span>
          <div>
            <h3>{{ f.name }}</h3>
            <span class="food-region">{{ f.region }}</span>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="Budget Eating" title="省钱吃喝小技巧" description="日本也能吃得实惠，关键是找对地方。价格已换算双币。" />
      <div class="budget-grid">
        <div v-for="b in budgetEating" :key="b.title" class="budget-card">
          <span class="budget-emoji">{{ b.emoji }}</span>
          <h3>{{ b.title }}</h3>
          <p v-if="b.price" class="budget-price">约 {{ formatYen(b.price) }}</p>
          <p>{{ b.desc }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <SectionHead kicker="Restaurant Decoder" title="先认店型，再选餐厅" description="同一道美食，在不同店型里的节奏、预算和点餐方式都不一样。" />
      <div class="restaurant-grid">
        <article v-for="r in restaurantTypes" :key="r.name" class="restaurant-card">
          <span>{{ r.emoji }}</span>
          <h3>{{ r.name }}</h3>
          <p>{{ r.desc }}</p>
        </article>
      </div>
    </section>

    <section class="section menu-section">
      <div>
        <SectionHead kicker="Menu Decoder" title="看懂菜单上的一眼词" />
        <div class="menu-glossary">
          <div v-for="item in menuGlossary" :key="item.jp"><strong>{{ item.jp }}</strong><span>{{ item.zh }}</span></div>
        </div>
      </div>
      <div>
        <SectionHead kicker="Order Kindly" title="点餐与饮食需求" />
        <div class="order-tips">
          <article v-for="tip in orderingTips" :key="tip.title" class="order-tip"><span>{{ tip.emoji }}</span><div><h3>{{ tip.title }}</h3><p>{{ tip.desc }}</p></div></article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.food-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.food-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: var(--card);
  border: 1px solid var(--sakura-100);
  border-radius: 20px;
  padding: 18px;
  box-shadow: var(--shadow-soft);
}
.food-emoji { font-size: 34px; }
.food-card h3 { font-size: 17px; display: inline-block; margin-right: 8px; }
.food-region { font-size: 12px; color: var(--sakura-500); font-weight: 800; }
.food-card p { margin: 6px 0 0; font-size: 14px; color: var(--ink-soft); }

.budget-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.budget-card {
  background: var(--lemon);
  border: 1px solid rgba(240, 180, 80, 0.25);
  border-radius: 18px;
  padding: 16px;
  text-align: center;
}
.budget-emoji { font-size: 28px; }
.budget-card h3 { font-size: 14px; margin-top: 8px; }
.budget-price { font-size: 13px; font-weight: 800; color: #8a5a12; margin: 6px 0 0; }
.budget-card p { margin: 6px 0 0; font-size: 13px; color: #7a5c2e; }

.restaurant-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.restaurant-card { padding: 18px; background: var(--milk); border: 1px solid var(--sakura-100); border-radius: 20px; box-shadow: var(--shadow-soft); }
.restaurant-card > span { font-size: 28px; }
.restaurant-card h3 { margin-top: 8px; font-size: 17px; }
.restaurant-card p { margin: 6px 0 0; color: var(--ink-soft); font-size: 13px; }
.menu-section { display: grid; grid-template-columns: .9fr 1.1fr; gap: 28px; }
.menu-glossary { display: grid; grid-template-columns: repeat(2, 1fr); overflow: hidden; background: var(--milk); border: 1px solid var(--sakura-100); border-radius: 18px; }
.menu-glossary div { display: grid; gap: 2px; padding: 12px 14px; border-bottom: 1px solid var(--line); }
.menu-glossary strong { color: var(--sakura-700); font-size: 14px; }
.menu-glossary span { color: var(--ink-soft); font-size: 12px; }
.order-tips { display: grid; gap: 10px; }
.order-tip { display: flex; gap: 10px; padding: 12px 14px; background: var(--sakura-50); border: 1px solid var(--sakura-100); border-radius: 15px; }
.order-tip > span { font-size: 22px; }
.order-tip h3 { font-size: 14px; }
.order-tip p { margin: 3px 0 0; color: var(--ink-soft); font-size: 12px; }

@media (max-width: 900px) { .budget-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 900px) { .restaurant-grid, .menu-section { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .food-grid, .budget-grid, .restaurant-grid { grid-template-columns: 1fr; } }
</style>

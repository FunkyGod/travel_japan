// 离线回退基准，不代表实时汇率；展示前请以银行或支付平台实时汇率为准。
export const RATE = 23.6

// 日元 → 人民币（四舍五入到整数）
export function yenToCny(yen) {
  return Math.round(yen / RATE)
}

// 单笔金额：约 ¥3,070 / ￥130
export function formatYen(yen) {
  return `¥${yen.toLocaleString()} / ￥${yenToCny(yen).toLocaleString()}`
}

// 区间金额：约 ¥42,000–68,000 / ￥1,780–2,881
export function formatYenRange([lo, hi]) {
  return `约 ¥${lo.toLocaleString()}–${hi.toLocaleString()} / ￥${yenToCny(lo).toLocaleString()}–${yenToCny(hi).toLocaleString()}`
}

export function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minPrice = Number.MAX_SAFE_INTEGER

  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice
    }
  })

  return maxProfit
}

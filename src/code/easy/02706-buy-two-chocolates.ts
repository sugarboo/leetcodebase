export function buyChoco(prices: number[], money: number): number {
  let choco1 = Number.MAX_SAFE_INTEGER
  let choco2 = Number.MAX_SAFE_INTEGER
  for (const price of prices) {
    if (price < choco1) {
      [choco1, choco2] = [price, choco1]
    } else if (price < choco2) {
      choco2 = price
    }
  }

  return money >= choco1 + choco2 ? money - choco1 - choco2 : money
}

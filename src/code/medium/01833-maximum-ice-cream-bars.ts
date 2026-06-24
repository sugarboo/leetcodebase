export function maxIceCream(costs: number[], coins: number): number {
  let ans = 0

  costs.sort((a, b) => a - b)

  for (const cost of costs) {
    if (coins >= cost) {
      ans++
      coins -= cost
    } else {
      break
    }
  }

  return ans
}

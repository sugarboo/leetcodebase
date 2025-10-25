export function totalMoney(n: number): number {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += Math.floor(i / 7) + i % 7 + 1
  }

  return sum
}

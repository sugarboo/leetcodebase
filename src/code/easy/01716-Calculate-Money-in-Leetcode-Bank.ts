export function totalMoney(n: number): number {
  let balance = 0

  for (let i = 1; i <= n; i++) {
    // weeks === Math.floor(i / 7); weekdays === i % 7
    balance += Math.floor(i / 7) + (i % 7 === 0 ? (7 - 1) : i % 7)
  }

  return balance
}

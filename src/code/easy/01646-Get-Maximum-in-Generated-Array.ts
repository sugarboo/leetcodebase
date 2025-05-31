export function getMaximumGenerated(n: number): number {
  if (n === 0) {
    return 0
  }

  const num = [0, 1, ...Array(n - 1).fill(0)]

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      num[i] = num[i / 2]
    } else {
      num[i] = num[Math.floor(i / 2)] + num[Math.floor(i / 2) + 1]
    }
  }

  return Math.max(...num)
}

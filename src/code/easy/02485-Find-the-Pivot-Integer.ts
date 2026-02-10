export function pivotInteger(n: number): number {
  const sum = (x: number, y: number) => (x + y) * (y - x + 1) / 2

  for (let i = 1; i <= n; i++) {
    if (sum(1, i) === sum(i, n)) {
      return i
    }
  }

  return -1
}

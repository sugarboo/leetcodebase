export function getNoZeroIntegers(n: number): number[] {
  const hasZero = (num: number) => num.toString().includes('0')

  for (let i = 1; i < n; i++) {
    const a = i
    const b = n - i
    if (!hasZero(a) && !hasZero(b)) {
      if (a + b === n) {
        return [a, b]
      }
    }
  }

  return []
}

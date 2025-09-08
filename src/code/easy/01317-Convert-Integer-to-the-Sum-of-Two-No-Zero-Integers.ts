export function getNoZeroIntegers(n: number): number[] {
  const hasZero = (num: number): boolean => num.toString().includes('0')

  for (let i = 1; i < n; i++) {
    if (!hasZero(i) && !hasZero(n - i)) {
      return [i, n - i]
    }
  }

  return []
}

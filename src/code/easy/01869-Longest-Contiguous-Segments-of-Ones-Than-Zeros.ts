export function checkZeroOnes(s: string): boolean {
  const arr1 = s.split('0')
  const arr0 = s.split('1')
  const max1 = Math.max(...arr1.map(subset => subset.length))
  const max0 = Math.max(...arr0.map(subset => subset.length))

  return max1 > max0
}

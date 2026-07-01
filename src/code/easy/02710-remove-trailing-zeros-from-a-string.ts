export function removeTrailingZeros(num: string): string {
  let n = num.length
  while (n > 0 && num[n - 1] === '0') {
    n--
  }
  return num.substring(0, n)
}
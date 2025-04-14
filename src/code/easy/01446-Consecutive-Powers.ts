export function maxPower(s: string): number {
  let max = 1
  let current = 1

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      max = Math.max(max, ++current)
    } else {
      current = 1
    }
  }
  return max
}

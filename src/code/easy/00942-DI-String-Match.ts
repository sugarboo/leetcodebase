export function diStringMatch(s: string): number[] {
  const n = s.length
  const result: number[] = []
  let low = 0
  let high = n
  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      result[i] = low++
    } else if (s[i] === 'D') {
      result[i] = high--
    }
  }
  result[n] = low
  return result
}

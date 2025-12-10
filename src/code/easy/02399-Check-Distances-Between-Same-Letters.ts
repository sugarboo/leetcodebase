export function checkDistances(s: string, distance: number[]): boolean {
  const base = 'a'.charCodeAt(0)
  const firstIndex = Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - base
    if (firstIndex[idx] !== 0 && i - firstIndex[idx] !== distance[idx]) {
      return false
    }
    firstIndex[idx] = i + 1
  }
  return true
}

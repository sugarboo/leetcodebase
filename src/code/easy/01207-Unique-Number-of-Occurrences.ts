export function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>()
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  return map.size === new Set(map.values()).size
}

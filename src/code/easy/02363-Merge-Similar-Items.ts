export function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map = new Map<number, number>()

  for (const [key, value] of [...items1, ...items2]) {
    map.set(key, (map.get(key) ?? 0) + value)
  }

  return Array.from(map.entries()).sort((a, b) => a[0] - b[0])
}

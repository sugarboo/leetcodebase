export function findCenter(edges: number[][]): number {
  const n = edges.length
  const freq = new Map<number, number>()

  for (const [x, y] of edges) {
    freq.set(x, (freq.get(x) || 0) + 1)
    freq.set(y, (freq.get(y) || 0) + 1)
  }

  for (const [node, count] of freq.entries()) {
    if (count === n) {
      return node
    }
  }

  return -1
}

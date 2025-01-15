export function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
  const result: number[][] = []

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  const queue: [number, number][] = [[rCenter, cCenter]]
  const visited = new Set<string>()
  visited.add(`${rCenter},${cCenter}`)

  while (queue.length) {
    // Dequeue
    const [r, c] = queue.shift()!
    result.push([r, c])

    // Enqueue
    for (const [dr, dc] of directions) {
      const nr = r + dr
      const nc = c + dc

      // Check if the neighbor is within bounds and not visited
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        const key = `${nr},${nc}`
        if (!visited.has(key)) {
          visited.add(key)
          queue.push([nr, nc])
        }
      }
    }
  }

  return result
}

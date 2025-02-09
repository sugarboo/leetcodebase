export function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length
  const n = grid[0].length
  const total = m * n
  // effective shifts is k modulo total elements
  k = k % total

  const flatted = grid.flat()
  const shifted = [...flatted.slice(-k), ...flatted.slice(0, -k)]

  const result: number[][] = []
  for (let i = 0; i < m; i++) {
    result.push(shifted.slice(i * n, (i + 1) * n))
  }

  return result
}

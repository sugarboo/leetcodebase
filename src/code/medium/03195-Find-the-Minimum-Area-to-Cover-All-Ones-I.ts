export function minimumArea(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length

  let left = m
  let right = 0
  let top = n
  let bottom = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        left = Math.min(j, left)
        right = Math.max(j, right)
        top = Math.min(i, top)
        bottom = Math.max(i, bottom)
      }
    }
  }

  return (right - left + 1) * (bottom - top + 1)
}
export function deleteGreatestValue(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length

  for (let i = 0; i < m; i++) {
    grid[i].sort((a, b) => a - b)
  }

  let ans = 0
  for (let j = 0; j < n; j++) {
    let max = 0
    for (let i = 0; i < m; i++) {
      max = Math.max(max, grid[i][j])
    }
    ans += max
  }

  return ans
}

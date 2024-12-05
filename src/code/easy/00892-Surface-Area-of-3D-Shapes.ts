export function surfaceArea(grid: number[][]): number {
  const n = grid.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        ans += grid[i][j] * 4 + 2
      }
      if (i > 0) {
        ans -= Math.min(grid[i][j], grid[i - 1][j]) * 2
      }
      if (j > 0) {
        ans -= Math.min(grid[i][j], grid[i][j - 1]) * 2
      }
    }
  }

  return ans
}

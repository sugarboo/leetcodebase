export function projectionArea(grid: number[][]): number {
  const n = grid.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    let bestRow = 0
    let bestCol = 0
    for (let j = 0; j < n; j++) {
      // The shadow from the top will be counts of non-zero value in the grid
      if (grid[i][j] > 0) {
        ans++
      }
      // The shadow from the side will be the largest value for each row in the grid
      bestRow = Math.max(bestRow, grid[i][j])
      // The shadow from the front will be the largest value for each column in the grid
      bestCol = Math.max(bestCol, grid[j][i])
    }
    ans += bestRow + bestCol
  }

  return ans
}

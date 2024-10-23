export function islandPerimeter(grid: number[][]): number {
  if (grid === null || grid.length === 0) {
    return 0
  }

  let res = 0

  // Iterate each cell, if it has a cell nearby, -2
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        res += 4
        if (i > 0 && grid[i - 1][j] === 1) {
          res -= 2
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          res -= 2
        }
      }
    }
  }

  return res
}

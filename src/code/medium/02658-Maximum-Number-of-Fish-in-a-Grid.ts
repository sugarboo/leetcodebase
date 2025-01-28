export function findMaxFish(grid: number[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  const visited = new Set<string>()
  let maxFish = 0

  function dfs(row: number, col: number): number {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0 || visited.has(`${row},${col}`)) {
      return 0
    }

    visited.add(`${row},${col}`)
    let fish = grid[row][col]
    fish += dfs(row + 1, col)
    fish += dfs(row - 1, col)
    fish += dfs(row, col + 1)
    fish += dfs(row, col - 1)
    return fish
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      maxFish = Math.max(maxFish, dfs(row, col))
    }
  }

  return maxFish
}

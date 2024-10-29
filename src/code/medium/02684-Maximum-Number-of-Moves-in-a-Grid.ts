export function maxMoves(grid: number[][]): number {
  // The three possible directions for the next row and column
  const directions = [
    // Up-right
    [-1, 1],
    // Right
    [0, 1],
    // Down-right
    [1, 1],
  ]

  const m = grid.length
  const n = grid[0].length

  const queue: {
    row: number
    col: number
    count: number
  }[] = []
  const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false))

  // Enqueue the cells in the first column
  for (let i = 0; i < m; i++) {
    visited[i][0] = true
    queue.push({
      row: i,
      col: 0,
      count: 0,
    })
  }

  let maxMoves = 0
  while (queue.length) {
    const {
      row,
      col,
      count,
    } = queue.shift()!
    maxMoves = Math.max(maxMoves, count)
    for (const [dx, dy] of directions) {
      // Next cell after move
      const newRow = row + dx
      const newCol = col + dy

      // Check the bounds, visit status, and value condition for next cell
      if (
        newRow >= 0
        && newCol >= 0
        && newRow < m
        && newCol < n
        && !visited[newRow][newCol]
        && grid[row][col] < grid[newRow][newCol]
      ) {
        visited[newRow][newCol] = true
        queue.push({
          row: newRow,
          col: newCol,
          count: count + 1,
        })
      }
    }
  }

  return maxMoves
}

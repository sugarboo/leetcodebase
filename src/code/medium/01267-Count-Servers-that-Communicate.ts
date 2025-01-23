export function countServers(grid: number[][]) {
  const m = grid.length
  const n = grid[0]?.length

  // Storage for the number of servers in each row and column
  const serverCountInRow = Array.from({ length: m }, () => 0)
  const serverCountInCol = Array.from({ length: n }, () => 0)

  // Count the number of servers in each row and column
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        serverCountInRow[i]++
        serverCountInCol[j]++
      }
    }
  }

  // Count the number of server that can communicate
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // When the cell is empty or the server is the only server in the row and column, skip it
      if (grid[i][j] === 0 || (serverCountInRow[i] === 1 && serverCountInCol[j] === 1)) {
        continue
      }

      count++
    }
  }

  return count
}

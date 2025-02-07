export function oddCells(n: number, m: number, indices: number[][]): number {
  // Initialize the matrix
  const matrix = Array.from({ length: n }, () => Array(m).fill(0))

  // Iterate through the indices
  for (const [row, col] of indices) {
    // Increment the row
    for (let i = 0; i < m; i++) {
      matrix[row][i]++
    }
    // Increment the column
    for (let i = 0; i < n; i++) {
      matrix[i][col]++
    }
  }

  // Return the number of cells with odd values
  return matrix.flat().filter(cell => cell % 2 !== 0).length
}

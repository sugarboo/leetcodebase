export function generatePascalTriangle(numRows: number): number[][] {
  const matrix: number[][] = Array.from({ length: numRows }).map((row, i) => row = Array.from({ length: i + 1 }).fill(1)) as number[][]

  // Outer loop starts from 1 (the second row), because the first row must be [1]
  for (let i = 1; i <= numRows - 1; i++) {
    // Inner loop starts from 1, ends with current row's length - 1 - 1, because the first and the last element of each row must be 1
    for (let j = 1; j < i; j++) {
      matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j]
    }
  }

  return matrix
}

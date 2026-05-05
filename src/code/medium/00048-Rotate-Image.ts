/**
 * Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): number[][] {
  const n = matrix.length
  // Flip the matrix horizontally
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]]
    }
  }
  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix
}

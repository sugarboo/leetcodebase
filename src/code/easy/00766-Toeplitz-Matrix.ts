export function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i >= 1 && j >= 1) {
        if (matrix[i][j] !== matrix[i - 1][j - 1]) {
          return false
        }
      }
    }
  }

  return true
}

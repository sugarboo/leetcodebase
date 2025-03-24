export function luckyNumbers(matrix: number[][]): number[] {
  const result: number[] = []
  const rows = matrix.length
  const cols = matrix[0].length

  for (let i = 0; i < rows; i++) {
    let min = matrix[i][0]
    let minIndex = 0
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j]
        minIndex = j
      }
    }

    let max = matrix[0][minIndex]
    for (let k = 0; k < rows; k++) {
      if (matrix[k][minIndex] > max) {
        max = matrix[k][minIndex]
      }
    }

    if (min === max) {
      result.push(min)
    }
  }

  return result
}

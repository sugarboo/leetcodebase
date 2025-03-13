export function numSpecial(mat: number[][]): number {
  const rows = mat.length
  const cols = mat[0].length

  let num = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1) {
        const rowCount = mat[i].filter(val => val === 1).length
        const colCount = mat.map(row => row[j]).filter(val => val === 1).length
        if (rowCount === 1 && colCount === 1) {
          num++
        }
      }
    }
  }
  return num
}

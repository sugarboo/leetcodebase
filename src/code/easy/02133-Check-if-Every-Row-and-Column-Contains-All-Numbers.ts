export function checkValid(matrix: number[][]): boolean {
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    const r = new Set()
    const c = new Set()
    for (let j = 0; j < n; j++) {
      r.add(matrix[i][j])
      c.add(matrix[j][i])
    }
    if (r.size < n || c.size < n) {
      return false
    }
  }
  return true
}

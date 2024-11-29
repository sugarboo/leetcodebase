export function transpose(matrix: number[][]): number[][] {
  const m = matrix.length
  const n = m ? matrix[0].length : 0

  const ans: number[][] = Array.from({ length: n }, () => Array(m).fill(0))

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      ans[j][i] = matrix[i][j]
    }
  }

  return ans
}

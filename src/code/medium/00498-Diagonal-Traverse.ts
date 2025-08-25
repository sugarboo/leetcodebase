export function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length
  const n = mat[0].length
  const ans = Array.from({ length: m * n }, () => 0)

  let pos = 0
  // There are m + n - 1 diagonals in total
  for (let i = 0; i < m + n - 1; i++) {
    if (i % 2 === 1) {
      // Odd-numbered diagonal, from bottom-left to top-right
      let x = i < n ? 0 : i - n + 1
      let y = i < n ? i : n - 1
      // Traverse the diagonal
      while (x < m && y >= 0) {
        ans[pos++] = mat[x][y]
        x++
        y--
      }
    } else {
      // Even-numbered diagonal, from top-right to bottom-left
      let x = i < m ? i : m - 1
      let y = i < m ? 0 : i - m + 1
      // Traverse the diagonal
      while (x >= 0 && y < n) {
        ans[pos++] = mat[x][y]
        x--
        y++
      }
    }
  }

  return ans
}

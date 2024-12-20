export function minDeletionSize(strs: string[]): number {
  const m = strs.length
  const n = strs[0].length

  let result = 0

  for (let c = 0; c < n; c++) {
    for (let r = 1; r < m; r++) {
      if (strs[r][c] < strs[r - 1][c]) {
        result++
        break
      }
    }
  }

  return result
}

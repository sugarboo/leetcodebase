export function findColumnWidth(grid: number[][]): number[] {
  const n = grid[0].length
  const ans = Array(n).fill(0)
  for (let j = 0; j < n; j++) {
    for (const row of grid) {
      ans[j] = Math.max(ans[j], row[j].toString().length)
    }
  }
  return ans
}
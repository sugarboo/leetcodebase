export function largestLocal(grid: number[][]): number[][] {
  const n = grid.length
  const ans = Array(n - 2).fill(0).map(() => Array(n - 2).fill(-Infinity))
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          ans[i][j] = Math.max(ans[i][j], grid[x][y])
        }
      }
    }
  }

  return ans
}

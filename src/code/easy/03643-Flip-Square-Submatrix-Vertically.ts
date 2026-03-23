export function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
  for (let r1 = x, r2 = x + k - 1; r1 < r2; r1++, r2--) {
    for (let c = y; c < y + k; c++) {
      [grid[r1][c], grid[r2][c]] = [grid[r2][c], grid[r1][c]]
    }
  }

  return grid
}

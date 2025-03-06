export function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const missing: number[] = []
  const repeated: number[] = []

  const m = grid.length
  const n = grid[0].length
  const len = m * n

  // Store the frequency of each number in the grid
  const freq = new Map<number, number>()
  for (const row of grid) {
    for (const num of row) {
      freq.set(num, (freq.get(num) || 0) + 1)
    }
  }

  // Check numbers from 1 to len to find the missing and repeated values
  for (let num = 1; num <= len; num++) {
    if (!freq.has(num)) {
      missing.push(num)
    } else if (freq.get(num)! > 1) {
      repeated.push(num)
    }
  }

  return [...repeated, ...missing]
}

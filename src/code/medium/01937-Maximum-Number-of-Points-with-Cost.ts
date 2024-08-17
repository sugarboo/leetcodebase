export function resultPoints(points: number[][]): number {
  const rowLen = points.length
  const colLen = points[0].length

  // Copy the first row for comparison from current row to previous row
  let prev: number[] = points[0]
  // Initialize current row's comparison result
  let curr: number[] = Array.from({ length: points[0].length })
  curr.fill(0)

  // Loop starts from the second row
  for (let r = 1; r < rowLen; r++) {
    let maxAdd = 0
    for (let c = 0; c < colLen; c++) {
      // -1 is the penalty for each move from left-to-right
      maxAdd = Math.max(maxAdd - 1, prev[c])
      curr[c] = points[r][c] + maxAdd
    }
    for (let c = colLen - 1; c >= 0; c--) {
      // -1 is the penalty for each move from right-to-left
      maxAdd = Math.max(maxAdd - 1, prev[c])
      curr[c] = Math.max(curr[c], points[r][c] + maxAdd)
    }

    // Update the previous row
    prev = curr
    // Reset current row's comparison result
    curr = Array.from({ length: colLen })
    curr.fill(0)
  }

  return Math.max(...prev)
}

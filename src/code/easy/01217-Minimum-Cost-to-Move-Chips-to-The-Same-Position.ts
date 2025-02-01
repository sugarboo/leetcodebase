export function minCostToMoveChips(position: number[]): number {
  // Odd position chips move to even position without cost, even position chips move to odd position with 1 step cost
  // Therefore, we only need to count the number of chips at odd and even positions, and then return the smaller one
  let even = 0
  let odd = 0
  // Count the number of chips at odd and even positions
  for (const pos of position) {
    if (pos % 2 === 0) {
      even++
    } else {
      odd++
    }
  }
  // Return the smaller number of chips
  return Math.min(even, odd)
}

export function maximumLength(nums: number[]): number {
  let ans = 0

  // Patterns to check for
  const patterns = [[0, 0], [0, 1], [1, 0], [1, 1]] as const

  for (const pattern of patterns) {
    // Count the number of valid sequences
    let cnt = 0
    for (const num of nums) {
      // Check if the current number matches the pattern
      if (num % 2 === pattern[cnt % 2]) {
        cnt++
      }

      // Update the maximum length
      ans = Math.max(ans, cnt)
    }
  }

  return ans
}

export function isMonotonic(nums: number[]): boolean {
  let prevDiff
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      if (prevDiff === undefined) {
        // Initialize the last diff result of previous diff
        prevDiff = nums[i] - nums[i - 1]
      }
      const currDiff = nums[i] - nums[i - 1]
      if (currDiff === 0) {
        // If currDiff === 0, skip this iteration
        continue
      }
      if ((currDiff > 0 && prevDiff < 0) || (currDiff < 0 && prevDiff > 0)) {
        // If currDiff result !== lastDiff result, return false
        return false
      }
      // Store currDiff result in prevDiff for next comparison
      prevDiff = currDiff
    }
  }

  return true
}

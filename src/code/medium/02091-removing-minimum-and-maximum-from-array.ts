export function minimumDeletions(nums: number[]): number {
  let n = nums.length
  // Position of the min value
  let l = 0
  // Position of the max value
  let r = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num < nums[l]) {
      l = i
    } else if (num > nums[r]) {
      r = i
    }
  }

  // Ensure l is the smaller index and r is the larger index
  if (l > r) {
    [l, r] = [r, l];
  }

  // Calculate the number of deletions for the three possible ways
  // Way 1: Remove from the right end up to and including the max value
  const way1 = r + 1
  // Way 2: Remove from the left end up to and including the min value
  const way2 = n - l
  // Way 3: Remove from both ends
  const way3 = (l + 1) + (n - r)

  return Math.min(way1, way2, way3)
}
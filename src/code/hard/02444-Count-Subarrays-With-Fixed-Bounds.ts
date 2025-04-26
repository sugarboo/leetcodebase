export function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let ans = 0

  // track the position of the last minK and maxK in [left, right]
  let minPos = -1
  let maxPos = -1
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    const num = nums[right]
    // if num is out of range [minK, maxK], update the left boundary
    if (num < minK || num > maxK) {
      minPos = -1
      maxPos = -1
      left = right + 1
    }

    // if num is minK or maxK, update the last minK or maxK
    if (num === minK) {
      minPos = right
    }
    if (num === maxK) {
      maxPos = right
    }

    // if both minK and maxK are found, update the answer
    if (minPos !== -1 && maxPos !== -1) {
      // the number of valid subarrays is the number of elements between minPos and maxPos
      ans += Math.max(0, Math.min(minPos, maxPos) - left + 1)
    }
  }

  return ans
}

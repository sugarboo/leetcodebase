export function minimumIndex(nums: number[]): number {
  const n = nums.length
  let x = nums[0]
  let count = 0
  let xCount = 0

  // Find the majority element
  for (const num of nums) {
    if (num === x) {
      count++
    } else {
      count--
    }
    if (count === 0) {
      x = num
      count = 1
    }
  }

  // Count the frequency of majority element
  for (const num of nums) {
    if (num === x) {
      xCount++
    }
  }

  // Check if the split is valid
  count = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] === x) {
      count++
    }
    const remainingCount = xCount - count
    // Check if both left and right partitions satisfy the condition
    if (count * 2 > i + 1 && remainingCount * 2 > n - i - 1) {
      return i
    }
  }

  return -1
}

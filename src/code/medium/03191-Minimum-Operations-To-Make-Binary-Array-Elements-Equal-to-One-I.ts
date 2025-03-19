export function minOperations(nums: number[]): number {
  let count = 0

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 0) {
      nums[i] = 1
      nums[i + 1] = nums[i + 1] === 0 ? 1 : 0
      nums[i + 2] = nums[i + 2] === 0 ? 1 : 0
      count++
    }
  }

  if (nums[nums.length - 2] === 0 || nums[nums.length - 1] === 0) {
    return -1
  }

  return count
}

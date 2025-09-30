export function triangularSum(nums: number[]): number {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10
    }
    nums.length = nums.length - 1
  }

  return nums[0]
}
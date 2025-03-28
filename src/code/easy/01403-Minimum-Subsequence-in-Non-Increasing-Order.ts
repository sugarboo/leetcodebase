export function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => b - a)
  const sum = nums.reduce((acc, curr) => acc + curr, 0)

  let acc = 0
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i]
    if (acc > sum - acc) {
      return nums.slice(0, i + 1)
    }
  }
  return nums
}

export function applyOperations(nums: number[]): number[] {
  const n = nums.length
  const ans = Array.from<number>({ length: n }).fill(0)
  let count = 0

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] !== 0 && nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }

  for (const num of nums) {
    if (num !== 0) {
      ans[count] = num
      count++
    }
  }

  return ans
}

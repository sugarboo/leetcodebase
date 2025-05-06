export function buildArray(nums: number[]): number[] {
  const n = nums.length
  const ans = Array.from<number>({ length: n }).fill(0)

  for (let i = 0; i < n; i++) {
    ans[i] = nums[nums[i]]
  }

  return ans
}

export function firstStableIndex(nums: number[], k: number): number {
  let ans = -1
  const n = nums.length
  let suffixMins = Array<number>(n).fill(0)
  suffixMins[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    suffixMins[i] = Math.min(suffixMins[i + 1], nums[i])
  }
  let prefixMax = 0
  for (let i = 0; i < n; i++) {
    prefixMax = Math.max(prefixMax, nums[i])
    if (prefixMax - suffixMins[i] <= k) {
      ans = i
      break
    }
  }

  return ans
}

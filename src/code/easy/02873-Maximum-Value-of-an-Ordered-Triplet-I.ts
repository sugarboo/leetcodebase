export function maximumTripletValue(nums: number[]): number {
  const n = nums.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        ans = Math.max(ans, (nums[i] - nums[j]) * nums[k])
      }
    }
  }
  return ans
}

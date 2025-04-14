export function kLengthApart(nums: number[], k: number): boolean {
  let lastOne = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (lastOne !== -1 && i - lastOne <= k) {
        return false
      }
      lastOne = i
    }
  }
  return true
}

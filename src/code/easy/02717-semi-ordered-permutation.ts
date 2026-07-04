export function semiOrderedPermutation(nums: number[]): number {
  const n = nums.length
  let first = 0
  let last = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      first = i
    }
    if (nums[i] === n) {
      last = i
    }
  }
  return first + n - 1 - last - (last < first ? 1 : 0)
}

export function maxKelements(nums: number[], k: number): number {
  let score = 0

  while (k--) {
    const max = Math.max(...nums)
    const index = nums.indexOf(max)
    score += max
    nums[index] = Math.ceil(max / 3)
  }

  return score
}

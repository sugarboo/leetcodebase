export function minMoves2(nums: number[]): number {
  let ans = 0
  nums.sort((a, b) => a - b)
  const mid = nums[Math.floor(nums.length / 2)]
  for (const num of nums) {
    ans += Math.abs(num - mid)
  }

  return ans
}

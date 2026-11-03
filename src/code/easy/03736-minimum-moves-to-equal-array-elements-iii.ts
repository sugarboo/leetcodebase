export function minMoves(nums: number[]): number {
  let ans = 0
  const max = Math.max(...nums)
  for (const num of nums) {
    ans += max - num
  }

  return ans
}

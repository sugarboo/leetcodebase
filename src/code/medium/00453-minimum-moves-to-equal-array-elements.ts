export function minMoves(nums: number[]): number {
  let ans = 0
  const min = Math.min(...nums)
  for (const num of nums) {
    ans += num - min
  }

  return ans
}

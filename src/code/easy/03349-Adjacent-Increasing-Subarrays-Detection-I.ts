export function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  let cnt = 1
  let precnt = 0
  let ans = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      cnt++
    } else {
      precnt = cnt
      cnt = 1
    }
    ans = Math.max(ans, Math.min(precnt, cnt))
    ans = Math.max(ans, Math.floor(cnt / 2))
  }

  return ans >= k
}

export function countSubarrays(nums: number[], k: number): number {
  let count = 0
  const max = Math.max(...nums)

  let maxInWindow = 0
  let start = 0
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === max) {
      maxInWindow++
    }

    while (maxInWindow === k) {
      if (nums[start] === max) {
        maxInWindow--
      }
      start++
    }

    count += start
  }

  return count
}

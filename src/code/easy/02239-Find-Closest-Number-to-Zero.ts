export function findClosestNumber(nums: number[]): number {
  let ans = nums[0]
  let dis = Math.abs(nums[0])

  for (const num of nums) {
    if (Math.abs(num) < dis) {
      dis = Math.abs(num)
      ans = num
    } else if (Math.abs(num) === dis) {
      ans = Math.max(ans, num)
    }
  }

  return ans
}

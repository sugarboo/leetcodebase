export function findTheArrayConcVal(nums: number[]): number {
  let ans = 0

  for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
    if (i < j) {
      ans += Number.parseInt(`${nums[i]}${nums[j]}`)
    } else {
      ans += nums[i]
    }
  }

  return ans
}

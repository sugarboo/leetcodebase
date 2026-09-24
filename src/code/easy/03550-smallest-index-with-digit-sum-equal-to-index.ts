export function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let digitSum = 0
    while (num) {
      digitSum += num % 10
      num = Math.floor(num / 10)
    }
    if (digitSum === i) {
      return digitSum
    }
  }
  return -1
}
export function countFairPairs(nums: number[], lower: number, upper: number): number {
  const countPairs = (nums: number[], value: number) => {
    let result = 0
    let start = 0
    let end = nums.length - 1
    while (start < end) {
      const sum = nums[start] + nums[end]
      if (sum < value) {
        result += end - start
        start++
      } else {
        end--
      }
    }

    return result
  }

  nums.sort((a, b) => a - b)

  return countPairs(nums, upper + 1) - countPairs(nums, lower)
}
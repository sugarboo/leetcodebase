export function moveZeroes(nums: number[]): number[] {
  nums = nums.sort((a, b) => {
    if (a === 0) {
      return 1
    } else if (b === 0) {
      return -1
    } else {
      return 0
    }
  })

  return nums
}

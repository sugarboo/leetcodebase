export function pivotIndex(nums: number[]): number {
  const sum = nums.reduce((accu, curr) => accu + curr, 0)
  let sumLeft = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (sumLeft === sum - sumLeft - num) {
      return i
    }
    sumLeft += num
  }

  return -1
}

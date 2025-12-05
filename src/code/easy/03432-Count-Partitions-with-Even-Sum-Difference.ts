export function countPartitions(nums: number[]): number {
  let ans = 0
  let leftSum = 0
  let rightSum = nums.reduce((accu, curr) => accu + curr, 0)

  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i]
    leftSum += num
    rightSum -= num
    if ((leftSum - rightSum) % 2 === 0) {
      ans++
    }
  }

  return ans
}

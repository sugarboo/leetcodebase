function missingNumber1(nums: number[]): number {
  const n = nums.length
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i
    }
  }
}

function missingNumber2(nums: number[]): number {
  const n = nums.length
  const total = (n * (n + 1)) / 2
  const sum = nums.reduce((accum, curr) => accum + curr, 0)
  return total - sum
}

export function missingNumber(nums: number[]): number {
  return missingNumber2(nums)
}

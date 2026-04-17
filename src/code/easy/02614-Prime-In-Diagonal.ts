import { isPrimeNumber } from '../../utils'

export function diagonalPrime(nums: number[][]): number {
  const n = nums.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    if (isPrimeNumber(nums[i][i])) {
      ans = Math.max(ans, nums[i][i])
    }
    if (isPrimeNumber(nums[i][n - 1 - i])) {
      ans = Math.max(ans, nums[i][n - 1 - i])
    }
  }

  return ans
}

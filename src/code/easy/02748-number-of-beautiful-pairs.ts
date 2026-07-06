import { gcd } from '../../utils'

export function countBeautifulPairs(nums: number[]): number {
  const n = nums.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const x = Number(String(nums[i])[0])
      const y = nums[j] % 10
      if (gcd(x, y) === 1) {
        ans++
      }
    }
  }

  return ans
}

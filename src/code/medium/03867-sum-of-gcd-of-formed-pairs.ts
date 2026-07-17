import { gcd } from '../../utils'

export function gcdSum(nums: number[]): number {
  const n: number = nums.length
  const mx: number[] = Array(n)

  let prefixMax = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < n; i++) {
    prefixMax = Math.max(prefixMax, nums[i])
    mx[i] = prefixMax
  }

  const prefixGcd: number[] = Array(n)
  for (let i = 0; i < n; i++) {
    prefixGcd[i] = gcd(nums[i], mx[i])
  }

  prefixGcd.sort((a, b) => a - b)
  let ans = 0
  let left = 0
  let right = n - 1
  while (left < right) {
    ans += gcd(prefixGcd[left], prefixGcd[right])
    left++
    right--
  }

  return ans
}

import { describe, expect, it } from 'vitest'
import { gcdSum } from '../../code/medium/03867-sum-of-gcd-of-formed-pairs'

describe('sum of gcd of formed pairs test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 6, 4]
    const result = gcdSum(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('sum of gcd of formed pairs test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [3, 6, 2, 8]
    const result = gcdSum(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

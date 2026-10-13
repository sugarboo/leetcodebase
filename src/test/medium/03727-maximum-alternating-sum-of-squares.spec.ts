import { describe, expect, it } from 'vitest'
import { maxAlternatingSum } from '../../code/medium/03727-maximum-alternating-sum-of-squares'

describe('maximum alternating sum of squares test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = maxAlternatingSum(nums)
    const expected = 12
    expect(result).toBe(expected)
  })
})

describe('maximum alternating sum of squares test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, -1, 2, -2, 3, -3]
    const result = maxAlternatingSum(nums)
    const expected = 16
    expect(result).toBe(expected)
  })
})

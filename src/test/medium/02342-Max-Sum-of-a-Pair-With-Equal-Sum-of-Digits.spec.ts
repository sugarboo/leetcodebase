import { describe, expect, it } from 'vitest'
import { maximumSum } from '../../code/medium/02342-Max-Sum-of-a-Pair-With-Equal-Sum-of-Digits'

describe('max sum of a pair with equal sum of digits test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [18, 43, 36, 13, 7]
    const result = maximumSum(nums)
    const expected = 54
    expect(result).toBe(expected)
  })
})

describe('max sum of a pair with equal sum of digits test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [10, 12, 19, 14]
    const result = maximumSum(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('max sum of a pair with equal sum of digits test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [18, 43, 36, 13, 7, 18, 43, 36, 13, 7]
    const result = maximumSum(nums)
    const expected = 86
    expect(result).toBe(expected)
  })
})

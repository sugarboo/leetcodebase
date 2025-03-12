import { describe, expect, it } from 'vitest'
import { maximumCount } from '../../code/easy/02529-Maximum-Count-of-Positive-Integer-and-Negative-Integer'

describe('maximum count of positive integer and negative integer test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [-2, -1, -1, 1, 2, 3]
    const result = maximumCount(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum count of positive integer and negative integer test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [-3, -2, -1, 0, 0, 1, 2]
    const result = maximumCount(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum count of positive integer and negative integer test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [5, 20, 66, 1314]
    const result = maximumCount(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

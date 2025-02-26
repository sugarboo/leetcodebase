import { describe, expect, it } from 'vitest'
import { maxAbsoluteSum } from '../../code/medium/01749-Maximum-Absolute-Sum-of-Any-Subarray'

describe('maximum absolute sum of any subarray test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, -3, 2, 3, -4]
    const result = maxAbsoluteSum(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('maximum absolute sum of any subarray test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, -5, 1, -4, 3, -2]
    const result = maxAbsoluteSum(nums)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('maximum absolute sum of any subarray test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [-7, -1, 0, -2, 1, 3, 8, -2, -6, -1, -10, -6, -6, 8, -4, -9, -4, 1, 4, -9]
    const result = maxAbsoluteSum(nums)
    const expected = 44
    expect(result).toBe(expected)
  })
})

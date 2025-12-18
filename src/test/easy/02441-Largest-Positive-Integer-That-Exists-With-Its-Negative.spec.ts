import { describe, expect, it } from 'vitest'
import { findMaxK } from '../../code/easy/02441-Largest-Positive-Integer-That-Exists-With-Its-Negative'

describe('largest positive integer that exists with its negative test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [-1, 2, -3, 3]
    const result = findMaxK(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('largest positive integer that exists with its negative test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [-1, 10, 6, 7, -7, 1]
    const result = findMaxK(nums)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('largest positive integer that exists with its negative test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [-10, 8, 6, 7, -2, -3]
    const result = findMaxK(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

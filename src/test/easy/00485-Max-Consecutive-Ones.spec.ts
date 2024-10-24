import { describe, expect, it } from 'vitest'
import { findMaxConsecutiveOnes } from '../../code/easy/00485-Max-Consecutive-Ones'

describe('license key formatting test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 0, 1, 1, 1]
    const result = findMaxConsecutiveOnes(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('license key formatting test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 0, 1, 1, 0, 1]
    const result = findMaxConsecutiveOnes(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

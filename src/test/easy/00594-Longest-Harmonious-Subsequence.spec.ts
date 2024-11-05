import { describe, expect, it } from 'vitest'
import { findLHS } from '../../code/easy/00594-Longest-Harmonious-Subsequence'

describe('longest harmonious subsequence test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 2, 2, 5, 2, 3, 7]
    const result = findLHS(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('longest harmonious subsequence test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = findLHS(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('longest harmonious subsequence test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1]
    const result = findLHS(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('longest harmonious subsequence test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 5, 7, 9, 11, 13, 15, 17]
    const result = findLHS(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

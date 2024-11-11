import { describe, expect, it } from 'vitest'
import { findLengthOfLCIS } from '../../code/easy/00674-Longest-Continuous-Increasing-Subsequence'

describe('longest continuous increasing subsequence test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 5, 4, 7]
    const result = findLengthOfLCIS(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('longest continuous increasing subsequence test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 2, 2, 2]
    const result = findLengthOfLCIS(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

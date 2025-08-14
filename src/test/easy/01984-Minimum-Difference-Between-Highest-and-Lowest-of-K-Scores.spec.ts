import { describe, expect, it } from 'vitest'
import { minimumDifference } from '../../code/easy/01984-Minimum-Difference-Between-Highest-and-Lowest-of-K-Scores'

describe('minimum difference between highest and lowest of k scores test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [9, 4, 1, 7]
    const k = 2
    const result = minimumDifference(nums, k)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum difference between highest and lowest of k scores test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [90]
    const k = 1
    const result = minimumDifference(nums, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

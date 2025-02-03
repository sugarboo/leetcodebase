import { describe, expect, it } from 'vitest'
import { longestMonotonicSubarray } from '../../code/easy/03105-Longest-Strictly-Increasing-or-Strictly-Decreasing-Subarray'

describe('longest strictly increasing or strictly decreasing subarray test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 4, 3, 3, 2]
    const result = longestMonotonicSubarray(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('longest strictly increasing or strictly decreasing subarray test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [3, 3, 3, 3]
    const result = longestMonotonicSubarray(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('longest strictly increasing or strictly decreasing subarray test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 1]
    const result = longestMonotonicSubarray(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

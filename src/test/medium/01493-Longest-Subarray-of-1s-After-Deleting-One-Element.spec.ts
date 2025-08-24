import { describe, expect, it } from 'vitest'
import { longestSubarray } from '../../code/medium/01493-Longest-Subarray-of-1s-After-Deleting-One-Element'

describe('longest subarray of 1s after deleting one element test case 🥇', () => {
  it('should return the expected score', () => {
    const nums = [1, 1, 0, 1]
    const result = longestSubarray(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('longest subarray of 1s after deleting one element test case 🥈', () => {
  it('should return the expected score', () => {
    const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
    const result = longestSubarray(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('longest subarray of 1s after deleting one element test case 🥉', () => {
  it('should return the expected score', () => {
    const nums = [1, 1, 1]
    const result = longestSubarray(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { hasIncreasingSubarrays } from '../../code/easy/03349-Adjacent-Increasing-Subarrays-Detection-I'

describe('adjacent increasing subarrays detection I test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1]
    const k = 3
    const result = hasIncreasingSubarrays(nums, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('adjacent increasing subarrays detection I test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7]
    const k = 5
    const result = hasIncreasingSubarrays(nums, k)
    const expected = false
    expect(result).toBe(expected)
  })
})

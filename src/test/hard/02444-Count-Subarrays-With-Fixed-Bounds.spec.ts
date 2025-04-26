import { describe, expect, it } from 'vitest'
import { countSubarrays } from '../../code/hard/02444-Count-Subarrays-With-Fixed-Bounds'

describe('count subarrays with fixed bounds test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 5, 2, 7, 5]
    const minK = 1
    const maxK = 5
    const result = countSubarrays(nums, minK, maxK)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count subarrays with fixed bounds test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1]
    const minK = 1
    const maxK = 1
    const result = countSubarrays(nums, minK, maxK)
    const expected = 10
    expect(result).toBe(expected)
  })
})

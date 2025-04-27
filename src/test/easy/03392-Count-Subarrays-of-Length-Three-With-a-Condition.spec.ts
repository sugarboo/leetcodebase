import { describe, expect, it } from 'vitest'
import { countSubarrays } from '../../code/easy/03392-Count-Subarrays-of-Length-Three-With-a-Condition'

describe('count subarrays of length three with a condition test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 1, 4, 1]
    const result = countSubarrays(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count subarrays of length three with a condition test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1]
    const result = countSubarrays(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

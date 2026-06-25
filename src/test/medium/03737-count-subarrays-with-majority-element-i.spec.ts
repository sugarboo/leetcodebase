import { describe, expect, it } from 'vitest'
import { countMajoritySubarrays } from '../../code/medium/03737-count-subarrays-with-majority-element-i'

describe('count subarrays with majority element I test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 2, 3]
    const target = 2
    const result = countMajoritySubarrays(nums, target)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('count subarrays with majority element i test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1]
    const target = 1
    const result = countMajoritySubarrays(nums, target)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('count subarrays with majority element i test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const target = 4
    const result = countMajoritySubarrays(nums, target)
    const expected = 0
    expect(result).toBe(expected)
  })
})

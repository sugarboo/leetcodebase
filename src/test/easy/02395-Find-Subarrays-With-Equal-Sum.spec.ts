import { describe, expect, it } from 'vitest'
import { findSubarrays } from '../../code/easy/02395-Find-Subarrays-With-Equal-Sum'

describe('find subarrays with equal sum test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [4, 2, 4]
    const result = findSubarrays(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('find subarrays with equal sum test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = findSubarrays(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('find subarrays with equal sum test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [0, 0, 0]
    const result = findSubarrays(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

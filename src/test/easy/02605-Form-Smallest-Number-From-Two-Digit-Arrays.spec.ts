import { describe, expect, it } from 'vitest'
import { minNumber } from '../../code/easy/02605-Form-Smallest-Number-From-Two-Digit-Arrays'

describe('form smallest number from two digit arrays test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [4, 1, 3]
    const nums2 = [5, 7]
    const result = minNumber(nums1, nums2)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('form smallest number from two digit arrays test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [3, 5, 2, 6]
    const nums2 = [3, 1, 7]
    const result = minNumber(nums1, nums2)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('form smallest number from two digit arrays test case 🥉', () => {
  it('should return the expected result', () => {
    const nums1 = [5, 7]
    const nums2 = [4, 1, 3]
    const result = minNumber(nums1, nums2)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('form smallest number from two digit arrays test case 🏅', () => {
  it('should return the expected result', () => {
    const nums1 = [3, 5, 2, 6]
    const nums2 = [3, 2, 7]
    const result = minNumber(nums1, nums2)
    const expected = 2
    expect(result).toBe(expected)
  })
})

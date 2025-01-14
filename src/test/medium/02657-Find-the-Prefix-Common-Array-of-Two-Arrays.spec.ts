import { describe, expect, it } from 'vitest'
import { findThePrefixCommonArray } from '../../code/medium/02657-Find-the-Prefix-Common-Array-of-Two-Arrays'

describe('find the prefix common array of two arrays test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 3, 2, 4]
    const nums2 = [3, 1, 2, 4]
    const result = findThePrefixCommonArray(nums1, nums2)
    const expected = [0, 2, 3, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('find the prefix common array of two arrays test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [2, 3, 1]
    const nums2 = [3, 1, 2]
    const result = findThePrefixCommonArray(nums1, nums2)
    const expected = [0, 1, 3]
    expect(result).toStrictEqual(expected)
  })
})

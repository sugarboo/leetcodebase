import { describe, expect, it } from 'vitest'
import { findDifference } from '../../code/easy/02215-Find-the-Difference-of-Two-Arrays'

describe('find the difference of two arrays test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2, 3]
    const nums2 = [2, 4, 6]
    const result = findDifference(nums1, nums2)
    const expected = [[1, 3], [4, 6]]
    expect(result).toStrictEqual(expected)
  })
})

describe('find the difference of two arrays test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2, 3, 3]
    const nums2 = [1, 1, 2, 2]
    const result = findDifference(nums1, nums2)
    const expected = [[3], []]
    expect(result).toStrictEqual(expected)
  })
})

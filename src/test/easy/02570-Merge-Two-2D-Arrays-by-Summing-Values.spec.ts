import { describe, expect, it } from 'vitest'
import { mergeArrays } from '../../code/easy/02570-Merge-Two-2D-Arrays-by-Summing-Values'

describe('merge two 2d arrays by summing values test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [[1, 2], [2, 3], [4, 5]]
    const nums2 = [[1, 4], [3, 2], [4, 1]]
    const result = mergeArrays(nums1, nums2)
    const expected = [[1, 6], [2, 3], [3, 2], [4, 6]]
    expect(result).toEqual(expected)
  })
})

describe('merge two 2d arrays by summing values test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [[2, 4], [3, 6], [5, 5]]
    const nums2 = [[1, 3], [4, 3]]
    const result = mergeArrays(nums1, nums2)
    const expected = [[1, 3], [2, 4], [3, 6], [4, 3], [5, 5]]
    expect(result).toEqual(expected)
  })
})

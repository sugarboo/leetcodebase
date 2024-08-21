import { describe, expect, it } from 'vitest'
import { findMedianSortedArrays } from '../../code/hard/00004-Median-of-Two-Sorted-Arrays'

describe('median of two sorted arrays test case 🥇', () => {
  it('should return the expected number', () => {
    const nums1 = [1, 2]
    const nums2 = [3]
    const result = findMedianSortedArrays(nums1, nums2)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('median of two sorted arrays test case 🥈', () => {
  it('should return the expected number', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    const result = findMedianSortedArrays(nums1, nums2)
    const expected = 2.5
    expect(result).toBe(expected)
  })
})

describe('median of two sorted arrays test case 🥉', () => {
  it('should return the expected number', () => {
    const nums1 = [1, 3]
    const nums2 = [2]
    const result = findMedianSortedArrays(nums1, nums2)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('median of two sorted arrays test case 🏅', () => {
  it('should return the expected number', () => {
    const nums1 = [1, 3, 2, 9, 5, 3, 1]
    const nums2 = [2, 8, 6, 4, 7, 1, 2]
    const result = findMedianSortedArrays(nums1, nums2)
    const expected = 3
    expect(result).toBe(expected)
  })
})

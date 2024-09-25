import { describe, expect, it } from 'vitest'
import { intersect } from '../../code/easy/00350-Intersection-of-Two-Arrays-II'

describe('intersection of two arrays II test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2, 2, 1]
    const nums2 = [2, 2]
    const result = intersect(nums1, nums2)
    const expected = [2, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('intersection of two arrays II test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [4, 9, 5]
    const nums2 = [9, 4, 9, 8, 4]
    const result = intersect(nums1, nums2)
    const expected = [9, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('intersection of two arrays II test case 🥉', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2, 2, 1]
    const nums2 = [2]
    const result = intersect(nums1, nums2)
    const expected = [2]
    expect(result).toStrictEqual(expected)
  })
})

describe('intersection of two arrays II test case 🏅', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2, 3]
    const nums2 = [4, 5, 6, 7]
    const result = intersect(nums1, nums2)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

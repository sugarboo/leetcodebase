import { describe, expect, it } from 'vitest'
import { merge } from '../../code/easy/00088-Merge-Sorted-Array'

describe('merge sorted array test case 🥇', () => {
  it('should return the expected array ', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [2, 5, 6]
    const expected = [1, 2, 2, 3, 5, 6]
    expect(merge(nums1, nums2)).toStrictEqual(expected)
  })
})

describe('merge sorted array test case 🥈', () => {
  it('should return the expected array ', () => {
    const nums1 = [1]
    const nums2 = []
    const expected = [1]
    expect(merge(nums1, nums2)).toStrictEqual(expected)
  })
})

describe('merge sorted array test case 🥉', () => {
  it('should return the expected array ', () => {
    const nums1 = [0]
    const nums2 = [1]
    const expected = [1]
    expect(merge(nums1, nums2)).toStrictEqual(expected)
  })
})

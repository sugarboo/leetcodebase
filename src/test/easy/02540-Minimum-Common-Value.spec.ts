import { describe, expect, it } from 'vitest'
import { getCommon } from '../../code/easy/02540-Minimum-Common-Value'

describe('minimum common value test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2, 3]
    const nums2 = [2, 4]
    const result = getCommon(nums1, nums2)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum common value test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2, 3, 6]
    const nums2 = [2, 3, 4, 5]
    const result = getCommon(nums1, nums2)
    const expected = 2
    expect(result).toBe(expected)
  })
})

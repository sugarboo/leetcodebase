import { describe, expect, it } from 'vitest'
import { twoOutOfThree } from '../../code/easy/02032-Two-Out-of-Three'

describe('two out of three test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 1, 3, 2]
    const nums2 = [2, 3]
    const nums3 = [3]
    const result = twoOutOfThree(nums1, nums2, nums3)
    const expected = [3, 2]
    expect(result).toEqual(expected)
  })
})

describe('two out of three test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [3, 1]
    const nums2 = [2, 3]
    const nums3 = [1, 2]
    const result = twoOutOfThree(nums1, nums2, nums3)
    const expected = [3, 1, 2]
    expect(result).toEqual(expected)
  })
})

describe('two out of three test case 🥉', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2, 2]
    const nums2 = [4, 3, 3]
    const nums3 = [5]
    const result = twoOutOfThree(nums1, nums2, nums3)
    const expected = []
    expect(result).toEqual(expected)
  })
})

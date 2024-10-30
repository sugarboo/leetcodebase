import { describe, expect, it } from 'vitest'
import { nextGreaterElement } from '../../code/easy/00496-Next-Greater-Element-I'

describe('next greater element I test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [4, 1, 2]
    const nums2 = [1, 3, 4, 2]
    const result = nextGreaterElement(nums1, nums2)
    const expected = [-1, 3, -1]
    expect(result).toStrictEqual(expected)
  })
})

describe('next greater element I test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [2, 4]
    const nums2 = [1, 2, 3, 4]
    const result = nextGreaterElement(nums1, nums2)
    const expected = [3, -1]
    expect(result).toStrictEqual(expected)
  })
})

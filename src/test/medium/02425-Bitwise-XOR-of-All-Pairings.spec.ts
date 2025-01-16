import { describe, expect, it } from 'vitest'
import { xorAllNums } from '../../code/medium/02425-Bitwise-XOR-of-All-Pairings'

describe('bitwise xor of all pairings test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [2, 1, 3]
    const nums2 = [10, 2, 5, 0]
    const result = xorAllNums(nums1, nums2)
    const expected = 13
    expect(result).toBe(expected)
  })
})

describe('bitwise xor of all pairings test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    const result = xorAllNums(nums1, nums2)
    const expected = 0
    expect(result).toBe(expected)
  })
})

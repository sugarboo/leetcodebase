import { describe, expect, it } from 'vitest'
import { uniformArray } from '../../code/easy/03875-construct-uniform-parity-array-i'

describe('construct uniform parity array i test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [2, 3]
    const result = uniformArray(nums1)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('construct uniform parity array i test case 🥈', () => {
  it('should return the expected result', () => {
    const nums1 = [4, 6]
    const result = uniformArray(nums1)
    const expected = true
    expect(result).toBe(expected)
  })
})

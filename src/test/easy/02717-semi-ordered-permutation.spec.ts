import { describe, expect, it } from 'vitest'
import { semiOrderedPermutation } from '../../code/easy/02717-semi-ordered-permutation'

describe('semi ordered permutation test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 4, 3]
    const result = semiOrderedPermutation(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('semi ordered permutation test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 4, 1, 3]
    const result = semiOrderedPermutation(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('semi ordered permutation test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 4, 2, 5]
    const result = semiOrderedPermutation(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

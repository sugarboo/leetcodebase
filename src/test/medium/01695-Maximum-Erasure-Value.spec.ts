import { describe, expect, it } from 'vitest'
import { maximumUniqueSubarray } from '../../code/medium/01695-Maximum-Erasure-Value'

describe('maximum unique subarray test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [4, 2, 4, 5, 6]
    const result = maximumUniqueSubarray(nums)
    const expected = 17
    expect(result).toBe(expected)
  })
})

describe('maximum unique subarray test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [5, 2, 1, 2, 5, 2, 1, 2, 5]
    const result = maximumUniqueSubarray(nums)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('maximum unique subarray test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411, 459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610, 31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670, 476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434]
    const result = maximumUniqueSubarray(nums)
    const expected = 16911
    expect(result).toBe(expected)
  })
})

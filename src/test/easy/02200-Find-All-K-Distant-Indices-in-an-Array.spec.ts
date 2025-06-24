import { describe, expect, it } from 'vitest'
import { findKDistantIndices } from '../../code/easy/02200-Find-All-K-Distant-Indices-in-an-Array'

describe('counting words with a given prefix test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 4, 9, 1, 3, 9, 5]
    const key = 9
    const k = 1
    const result = findKDistantIndices(nums, key, k)
    const expected = [1, 2, 3, 4, 5, 6]
    expect(result).toStrictEqual(expected)
  })
})

describe('counting words with a given prefix test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 2, 2, 2]
    const key = 2
    const k = 2
    const result = findKDistantIndices(nums, key, k)
    const expected = [0, 1, 2, 3, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('counting words with a given prefix test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const key = 1
    const k = 1
    const result = findKDistantIndices(nums, key, k)
    const expected = [0]
    expect(result).toStrictEqual(expected)
  })
})

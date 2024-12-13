import { describe, expect, it } from 'vitest'
import { findScore } from '../../code/medium/02593-Find-Score-of-an-Array-After-Marking-All-Elements'

describe('find score of an array after marking all elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 3, 4, 5, 2]
    const result = findScore(nums)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('find score of an array after marking all elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 5, 1, 3, 2]
    const result = findScore(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

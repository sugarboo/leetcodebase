import { describe, expect, it } from 'vitest'
import { triangularSum } from '../../code/medium/02221-Find-Triangular-Sum-of-an-Array'

describe('find triangular sum of an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = triangularSum(nums)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('find triangular sum of an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [5]
    const result = triangularSum(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

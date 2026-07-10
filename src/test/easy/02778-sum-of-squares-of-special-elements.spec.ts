import { describe, expect, it } from 'vitest'
import { sumOfSquares } from '../../code/easy/02778-sum-of-squares-of-special-elements'

describe('sum of squares of special elements test case 🥇', () => {
  it('should return the expected result', () => {
    const num = [1, 2, 3, 4]
    const result = sumOfSquares(num)
    const expected = 21
    expect(result).toBe(expected)
  })
})

describe('sum of squares of special elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 7, 1, 19, 18, 3]
    const result = sumOfSquares(nums)
    const expected = 63
    expect(result).toBe(expected)
  })
})

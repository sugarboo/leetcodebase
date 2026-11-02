import { describe, expect, it } from 'vitest'
import { minMoves } from '../../code/medium/00453-minimum-moves-to-equal-array-elements'

describe('minimum moves to equal array elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = minMoves(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum moves to equal array elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1]
    const result = minMoves(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

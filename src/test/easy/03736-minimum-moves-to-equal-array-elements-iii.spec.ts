import { describe, expect, it } from 'vitest'
import { minMoves } from '../../code/easy/03736-minimum-moves-to-equal-array-elements-iii'

describe('minimum moves to equal array elements iii test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 3]
    const result = minMoves(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum moves to equal array elements iii test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [4, 4, 5]
    const result = minMoves(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

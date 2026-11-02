import { describe, expect, it } from 'vitest'
import { minMoves2 } from '../../code/medium/00462-minimum-moves-to-equal-array-elements-ii'

describe('minimum moves to equal array elements ii test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [1, 2, 3]
    const result = minMoves2(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum moves to equal array elements ii test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [1, 10, 2, 9]
    const result = minMoves2(nums)
    const expected = 16
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { countNegatives } from '../../code/easy/01351-Count-Negative-Numbers-in-a-Sorted-Matrix'

describe('count negative numbers in a sorted matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
    const result = countNegatives(arr)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('count negative numbers in a sorted matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [[3, 2], [1, 0]]
    const result = countNegatives(arr)
    const expected = 0
    expect(result).toBe(expected)
  })
})

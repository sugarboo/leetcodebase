import { describe, expect, it } from 'vitest'
import { oddCells } from '../../code/easy/01252-Cells-with-Odd-Values-in-a-Matix'

describe('cells with odd values in a matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 2
    const m = 3
    const indices = [[0, 1], [1, 1]]
    const result = oddCells(n, m, indices)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('cells with odd values in a matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 2
    const m = 2
    const indices = [[1, 1], [0, 0]]
    const result = oddCells(n, m, indices)
    const expected = 0
    expect(result).toBe(expected)
  })
})

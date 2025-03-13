import { describe, expect, it } from 'vitest'
import { numSpecial } from '../../code/easy/01582-Special-Position-in-a-Binary-Matrix'

describe('special position in a binary matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const mat = [
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ]
    const result = numSpecial(mat)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('special position in a binary matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const mat = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    const result = numSpecial(mat)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('special position in a binary matrix test case 🥉', () => {
  it('should return the expected result', () => {
    const mat = [[0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
    const result = numSpecial(mat)
    const expected = 2
    expect(result).toBe(expected)
  })
})

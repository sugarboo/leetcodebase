import { describe, expect, it } from 'vitest'
import { kWeakestRows } from './../../code/easy/01337-The-K-Weakest-Rows-in-a-Matrix'

describe('k weakest rows in a matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const mat = [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ]
    const result = kWeakestRows(mat, 3)
    const expected = [2, 0, 3]
    expect(result).toEqual(expected)
  })
})

describe('k weakest rows in a matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const mat
    = [[1, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0]]
    const result = kWeakestRows(mat, 2)
    const expected = [0, 2]
    expect(result).toEqual(expected)
  })
})

describe('k weakest rows in a matrix test case 🥉', () => {
  it('should return the expected result', () => {
    const mat = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
    const result = kWeakestRows(mat, 1)
    const expected = [0]
    expect(result).toEqual(expected)
  })
})

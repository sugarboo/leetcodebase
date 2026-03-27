import { describe, expect, it } from 'vitest'
import { areSimilar } from '../../code/easy/02946-Matrix-Similarity-After-Cyclic-Shifts'

describe('matrix similarity after cyclic shifts test case 🥇', () => {
  it('should return the expected result', () => {
    const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const k = 4
    const result = areSimilar(mat, k)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('matrix similarity after cyclic shifts test case 🥈', () => {
  it('should return the expected result', () => {
    const mat = [[1, 2, 1, 2], [5, 5, 5, 5], [6, 3, 6, 3]]
    const k = 2
    const result = areSimilar(mat, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('matrix similarity after cyclic shifts test case 🥉', () => {
  it('should return the expected result', () => {
    const mat = [[2, 2], [2, 2]]
    const k = 3
    const result = areSimilar(mat, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

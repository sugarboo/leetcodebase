import { describe, expect, it } from 'vitest'
import { mapWordWeights } from '../../code/easy/03838-weighted-word-mapping'

describe('weighted word mapping test case 🥇', () => {
  it('should return the expected result', () => {
    const words
      = ['abcd', 'def', 'xyz']
    const weights
      = [5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2]
    const result = mapWordWeights(words, weights)
    const expected = 'rij'
    expect(result).toBe(expected)
  })
})

describe('weighted word mapping test case 🥈', () => {
  it('should return the expected result', () => {
    const words
      = ['a', 'b', 'c']
    const weights
      = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const result = mapWordWeights(words, weights)
    const expected = 'yyy'
    expect(result).toBe(expected)
  })
})

describe('weighted word mapping test case 🥉', () => {
  it('should return the expected result', () => {
    const words
      = ['abcd']
    const weights
      = [7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4, 4, 5]
    const result = mapWordWeights(words, weights)
    const expected = 'g'
    expect(result).toBe(expected)
  })
})

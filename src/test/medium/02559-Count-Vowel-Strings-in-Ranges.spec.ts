import { describe, expect, it } from 'vitest'
import { vowelStrings } from '../../code/medium/02559-Count-Vowel-Strings-in-Ranges'

describe('count vowel strings in ranges test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['apple', 'orange', 'banana', 'mango']
    const queries = [[0, 2], [1, 3]]
    const result = vowelStrings(words, queries)
    const expected = [2, 1]
    expect(result).toEqual(expected)
  })
})

describe('count vowel strings in ranges test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['aba', 'bcb', 'ece', 'aa', 'e']
    const queries = [[0, 2], [1, 4], [1, 1]]
    const result = vowelStrings(words, queries)
    const expected = [2, 3, 0]
    expect(result).toEqual(expected)
  })
})

describe('count vowel strings in ranges test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['a', 'e', 'i']
    const queries = [[0, 2], [0, 1], [2, 2]]
    const result = vowelStrings(words, queries)
    const expected = [3, 2, 1]
    expect(result).toEqual(expected)
  })
})

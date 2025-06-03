import { describe, expect, it } from 'vitest'
import { arrayStringsAreEqual } from '../../code/easy/01662-Check-If-Two-Strings-Arrays-are-Equivalent'

describe('check if two strings arrays are equivalent test case 🥇', () => {
  it('should return the expected result', () => {
    const word1 = ['ab', 'c']
    const word2 = ['a', 'bc']
    const result = arrayStringsAreEqual(word1, word2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if two strings arrays are equivalent test case 🥈', () => {
  it('should return the expected result', () => {
    const word1 = ['a', 'cb']
    const word2 = ['ab', 'c']
    const result = arrayStringsAreEqual(word1, word2)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if two strings arrays are equivalent test case 🥉', () => {
  it('should return the expected result', () => {
    const word1 = ['abc', 'd', 'defg']
    const word2 = ['abcddefg']
    const result = arrayStringsAreEqual(word1, word2)
    const expected = true
    expect(result).toBe(expected)
  })
})

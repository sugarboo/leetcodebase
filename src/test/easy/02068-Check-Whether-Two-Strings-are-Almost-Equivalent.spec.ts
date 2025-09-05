import { describe, expect, it } from 'vitest'
import { checkAlmostEquivalent } from '../../code/easy/02068-Check-Whether-Two-Strings-are-Almost-Equivalent'

describe('check whether two strings are almost equivalent test case 🥇', () => {
  it('should return the expected result', () => {
    const word1 = 'aaaa'
    const word2 = 'bccb'
    const result = checkAlmostEquivalent(word1, word2)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check whether two strings are almost equivalent test case 🥈', () => {
  it('should return the expected result', () => {
    const word1 = 'abcdeef'
    const word2 = 'abaaacc'
    const result = checkAlmostEquivalent(word1, word2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check whether two strings are almost equivalent test case 🥉', () => {
  it('should return the expected result', () => {
    const word1 = 'cccddabba'
    const word2 = 'babababab'
    const result = checkAlmostEquivalent(word1, word2)
    const expected = true
    expect(result).toBe(expected)
  })
})

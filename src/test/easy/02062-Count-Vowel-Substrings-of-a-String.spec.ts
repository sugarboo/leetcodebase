import { describe, expect, it } from 'vitest'
import { countVowelSubstrings } from '../../code/easy/02062-Count-Vowel-Substrings-of-a-String'

describe('count vowel substrings of a string test case 🥇', () => {
  it('should return the expected result', () => {
    const word = 'aeiouu'
    const result = countVowelSubstrings(word)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count vowel substrings of a string test case 🥈', () => {
  it('should return the expected result', () => {
    const word = 'unicornarihan'
    const result = countVowelSubstrings(word)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count vowel substrings of a string test case 🥉', () => {
  it('should return the expected result', () => {
    const word = 'cuaieuouac'
    const result = countVowelSubstrings(word)
    const expected = 7
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { numberOfSpecialChars } from '../../code/easy/03120-count-the-number-of-special-characters-i'

describe('count the number of special characters I test case 🥇', () => {
  it('should return the expected result', () => {
    const word = 'aaAbcBC'
    const result = numberOfSpecialChars(word)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count the number of special characters I test case 🥈', () => {
  it('should return the expected result', () => {
    const word = 'abc'
    const result = numberOfSpecialChars(word)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count the number of special characters I test case 🥉', () => {
  it('should return the expected result', () => {
    const word = 'abBCab'
    const result = numberOfSpecialChars(word)
    const expected = 1
    expect(result).toBe(expected)
  })
})

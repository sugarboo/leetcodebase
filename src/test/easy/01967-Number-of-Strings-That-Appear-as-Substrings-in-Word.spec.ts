import { describe, expect, it } from 'vitest'
import { numOfStrings } from '../../code/easy/01967-Number-of-Strings-That-Appear-as-Substrings-in-Word'

describe('number of strings that appear as substrings in word test case 🥇', () => {
  it('should return the expected result', () => {
    const patterns = ['a', 'abc', 'bc', 'd']
    const word = 'abc'
    const result = numOfStrings(patterns, word)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('number of strings that appear as substrings in word test case 🥈', () => {
  it('should return the expected result', () => {
    const patterns = ['a', 'b', 'c']
    const word = 'aaaaabbbbb'
    const result = numOfStrings(patterns, word)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('number of strings that appear as substrings in word test case 🥉', () => {
  it('should return the expected result', () => {
    const patterns = ['a', 'a', 'a']
    const word = 'ab'
    const result = numOfStrings(patterns, word)
    const expected = 3
    expect(result).toBe(expected)
  })
})

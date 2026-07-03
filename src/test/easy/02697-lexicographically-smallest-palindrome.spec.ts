import { describe, expect, it } from 'vitest'
import { makeSmallestPalindrome } from '../../code/easy/02697-lexicographically-smallest-palindrome'

describe('lexicographically smallest palindrome test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'egcfe'
    const expected = 'efcfe'
    const result = makeSmallestPalindrome(s)
    expect(result).toBe(expected)
  })
})

describe('lexicographically smallest palindrome test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abcd'
    const expected = 'abba'
    const result = makeSmallestPalindrome(s)
    expect(result).toBe(expected)
  })
})

describe('lexicographically smallest palindrome test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'seven'
    const expected = 'neven'
    const result = makeSmallestPalindrome(s)
    expect(result).toBe(expected)
  })
})

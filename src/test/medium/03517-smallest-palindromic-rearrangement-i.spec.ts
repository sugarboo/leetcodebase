import { describe, expect, it } from 'vitest'
import { smallestPalindrome } from '../../code/medium/03517-smallest-palindromic-rearrangement-i'

describe('smallest palindromic rearrangement I test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'z'
    const result = smallestPalindrome(s)
    const expected = 'z'
    expect(result).toBe(expected)
  })
})

describe('smallest palindromic rearrangement I test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'babab'
    const result = smallestPalindrome(s)
    const expected = 'abbba'
    expect(result).toBe(expected)
  })
})

describe('smallest palindromic rearrangement I test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'daccad'
    const result = smallestPalindrome(s)
    const expected = 'acddca'
    expect(result).toBe(expected)
  })
})

describe('smallest palindromic rearrangement I test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'yey'
    const result = smallestPalindrome(s)
    const expected = 'yey'
    expect(result).toBe(expected)
  })
})

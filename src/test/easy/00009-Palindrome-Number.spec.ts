import { describe, expect, it } from 'vitest'
import { isPalindrome } from '../../code/easy/00009-Palindrome-Number'

describe('palindrome number test case 🥇', () => {
  it('should return the expected result', () => {
    const x = 121
    const expected = true
    expect(isPalindrome(x)).toBe(expected)
  })
})

describe('palindrome number test case 🥈', () => {
  it('should return the expected result', () => {
    const x = -121
    const expected = false
    expect(isPalindrome(x)).toBe(expected)
  })
})

describe('palindrome number test case 🥉', () => {
  it('should return the expected result', () => {
    const x = 10
    const expected = false
    expect(isPalindrome(x)).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { isPalindrome } from '../../code/easy/00125-Valid-Palindrome'

describe('valid palindrome test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'A man, a plan, a canal: Panama'
    const result = isPalindrome(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('valid palindrome test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'race a car'
    const result = isPalindrome(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('valid palindrome test case 🥉', () => {
  it('should return the expected result', () => {
    const s = ' '
    const result = isPalindrome(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('valid palindrome test case 🏅', () => {
  it('should return the expected result', () => {
    const s = '0P'
    const result = isPalindrome(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

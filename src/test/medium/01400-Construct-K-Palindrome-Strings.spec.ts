import { describe, expect, it } from 'vitest'
import { canConstructKPalindromeStrings } from '../../code/medium/01400-Construct-K-Palindrome-Strings'

describe('construct k palindrome strings test case 🥇', () => {
  it('should return the expected score', () => {
    const s = 'annabelle'
    const k = 2
    const result = canConstructKPalindromeStrings(s, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('construct k palindrome strings test case 🥈', () => {
  it('should return the expected score', () => {
    const s = 'leetcode'
    const k = 3
    const result = canConstructKPalindromeStrings(s, k)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('construct k palindrome strings test case 🥉', () => {
  it('should return the expected score', () => {
    const s = 'true'
    const k = 4
    const result = canConstructKPalindromeStrings(s, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('construct k palindrome strings test case 🏅', () => {
  it('should return the expected score', () => {
    const s = 'cr'
    const k = 7
    const result = canConstructKPalindromeStrings(s, k)
    const expected = false
    expect(result).toBe(expected)
  })
})

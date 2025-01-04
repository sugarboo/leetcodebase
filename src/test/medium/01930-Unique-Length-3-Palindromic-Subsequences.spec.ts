import { describe, expect, it } from 'vitest'
import { countPalindromicSubsequence } from '../../code/medium/01930-Unique-Length-3-Palindromic-Subsequences'

describe('count palindromic subsequence test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'aabca'
    const result = countPalindromicSubsequence(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count palindromic subsequence test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'adc'
    const result = countPalindromicSubsequence(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count palindromic subsequence test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'bbcbaba'
    const result = countPalindromicSubsequence(s)
    const expected = 4
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { findTheLongestBalancedSubstring } from '../../code/easy/02609-Find-the-Longest-Balanced-Substring-of-a-Binary-String'

describe('find the longest balanced substring of a binary string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '01000111'
    const result = findTheLongestBalancedSubstring(s)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('find the longest balanced substring of a binary string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '00111'
    const result = findTheLongestBalancedSubstring(s)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('find the longest balanced substring of a binary string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '111'
    const result = findTheLongestBalancedSubstring(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

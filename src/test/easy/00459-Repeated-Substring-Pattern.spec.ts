import { describe, expect, it } from 'vitest'
import { repeatedSubstringPattern } from '../../code/easy/00459-Repeated-Substring-Pattern'

describe('repeated substring pattern test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abab'
    const result = repeatedSubstringPattern(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('repeated substring pattern test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aba'
    const result = repeatedSubstringPattern(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('repeated substring pattern test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'abcabcabcabc'
    const result = repeatedSubstringPattern(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

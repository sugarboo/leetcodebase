import { describe, expect, it } from 'vitest'
import { findLUSlength } from '../../code/easy/00521-Longest-Uncommon-Subsequence-I'

describe('longest uncommon subsequence I test case 🥇', () => {
  it('should return the expected result', () => {
    const a = 'aba'
    const b = 'cdc'
    const result = findLUSlength(a, b)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('longest uncommon subsequence I test case 🥈', () => {
  it('should return the expected result', () => {
    const a = 'aaa'
    const b = 'bbb'
    const result = findLUSlength(a, b)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('longest uncommon subsequence I test case 🥉', () => {
  it('should return the expected result', () => {
    const a = 'aaa'
    const b = 'aaa'
    const result = findLUSlength(a, b)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('longest uncommon subsequence I test case 🏅', () => {
  it('should return the expected result', () => {
    const a = 'aaaaab'
    const b = 'aaaaac'
    const result = findLUSlength(a, b)
    const expected = 6
    expect(result).toBe(expected)
  })
})

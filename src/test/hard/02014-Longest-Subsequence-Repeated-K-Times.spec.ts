import { describe, expect, it } from 'vitest'
import { longestSubsequenceRepeatedK } from '../../code/hard/02014-Longest-Subsequence-Repeated-K-Times'

describe('longest subsequence repeated k times test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'letsleetcode'
    const k = 2
    const result = longestSubsequenceRepeatedK(s, k)
    const expected = 'let'
    expect(result).toBe(expected)
  })
})

describe('longest subsequence repeated k times test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'bb'
    const k = 2
    const result = longestSubsequenceRepeatedK(s, k)
    const expected = 'b'
    expect(result).toBe(expected)
  })
})

describe('longest subsequence repeated k times test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'ab'
    const k = 2
    const result = longestSubsequenceRepeatedK(s, k)
    const expected = ''
    expect(result).toBe(expected)
  })
})

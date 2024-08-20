import { describe, expect, it } from 'vitest'
import { lengthOfLongestSubstring } from '../../code/medium/00003-Longest-Substring-Without-Repeating-Characters'

describe('longest substring without repeating characters test case 🥇', () => {
  it('should return the expected substring length', () => {
    const s = 'abcabcbb'
    const result = lengthOfLongestSubstring(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('longest substring without repeating characters test case 🥈', () => {
  it('should return the expected substring length', () => {
    const s = 'bbbbb'
    const result = lengthOfLongestSubstring(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('longest substring without repeating characters test case 🥉', () => {
  it('should return the expected substring length', () => {
    const s = 'pwwkew'
    const result = lengthOfLongestSubstring(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})
describe('longest substring without repeating characters test case 🏅', () => {
  it('should return the expected substring length', () => {
    const s = 'dvdf'
    const result = lengthOfLongestSubstring(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

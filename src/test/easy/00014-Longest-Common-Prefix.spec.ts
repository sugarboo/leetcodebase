import { describe, expect, it } from 'vitest'
import { longestCommonPrefix } from '../../code/easy/00014-Longest-Common-Prefix'

describe('Longest Common Prefix Test Case 🥇', () => {
  it('should return the expected string', () => {
    const strs = []
    const expected = ''
    expect(longestCommonPrefix(strs)).toBe(expected)
  })
})

describe('Longest Common Prefix Test Case 🥈', () => {
  it('should return the expected string', () => {
    const strs = ['flower','flow','flight']
    const expected = 'fl'
    expect(longestCommonPrefix(strs)).toBe(expected)
  })
})

describe('Longest Common Prefix Test Case 🥉', () => {
  it('should return the expected string', () => {
    const strs = ['dog','racecar','car']
    const expected = ''
    expect(longestCommonPrefix(strs)).toBe(expected)
  })
})
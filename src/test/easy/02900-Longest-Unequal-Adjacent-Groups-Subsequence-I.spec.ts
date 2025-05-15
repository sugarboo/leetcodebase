import { describe, expect, it } from 'vitest'
import { getLongestSubsequence } from '../../code/easy/02900-Longest-Unequal-Adjacent-Groups-Subsequence-I'

describe('longest unequal adjacent group subsequence I test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['e', 'a', 'b']
    const groups = [0, 0, 1]
    const result = getLongestSubsequence(words, groups)
    const expected = ['e', 'b']
    expect(result).toEqual(expected)
  })
})

describe('longest unequal adjacent group subsequence I test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['a', 'b', 'c', 'd']
    const groups = [1, 0, 1, 1]
    const result = getLongestSubsequence(words, groups)
    const expected = ['a', 'b', 'c']
    expect(result).toEqual(expected)
  })
})

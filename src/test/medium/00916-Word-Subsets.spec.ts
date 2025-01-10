import { describe, expect, it } from 'vitest'
import { wordSubsets } from '../../code/medium/00916-Word-Subsets'

describe('word subsets test case 🥇', () => {
  it('should return the expected result', () => {
    const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode']
    const words2 = ['e', 'o']
    const result = wordSubsets(words1, words2)
    const expected = ['facebook', 'google', 'leetcode']
    expect(result).toEqual(expected)
  })
})

describe('word subsets test case 🥈', () => {
  it('should return the expected result', () => {
    const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode']
    const words2 = ['l', 'e']
    const result = wordSubsets(words1, words2)
    const expected = ['apple', 'google', 'leetcode']
    expect(result).toEqual(expected)
  })
})

describe('word subsets test case 🥉', () => {
  it('should return the expected result', () => {
    const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode']
    const words2 = ['e', 'oo']
    const result = wordSubsets(words1, words2)
    const expected = ['facebook', 'google']
    expect(result).toEqual(expected)
  })
})

describe('word subsets test case 🏅', () => {
  it('should return the expected result', () => {
    const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode']
    const words2 = ['lo', 'eo']
    const result = wordSubsets(words1, words2)
    const expected = ['google', 'leetcode']
    expect(result).toEqual(expected)
  })
})

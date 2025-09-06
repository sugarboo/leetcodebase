import { describe, expect, it } from 'vitest'
import { countWords } from '../../code/easy/02085-Count-Common-Words-With-One-Occurrence'

describe('count common words with one occurrence test case 🥇', () => {
  it('should return the expected result', () => {
    const words1 = ['leetcode', 'is', 'amazing', 'as', 'is']
    const words2 = ['amazing', 'leetcode', 'is']
    const result = countWords(words1, words2)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count common words with one occurrence test case 🥈', () => {
  it('should return the expected result', () => {
    const words1 = ['b', 'bb', 'bbb']
    const words2 = ['a', 'aa', 'aaa']
    const result = countWords(words1, words2)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count common words with one occurrence test case 🥉', () => {
  it('should return the expected result', () => {
    const words1 = ['a', 'ab']
    const words2 = ['a', 'a', 'a', 'ab']
    const result = countWords(words1, words2)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count common words with one occurrence test case 🏅', () => {
  it('should return the expected result', () => {
    const words1 = ['leetcode', 'is', 'leetcode', 'is', 'amazing', 'and', 'fantastic']
    const words2 = ['leetcode', 'is', 'leetcode', 'is', 'fantastic']
    const result = countWords(words1, words2)
    const expected = 1
    expect(result).toBe(expected)
  })
})

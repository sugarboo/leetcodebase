import { describe, expect, it } from 'vitest'
import { mergeAlternately } from '../../code/easy/01768-Merge-Strings-Alternately'

describe('merge strings alternately test case 🥇', () => {
  it('should return the expected result', () => {
    const word1 = 'abc'
    const word2 = 'pqr'
    const result = mergeAlternately(word1, word2)
    const expected = 'apbqcr'
    expect(result).toBe(expected)
  })
})

describe('merge strings alternately test case 🥈', () => {
  it('should return the expected result', () => {
    const word1 = 'ab'
    const word2 = 'pqrs'
    const result = mergeAlternately(word1, word2)
    const expected = 'apbqrs'
    expect(result).toBe(expected)
  })
})

describe('merge strings alternately test case 🥉', () => {
  it('should return the expected result', () => {
    const word1 = 'abcd'
    const word2 = 'pq'
    const result = mergeAlternately(word1, word2)
    const expected = 'apbqcd'
    expect(result).toBe(expected)
  })
})

describe('merge strings alternately test case 🏅', () => {
  it('should return the expected result', () => {
    const word1 = 'pq'
    const word2 = 'ab'
    const result = mergeAlternately(word1, word2)
    const expected = 'paqb'
    expect(result).toBe(expected)
  })
})

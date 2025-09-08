import { describe, expect, it } from 'vitest'
import { mostWordsFound } from '../../code/easy/02114-Maximum-Number-of-Words-Found-in-Sentences'

describe('maximum number of words found in sentences test case 🥇', () => {
  it('should return the expected result', () => {
    const sentences = ['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']
    const result = mostWordsFound(sentences)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('maximum number of words found in sentences test case 🥈', () => {
  it('should return the expected result', () => {
    const sentences = ['please wait', 'continue to fight', 'continue to win']
    const result = mostWordsFound(sentences)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum number of words found in sentences test case 🥉', () => {
  it('should return the expected result', () => {
    const sentences = ['luffy is still joyboy', 'i do not like bees', 'i love leetcode']
    const result = mostWordsFound(sentences)
    const expected = 5
    expect(result).toBe(expected)
  })
})

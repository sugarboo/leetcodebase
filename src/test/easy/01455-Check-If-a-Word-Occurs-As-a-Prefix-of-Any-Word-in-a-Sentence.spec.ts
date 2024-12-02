import { describe, expect, it } from 'vitest'
import { isPrefixOfWord } from '../../code/easy/01455-Check-If-a-Word-Occurs-As-a-Prefix-of-Any-Word-in-a-Sentence'

describe('check if a word occurs as a prefix of any word in a sentence test case 🥇', () => {
  it('should return the expected result', () => {
    const sentence = 'i love eating burger'
    const searchWord = 'burg'
    const result = isPrefixOfWord(sentence, searchWord)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('check if a word occurs as a prefix of any word in a sentence test case 🥈', () => {
  it('should return the expected result', () => {
    const sentence = 'this problem is an easy problem'
    const searchWord = 'pro'
    const result = isPrefixOfWord(sentence, searchWord)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('check if a word occurs as a prefix of any word in a sentence test case 🥉', () => {
  it('should return the expected result', () => {
    const sentence = 'i am tired'
    const searchWord = 'you'
    const result = isPrefixOfWord(sentence, searchWord)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('check if a word occurs as a prefix of any word in a sentence test case 🏅', () => {
  it('should return the expected result', () => {
    const sentence = 'i am tired'
    const searchWord = 'i'
    const result = isPrefixOfWord(sentence, searchWord)
    const expected = 1
    expect(result).toBe(expected)
  })
})

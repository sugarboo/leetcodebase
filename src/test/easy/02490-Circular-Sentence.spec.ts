import { describe, expect, it } from 'vitest'
import { isCircularSentence } from '../../code/easy/02490-Circular-Sentence'

describe('circular sentence test case 🥇', () => {
  it('should return the expected result', () => {
    const sentence = 'leetcode exercises sound delightful'
    const result = isCircularSentence(sentence)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('circular sentence test case 🥈', () => {
  it('should return the expected result', () => {
    const sentence = 'eetcode'
    const result = isCircularSentence(sentence)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('circular sentence test case 🥉', () => {
  it('should return the expected result', () => {
    const sentence = 'Leetcode is cool'
    const result = isCircularSentence(sentence)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('circular sentence test case 🏅', () => {
  it('should return the expected result', () => {
    const sentence = 'Leetcode eisc cool'
    const result = isCircularSentence(sentence)
    const expected = false
    expect(result).toBe(expected)
  })
})

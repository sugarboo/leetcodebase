import { describe, expect, it } from 'vitest'
import { prefixCount } from '../../code/easy/02185-Counting-Words-With-a-Given-Prefix'

describe('counting words with a given prefix test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['pay', 'attention', 'practice', 'attend']
    const pref = 'at'
    const result = prefixCount(words, pref)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('counting words with a given prefix test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['apple', 'app', 'application', 'aptitude']
    const pref = 'app'
    const result = prefixCount(words, pref)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('counting words with a given prefix test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['hello', 'world', 'hi', 'goodbye']
    const pref = 'hi'
    const result = prefixCount(words, pref)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('counting words with a given prefix test case 🏅', () => {
  it('should return the expected result', () => {
    const words = ['leetcode', 'win', 'loops', 'success']
    const pref = 'code'
    const result = prefixCount(words, pref)
    const expected = 0
    expect(result).toBe(expected)
  })
})

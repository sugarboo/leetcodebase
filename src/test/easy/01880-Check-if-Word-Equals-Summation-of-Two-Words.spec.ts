import { describe, expect, it } from 'vitest'
import { isSumEqual } from '../../code/easy/01880-Check-if-Word-Equals-Summation-of-Two-Words'

describe('check if word equals summation of two words test case 🥇', () => {
  it('should return the expected result', () => {
    const firstWord = 'acb'
    const secondWord = 'cba'
    const targetWord = 'cdb'
    const result = isSumEqual(firstWord, secondWord, targetWord)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if word equals summation of two words test case 🥈', () => {
  it('should return the expected result', () => {
    const firstWord = 'aaa'
    const secondWord = 'a'
    const targetWord = 'aab'
    const result = isSumEqual(firstWord, secondWord, targetWord)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if word equals summation of two words test case 🥉', () => {
  it('should return the expected result', () => {
    const firstWord = 'aaa'
    const secondWord = 'a'
    const targetWord = 'aaaa'
    const result = isSumEqual(firstWord, secondWord, targetWord)
    const expected = true
    expect(result).toBe(expected)
  })
})

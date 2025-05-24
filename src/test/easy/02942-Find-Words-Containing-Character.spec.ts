import { describe, expect, it } from 'vitest'
import { findWordsContaining } from '../../code/easy/02942-Find-Words-Containing-Character'

describe('find words containing characters I test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['leet', 'code']
    const x = 'e'
    const result = findWordsContaining(words, x)
    const expected = [0, 1]
    expect(result).toEqual(expected)
  })
})

describe('find words containing characters I test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['abc', 'bcd', 'aaaa', 'cbc']
    const x = 'a'
    const result = findWordsContaining(words, x)
    const expected = [0, 2]
    expect(result).toEqual(expected)
  })
})

describe('find words containing characters I test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['abc', 'bcd', 'aaaa', 'cbc']
    const x = 'z'
    const result = findWordsContaining(words, x)
    const expected: number[] = []
    expect(result).toEqual(expected)
  })
})

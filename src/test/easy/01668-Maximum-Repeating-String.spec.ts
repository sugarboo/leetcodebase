import { describe, expect, it } from 'vitest'
import { maxRepeating } from '../../code/easy/01668-Maximum-Repeating-String'

describe('maximum repeating string test case 🥇', () => {
  it('should return the expected result', () => {
    const sequence = 'ababc'
    const word = 'ab'
    const result = maxRepeating(sequence, word)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('maximum repeating string test case 🥈', () => {
  it('should return the expected result', () => {
    const sequence = 'ababc'
    const word = 'ba'
    const result = maxRepeating(sequence, word)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('maximum repeating string test case 🥉', () => {
  it('should return the expected result', () => {
    const sequence = 'ababc'
    const word = 'ac'
    const result = maxRepeating(sequence, word)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('maximum repeating string test case 🏅', () => {
  it('should return the expected result', () => {
    const sequence = 'aaabaaaabaaabaaaabaaaabaaaabaaaaba'
    const word = 'aaaba'
    const result = maxRepeating(sequence, word)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('maximum repeating string test case 🏅🏅', () => {
  it('should return the expected result', () => {
    const sequence = 'aaabaaaabaaabaaaab'
    const word = 'aa'
    const result = maxRepeating(sequence, word)
    const expected = 2
    expect(result).toBe(expected)
  })
})

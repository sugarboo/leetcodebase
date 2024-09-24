import { describe, expect, it } from 'vitest'
import { reverseVowels } from '../../code/easy/00345-Reverse-Vowels-of-a-String'

describe('reverse vowels of a string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'IceCreAm'
    const result = reverseVowels(s)
    const expected = 'AceCreIm'
    expect(result).toBe(expected)
  })
})

describe('reverse vowels of a string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'leetcode'
    const result = reverseVowels(s)
    const expected = 'leotcede'
    expect(result).toBe(expected)
  })
})

describe('reverse vowels of a string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'Crypt'
    const result = reverseVowels(s)
    const expected = 'Crypt'
    expect(result).toBe(expected)
  })
})

describe('reverse vowels of a string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'Education'
    const result = reverseVowels(s)
    const expected = 'odicatuEn'
    expect(result).toBe(expected)
  })
})

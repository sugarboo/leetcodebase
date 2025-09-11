import { describe, expect, it } from 'vitest'
import { sortVowels } from '../../code/medium/02785-Sort-Vowels-in-a-String'

describe('sort vowels in a string test case 🥇', () => {
  it('should return the expected result', async () => {
    const s = 'lEetcOde'
    const result = sortVowels(s)
    const expected = 'lEOtcede'
    expect(result).toBe(expected)
  })
})

describe('sort vowels in a string test case 🥈', () => {
  it('should return the expected result', async () => {
    const s = 'lYmpH'
    const result = sortVowels(s)
    const expected = 'lYmpH'
    expect(result).toBe(expected)
  })
})

describe('sort vowels in a string test case 🥉', () => {
  it('should return the expected result', async () => {
    const s = 'consonants'
    const result = sortVowels(s)
    const expected = 'cansononts'
    expect(result).toBe(expected)
  })
})

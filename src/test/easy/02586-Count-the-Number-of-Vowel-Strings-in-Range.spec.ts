import { describe, expect, it } from 'vitest'
import { vowelStrings } from '../../code/easy/02586-Count-the-Number-of-Vowel-Strings-in-Range'

describe('count the number of vowel strings in range test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['are', 'amy', 'u']
    const left = 0
    const right = 2
    const result = vowelStrings(words, left, right)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count the number of vowel strings in range test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['hey', 'aeo', 'mu', 'ooo', 'artro']
    const left = 1
    const right = 4
    const result = vowelStrings(words, left, right)
    const expected = 3
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { removeAnagrams } from '../../code/easy/02273-Find-Resultant-Array-After-Removing-Anagrams'

describe('find resultant array after removing anagrams test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['abba', 'baba', 'bbaa', 'cd', 'cd']
    const result = removeAnagrams(words)
    const expected = ['abba', 'cd']
    expect(result).toEqual(expected)
  })
})

describe('find resultant array after removing anagrams test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['a', 'b', 'c', 'd', 'e']
    const result = removeAnagrams(words)
    const expected = ['a', 'b', 'c', 'd', 'e']
    expect(result).toEqual(expected)
  })
})

describe('find resultant array after removing anagrams test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['a', 'b', 'a']
    const result = removeAnagrams(words)
    const expected = ['a', 'b', 'a']
    expect(result).toEqual(expected)
  })
})

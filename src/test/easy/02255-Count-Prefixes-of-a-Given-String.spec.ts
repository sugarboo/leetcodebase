import { describe, expect, it } from 'vitest'
import { countPrefixes } from '../../code/easy/02255-Count-Prefixes-of-a-Given-String'

describe('count prefixes of a given string test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['a', 'b', 'c', 'ab', 'bc', 'abc']
    const s = 'abc'
    const result = countPrefixes(words, s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count prefixes of a given string test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['a', 'a']
    const s = 'aa'
    const result = countPrefixes(words, s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

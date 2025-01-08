import { describe, expect, it } from 'vitest'
import { countPrefixSuffixPairs } from '../../code/easy/03042-Count-Prefix-and-Suffix-Pairs-I'

describe('count prefix and suffix pairs test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['a', 'aba', 'ababa', 'aa']
    const result = countPrefixSuffixPairs(words)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('count prefix and suffix pairs test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['pa', 'papa', 'ma', 'mama']
    const result = countPrefixSuffixPairs(words)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count prefix and suffix pairs test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['abab', 'ab']
    const result = countPrefixSuffixPairs(words)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count prefix and suffix pairs test case 🏅', () => {
  it('should return the expected result', () => {
    const words = ['a', 'abb']
    const result = countPrefixSuffixPairs(words)
    const expected = 0
    expect(result).toBe(expected)
  })
})

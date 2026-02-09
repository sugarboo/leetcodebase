import { describe, expect, it } from 'vitest'
import { maximumNumberOfStringPairs } from '../../code/easy/02744-Find-Maximum-Number-of-String-Pairs'

describe('find maximum number of string pairs test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['cd', 'ac', 'dc', 'ca', 'zz']
    const result = maximumNumberOfStringPairs(words)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find maximum number of string pairs test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['ab', 'ba', 'cc']
    const result = maximumNumberOfStringPairs(words)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find maximum number of string pairs test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['a', 'b', 'c', 'd', 'e']
    const result = maximumNumberOfStringPairs(words)
    const expected = 0
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { countConsistentStrings } from '../../code/easy/01684-Count-the-Number-of-Consistent-Strings'

describe('count the number of consistent strings test case 🥇', () => {
  it('should return the expected result', () => {
    const allowed = 'ab'
    const words = ['ad', 'bd', 'aaab', 'baa', 'badab']
    const result = countConsistentStrings(allowed, words)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count the number of consistent strings test case 🥈', () => {
  it('should return the expected result', () => {
    const allowed = 'abc'
    const words = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']
    const result = countConsistentStrings(allowed, words)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('count the number of consistent strings test case 🥉', () => {
  it('should return the expected result', () => {
    const allowed = 'cad'
    const words = ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd']
    const result = countConsistentStrings(allowed, words)
    const expected = 4
    expect(result).toBe(expected)
  })
})

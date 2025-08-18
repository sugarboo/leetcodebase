import { describe, expect, it } from 'vitest'
import { reversePrefix } from '../../code/easy/02000-Reverse-Prefix-of-Word'

describe('reverse prefix of word test case 🥇', () => {
  it('should return the expected result', () => {
    const word = 'abcdefd'
    const ch = 'd'
    const result = reversePrefix(word, ch)
    const expected = 'dcbaefd'
    expect(result).toBe(expected)
  })
})

describe('reverse prefix of word test case 🥈', () => {
  it('should return the expected result', () => {
    const word = 'xyxzxe'
    const ch = 'z'
    const result = reversePrefix(word, ch)
    const expected = 'zxyxxe'
    expect(result).toBe(expected)
  })
})

describe('reverse prefix of word test case 🥉', () => {
  it('should return the expected result', () => {
    const word = 'abcd'
    const ch = 'z'
    const result = reversePrefix(word, ch)
    const expected = 'abcd'
    expect(result).toBe(expected)
  })
})

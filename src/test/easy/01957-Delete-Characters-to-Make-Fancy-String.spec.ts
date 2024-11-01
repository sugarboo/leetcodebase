import { describe, expect, it } from 'vitest'
import { makeFancyString } from '../../code/easy/01957-Delete-Characters-to-Make-Fancy-String'

describe('delete characters to make fancy string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'leeetcode'
    const result = makeFancyString(s)
    const expected = 'leetcode'
    expect(result).toBe(expected)
  })
})

describe('delete characters to make fancy string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aaabaaaa'
    const result = makeFancyString(s)
    const expected = 'aabaa'
    expect(result).toBe(expected)
  })
})

describe('delete characters to make fancy string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'aab'
    const result = makeFancyString(s)
    const expected = 'aab'
    expect(result).toBe(expected)
  })
})

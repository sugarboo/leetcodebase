import { describe, expect, it } from 'vitest'
import { rearrangeCharacters } from '../../code/easy/02287-Rearrange-Characters-to-Make-Target-String'

describe('check if number has equal digit count and digit value test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'ilovecodingonleetcode'
    const target = 'code'
    const result = rearrangeCharacters(s, target)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('check if number has equal digit count and digit value test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abcba'
    const target = 'abc'
    const result = rearrangeCharacters(s, target)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('check if number has equal digit count and digit value test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'abbaccaddaeea'
    const target = 'aaaaa'
    const result = rearrangeCharacters(s, target)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('check if number has equal digit count and digit value test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'abc'
    const target = 'abcd'
    const result = rearrangeCharacters(s, target)
    const expected = 0
    expect(result).toBe(expected)
  })
})

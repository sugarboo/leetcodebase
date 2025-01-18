import { describe, expect, it } from 'vitest'
import { gcdOfStrings } from '../../code/easy/01071-Greatest-Common-Divisor-of-Strings'

describe('greatest common divisor of strings test case 🥇', () => {
  it('should return the expected result', () => {
    const str1 = 'ABCABC'
    const str2 = 'ABC'
    const result = gcdOfStrings(str1, str2)
    const expected = 'ABC'
    expect(result).toBe(expected)
  })
})

describe('greatest common divisor of strings test case 🥈', () => {
  it('should return the expected result', () => {
    const str1 = 'ABABAB'
    const str2 = 'ABAB'
    const result = gcdOfStrings(str1, str2)
    const expected = 'AB'
    expect(result).toBe(expected)
  })
})

describe('greatest common divisor of strings test case 🥉', () => {
  it('should return the expected result', () => {
    const str1 = 'LEET'
    const str2 = 'CODE'
    const result = gcdOfStrings(str1, str2)
    const expected = ''
    expect(result).toBe(expected)
  })
})

describe('greatest common divisor of strings test case 🏅', () => {
  it('should return the expected result', () => {
    const str1 = 'ABCDEF'
    const str2 = 'ABC'
    const result = gcdOfStrings(str1, str2)
    const expected = ''
    expect(result).toBe(expected)
  })
})

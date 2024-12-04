import { describe, expect, it } from 'vitest'
import { canMakeSubsequence } from '../../code/medium/02825-Make-String-a-Subsequence-Using-Cyclic-Increments'

describe('make string a subsequence using cyclic increments test case 🥇', () => {
  it('should return the expected result', async () => {
    const str1 = 'abc'
    const str2 = 'ad'
    const result = canMakeSubsequence(str1, str2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('make string a subsequence using cyclic increments test case 🥈', () => {
  it('should return the expected result', async () => {
    const str1 = 'zc'
    const str2 = 'ad'
    const result = canMakeSubsequence(str1, str2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('make string a subsequence using cyclic increments test case 🥉', () => {
  it('should return the expected result', async () => {
    const str1 = 'ab'
    const str2 = 'd'
    const result = canMakeSubsequence(str1, str2)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('make string a subsequence using cyclic increments test case 🏅', () => {
  it('should return the expected result', async () => {
    const str1 = 'eao'
    const str2 = 'ofa'
    const result = canMakeSubsequence(str1, str2)
    const expected = false
    expect(result).toBe(expected)
  })
})

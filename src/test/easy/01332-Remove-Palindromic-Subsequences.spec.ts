import { describe, expect, it } from 'vitest'
import { removePalindromeSub } from './../../code/easy/01332-Remove-Palindromic-Subsequences'

describe('remove palindromic subsequences test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'ababa'
    const result = removePalindromeSub(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('remove palindromic subsequences test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abb'
    const result = removePalindromeSub(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('remove palindromic subsequences test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'baabb'
    const result = removePalindromeSub(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

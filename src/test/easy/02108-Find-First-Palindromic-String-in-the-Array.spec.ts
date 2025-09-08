import { describe, expect, it } from 'vitest'
import { firstPalindrome } from '../../code/easy/02108-Find-First-Palindromic-String-in-the-Array'

describe('find first palindromic string in the array test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['abc', 'car', 'ada', 'racecar', 'cool']
    const result = firstPalindrome(words)
    const expected = 'ada'
    expect(result).toBe(expected)
  })
})

describe('find first palindromic string in the array test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['notapalindrome', 'racecar']
    const result = firstPalindrome(words)
    const expected = 'racecar'
    expect(result).toBe(expected)
  })
})

describe('find first palindromic string in the array test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['def', 'ghi']
    const result = firstPalindrome(words)
    const expected = ''
    expect(result).toBe(expected)
  })
})

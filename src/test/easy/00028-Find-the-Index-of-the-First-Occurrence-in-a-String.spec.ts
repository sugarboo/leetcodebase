import { describe, expect, it } from 'vitest'
import { strStr } from '../../code/easy/00028-Find-the-Index-of-the-First-Occurrence-in-a-String'

describe('find the index of the first occurrence in a string test case 🥇', () => {
  it('should return the expected index', () => {
    const haystack = 'sadbutsad'
    const needle = 'sad'
    const expected = 0
    expect(strStr(haystack, needle)).toBe(expected)
  })
})

describe('find the index of the first occurrence in a string test case 🥈', () => {
  it('should return the expected index', () => {
    const haystack = 'leetcode'
    const needle = 'leeto'
    const expected = -1
    expect(strStr(haystack, needle)).toBe(expected)
  })
})

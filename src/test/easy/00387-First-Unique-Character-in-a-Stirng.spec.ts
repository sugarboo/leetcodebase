import { describe, expect, it } from 'vitest'
import { firstUniqChar } from '../../code/easy/00387-First-Unique-Character-in-a-Stirng'

describe('first unique character in a string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'leetcode'
    const result = firstUniqChar(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('first unique character in a string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'loveleetcode'
    const result = firstUniqChar(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('first unique character in a string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'aabb'
    const result = firstUniqChar(s)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('first unique character in a string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'google'
    const result = firstUniqChar(s)
    const expected = 4
    expect(result).toBe(expected)
  })
})

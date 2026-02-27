import { describe, expect, it } from 'vitest'
import { similarPairs } from '../../code/easy/02506-Count-Pairs-Of-Similar-Strings'

describe('count pairs of similar strings test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['aba', 'aabb', 'abcd', 'bac', 'aabc']
    const result = similarPairs(words)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count pairs of similar strings test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['aabb', 'ab', 'ba']
    const result = similarPairs(words)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count pairs of similar strings test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['nba', 'cba', 'dba']
    const result = similarPairs(words)
    const expected = 0
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { getSmallestString } from '../../code/medium/01663-Smallest-String-With-A-Given-Numeric-Value'

describe('get smallest string with a given numeric value test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 3
    const k = 27
    const result = getSmallestString(n, k)
    const expected = 'aay'
    expect(result).toBe(expected)
  })
})

describe('get smallest string with a given numeric value test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 5
    const k = 73
    const result = getSmallestString(n, k)
    const expected = 'aaszz'
    expect(result).toBe(expected)
  })
})

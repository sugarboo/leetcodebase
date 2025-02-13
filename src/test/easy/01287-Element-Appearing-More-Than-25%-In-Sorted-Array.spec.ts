import { describe, expect, it } from 'vitest'
import { findSpecialInteger } from './../../code/easy/01287-Element-Appearing-More-Than-25%-In-Sorted-Array'

describe('find special integer test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]
    const result = findSpecialInteger(arr)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('find special integer test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 1, 2, 2, 2, 2, 3, 3]
    const result = findSpecialInteger(arr)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find special integer test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, 1]
    const result = findSpecialInteger(arr)
    const expected = 1
    expect(result).toBe(expected)
  })
})

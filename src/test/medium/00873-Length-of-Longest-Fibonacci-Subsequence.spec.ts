import { describe, expect, it } from 'vitest'
import { lenLongestFibSubseq } from '../../code/medium/00873-Length-of-Longest-Fibonacci-Subsequence'

describe('find longest fibonacci subsequence test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const result = lenLongestFibSubseq(arr)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('find longest fibonacci subsequence test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 3, 7, 11, 12, 14, 18]
    const result = lenLongestFibSubseq(arr)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('find longest fibonacci subsequence test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50]
    const result = lenLongestFibSubseq(arr)
    const expected = 5
    expect(result).toBe(expected)
  })
})

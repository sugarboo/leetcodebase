import { describe, expect, it } from 'vitest'
import { maximumTripletValue } from '../../code/medium/02874-Maximum-Value-of-an-Ordered-Triplet-II'

describe('find the maximum achievable number test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [12, 6, 1, 2, 7]
    const result = maximumTripletValue(nums)
    const expected = 77
    expect(result).toBe(expected)
  })
})

describe('find the maximum achievable number test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 10, 3, 4, 19]
    const result = maximumTripletValue(nums)
    const expected = 133
    expect(result).toBe(expected)
  })
})

describe('find the maximum achievable number test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = maximumTripletValue(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

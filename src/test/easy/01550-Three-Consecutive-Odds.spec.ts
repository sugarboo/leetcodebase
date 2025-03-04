import { describe, expect, it } from 'vitest'
import { threeConsecutiveOdds } from '../../code/easy/01550-Three-Consecutive-Odds'

describe('three consecutive odds test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [2, 6, 4, 1]
    const result = threeConsecutiveOdds(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('three consecutive odds test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]
    const result = threeConsecutiveOdds(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('three consecutive odds test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 1, 1]
    const result = threeConsecutiveOdds(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

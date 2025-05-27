import { describe, expect, it } from 'vitest'
import { differenceOfSums } from '../../code/easy/02894-Divisible-and-Non-divisible-Sums-Difference'

describe('divisible and non-divisible sums difference test case 🥇', () => {
  it('should return the expected result', () => {
    const result = differenceOfSums(10, 3)
    const expected = 19
    expect(result).toBe(expected)
  })
})

describe('divisible and non-divisible sums difference test case 🥈', () => {
  it('should return the expected result', () => {
    const result = differenceOfSums(5, 6)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('divisible and non-divisible sums difference test case 🥉', () => {
  it('should return the expected result', () => {
    const result = differenceOfSums(5, 1)
    const expected = -15
    expect(result).toBe(expected)
  })
})

describe('divisible and non-divisible sums difference test case 🏅', () => {
  it('should return the expected result', () => {
    const result = differenceOfSums(1, 1)
    const expected = -1
    expect(result).toBe(expected)
  })
})

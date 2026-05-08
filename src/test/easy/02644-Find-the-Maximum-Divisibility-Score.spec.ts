import { describe, expect, it } from 'vitest'
import { maxDivScore } from '../../code/easy/02644-Find-the-Maximum-Divisibility-Score'

describe('find the maximum divisibility score test case 🥇', () => {
  it('should return the expected array', () => {
    const nums = [2, 9, 15, 50]
    const divisors = [5, 3, 7, 2]
    const result = maxDivScore(nums, divisors)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find the maximum divisibility score test case 🥈', () => {
  it('should return the expected array', () => {
    const nums = [4, 7, 9, 3, 9]
    const divisors = [5, 2, 3]
    const result = maxDivScore(nums, divisors)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('find the maximum divisibility score test case 🥉', () => {
  it('should return the expected array', () => {
    const nums = [20, 14, 21, 10]
    const divisors = [10, 16, 20]
    const result = maxDivScore(nums, divisors)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('find the maximum divisibility score test case 🏅', () => {
  it('should return the expected array', () => {
    const nums = [1, 17, 19, 13]
    const divisors = [4, 5, 3]
    const result = maxDivScore(nums, divisors)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('find the maximum divisibility score test case 🏆', () => {
  it('should return the expected array', () => {
    const nums = [6, 18, 24, 8]
    const divisors = [12]
    const result = maxDivScore(nums, divisors)
    const expected = 12
    expect(result).toBe(expected)
  })
})

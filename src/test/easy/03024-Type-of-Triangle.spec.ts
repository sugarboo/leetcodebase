import { describe, expect, it } from 'vitest'
import { triangleType } from '../../code/easy/03024-Type-of-Triangle'

describe('type of triangle test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 3, 3]
    const result = triangleType(nums)
    const expected = 'equilateral'
    expect(result).toBe(expected)
  })
})

describe('type of triangle test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [3, 4, 5]
    const result = triangleType(nums)
    const expected = 'scalene'
    expect(result).toBe(expected)
  })
})

describe('type of triangle test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [9, 4, 9]
    const result = triangleType(nums)
    const expected = 'isosceles'
    expect(result).toBe(expected)
  })
})

describe('type of triangle test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = triangleType(nums)
    const expected = 'none'
    expect(result).toBe(expected)
  })
})

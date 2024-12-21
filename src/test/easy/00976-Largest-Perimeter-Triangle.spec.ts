import { describe, expect, it } from 'vitest'
import { largestPerimeter } from '../../code/easy/00976-Largest-Perimeter-Triangle'

describe('largest perimeter triangle test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 2]
    const result = largestPerimeter(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('largest perimeter triangle test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 1, 10]
    const result = largestPerimeter(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('largest perimeter triangle test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 3, 4]
    const result = largestPerimeter(nums)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('largest perimeter triangle test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [3, 6, 2, 3]
    const result = largestPerimeter(nums)
    const expected = 8
    expect(result).toBe(expected)
  })
})

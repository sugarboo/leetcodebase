import { describe, expect, it } from 'vitest'
import { heightChecker } from '../../code/easy/01051-Height-Checker'

describe('height checker test case 🥇', () => {
  it('should return the expected result', () => {
    const heights = [1, 1, 4, 2, 1, 3]
    const result = heightChecker(heights)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('height checker test case 🥈', () => {
  it('should return the expected result', () => {
    const heights = [5, 1, 2, 3, 4]
    const result = heightChecker(heights)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('height checker test case 🥉', () => {
  it('should return the expected result', () => {
    const heights = [1, 2, 3, 4, 5]
    const result = heightChecker(heights)
    const expected = 0
    expect(result).toBe(expected)
  })
})

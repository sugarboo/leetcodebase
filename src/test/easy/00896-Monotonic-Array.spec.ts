import { describe, expect, it } from 'vitest'
import { isMonotonic } from '../../code/easy/00896-Monotonic-Array'

describe('monotonic array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 2, 3]
    const result = isMonotonic(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('monotonic array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [6, 5, 4, 4]
    const result = isMonotonic(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('monotonic array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 2]
    const result = isMonotonic(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('monotonic array test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 2]
    const result = isMonotonic(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('monotonic array test case 🏅🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 0]
    const result = isMonotonic(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('monotonic array test case 🏅🏅🏅', () => {
  it('should return the expected result', () => {
    const nums = [11, 11, 9, 4, 3, 3, 3, 1, -1, -1, 3, 3, 3, 5, 5, 5]
    const result = isMonotonic(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('monotonic array test case 🏅🏅🏅🏅', () => {
  it('should return the expected result', () => {
    const nums = [11]
    const result = isMonotonic(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

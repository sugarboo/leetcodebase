import { describe, expect, it } from 'vitest'
import { minOperations } from '../../code/easy/01827-Minimum-Operations-to-Make-the-Array-Increasing'

describe('minimum operations to make the array increasing te  st case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1]
    const result = minOperations(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make the array increasing test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 5, 2, 4, 1]
    const result = minOperations(nums)
    const expected = 14
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make the array increasing test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [8]
    const result = minOperations(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make the array increasing test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = minOperations(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

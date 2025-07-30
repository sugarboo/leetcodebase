import { describe, expect, it } from 'vitest'
import { canBeIncreasing } from '../../code/easy/01909-Remove-One-Element-to-Make-the-Array-Strictly-Increasing'

describe('remove one element to make the array strictly increasing test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 10, 5, 7]
    const result = canBeIncreasing(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('remove one element to make the array strictly increasing test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 1, 2]
    const result = canBeIncreasing(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('remove one element to make the array strictly increasing test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1]
    const result = canBeIncreasing(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('remove one element to make the array strictly increasing test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = canBeIncreasing(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

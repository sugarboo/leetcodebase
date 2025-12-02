import { describe, expect, it } from 'vitest'
import { minimumOperations } from '../../code/easy/02357-Make-Array-Zero-by-Subtracting-Equal-Amounts'

describe('make array zero by subtracting equal amounts test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 5, 0, 3, 5]
    const result = minimumOperations(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('make array zero by subtracting equal amounts test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [0]
    const result = minimumOperations(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

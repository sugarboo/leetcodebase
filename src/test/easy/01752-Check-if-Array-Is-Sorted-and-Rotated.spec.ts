import { describe, expect, it } from 'vitest'
import { check } from '../../code/easy/01752-Check-if-Array-Is-Sorted-and-Rotated'

describe('check if array is sorted and rotated test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 4, 5, 1, 2]
    const result = check(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if array is sorted and rotated test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 3, 4]
    const result = check(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if array is sorted and rotated test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = check(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

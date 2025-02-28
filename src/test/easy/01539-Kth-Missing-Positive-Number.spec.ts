import { describe, expect, it } from 'vitest'
import { findKthPositive } from '../../code/easy/01539-Kth-Missing-Positive-Number'

describe('find kth positive test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 4, 7, 11]
    const k = 5
    const result = findKthPositive(nums, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('find kth positive test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const k = 2
    const result = findKthPositive(nums, k)
    const expected = 6
    expect(result).toBe(expected)
  })
})

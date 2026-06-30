import { describe, expect, it } from 'vitest'
import { maximumElementAfterDecrementingAndRearranging } from '../../code/medium/01846-maximum-element-after-decreasing-and-rearranging'

describe('maximum element after decrementing and rearranging test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [2, 2, 1, 2, 1]
    const result = maximumElementAfterDecrementingAndRearranging(arr)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('maximum element after decrementing and rearranging test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [100, 1, 1000]
    const result = maximumElementAfterDecrementingAndRearranging(arr)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum element after decrementing and rearranging test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = maximumElementAfterDecrementingAndRearranging(arr)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('maximum element after decrementing and rearranging test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = [73, 98, 9]
    const result = maximumElementAfterDecrementingAndRearranging(arr)
    const expected = 3
    expect(result).toBe(expected)
  })
})

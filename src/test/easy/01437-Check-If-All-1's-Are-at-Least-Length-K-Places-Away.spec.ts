import { describe, expect, it } from 'vitest'
import { kLengthApart } from '../../code/easy/01437-Check-If-All-1\'s-Are-at-Least-Length-K-Places-Away'

describe('check if all 1s are at least length k places away test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 0, 0, 0, 1, 0, 0, 1]
    const k = 2
    const result = kLengthApart(nums, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if all 1s are at least length k places away test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 0, 0, 1, 0, 1]
    const k = 2
    const result = kLengthApart(nums, k)
    const expected = false
    expect(result).toBe(expected)
  })
})

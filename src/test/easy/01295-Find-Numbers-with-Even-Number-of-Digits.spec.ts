import { describe, expect, it } from 'vitest'
import { findNumbers } from '../../code/easy/01295-Find-Numbers-with-Even-Number-of-Digits'

describe('find numbers with even number of digits test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [12, 345, 2, 6, 7896]
    const result = findNumbers(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find numbers with even number of digits test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [555, 901, 482, 1771]
    const result = findNumbers(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

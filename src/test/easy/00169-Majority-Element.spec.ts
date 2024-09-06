import { describe, expect, it } from 'vitest'
import { majorityElement } from '../../code/easy/00169-Majority-Element'

describe('majority element test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 3]
    const result = majorityElement(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('majority element test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2]
    const result = majorityElement(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('majority element test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 1, 1, 1, 3, 2, 5, 2, 9, 9]
    const result = majorityElement(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('majority element test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 3, 3, 1, 3, 3, 5, 3, 3, 5, 5, 5, 5, 4]
    const result = majorityElement(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

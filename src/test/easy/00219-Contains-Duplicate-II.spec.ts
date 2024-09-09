import { describe, expect, it } from 'vitest'
import { containsNearbyDuplicate } from '../../code/easy/00219-Contains-Duplicate-II'

describe('contain duplicates II test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 1]
    const k = 3
    const result = containsNearbyDuplicate(nums, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('contain duplicates II test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 0, 1, 1]
    const k = 1
    const result = containsNearbyDuplicate(nums, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('contain duplicates II test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 1, 2, 3]
    const k = 2
    const result = containsNearbyDuplicate(nums, k)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('contain duplicates II test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0]
    const k = 1
    const result = containsNearbyDuplicate(nums, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('contain duplicates II test case 🏅🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 4, 2, 3, 1, 2]
    const k = 3
    const result = containsNearbyDuplicate(nums, k)
    const expected = true
    expect(result).toBe(expected)
  })
})

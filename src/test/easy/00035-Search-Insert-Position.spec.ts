import { describe, expect, it } from 'vitest'
import { searchInsert } from '../../code/easy/00035-Search-Insert-Position'

describe('search insert position test case 🥇', () => {
  it('should return the expected index', () => {
    const nums = [1, 3, 5, 6]
    const target = 5
    const expected = 2
    expect(searchInsert(nums, target)).toBe(expected)
  })
})

describe('search insert position test case 🥈', () => {
  it('should return the expected index', () => {
    const nums = [1, 3, 5, 6]
    const target = 2
    const expected = 1
    expect(searchInsert(nums, target)).toBe(expected)
  })
})

describe('search insert position test case 🥉', () => {
  it('should return the expected index', () => {
    const nums = [1, 3, 5, 6]
    const target = 7
    const expected = 4
    expect(searchInsert(nums, target)).toBe(expected)
  })
})

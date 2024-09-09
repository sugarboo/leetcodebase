import { describe, expect, it } from 'vitest'
import { containsDuplicate } from '../../code/easy/00217-Contains-Duplicate'

describe('contain duplicates test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 1]
    const result = containsDuplicate(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('contain duplicates test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = containsDuplicate(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('contain duplicates test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
    const result = containsDuplicate(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

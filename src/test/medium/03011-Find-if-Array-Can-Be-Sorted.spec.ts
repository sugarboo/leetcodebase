import { describe, expect, it } from 'vitest'
import { canSortArray } from '../../code/medium/03011-Find-if-Array-Can-Be-Sorted'

describe('find if array can be sorted test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [8, 4, 2, 30, 15]
    const result = canSortArray(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('find if array can be sorted test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [1, 2, 3, 4, 5]
    const result = canSortArray(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('find if array can be sorted test case 🥉', () => {
  it('should return the expected result', async () => {
    const nums = [3, 16, 8, 4, 2]
    const result = canSortArray(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

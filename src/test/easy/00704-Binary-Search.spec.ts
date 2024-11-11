import { describe, expect, it } from 'vitest'
import { search } from '../../code/easy/00704-Binary-Search'

describe('binary search test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [-1, 0, 3, 5, 9, 12]
    const target = 9
    const result = search(nums, target)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('binary search test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [-1, 0, 3, 5, 9, 12]
    const target = 2
    const result = search(nums, target)
    const expected = -1
    expect(result).toBe(expected)
  })
})

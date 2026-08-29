import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../../code/easy/00026-remove-duplicates-from-sorted-array'

describe('remove duplicates from sorted array test case 🥇', () => {
  it('should return the expected result and modify nums', () => {
    const nums = [1, 1, 2]
    const result = removeDuplicates(nums)
    const expected = 2
    expect(result).toBe(expected)
    expect(nums.slice(0, result)).toStrictEqual([1, 2])
  })
})

describe('remove duplicates from sorted array test case 🥈', () => {
  it('should return the expected result and modify nums', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const result = removeDuplicates(nums)
    const expected = 5
    expect(result).toBe(expected)
    expect(nums.slice(0, result)).toStrictEqual([0, 1, 2, 3, 4])
  })
})

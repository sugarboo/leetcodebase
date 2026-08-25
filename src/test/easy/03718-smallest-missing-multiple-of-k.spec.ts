import { describe, expect, it } from 'vitest'
import { missingMultiple } from '../../code/easy/03718-smallest-missing-multiple-of-k'

describe('smallest missing multiple of k test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [8, 2, 3, 4, 6]
    const k = 2
    const result = missingMultiple(nums, k)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('smallest missing multiple of k test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1,4,7,10,15]
    const k = 5
    const result = missingMultiple(nums, k)
    const expected = 5
    expect(result).toBe(expected)
  })
})











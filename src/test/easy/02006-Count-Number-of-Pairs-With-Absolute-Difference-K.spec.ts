import { describe, expect, it } from 'vitest'
import { countKDifference } from '../../code/easy/02006-Count-Number-of-Pairs-With-Absolute-Difference-K'

describe('count number of pairs with absolute difference k test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 2, 1]
    const k = 1
    const result = countKDifference(nums, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('count number of pairs with absolute difference k test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 3]
    const k = 3
    const result = countKDifference(nums, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count number of pairs with absolute difference k test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 1, 5, 4]
    const k = 2
    const result = countKDifference(nums, k)
    const expected = 3
    expect(result).toBe(expected)
  })
})

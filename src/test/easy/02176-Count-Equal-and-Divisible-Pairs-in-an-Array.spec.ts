import { describe, expect, it } from 'vitest'
import { countPairs } from '../../code/easy/02176-Count-Equal-and-Divisible-Pairs-in-an-Array'

describe('count equal and divisible pairs in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 1, 2, 2, 2, 1, 3]
    const k = 2
    const result = countPairs(nums, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('count equal and divisible pairs in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const k = 1
    const result = countPairs(nums, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

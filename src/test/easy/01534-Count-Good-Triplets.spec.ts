import { describe, expect, it } from 'vitest'
import { countGoodTriplets } from '../../code/easy/01534-Count-Good-Triplets'

describe('count good triplets test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 0, 1, 1, 9, 7]
    const a = 7
    const b = 2
    const c = 3
    const result = countGoodTriplets(nums, a, b, c)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('count good triplets test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 2, 2, 3]
    const a = 0
    const b = 0
    const c = 1
    const result = countGoodTriplets(nums, a, b, c)
    const expected = 0
    expect(result).toBe(expected)
  })
})

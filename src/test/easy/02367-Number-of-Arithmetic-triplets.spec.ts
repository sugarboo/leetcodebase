import { describe, expect, it } from 'vitest'
import { arithmeticTriplets } from '../../code/easy/02367-Number-of-Arithmetic-triplets'

describe('number of arithmetic triplets test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 4, 6, 7, 10]
    const diff = 3
    const result = arithmeticTriplets(nums, diff)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('number of arithmetic triplets test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [4, 5, 6, 7, 8, 9]
    const diff = 2
    const result = arithmeticTriplets(nums, diff)
    const expected = 2
    expect(result).toBe(expected)
  })
})

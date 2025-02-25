import { describe, expect, it } from 'vitest'
import { numOfSubarrays } from '../../code/medium/01524-Number-of-Sub-arrays-With-Odd-Sum'

describe('number of sub arrays with odd sum test case 🥇', () => {
  it('should return the expected score', () => {
    const arr = [1, 3, 5]
    const result = numOfSubarrays(arr)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('number of sub arrays with odd sum test case 🥈', () => {
  it('should return the expected score', () => {
    const arr = [2, 4, 6]
    const result = numOfSubarrays(arr)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('number of sub arrays with odd sum test case 🥉', () => {
  it('should return the expected score', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const result = numOfSubarrays(arr)
    const expected = 16
    expect(result).toBe(expected)
  })
})

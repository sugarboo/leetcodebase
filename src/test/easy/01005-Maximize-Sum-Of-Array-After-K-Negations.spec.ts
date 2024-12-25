import { describe, expect, it } from 'vitest'
import { largestSumAfterKNegations } from '../../code/easy/01005-Maximize-Sum-Of-Array-After-K-Negations'

describe('maximize sum of array after k negations test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [4, 2, 3]
    const result = largestSumAfterKNegations(arr, 1)
    const expected = 5
    expect(result).toStrictEqual(expected)
  })
})

describe('maximize sum of array after k negations test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [3, -1, 0, 2]
    const result = largestSumAfterKNegations(arr, 3)
    const expected = 6
    expect(result).toStrictEqual(expected)
  })
})

describe('maximize sum of array after k negations test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [2, -3, -1, 5, -4]
    const result = largestSumAfterKNegations(arr, 2)
    const expected = 13
    expect(result).toStrictEqual(expected)
  })
})

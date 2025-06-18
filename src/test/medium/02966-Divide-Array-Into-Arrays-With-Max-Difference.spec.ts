import { describe, expect, it } from 'vitest'
import { divideArray } from '../../code/medium/02966-Divide-Array-Into-Arrays-With-Max-Difference'

describe('divide array into arrays with max difference test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [1, 3, 4, 8, 7, 9, 3, 5, 1]
    const k = 2
    const result = divideArray(nums, k)
    const expected = [[1, 1, 3], [3, 4, 5], [7, 8, 9]]
    expect(result).toStrictEqual(expected)
  })
})

describe('divide array into arrays with max difference test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [2, 4, 2, 2, 5, 2]
    const k = 2
    const result = divideArray(nums, k)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

describe('divide array into arrays with max difference test case 🥉', () => {
  it('should return the expected result', async () => {
    const nums = [4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11]
    const k = 14
    const result = divideArray(nums, k)
    const expected = [[2, 2, 2], [4, 5, 5], [5, 5, 7], [7, 8, 8], [9, 9, 10], [11, 12, 12]]
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { resultsArray } from '../../code/medium/03524-Find-the-Power-of-K-Size-Subarrays-I'

describe('find the power of k-size subarrays I test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [1, 2, 3, 4, 3, 2, 5]
    const k = 3
    const result = resultsArray(nums, k)
    const expected = [3, 4, -1, -1, -1]
    expect(result).toStrictEqual(expected)
  })
})

describe('find the power of k-size subarrays I test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [2, 2, 2, 2, 2]
    const k = 4
    const result = resultsArray(nums, k)
    const expected = [-1, -1]
    expect(result).toStrictEqual(expected)
  })
})

describe('find the power of k-size subarrays I test case 🥉', () => {
  it('should return the expected result', async () => {
    const nums = [3, 2, 3, 2, 3, 2]
    const k = 2
    const result = resultsArray(nums, k)
    const expected = [-1, 3, -1, 3, -1]
    expect(result).toStrictEqual(expected)
  })
})

describe('find the power of k-size subarrays I test case 🏅', () => {
  it('should return the expected result', async () => {
    const nums = [1]
    const k = 1
    const result = resultsArray(nums, k)
    const expected = [1]
    expect(result).toStrictEqual(expected)
  })
})

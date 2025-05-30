import { describe, expect, it } from 'vitest'
import { frequencySort } from '../../code/easy/01636-Sort-Array-by-Increasing-Frequency'

describe('sort array by increasing frequency test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 2, 2, 2, 3]
    const result = frequencySort(nums)
    const expected = [3, 1, 1, 2, 2, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort array by increasing frequency test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 1, 3, 2]
    const result = frequencySort(nums)
    const expected = [1, 3, 3, 2, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort array by increasing frequency test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
    const result = frequencySort(nums)
    const expected = [5, -1, 4, 4, -6, -6, 1, 1, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort array by increasing frequency test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3]
    const result = frequencySort(nums)
    const expected = [3, 3, 3, 2, 2, 2, 1, 1, 1]
    expect(result).toStrictEqual(expected)
  })
})

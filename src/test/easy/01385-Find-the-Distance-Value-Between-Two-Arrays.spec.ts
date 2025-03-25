import { describe, expect, it } from 'vitest'
import { findTheDistanceValue } from '../../code/easy/01385-Find-the-Distance-Value-Between-Two-Arrays'

describe('find the distance value between two arrays test case 🥇', () => {
  it('should return the expected result', () => {
    const arr1 = [4, 5, 8]
    const arr2 = [10, 9, 1, 8]
    const d = 2
    const result = findTheDistanceValue(arr1, arr2, d)
    const expected = 2
    expect(result).toEqual(expected)
  })
})

describe('find the distance value between two arrays test case 🥈', () => {
  it('should return the expected result', () => {
    const arr1 = [1, 4, 2, 3]
    const arr2 = [-4, -3, 6, 10, 20, 30]
    const d = 3
    const result = findTheDistanceValue(arr1, arr2, d)
    const expected = 2
    expect(result).toEqual(expected)
  })
})

describe('find the distance value between two arrays test case 🥉', () => {
  it('should return the expected result', () => {
    const arr1 = [2, 1, 100, 3]
    const arr2 = [-5, -2, 10, -3, 7]
    const d = 6
    const result = findTheDistanceValue(arr1, arr2, d)
    const expected = 1
    expect(result).toEqual(expected)
  })
})

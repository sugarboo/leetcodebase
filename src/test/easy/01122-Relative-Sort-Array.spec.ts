import { describe, expect, it } from 'vitest'
import { relativeSortArray } from '../../code/easy/01122-Relative-Sort-Array'

describe('relative sort array test case 🥇', () => {
  it('should return the expected result', () => {
    const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
    const arr2 = [2, 1, 4, 3, 9, 6]
    const result = relativeSortArray(arr1, arr2)
    const expected = [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
    expect(result).toEqual(expected)
  })
})

describe('relative sort array test case 🥈', () => {
  it('should return the expected result', () => {
    const arr1 = [28, 6, 22, 8, 44, 17]
    const arr2 = [22, 28, 8, 6]
    const result = relativeSortArray(arr1, arr2)
    const expected = [22, 28, 8, 6, 17, 44]
    expect(result).toEqual(expected)
  })
})

describe('relative sort array test case 🥉', () => {
  it('should return the expected result', () => {
    const arr1 = [26, 21, 11, 20, 50, 34, 1, 18]
    const arr2 = [21, 11, 26, 20]
    const result = relativeSortArray(arr1, arr2)
    const expected = [21, 11, 26, 20, 1, 18, 34, 50]
    expect(result).toEqual(expected)
  })
})

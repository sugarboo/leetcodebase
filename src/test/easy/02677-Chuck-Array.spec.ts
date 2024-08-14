import { describe, expect, it } from 'vitest'
import { chunk } from '../../code/easy/02677-Chuck-Array'

describe('chuck array test case 🥇', () => {
  it('should return the expected array', () => {
    const arr = [1, 2, 3, 4, 5]
    const size = 1
    const result = chunk(arr, size)
    const expected = [[1], [2], [3], [4], [5]]
    expect(result).toStrictEqual(expected)
  })
})

describe('chuck array test case 🥈', () => {
  it('should return the expected array', () => {
    const arr = [1, 9, 6, 3, 2]
    const size = 3
    const result = chunk(arr, size)
    const expected = [[1, 9, 6], [3, 2]]
    expect(result).toStrictEqual(expected)
  })
})

describe('chuck array test case 🥉', () => {
  it('should return the expected array', () => {
    const arr = [8, 5, 3, 2, 6]
    const size = 6
    const result = chunk(arr, size)
    const expected = [[8, 5, 3, 2, 6]]
    expect(result).toStrictEqual(expected)
  })
})

describe('chuck array test case 🏅', () => {
  it('should return the expected array', () => {
    const arr = []
    const size = 1
    const result = chunk(arr, size)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

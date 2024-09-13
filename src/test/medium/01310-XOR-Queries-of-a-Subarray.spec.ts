import { describe, expect, it } from 'vitest'
import { xorQueries } from '../../code/medium/01310-XOR-Queries-of-a-Subarray'

describe('xor queries of a subarray test case 🥇', () => {
  it('should return the expected steps', () => {
    const arr = [1, 3, 4, 8]
    const queries: [number, number][] = [[0, 1], [1, 2], [0, 3], [3, 3]]
    const result = xorQueries(arr, queries)
    const expected = [2, 7, 14, 8]
    expect(result).toStrictEqual(expected)
  })
})

describe('xor queries of a subarray test case 🥈', () => {
  it('should return the expected steps', () => {
    const arr = [4, 8, 2, 10]
    const queries: [number, number][] = [[2, 3], [1, 3], [0, 0], [0, 3]]
    const result = xorQueries(arr, queries)
    const expected = [8, 0, 4, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('xor queries of a subarray test case 🥉', () => {
  it('should return the expected steps', () => {
    const arr = [16]
    const queries: [number, number][] = [[0, 0], [0, 0], [0, 0]]
    const result = xorQueries(arr, queries)
    const expected = [16, 16, 16]
    expect(result).toStrictEqual(expected)
  })
})

describe('xor queries of a subarray test case 🏅', () => {
  it('should return the expected steps', () => {
    const arr = [1, 15, 8, 4]
    const queries: [number, number][] = [[2, 2], [0, 0], [0, 3], [1, 2]]
    const result = xorQueries(arr, queries)
    const expected = [8, 1, 2, 7]
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { arrayRankTransform } from './../../code/easy/01331-Rank-Transform-of-an-Array'

describe('rank transform of an array te st case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [40, 10, 20, 30]
    const result = arrayRankTransform(arr)
    const expected = [4, 1, 2, 3]
    expect(result).toStrictEqual(expected)
  })
})

describe('rank transform of an array test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [100, 100, 100]
    const result = arrayRankTransform(arr)
    const expected = [1, 1, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('rank transform of an array test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]
    const result = arrayRankTransform(arr)
    const expected = [5, 3, 4, 2, 8, 6, 7, 1, 3]
    expect(result).toStrictEqual(expected)
  })
})

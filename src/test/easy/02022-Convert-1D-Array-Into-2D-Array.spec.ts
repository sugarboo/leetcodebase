import { describe, expect, it } from 'vitest'
import { construct2DArray } from '../../code/easy/02022-Convert-1D-Array-Into-2D-Array'

describe('covert 1D array into 2D array test case 🥇', () => {
  it('should return the expected result', () => {
    const original = [1, 2, 3, 4]
    const m = 2
    const n = 2
    const result = construct2DArray(original, m, n)
    const expected = [[1, 2], [3, 4]]
    expect(result).toStrictEqual(expected)
  })
})

describe('covert 1D array into 2D array test case 🥈', () => {
  it('should return the expected result', () => {
    const original = [1, 2, 3]
    const m = 1
    const n = 3
    const result = construct2DArray(original, m, n)
    const expected = [[1, 2, 3]]
    expect(result).toStrictEqual(expected)
  })
})

describe('covert 1D array into 2D array test case 🥉', () => {
  it('should return the expected result', () => {
    const original = [1, 2]
    const m = 1
    const n = 1
    const result = construct2DArray(original, m, n)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

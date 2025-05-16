import { describe, expect, it } from 'vitest'
import { transformArray } from '../../code/easy/03467-transform-array-by-parity'

describe('transform array by parity test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [4, 3, 2, 1]
    const result = transformArray(nums)
    const expected = [0, 0, 1, 1]
    expect(result).toEqual(expected)
  })
})

describe('transform array by parity test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 5, 1, 4, 2]
    const result = transformArray(nums)
    const expected = [0, 0, 1, 1, 1]
    expect(result).toEqual(expected)
  })
})

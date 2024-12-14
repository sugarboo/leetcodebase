import { describe, expect, it } from 'vitest'
import { sortArrayByParity } from '../../code/easy/00905-Sort-Array-By-Parity'

describe('sort array by parity test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 1, 2, 4]
    const result = sortArrayByParity(nums)
    const expected = [2, 4, 3, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort array by parity test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [0]
    const result = sortArrayByParity(nums)
    const expected = [0]
    expect(result).toStrictEqual(expected)
  })
})

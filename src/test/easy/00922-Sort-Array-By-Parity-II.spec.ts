import { describe, expect, it } from 'vitest'
import { sortArrayByParityII } from '../../code/easy/00922-Sort-Array-By-Parity-II'

describe('sort array by parity II test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [4, 2, 5, 7]
    const result = sortArrayByParityII(nums)
    const expected = [4, 5, 2, 7]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort array by parity II test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 3]
    const result = sortArrayByParityII(nums)
    const expected = [2, 3]
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { getConcatenation } from '../../code/easy/01929-Concatenation-of-Array'

describe('concatenation of array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 1]
    const expected = [1, 2, 1, 1, 2, 1]
    const result = getConcatenation(nums)
    expect(result).toStrictEqual(expected)
  })
})

describe('concatenation of array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 2, 1]
    const expected = [1, 3, 2, 1, 1, 3, 2, 1]
    const result = getConcatenation(nums)
    expect(result).toStrictEqual(expected)
  })
})

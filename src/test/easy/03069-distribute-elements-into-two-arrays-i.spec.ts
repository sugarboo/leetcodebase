import { describe, expect, it } from 'vitest'
import { resultArray } from '../../code/easy/03069-distribute-elements-into-two-arrays-i'

describe('distribute elements into two arrays test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 3]
    const result = resultArray(nums)
    const expected = [2, 3, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('distribute elements into two arrays test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [5, 4, 3, 8]
    const result = resultArray(nums)
    const expected = [5, 3, 4, 8]
    expect(result).toStrictEqual(expected)
  })
})

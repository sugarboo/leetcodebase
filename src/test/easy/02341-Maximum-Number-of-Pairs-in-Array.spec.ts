import { describe, expect, it } from 'vitest'
import { numberOfPairs } from '../../code/easy/02341-Maximum-Number-of-Pairs-in-Array'

describe('maximum number of pairs in array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 2, 1, 3, 2, 2]
    const result = numberOfPairs(nums)
    const expected = [3, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('maximum number of pairs in array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1]
    const result = numberOfPairs(nums)
    const expected = [1, 0]
    expect(result).toStrictEqual(expected)
  })
})

describe('maximum number of pairs in array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [0]
    const result = numberOfPairs(nums)
    const expected = [0, 1]
    expect(result).toStrictEqual(expected)
  })
})

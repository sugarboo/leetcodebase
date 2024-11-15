import { describe, expect, it } from 'vitest'
import { shuffle } from '../../code/easy/01470-Shuffle-the-Array'

describe('shuffle the array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 5, 1, 3, 4, 7]
    const n = 3
    const result = shuffle(nums, n)
    const expected = [2, 3, 5, 4, 1, 7]
    expect(result).toStrictEqual(expected)
  })
})

describe('shuffle the array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 4, 3, 2, 1]
    const n = 4
    const result = shuffle(nums, n)
    const expected = [1, 4, 2, 3, 3, 2, 4, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('shuffle the array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 2, 2]
    const n = 2
    const result = shuffle(nums, n)
    const expected = [1, 2, 1, 2]
    expect(result).toStrictEqual(expected)
  })
})

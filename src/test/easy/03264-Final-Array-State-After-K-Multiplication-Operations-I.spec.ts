import { describe, expect, it } from 'vitest'
import { getFinalState } from '../../code/easy/03264-Final-Array-State-After-K-Multiplication-Operations-I'

describe('final array state after K multiplication operations I test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 3, 5, 6]
    const k = 5
    const multiplier = 2
    const result = getFinalState(nums, k, multiplier)
    const expected = [8, 4, 6, 5, 6]
    expect(result).toStrictEqual(expected)
  })
})

describe('final array state after K multiplication operations I test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2]
    const k = 3
    const multiplier = 4
    const result = getFinalState(nums, k, multiplier)
    const expected = [16, 8]
    expect(result).toStrictEqual(expected)
  })
})

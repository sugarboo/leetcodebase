import { describe, expect, it } from 'vitest'
import { leftRightDifference } from '../../code/easy/02574-Left-and-Right-Sum-Differences'

describe('left and right sum differences test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [10, 4, 8, 3]
    const result = leftRightDifference(nums)
    const expected = [15, 1, 11, 22]
    expect(result).toStrictEqual(expected)
  })
})

describe('left and right sum differences test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const result = leftRightDifference(nums)
    const expected = [0]
    expect(result).toStrictEqual(expected)
  })
})

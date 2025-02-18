import { describe, expect, it } from 'vitest'
import { runningSum } from '../../code/easy/01480-Running-Sum-of-1d-Array'

describe('running sum of 1d array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = runningSum(nums)
    const expected = [1, 3, 6, 10]
    expect(result).toStrictEqual(expected)
  })
})

describe('running sum of 1d array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1, 1]
    const result = runningSum(nums)
    const expected = [1, 2, 3, 4, 5]
    expect(result).toStrictEqual(expected)
  })
})

describe('running sum of 1d array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 1, 2, 10, 1]
    const result = runningSum(nums)
    const expected = [3, 4, 6, 16, 17]
    expect(result).toStrictEqual(expected)
  })
})

describe('running sum of 1d array test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = runningSum(nums)
    const expected = [1, 3, 6, 10, 15]
    expect(result).toStrictEqual(expected)
  })
})

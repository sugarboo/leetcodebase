import { describe, expect, it } from 'vitest'

import { twoSum } from '../code/easy/1-Two-Sum'

describe('Two-Sum Test Case 🥇', () => {
  it('should return the expected number array', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const expected = [0, 1]
    expect(twoSum(nums, target)).toStrictEqual(expected)
  })
})

describe('Two-Sum Test Case 🥈', () => {
  it('should return the expected number array', () => {
    const nums = [3, 2, 4]
    const target = 6
    const expected = [1, 2]
    expect(twoSum(nums, target)).toStrictEqual(expected)
  })
})

describe('Two-Sum Test Case 🥉', () => {
  it('should return the expected number array', () => {
    const nums = [3, 3]
    const target = 6
    const expected = [0, 1]
    expect(twoSum(nums, target)).toStrictEqual(expected)
  })
})
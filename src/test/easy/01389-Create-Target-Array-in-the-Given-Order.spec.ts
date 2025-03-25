import { describe, expect, it } from 'vitest'
import { createTargetArray } from '../../code/easy/01389-Create-Target-Array-in-the-Given-Order'

describe('create target array in the given order test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 2, 3, 4]
    const index = [0, 1, 2, 2, 1]
    const result = createTargetArray(nums, index)
    const expected = [0, 4, 1, 3, 2]
    expect(result).toEqual(expected)
  })
})

describe('create target array in the given order test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 0]
    const index = [0, 1, 2, 3, 0]
    const result = createTargetArray(nums, index)
    const expected = [0, 1, 2, 3, 4]
    expect(result).toEqual(expected)
  })
})

describe('create target array in the given order test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const index = [0]
    const result = createTargetArray(nums, index)
    const expected = [1]
    expect(result).toEqual(expected)
  })
})

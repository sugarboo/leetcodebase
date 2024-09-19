import { describe, expect, it } from 'vitest'
import { moveZeroes } from '../../code/easy/00283-Move-Zeroes'

describe('move zeroes test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [0, 1, 0, 3, 12]
    const expected = [1, 3, 12, 0, 0]
    const result = moveZeroes(nums)
    expect(result).toStrictEqual(expected)
  })
})

describe('move zeroes test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [0]
    const expected = [0]
    const result = moveZeroes(nums)
    expect(result).toStrictEqual(expected)
  })
})

describe('move zeroes test case 🥉', () => {
  it('should return the expected number', () => {
    const nums = [2, 1]
    const expected = [2, 1]
    const result = moveZeroes(nums)
    expect(result).toStrictEqual(expected)
  })
})

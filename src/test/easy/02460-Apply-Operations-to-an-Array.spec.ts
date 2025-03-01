import { describe, expect, it } from 'vitest'
import { applyOperations } from '../../code/easy/02460-Apply-Operations-to-an-Array'

describe('apply operations to an array test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [1, 2, 2, 1, 1, 0]
    const result = applyOperations(nums)
    const expected = [1, 4, 2, 0, 0, 0]
    expect(result).toStrictEqual(expected)
  })
})

describe('apply operations to an array test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [0, 1]
    const result = applyOperations(nums)
    const expected = [1, 0]
    expect(result).toStrictEqual(expected)
  })
})

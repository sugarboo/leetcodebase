import { describe, expect, it } from 'vitest'
import { buildArray } from '../../code/easy/01920-Build-Array-from-Permutation'

describe('build array from permutation test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 2, 1, 5, 3, 4]
    const expected = [0, 1, 2, 4, 5, 3]
    const result = buildArray(nums)
    expect(result).toStrictEqual(expected)
  })
})

describe('build array from permutation test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [5, 0, 1, 2, 3, 4]
    const expected = [4, 5, 0, 1, 2, 3]
    const result = buildArray(nums)
    expect(result).toStrictEqual(expected)
  })
})

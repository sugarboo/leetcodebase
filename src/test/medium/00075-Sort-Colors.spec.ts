import { describe, expect, it } from 'vitest'
import { sortColors } from '../../code/medium/00075-Sort-Colors'

describe('sort colors test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 0, 2, 1, 1, 0]
    const result = sortColors(nums)
    const expected = [0, 0, 1, 1, 2, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort colors test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 0, 1]
    const result = sortColors(nums)
    const expected = [0, 1, 2]
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { distinctAverages } from '../../code/easy/02465-Number-of-Distinct-Averages'

describe('number of distinct averages test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [4, 1, 4, 0, 3, 5]
    const result = distinctAverages(nums)
    const expected = 2
    expect(result).toStrictEqual(expected)
  })
})

describe('number of distinct averages test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [1, 100]
    const result = distinctAverages(nums)
    const expected = 1
    expect(result).toStrictEqual(expected)
  })
})

describe('number of distinct averages test case 🥉', () => {
  it('should return the expected number', () => {
    const nums = [10, 2, 2, 0, 4, 0]
    const result = distinctAverages(nums)
    const expected = 2
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { minimumAbsDifference } from '../../code/easy/01200-Minimum-Absolute-Difference'

describe('minimum absolute difference test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [4, 2, 1, 3]
    const result = minimumAbsDifference(arr)
    const expected = [[1, 2], [2, 3], [3, 4]]
    expect(result).toEqual(expected)
  })
})

describe('minimum absolute difference test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 3, 6, 10, 15]
    const result = minimumAbsDifference(arr)
    const expected = [[1, 3]]
    expect(result).toEqual(expected)
  })
})

describe('minimum absolute difference test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [3, 8, -10, 23, 19, -4, -14, 27]
    const result = minimumAbsDifference(arr)
    const expected = [[-14, -10], [19, 23], [23, 27]]
    expect(result).toEqual(expected)
  })
})

describe('minimum absolute difference test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = [40, 11, 26, 27, -20]
    const result = minimumAbsDifference(arr)
    const expected = [[26, 27]]
    expect(result).toEqual(expected)
  })
})

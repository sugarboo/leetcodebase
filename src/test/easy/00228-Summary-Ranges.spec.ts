import { describe, expect, it } from 'vitest'
import { summaryRanges } from '../../code/easy/00228-Summary-Ranges'

describe('summary range test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 2, 4, 5, 7]
    const result = summaryRanges(nums)
    const expected = ['0->2', '4->5', '7']
    expect(result).toStrictEqual(expected)
  })
})

describe('summary range test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [0, 2, 3, 4, 6, 8, 9]
    const result = summaryRanges(nums)
    const expected = ['0', '2->4', '6', '8->9']
    expect(result).toStrictEqual(expected)
  })
})

describe('summary range test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 6, 9]
    const result = summaryRanges(nums)
    const expected = ['1', '3', '6', '9']
    expect(result).toStrictEqual(expected)
  })
})

describe('summary range test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [3, 4, 5, 6, 7]
    const result = summaryRanges(nums)
    const expected = ['3->7']
    expect(result).toStrictEqual(expected)
  })
})

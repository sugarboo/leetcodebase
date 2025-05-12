import { describe, expect, it } from 'vitest'
import { findEvenNumbers } from '../../code/easy/02094-Finding-3-Digit-Even-Numbers'

describe('finding 3 digits even numbers test case 🥇', () => {
  it('should return the expected result', () => {
    const digits = [2, 1, 3, 0]
    const result = findEvenNumbers(digits)
    const expected = [102, 120, 130, 132, 210, 230, 302, 310, 312, 320]
    expect(result).toStrictEqual(expected)
  })
})

describe('finding 3 digits even numbers test case 🥈', () => {
  it('should return the expected result', () => {
    const digits = [2, 2, 8, 8, 2]
    const result = findEvenNumbers(digits)
    const expected = [222, 228, 282, 288, 822, 828, 882]
    expect(result).toStrictEqual(expected)
  })
})

describe('finding 3 digits even numbers test case 🥉', () => {
  it('should return the expected result', () => {
    const digits = [3, 7, 5]
    const result = findEvenNumbers(digits)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { titleToNumber } from '../../code/easy/00171-Excel-Sheet-Column-Number'

describe('excel sheet column number test case 🥇', () => {
  it('should return the expected result', () => {
    const columnNumber = 'A'
    const result = titleToNumber(columnNumber)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('excel sheet column number test case 🥈', () => {
  it('should return the expected result', () => {
    const columnNumber = 'AB'
    const result = titleToNumber(columnNumber)
    const expected = 28
    expect(result).toBe(expected)
  })
})

describe('excel sheet column number test case 🥉', () => {
  it('should return the expected result', () => {
    const columnNumber = 'ZY'
    const result = titleToNumber(columnNumber)
    const expected = 701
    expect(result).toBe(expected)
  })
})

describe('excel sheet column number test case 🏅', () => {
  it('should return the expected result', () => {
    const columnNumber = 'AZ'
    const result = titleToNumber(columnNumber)
    const expected = 52
    expect(result).toBe(expected)
  })
})

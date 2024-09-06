import { describe, expect, it } from 'vitest'
import { convertToTitle } from '../../code/easy/00168-Excel-Sheet-Column-Title'

describe('excel sheet column title test case 🥇', () => {
  it('should return the expected result', () => {
    const columnNumber = 1
    const result = convertToTitle(columnNumber)
    const expected = 'A'
    expect(result).toBe(expected)
  })
})

describe('excel sheet column title test case 🥈', () => {
  it('should return the expected result', () => {
    const columnNumber = 28
    const result = convertToTitle(columnNumber)
    const expected = 'AB'
    expect(result).toBe(expected)
  })
})

describe('excel sheet column title test case 🥉', () => {
  it('should return the expected result', () => {
    const columnNumber = 701
    const result = convertToTitle(columnNumber)
    const expected = 'ZY'
    expect(result).toBe(expected)
  })
})

describe('excel sheet column title test case 🏅', () => {
  it('should return the expected result', () => {
    const columnNumber = 52
    const result = convertToTitle(columnNumber)
    const expected = 'AZ'
    expect(result).toBe(expected)
  })
})

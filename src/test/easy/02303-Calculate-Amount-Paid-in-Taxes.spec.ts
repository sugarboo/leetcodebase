import { describe, expect, it } from 'vitest'
import { calculateTax } from '../../code/easy/02303-Calculate-Amount-Paid-in-Taxes'

describe('calculate amount paid in taxes test case 🥇', () => {
  it('should return the expected result', () => {
    const brackets = [[3, 50], [7, 10], [12, 25]]
    const income = 10
    const result = calculateTax(brackets, income)
    const expected = 2.65
    expect(result).toBe(expected)
  })
})

describe('calculate amount paid in taxes test case 🥈', () => {
  it('should return the expected result', () => {
    const brackets = [[1, 0], [4, 25], [5, 50]]
    const income = 2
    const result = calculateTax(brackets, income)
    const expected = 0.25
    expect(result).toBe(expected)
  })
})

describe('calculate amount paid in taxes test case 🥉', () => {
  it('should return the expected result', () => {
    const brackets = [[2, 50]]
    const income = 0
    const result = calculateTax(brackets, income)
    const expected = 0
    expect(result).toBe(expected)
  })
})

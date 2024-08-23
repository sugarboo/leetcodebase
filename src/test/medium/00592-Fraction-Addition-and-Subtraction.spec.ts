import { describe, expect, it } from 'vitest'
import { fractionAddition } from '../../code/medium/00592-Fraction-Addition-and-Subtraction'

describe('fraction addition and subtraction test case 🥇', () => {
  it('should return the expected result', () => {
    const expression = '-1/2+1/2'
    const result = fractionAddition(expression)
    const expected = '0/1'
    expect(result).toBe(expected)
  })
})

describe('fraction addition and subtraction test case 🥈', () => {
  it('should return the expected result', () => {
    const expression = '-1/2+1/2+1/3'
    const result = fractionAddition(expression)
    const expected = '1/3'
    expect(result).toBe(expected)
  })
})

describe('fraction addition and subtraction test case 🥉', () => {
  it('should return the expected result', () => {
    const expression = '1/3-1/2'
    const result = fractionAddition(expression)
    const expected = '-1/6'
    expect(result).toBe(expected)
  })
})

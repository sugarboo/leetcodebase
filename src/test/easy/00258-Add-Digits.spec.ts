import { describe, expect, it } from 'vitest'
import { addDigits } from '../../code/easy/00258-Add-Digits'

describe('add digits test case 🥇', () => {
  it('should return the expected number', () => {
    expect(addDigits(38)).toBe(2)
  })
})

describe('add digits test case 🥈', () => {
  it('should return the expected number', () => {
    expect(addDigits(0)).toBe(0)
  })
})

describe('add digits test case 🥉', () => {
  it('should return the expected number', () => {
    expect(addDigits(123456789)).toBe(9)
  })
})

describe('add digits test case 🏅', () => {
  it('should return the expected number', () => {
    expect(addDigits(222222)).toBe(3)
  })
})

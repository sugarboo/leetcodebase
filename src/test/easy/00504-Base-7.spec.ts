import { describe, expect, it } from 'vitest'
import { convertToBase7 } from '../../code/easy/00504-Base-7'

describe('base 7 test case 🥇', () => {
  it('should return the expected result', () => {
    expect(convertToBase7(100)).toBe('202')
  })
})

describe('base 7 test case 🥈', () => {
  it('should return the expected result', () => {
    expect(convertToBase7(-7)).toBe('-10')
  })
})

describe('base 7 test case 🥉', () => {
  it('should return the expected result', () => {
    expect(convertToBase7(2401)).toBe('10000')
  })
})

describe('base 7 test case 🏅', () => {
  it('should return the expected result', () => {
    expect(convertToBase7(-74486)).toBe('-430106')
  })
})

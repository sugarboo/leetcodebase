import { describe, expect, it } from 'vitest'
import { addStrings } from '../../code/easy/00415-Add-Strings'

describe('add string test case 🥇', () => {
  it('should return the expected result', () => {
    const num1 = '11'
    const num2 = '123'
    const result = addStrings(num1, num2)
    const expected = '134'
    expect(result).toBe(expected)
  })
})

describe('add string test case 🥈', () => {
  it('should return the expected result', () => {
    const num1 = '456'
    const num2 = '77'
    const result = addStrings(num1, num2)
    const expected = '533'
    expect(result).toBe(expected)
  })
})

describe('add string test case 🥉', () => {
  it('should return the expected result', () => {
    const num1 = '0'
    const num2 = '0'
    const result = addStrings(num1, num2)
    const expected = '0'
    expect(result).toBe(expected)
  })
})

describe('add string test case 🏅', () => {
  it('should return the expected result', () => {
    const num1 = '3876620623801494171'
    const num2 = '6529364523802684779'
    const result = addStrings(num1, num2)
    const expected = '10405985147604178950'
    expect(result).toBe(expected)
  })
})

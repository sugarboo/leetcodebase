import { describe, expect, it } from 'vitest'
import { removeDigit } from '../../code/easy/02259-Remove-Digit-From-Number-to-Maximize-Result'

describe('remove digit from number to maximize result test case 🥇', () => {
  it('should return the expected result', () => {
    const number = '123'
    const digit = '3'
    const result = removeDigit(number, digit)
    const expected = '12'
    expect(result).toBe(expected)
  })
})

describe('remove digit from number to maximize result test case 🥈', () => {
  it('should return the expected result', () => {
    const number = '1231'
    const digit = '1'
    const result = removeDigit(number, digit)
    const expected = '231'
    expect(result).toBe(expected)
  })
})

describe('remove digit from number to maximize result test case 🥉', () => {
  it('should return the expected result', () => {
    const number = '551'
    const digit = '5'
    const result = removeDigit(number, digit)
    const expected = '51'
    expect(result).toBe(expected)
  })
})

describe('remove digit from number to maximize result test case 🏅', () => {
  it('should return the expected result', () => {
    const number = '2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471'
    const digit = '3'
    const result = removeDigit(number, digit)
    const expected = '299858953917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471'
    expect(result).toBe(expected)
  })
})

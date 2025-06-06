import { describe, expect, it } from 'vitest'
import { reformatNumber } from '../../code/easy/01694-Reformat-Phone-Number'

describe('reformat phone number test case 🥇', () => {
  it('should return the expected result', () => {
    const number = '1-23-45 6'
    const result = reformatNumber(number)
    const expected = '123-456'
    expect(result).toBe(expected)
  })
})

describe('reformat phone number test case 🥈', () => {
  it('should return the expected result', () => {
    const number = '123 4-567'
    const result = reformatNumber(number)
    const expected = '123-45-67'
    expect(result).toBe(expected)
  })
})

describe('reformat phone number test case 🥉', () => {
  it('should return the expected result', () => {
    const number = '123 4-5678'
    const result = reformatNumber(number)
    const expected = '123-456-78'
    expect(result).toBe(expected)
  })
})

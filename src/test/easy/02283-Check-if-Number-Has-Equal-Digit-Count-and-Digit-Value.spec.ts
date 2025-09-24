import { describe, expect, it } from 'vitest'
import { digitCount } from '../../code/easy/02283-Check-if-Number-Has-Equal-Digit-Count-and-Digit-Value'

describe('check if number has equal digit count and digit value test case 🥇', () => {
  it('should return the expected result', () => {
    const num = '1210'
    const result = digitCount(num)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if number has equal digit count and digit value test case 🥈', () => {
  it('should return the expected result', () => {
    const num = '030'
    const result = digitCount(num)
    const expected = false
    expect(result).toBe(expected)
  })
})

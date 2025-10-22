import { describe, expect, it } from 'vitest'
import { largestGoodInteger } from '../../code/easy/02264-Largest-3-Same-Digit-Number-in-String'

describe('largest 3-same-digit number in string test case 🥇', () => {
  it('should return the expected result', () => {
    const num = '6777133339'
    const result = largestGoodInteger(num)
    const expected = '777'
    expect(result).toBe(expected)
  })
})

describe('largest 3-same-digit number in string test case 🥈', () => {
  it('should return the expected result', () => {
    const num = '2300019'
    const result = largestGoodInteger(num)
    const expected = '000'
    expect(result).toBe(expected)
  })
})

describe('largest 3-same-digit number in string test case 🥉', () => {
  it('should return the expected result', () => {
    const num = '42352338'
    const result = largestGoodInteger(num)
    const expected = ''
    expect(result).toBe(expected)
  })
})

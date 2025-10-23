import { describe, expect, it } from 'vitest'
import { hasSameDigits } from '../../code/easy/03461-Check-If-Digits-Are-Equal-in-String-After-Operations-I'

describe('check if digits are equal in string after operations test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '3902'
    const result = hasSameDigits(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if digits are equal in string after operations test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '34789'
    const result = hasSameDigits(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

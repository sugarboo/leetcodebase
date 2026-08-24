import { describe, expect, it } from 'vitest'
import { checkDivisibility } from '../../code/easy/03622-check-divisibility-by-digit-sum-and-product'

describe('check divisibility by digit sum and product test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 99
    const result = checkDivisibility(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check divisibility by digit sum and product test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 23
    const result = checkDivisibility(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

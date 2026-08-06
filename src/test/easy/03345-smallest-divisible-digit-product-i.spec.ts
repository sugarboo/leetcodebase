import { describe, expect, it } from 'vitest'
import { smallestNumber } from '../../code/easy/03345-smallest-divisible-digit-product-i'

describe('smallest divisible digit product I test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 10
    const t = 2
    const result = smallestNumber(n, t)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('smallest divisible digit product I test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 15
    const t = 3
    const result = smallestNumber(n, t)
    const expected = 16
    expect(result).toBe(expected)
  })
})

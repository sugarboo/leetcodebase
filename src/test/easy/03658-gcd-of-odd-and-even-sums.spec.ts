import { describe, expect, it } from 'vitest'
import { gcdOfOddEvenSums } from '../../code/easy/03658-gcd-of-odd-and-even-sums'

describe('gcd of odd and even sums test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = gcdOfOddEvenSums(n)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('gcd of odd and even sums test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 5
    const result = gcdOfOddEvenSums(n)
    const expected = 5
    expect(result).toBe(expected)
  })
})

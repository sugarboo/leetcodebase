import { describe, expect, it } from 'vitest'
import { sumOfMultiples } from '../../code/easy/02652-Sum-Multiples'

describe('sum multiples test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 7
    const result = sumOfMultiples(n)
    const expected = 21
    expect(result).toBe(expected)
  })
})

describe('sum multiples test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 10
    const result = sumOfMultiples(n)
    const expected = 40
    expect(result).toBe(expected)
  })
})

describe('sum multiples test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 9
    const result = sumOfMultiples(n)
    const expected = 30
    expect(result).toBe(expected)
  })
})

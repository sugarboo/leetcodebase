import { describe, expect, it } from 'vitest'
import { nthUglyNumber } from '../../code/medium/00264-Ugly-Number-II'

describe('ugly number II test case 🥇', () => {
  it('should return the expected number', () => {
    const n = 10
    const result = nthUglyNumber(n)
    const expected = 12
    expect(result).toBe(expected)
  })
})

describe('ugly number II test case 🥈', () => {
  it('should return the expected number', () => {
    const n = 1
    const result = nthUglyNumber(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

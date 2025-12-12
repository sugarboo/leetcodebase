import { describe, expect, it } from 'vitest'
import { commonFactors } from '../../code/easy/02427-Number-of-Common-Factors'

describe('number of common factors test case 🥇', () => {
  it('should return the expected result', () => {
    const a = 12
    const b = 6
    const result = commonFactors(a, b)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('number of common factors test case 🥈', () => {
  it('should return the expected result', () => {
    const a = 25
    const b = 30
    const result = commonFactors(a, b)
    const expected = 2
    expect(result).toBe(expected)
  })
})

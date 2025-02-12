import { describe, expect, it } from 'vitest'
import { subtractProductAndSum } from './../../code/easy/01281-Subtract-the-Product-and-Sum-of-Digits-of-an-Integer'

describe('subtract product and sum of digits of an integer test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 234
    const result = subtractProductAndSum(n)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('subtract product and sum of digits of an integer test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 4421
    const result = subtractProductAndSum(n)
    const expected = 21
    expect(result).toBe(expected)
  })
})

describe('subtract product and sum of digits of an integer test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 114
    const result = subtractProductAndSum(n)
    const expected = -2
    expect(result).toBe(expected)
  })
})

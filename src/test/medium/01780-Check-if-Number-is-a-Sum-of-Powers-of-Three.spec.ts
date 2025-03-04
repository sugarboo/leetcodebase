import { describe, expect, it } from 'vitest'
import { checkPowersOfThree } from '../../code/medium/01780-Check-if-Number-is-a-Sum-of-Powers-of-Three'

describe('check if number is a sum of powers of three test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 12
    const result = checkPowersOfThree(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if number is a sum of powers of three test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 91
    const result = checkPowersOfThree(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if number is a sum of powers of three test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 21
    const result = checkPowersOfThree(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

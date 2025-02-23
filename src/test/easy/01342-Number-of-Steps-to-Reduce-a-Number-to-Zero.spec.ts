import { describe, expect, it } from 'vitest'
import { numberOfSteps } from './../../code/easy/01342-Number-of-Steps-to-Reduce-a-Number-to-Zero'

describe('number of steps to reduce a number to zero test case 🥇', () => {
  it('should return the expected result', () => {
    const num = 14
    const result = numberOfSteps(num)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('number of steps to reduce a number to zero test case 🥈', () => {
  it('should return the expected result', () => {
    const num = 8
    const result = numberOfSteps(num)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('number of steps to reduce a number to zero test case 🥉', () => {
  it('should return the expected result', () => {
    const num = 123
    const result = numberOfSteps(num)
    const expected = 12
    expect(result).toBe(expected)
  })
})

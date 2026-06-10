import { describe, expect, it } from 'vitest'
import { totalWaviness } from '../../code/medium/03751-total-waviness-of-numbers-in-range-i'

describe('total waviness of numbers in range I test case 🥇', () => {
  it('should return the expected result', () => {
    const num1 = 120
    const num2 = 130
    const result = totalWaviness(num1, num2)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('total waviness of numbers in range I test case 🥈', () => {
  it('should return the expected result', () => {
    const num1 = 198
    const num2 = 202
    const result = totalWaviness(num1, num2)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('total waviness of numbers in range I test case 🥉', () => {
  it('should return the expected result', () => {
    const num1 = 4848
    const num2 = 4848
    const result = totalWaviness(num1, num2)
    const expected = 2
    expect(result).toBe(expected)
  })
})

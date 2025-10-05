import { describe, expect, it } from 'vitest'
import { countEven } from '../../code/easy/02180-Count-Integers-With-Even-Digit-Sum'

describe('count integers with even digit sum test case 🥇', () => {
  it('should return the expected result', () => {
    const num = 4
    const result = countEven(num)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count integers with even digit sum test case 🥈', () => {
  it('should return the expected result', () => {
    const num = 30
    const result = countEven(num)
    const expected = 14
    expect(result).toBe(expected)
  })
})

describe('count integers with even digit sum test case 🥉', () => {
  it('should return the expected result', () => {
    const num = 100
    const result = countEven(num)
    const expected = 49
    expect(result).toBe(expected)
  })
})

describe('count integers with even digit sum test case 🏅', () => {
  it('should return the expected result', () => {
    const num = 1000
    const result = countEven(num)
    const expected = 499
    expect(result).toBe(expected)
  })
})

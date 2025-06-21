import { describe, expect, it } from 'vitest'
import { countBalls } from '../../code/easy/01742-Maximum-Number-of-Balls-in-a-Box'

describe('maximum number of balls in a box test case 🥇', () => {
  it('should return the expected result', () => {
    const lowLimit = 1
    const highLimit = 10
    const result = countBalls(lowLimit, highLimit)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('maximum number of balls in a box test case 🥈', () => {
  it('should return the expected result', () => {
    const lowLimit = 5
    const highLimit = 15
    const result = countBalls(lowLimit, highLimit)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('maximum number of balls in a box test case 🥉', () => {
  it('should return the expected result', () => {
    const lowLimit = 19
    const highLimit = 28
    const result = countBalls(lowLimit, highLimit)
    const expected = 2
    expect(result).toBe(expected)
  })
})

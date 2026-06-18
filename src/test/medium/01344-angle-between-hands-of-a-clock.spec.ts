import { describe, expect, it } from 'vitest'
import { angleClock } from '../../code/medium/01344-angle-between-hands-of-a-clock'

describe('angle between hands of a clock test case 🥇', () => {
  it('should return the expected result', () => {
    const hour = 12
    const minutes = 30
    const result = angleClock(hour, minutes)
    const expected = 165
    expect(result).toBe(expected)
  })
})

describe('angle between hands of a clock test case 🥈', () => {
  it('should return the expected result', () => {
    const hour = 3
    const minutes = 30
    const result = angleClock(hour, minutes)
    const expected = 75
    expect(result).toBe(expected)
  })
})

describe('angle between hands of a clock test case 🥉', () => {
  it('should return the expected result', () => {
    const hour = 3
    const minutes = 15
    const result = angleClock(hour, minutes)
    const expected = 7.5
    expect(result).toBe(expected)
  })
})

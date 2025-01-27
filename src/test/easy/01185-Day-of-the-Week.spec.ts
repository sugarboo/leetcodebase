import { describe, expect, it } from 'vitest'
import { dayOfTheWeek } from '../../code/easy/01185-Day-of-the-Week'

describe('day of the year test case 🥇', () => {
  it('should return the expected result', () => {
    const day = 31
    const month = 8
    const year = 2019
    const result = dayOfTheWeek(day, month, year)
    const expected = 'Saturday'
    expect(result).toBe(expected)
  })
})

describe('day of the week test case 🥈', () => {
  it('should return the expected result', () => {
    const day = 18
    const month = 7
    const year = 1999
    const result = dayOfTheWeek(day, month, year)
    const expected = 'Sunday'
    expect(result).toBe(expected)
  })
})

describe('day of the week test case 🥉', () => {
  it('should return the expected result', () => {
    const day = 15
    const month = 8
    const year = 1993
    const result = dayOfTheWeek(day, month, year)
    const expected = 'Sunday'
    expect(result).toBe(expected)
  })
})

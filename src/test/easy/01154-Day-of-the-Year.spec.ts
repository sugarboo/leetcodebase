import { describe, expect, it } from 'vitest'
import { dayOfYear } from '../../code/easy/01154-Day-of-the-Year'

describe('day of the year test case 🥇', () => {
  it('should return the expected result', () => {
    const date = '2019-01-09'
    const result = dayOfYear(date)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('day of the year test case 🥈', () => {
  it('should return the expected result', () => {
    const date = '2019-02-10'
    const result = dayOfYear(date)
    const expected = 41
    expect(result).toBe(expected)
  })
})

describe('day of the year test case 🥉', () => {
  it('should return the expected result', () => {
    const date = '2019-03-01'
    const result = dayOfYear(date)
    const expected = 60
    expect(result).toBe(expected)
  })
})

describe('day of the year test case 🏅', () => {
  it('should return the expected result', () => {
    const date = '2020-12-31'
    const result = dayOfYear(date)
    const expected = 366
    expect(result).toBe(expected)
  })
})

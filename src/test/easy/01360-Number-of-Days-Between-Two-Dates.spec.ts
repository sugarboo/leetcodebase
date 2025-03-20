import { describe, expect, it } from 'vitest'
import { daysBetweenDates } from '../../code/easy/01360-Number-of-Days-Between-Two-Dates'

describe('number of days between two dates test case 🥇', () => {
  it('should return the expected result', () => {
    const date1 = '2019-06-29'
    const date2 = '2019-06-30'
    const result = daysBetweenDates(date1, date2)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('number of days between two dates test case 🥈', () => {
  it('should return the expected result', () => {
    const date1 = '2020-01-15'
    const date2 = '2019-12-31'
    const result = daysBetweenDates(date1, date2)
    const expected = 15
    expect(result).toBe(expected)
  })
})

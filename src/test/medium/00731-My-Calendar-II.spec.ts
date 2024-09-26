import { describe, expect, it } from 'vitest'
import { MyCalendarTwo } from '../../code/medium/00731-My-Calendar-II'

describe('my calendar II test case 🥇', () => {
  it('should return the expected result', () => {
    const calendar = new MyCalendarTwo()
    expect(calendar.book(10, 20)).toBe(true)
    expect(calendar.book(50, 60)).toBe(true)
    expect(calendar.book(10, 40)).toBe(true)
    expect(calendar.book(5, 15)).toBe(false)
    expect(calendar.book(5, 10)).toBe(true)
    expect(calendar.book(25, 55)).toBe(true)
  })
})

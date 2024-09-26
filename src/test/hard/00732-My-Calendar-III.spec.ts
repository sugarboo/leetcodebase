import { describe, expect, it } from 'vitest'
import { MyCalendarThree } from '../../code/hard/00732-My-Calendar-III'

describe('my calendar III test case 🥇', () => {
  it('should return the expected result', () => {
    const calendar = new MyCalendarThree()
    expect(calendar.book(10, 20)).toBe(1)
    expect(calendar.book(50, 60)).toBe(1)
    expect(calendar.book(10, 40)).toBe(2)
    expect(calendar.book(5, 15)).toBe(3)
    expect(calendar.book(5, 10)).toBe(3)
    expect(calendar.book(25, 55)).toBe(3)
  })
})

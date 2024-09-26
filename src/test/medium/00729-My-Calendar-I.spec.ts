import { describe, expect, it } from 'vitest'
import { MyCalendar } from '../../code/medium/00729-My-Calendar-I'

describe('my calendar I test case 🥇', () => {
  it('should return the expected result', () => {
    const calendar = new MyCalendar()
    expect(calendar.book(10, 20)).toBe(true)
    expect(calendar.book(15, 25)).toBe(false)
    expect(calendar.book(20, 30)).toBe(true)
  })
})

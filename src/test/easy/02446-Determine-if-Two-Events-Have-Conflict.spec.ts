import { describe, expect, it } from 'vitest'
import { haveConflict } from '../../code/easy/02446-Determine-if-Two-Events-Have-Conflict'

describe('determine if two events have conflict test case 🥇', () => {
  it('should return the expected result', () => {
    const event1 = ['01:15', '02:00']
    const event2 = ['02:00', '03:00']
    const result = haveConflict(event1, event2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('determine if two events have conflict test case 🥈', () => {
  it('should return the expected result', () => {
    const event1 = ['01:00', '02:00']
    const event2 = ['01:20', '03:00']
    const result = haveConflict(event1, event2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('determine if two events have conflict test case 🥉', () => {
  it('should return the expected result', () => {
    const event1 = ['10:00', '11:00']
    const event2 = ['14:00', '15:00']
    const result = haveConflict(event1, event2)
    const expected = false
    expect(result).toBe(expected)
  })
})

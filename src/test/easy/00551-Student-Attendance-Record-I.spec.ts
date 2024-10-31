import { describe, expect, it } from 'vitest'
import { checkRecord } from '../../code/easy/00551-Student-Attendance-Record-I'

describe('student attendance record I test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'PPALLP'
    const result = checkRecord(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('student attendance record I test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'PPALLL'
    const result = checkRecord(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('student attendance record I test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'PPAALLPP'
    const result = checkRecord(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('student attendance record I test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'LPLPLPLPLPL'
    const result = checkRecord(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

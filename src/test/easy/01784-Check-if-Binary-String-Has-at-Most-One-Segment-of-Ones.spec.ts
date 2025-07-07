import { describe, expect, it } from 'vitest'
import { checkOnesSegment } from '../../code/easy/01784-Check-if-Binary-String-Has-at-Most-One-Segment-of-Ones'

describe('check if binary string has at most one segment of ones test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '1001'
    const result = checkOnesSegment(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if binary string has at most one segment of ones test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '110'
    const result = checkOnesSegment(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if binary string has at most one segment of ones test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '11101'
    const result = checkOnesSegment(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if binary string has at most one segment of ones test case 🏅', () => {
  it('should return the expected result', () => {
    const s = '1'
    const result = checkOnesSegment(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if binary string has at most one segment of ones test case 🏆', () => {
  it('should return the expected result', () => {
    const s = '10'
    const result = checkOnesSegment(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

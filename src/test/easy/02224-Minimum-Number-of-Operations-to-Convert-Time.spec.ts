import { describe, expect, it } from 'vitest'
import { convertTime } from '../../code/easy/02224-Minimum-Number-of-Operations-to-Convert-Time'

describe('minimum number of operations to convert time test case 🥇', () => {
  it('should return the expected number', () => {
    const current = '02:30'
    const correct = '04:35'
    const result = convertTime(current, correct)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to convert time test case 🥈', () => {
  it('should return the expected number', () => {
    const current = '02:30'
    const correct = '03:20'
    const result = convertTime(current, correct)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to convert time test case 🥉', () => {
  it('should return the expected number', () => {
    const current = '02:30'
    const correct = '03:35'
    const result = convertTime(current, correct)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to convert time test case 🏅', () => {
  it('should return the expected number', () => {
    const current = '09:41'
    const correct = '10:34'
    const result = convertTime(current, correct)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to convert time test case 🏆', () => {
  it('should return the expected number', () => {
    const current = '13:55'
    const correct = '15:13'
    const result = convertTime(current, correct)
    const expected = 5
    expect(result).toBe(expected)
  })
})

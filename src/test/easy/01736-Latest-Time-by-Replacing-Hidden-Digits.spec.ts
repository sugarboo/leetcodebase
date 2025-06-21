import { describe, expect, it } from 'vitest'
import { maximumTime } from '../../code/easy/01736-Latest-Time-by-Replacing-Hidden-Digits'

describe('latest time by replacing hidden digits test case 🥇', () => {
  it('should return the expected result', () => {
    const time = '2?:?0'
    const result = maximumTime(time)
    const expected = '23:50'
    expect(result).toBe(expected)
  })
})

describe('latest time by replacing hidden digits test case 🥈', () => {
  it('should return the expected result', () => {
    const time = '0?:3?'
    const result = maximumTime(time)
    const expected = '09:39'
    expect(result).toBe(expected)
  })
})

describe('latest time by replacing hidden digits test case 🥉', () => {
  it('should return the expected result', () => {
    const time = '1?:22'
    const result = maximumTime(time)
    const expected = '19:22'
    expect(result).toBe(expected)
  })
})

describe('latest time by replacing hidden digits test case 🏅', () => {
  it('should return the expected result', () => {
    const time = '?4:03'
    const result = maximumTime(time)
    const expected = '14:03'
    expect(result).toBe(expected)
  })
})

describe('latest time by replacing hidden digits test case 🏆', () => {
  it('should return the expected result', () => {
    const time = '??:3?'
    const result = maximumTime(time)
    const expected = '23:39'
    expect(result).toBe(expected)
  })
})

describe('latest time by replacing hidden digits test case 🌧️', () => {
  it('should return the expected result', () => {
    const time = '??:??'
    const result = maximumTime(time)
    const expected = '23:59'
    expect(result).toBe(expected)
  })
})

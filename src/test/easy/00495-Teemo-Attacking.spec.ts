import { describe, expect, it } from 'vitest'
import { findPoisonedDuration } from '../../code/easy/00495-Teemo-Attacking'

describe('teemo attacking test case 🥇', () => {
  it('should return the expected result', () => {
    const timeSeries = [1, 4]
    const duration = 2
    const result = findPoisonedDuration(timeSeries, duration)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('teemo attacking test case 🥈', () => {
  it('should return the expected result', () => {
    const timeSeries = [1, 2]
    const duration = 2
    const result = findPoisonedDuration(timeSeries, duration)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('teemo attacking test case 🥉', () => {
  it('should return the expected result', () => {
    const timeSeries = [1, 2, 6]
    const duration = 2
    const result = findPoisonedDuration(timeSeries, duration)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('teemo attacking test case 🏅', () => {
  it('should return the expected result', () => {
    const timeSeries = [1, 3, 6, 10, 15]
    const duration = 5
    const result = findPoisonedDuration(timeSeries, duration)
    const expected = 19
    expect(result).toBe(expected)
  })
})

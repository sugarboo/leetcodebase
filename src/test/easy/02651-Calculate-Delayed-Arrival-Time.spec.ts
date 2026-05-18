import { describe, expect, it } from 'vitest'
import { findDelayedArrivalTime } from '../../code/easy/02651-Calculate-Delayed-Arrival-Time'

describe('calculate delayed arrival time test case 🥇', () => {
  it('should return the expected result', () => {
    const arrivalTime = 15
    const delayedTime = 5
    const result = findDelayedArrivalTime(arrivalTime, delayedTime)
    const expected = 20
    expect(result).toBe(expected)
  })
})

describe('calculate delayed arrival time test case 🥈', () => {
  it('should return the expected result', () => {
    const arrivalTime = 13
    const delayedTime = 11
    const result = findDelayedArrivalTime(arrivalTime, delayedTime)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('calculate delayed arrival time test case 🥉', () => {
  it('should return the expected result', () => {
    const arrivalTime = 14
    const delayedTime = 11
    const result = findDelayedArrivalTime(arrivalTime, delayedTime)
    const expected = 1
    expect(result).toBe(expected)
  })
})

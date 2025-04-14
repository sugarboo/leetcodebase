import { describe, expect, it } from 'vitest'
import { busyStudent } from '../../code/easy/01450-Number-of-Students-Doing-Homework-at-a-Given-Time'

describe('busy student test case 🥇', () => {
  it('should return the expected result', () => {
    const startTime = [1, 2, 3]
    const endTime = [3, 2, 7]
    const queryTime = 4
    const result = busyStudent(startTime, endTime, queryTime)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('busy student test case 🥈', () => {
  it('should return the expected result', () => {
    const startTime = [4]
    const endTime = [4]
    const queryTime = 4
    const result = busyStudent(startTime, endTime, queryTime)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('busy student test case 🥉', () => {
  it('should return the expected result', () => {
    const startTime = [4]
    const endTime = [4]
    const queryTime = 5
    const result = busyStudent(startTime, endTime, queryTime)
    const expected = 0
    expect(result).toBe(expected)
  })
})

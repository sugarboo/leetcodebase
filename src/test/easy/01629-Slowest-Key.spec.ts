import { describe, expect, it } from 'vitest'
import { slowestKey } from '../../code/easy/01629-Slowest-Key'

describe('slowest key test case 🥇', () => {
  it('should return the expected result', () => {
    const releaseTimes = [9, 29, 49, 50]
    const keysPressed = 'cbcd'
    const result = slowestKey(releaseTimes, keysPressed)
    const expected = 'c'
    expect(result).toBe(expected)
  })
})

describe('slowest key test case 🥈', () => {
  it('should return the expected result', () => {
    const releaseTimes = [12, 23, 36, 46, 62]
    const keysPressed = 'spuda'
    const result = slowestKey(releaseTimes, keysPressed)
    const expected = 'a'
    expect(result).toBe(expected)
  })
})

describe('slowest key test case 🥉', () => {
  it('should return the expected result', () => {
    const releaseTimes = [1, 2]
    const keysPressed = 'ab'
    const result = slowestKey(releaseTimes, keysPressed)
    const expected = 'b'
    expect(result).toBe(expected)
  })
})

describe('slowest key test case 🏅', () => {
  it('should return the expected result', () => {
    const releaseTimes = [1, 2, 3, 4, 5]
    const keysPressed = 'abcde'
    const result = slowestKey(releaseTimes, keysPressed)
    const expected = 'e'
    expect(result).toBe(expected)
  })
})

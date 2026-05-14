import { describe, expect, it } from 'vitest'
import { isGood } from '../../code/easy/02784-Check-if-Array-is-Good'

describe('check if array is good test case 🥇', () => {
  it('should return the expected result', () => {
    const num = [2, 1, 3]
    const result = isGood(num)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if array is good test case 🥈', () => {
  it('should return the expected result', () => {
    const num = [1, 3, 3, 2]
    const result = isGood(num)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if array is good test case 🥉', () => {
  it('should return the expected result', () => {
    const num = [1, 1]
    const result = isGood(num)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if array is good test case 🏅', () => {
  it('should return the expected result', () => {
    const num = [3, 4, 4, 1, 2, 1]
    const result = isGood(num)
    const expected = false
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { putMarbles } from '../../code/hard/02551-Put-Marbles-in-Bags'

describe('put marbles in bags test case 🥇', () => {
  it('should return the expected result', () => {
    const weights = [1, 3, 5, 1]
    const k = 2
    const result = putMarbles(weights, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('put marbles in bags test case 🥈', () => {
  it('should return the expected result', () => {
    const weights = [1, 3]
    const k = 2
    const result = putMarbles(weights, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

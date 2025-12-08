import { describe, expect, it } from 'vitest'
import { countOdds } from '../../code/easy/01523-Count-Odd-Numbers-in-an-Interval-Range'

describe('count odds test case 🥇', () => {
  it('should return the expected result', () => {
    const low = 3
    const high = 7
    const result = countOdds(low, high)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count odds test case 🥈', () => {
  it('should return the expected result', () => {
    const low = 8
    const high = 10
    const result = countOdds(low, high)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count odds test case 🥉', () => {
  it('should return the expected result', () => {
    const low = 3
    const high = 8
    const result = countOdds(low, high)
    const expected = 3
    expect(result).toBe(expected)
  })
})

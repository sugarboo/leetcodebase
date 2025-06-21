import { describe, expect, it } from 'vitest'
import { largestAltitude } from '../../code/easy/01732-Find-the-Highest-Altitude'

describe('find the highest altitude test case 🥇', () => {
  it('should return the expected result', () => {
    const gain = [-5, 1, 5, 0, -7]
    const result = largestAltitude(gain)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find the highest altitude test case 🥈', () => {
  it('should return the expected result', () => {
    const gain = [-4, -3, -2, -1, 4, 3, 2]
    const result = largestAltitude(gain)
    const expected = 0
    expect(result).toBe(expected)
  })
})

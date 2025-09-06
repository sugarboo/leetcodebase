import { describe, expect, it } from 'vitest'
import { countPoints } from '../../code/easy/02103-Rings-and-Rods'

describe('rings and pods test case 🥇', () => {
  it('should return the expected result', () => {
    const rings = 'B0B6G0R6R0R6G9'
    const result = countPoints(rings)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('rings and pods test case 🥈', () => {
  it('should return the expected result', () => {
    const rings = 'B0R0G0R9R0B0G0'
    const result = countPoints(rings)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('rings and pods test case 🥉', () => {
  it('should return the expected result', () => {
    const rings = 'G4'
    const result = countPoints(rings)
    const expected = 0
    expect(result).toBe(expected)
  })
})

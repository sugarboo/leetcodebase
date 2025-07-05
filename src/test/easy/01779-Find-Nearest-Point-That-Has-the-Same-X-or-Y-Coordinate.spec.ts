import { describe, expect, it } from 'vitest'
import { nearestValidPoint } from '../../code/easy/01779-Find-Nearest-Point-That-Has-the-Same-X-or-Y-Coordinate'

describe('find nearest point that has the same x or y coordinate test case 🥇', () => {
  it('should return the expected result', () => {
    const x = 3
    const y = 4
    const points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]
    const result = nearestValidPoint(x, y, points)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find nearest point that has the same x or y coordinate test case 🥈', () => {
  it('should return the expected result', () => {
    const x = 3
    const y = 4
    const points = [[3, 4]]
    const result = nearestValidPoint(x, y, points)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('find nearest point that has the same x or y coordinate test case 🥉', () => {
  it('should return the expected result', () => {
    const x = 3
    const y = 4
    const points = [[2, 3]]
    const result = nearestValidPoint(x, y, points)
    const expected = -1
    expect(result).toBe(expected)
  })
})

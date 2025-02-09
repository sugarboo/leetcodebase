import { describe, expect, it } from 'vitest'
import { minTimeToVisitAllPoints } from './../../code/easy/01266-Minimum-Time-Visiting-All-Points'

describe('minimum time visiting all points test case 🥇', () => {
  it('should return the expected result', () => {
    const points = [[1, 1], [3, 4], [-1, 0]]
    const result = minTimeToVisitAllPoints(points)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('minimum time visiting all points test case 🥈', () => {
  it('should return the expected result', () => {
    const points = [[3, 2], [-2, 2]]
    const result = minTimeToVisitAllPoints(points)
    const expected = 5
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { resultPoints } from '../../code/medium/01937-Maximum-Number-of-Points-with-Cost'

describe('maximum number of points with cost test case 🥇', () => {
  it('should return the expected score', () => {
    const points = [[1, 2, 3], [1, 5, 1], [3, 1, 1]]
    const result = resultPoints(points)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('maximum number of points with cost test case 🥈', () => {
  it('should return the expected score', () => {
    const points = [[1, 5], [2, 3], [4, 2]]
    const result = resultPoints(points)
    const expected = 11
    expect(result).toBe(expected)
  })
})

describe('maximum number of points with cost test case 🥉', () => {
  it('should return the expected score', () => {
    const points = [[0, 3, 0, 4, 2], [5, 4, 2, 4, 1], [5, 0, 0, 5, 1], [2, 0, 1, 0, 3]]
    const result = resultPoints(points)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('maximum number of points with cost test case 🏅', () => {
  it('should return the expected score', () => {
    const points = [[2, 4, 0, 5, 5], [0, 5, 4, 2, 5], [2, 0, 2, 3, 1], [3, 0, 5, 5, 2]]
    const result = resultPoints(points)
    const expected = 17
    expect(result).toBe(expected)
  })
})

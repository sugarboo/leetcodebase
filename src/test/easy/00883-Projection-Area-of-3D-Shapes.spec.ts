import { describe, expect, it } from 'vitest'
import { projectionArea } from '../../code/easy/00883-Projection-Area-of-3D-Shapes'

describe('projection area of 3D shapes test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[1, 2], [3, 4]]
    const result = projectionArea(grid)
    const expected = 17
    expect(result).toBe(expected)
  })
})

describe('projection area of 3D shapes test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[2]]
    const result = projectionArea(grid)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('projection area of 3D shapes test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [[1, 0], [0, 2]]
    const result = projectionArea(grid)
    const expected = 8
    expect(result).toBe(expected)
  })
})

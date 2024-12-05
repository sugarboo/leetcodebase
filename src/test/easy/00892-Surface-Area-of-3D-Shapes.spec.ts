import { describe, expect, it } from 'vitest'
import { surfaceArea } from '../../code/easy/00892-Surface-Area-of-3D-Shapes'

describe('surface area of 3D shapes test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[1, 2], [3, 4]]
    const result = surfaceArea(grid)
    const expected = 34
    expect(result).toBe(expected)
  })
})

describe('surface area of 3D shapes test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
    const result = surfaceArea(grid)
    const expected = 32
    expect(result).toBe(expected)
  })
})

describe('surface area of 3D shapes test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [[2, 2, 2], [2, 1, 2], [2, 2, 2]]
    const result = surfaceArea(grid)
    const expected = 46
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { islandPerimeter } from '../../code/easy/00463-Island-Perimeter'

describe('island perimeter test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
    const result = islandPerimeter(grid)
    const expected = 16
    expect(result).toBe(expected)
  })
})

describe('island perimeter test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[1]]
    const result = islandPerimeter(grid)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('island perimeter test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [[1, 0]]
    const result = islandPerimeter(grid)
    const expected = 4
    expect(result).toBe(expected)
  })
})

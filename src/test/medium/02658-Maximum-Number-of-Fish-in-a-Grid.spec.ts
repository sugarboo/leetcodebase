import { describe, expect, it } from 'vitest'
import { findMaxFish } from '../../code/medium/02658-Maximum-Number-of-Fish-in-a-Grid'

describe('find the maximum number of fish in a grid test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [
      [0, 2, 1, 0],
      [4, 0, 0, 3],
      [1, 0, 0, 4],
      [0, 3, 2, 0],
    ]
    const result = findMaxFish(grid)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('find the maximum number of fish in a grid test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]
    const result = findMaxFish(grid)
    const expected = 1
    expect(result).toBe(expected)
  })
})

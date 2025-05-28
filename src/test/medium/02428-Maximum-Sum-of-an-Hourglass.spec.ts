import { describe, expect, it } from 'vitest'
import { maxSum } from '../../code/medium/02428-Maximum-Sum-of-an-Hourglass'

describe('maximum sum of an hourglass test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [
      [6, 2, 1, 3],
      [4, 2, 1, 5],
      [9, 2, 8, 7],
      [4, 1, 2, 9],
    ]
    const result = maxSum(grid)
    expect(result).toBe(30)
  })
})

describe('maximum sum of an hourglass test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const result = maxSum(grid)
    expect(result).toBe(35)
  })
})

describe('maximum sum of an hourglass test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]
    const result = maxSum(grid)
    expect(result).toBe(7)
  })
})

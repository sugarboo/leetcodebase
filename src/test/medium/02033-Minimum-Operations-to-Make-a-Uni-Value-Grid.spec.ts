import { describe, expect, it } from 'vitest'
import { minOperations } from '../../code/medium/02033-Minimum-Operations-to-Make-a-Uni-Value-Grid'

describe('minimum operations to make a uni value grid test case 🥇', () => {
  it('should return the expected array', () => {
    const grid = [[2, 4], [6, 8]]
    const x = 2
    const result = minOperations(grid, x)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make a uni value grid test case 🥈', () => {
  it('should return the expected array', () => {
    const grid = [[1, 5], [2, 3]]
    const x = 1
    const result = minOperations(grid, x)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make a uni value grid test case 🥉', () => {
  it('should return the expected array', () => {
    const grid = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
    const x = 1
    const result = minOperations(grid, x)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make a uni value grid test case 🏅', () => {
  it('should return the expected array', () => {
    const grid = [[1, 2], [3, 4]]
    const x = 2
    const result = minOperations(grid, x)
    const expected = -1
    expect(result).toBe(expected)
  })
})

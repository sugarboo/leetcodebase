import { describe, expect, it } from 'vitest'
import { largestTriangleArea } from '../../code/easy/00812-Largest-Triangle-Area'

describe('largest triangle area test case 🥇', () => {
  it('should return the expected result', () => {
    const points = [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]
    const result = largestTriangleArea(points)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('largest triangle area test case 🥈', () => {
  it('should return the expected result', () => {
    const points = [[1, 0], [0, 0], [0, 1]]
    const result = largestTriangleArea(points)
    const expected = 0.5
    expect(result).toBe(expected)
  })
})

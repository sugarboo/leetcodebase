import { describe, expect, it } from 'vitest'
import { maxWidthOfVerticalArea } from '../../code/easy/01637-Widest-Vertical-Area-Between-Two-Points-Containing-No-Points'

describe('largest substring between two equal characters test case 🥇', () => {
  it('should return the expected result', () => {
    const points = [[8, 7], [9, 9], [7, 4], [9, 7]]
    const result = maxWidthOfVerticalArea(points)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🥈', () => {
  it('should return the expected result', () => {
    const points = [[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]
    const result = maxWidthOfVerticalArea(points)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🥉', () => {
  it('should return the expected result', () => {
    const points = [[1, 1], [1, 3], [3, 1], [3, 3], [2, 2]]
    const result = maxWidthOfVerticalArea(points)
    const expected = 1
    expect(result).toBe(expected)
  })
})

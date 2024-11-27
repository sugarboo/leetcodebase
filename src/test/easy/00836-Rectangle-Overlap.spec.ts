import { describe, expect, it } from 'vitest'
import { isRectangleOverlap } from '../../code/easy/00836-Rectangle-Overlap'

describe('rectangle overlap test case 🥇', () => {
  it('should return the expected result', () => {
    const rec1 = [0, 0, 2, 2]
    const rec2 = [1, 1, 3, 3]
    const result = isRectangleOverlap(rec1, rec2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('rectangle overlap test case 🥈', () => {
  it('should return the expected result', () => {
    const rec1 = [0, 0, 1, 1]
    const rec2 = [1, 0, 2, 1]
    const result = isRectangleOverlap(rec1, rec2)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('rectangle overlap test case 🥉', () => {
  it('should return the expected result', () => {
    const rec1 = [0, 0, 1, 1]
    const rec2 = [2, 2, 3, 3]
    const result = isRectangleOverlap(rec1, rec2)
    const expected = false
    expect(result).toBe(expected)
  })
})

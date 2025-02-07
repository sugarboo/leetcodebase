import { describe, expect, it } from 'vitest'
import { checkStraightLine } from '../../code/easy/01232-Check-If-It-Is-a-Straight-Line'

describe('check if it is a straight line test case 🥇', () => {
  it('should return the expected result', () => {
    const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
    const result = checkStraightLine(coordinates)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if it is a straight line test case 🥈', () => {
  it('should return the expected result', () => {
    const coordinates = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]
    const result = checkStraightLine(coordinates)
    const expected = false
    expect(result).toBe(expected)
  })
})

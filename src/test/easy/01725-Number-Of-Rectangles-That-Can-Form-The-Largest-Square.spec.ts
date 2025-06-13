import { describe, expect, it } from 'vitest'
import { countGoodRectangles } from '../../code/easy/01725-Number-Of-Rectangles-That-Can-Form-The-Largest-Square'

describe('number of rectangles that can form the largest square test case 🥇', () => {
  it('should return the expected result', () => {
    const rectangles = [[5, 8], [3, 9], [5, 12], [16, 5]]
    const result = countGoodRectangles(rectangles)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('number of rectangles that can form the largest square test case 🥈', () => {
  it('should return the expected result', () => {
    const rectangles = [[2, 3], [3, 7], [4, 3], [3, 7]]
    const result = countGoodRectangles(rectangles)
    const expected = 3
    expect(result).toBe(expected)
  })
})

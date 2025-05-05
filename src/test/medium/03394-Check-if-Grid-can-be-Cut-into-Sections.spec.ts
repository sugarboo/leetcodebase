import { describe, expect, it } from 'vitest'
import { checkValidCuts } from '../../code/medium/03394-Check-if-Grid-can-be-Cut-into-Sections'

describe('check if grid can be cut into sections test case 🥇', () => {
  it('should return the expected result', async () => {
    const n = 5
    const rectangles = [[1, 0, 5, 2], [0, 2, 2, 4], [3, 2, 5, 3], [0, 4, 4, 5]]
    const result = checkValidCuts(n, rectangles)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if grid can be cut into sections test case 🥈', () => {
  it('should return the expected result', async () => {
    const n = 4
    const rectangles = [[0, 0, 1, 1], [2, 0, 3, 4], [0, 2, 2, 3], [3, 0, 4, 3]]
    const result = checkValidCuts(n, rectangles)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if grid can be cut into sections test case 🥉', () => {
  it('should return the expected result', async () => {
    const n = 4
    const rectangles = [[0, 2, 2, 4], [1, 0, 3, 2], [2, 2, 3, 4], [3, 0, 4, 2], [3, 2, 4, 4]]
    const result = checkValidCuts(n, rectangles)
    const expected = false
    expect(result).toBe(expected)
  })
})

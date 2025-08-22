import { describe, expect, it } from 'vitest'
import { minimumArea } from '../../code/medium/03195-Find-the-Minimum-Area-to-Cover-All-Ones-I'

describe('find the minimum area to cover all ones I test case 🥇', () => {
  it('should return the expected result', async () => {
    const grid = [
      [0, 1, 0],
      [1, 0, 1],
    ]
    const result = minimumArea(grid)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('find the minimum area to cover all ones I test case 🥈', () => {
  it('should return the expected result', async () => {
    const grid = [
      [1, 0],
      [0, 0],
    ]
    const result = minimumArea(grid)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find the minimum area to cover all ones I test case 🥉', () => {
  it('should return the expected result', async () => {
    const grid = [
      [0],
      [1],
    ]
    const result = minimumArea(grid)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find the minimum area to cover all ones I test case 🏅', () => {
  it('should return the expected result', async () => {
    const grid = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    const result = minimumArea(grid)
    const expected = 1
    expect(result).toBe(expected)
  })
})

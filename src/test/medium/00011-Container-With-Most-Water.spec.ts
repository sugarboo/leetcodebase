import { describe, expect, it } from 'vitest'
import { maxArea } from '../../code/medium/00011-Container-With-Most-Water'

describe('container with most water test case 🥇', () => {
  it('should return the expected result', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    const result = maxArea(height)
    const expected = 49
    expect(result).toBe(expected)
  })
})

describe('container with most water test case 🥈', () => {
  it('should return the expected result', () => {
    const height = [1, 1]
    const result = maxArea(height)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('container with most water test case 🥉', () => {
  it('should return the expected result', () => {
    const height = [4, 3, 2, 1, 4]
    const result = maxArea(height)
    const expected = 16
    expect(result).toBe(expected)
  })
})

describe('container with most water test case 🏅', () => {
  it('should return the expected result', () => {
    const height = [1, 2, 1]
    const result = maxArea(height)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('container with most water test case 🏆', () => {
  it('should return the expected result', () => {
    const height = [2, 3, 4, 5, 18, 17, 6]
    const result = maxArea(height)
    const expected = 17
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { generatePascalTriangle } from '../../code/easy/00118-Pascal-Triangle'

describe('pascal triangle test case 🥇', () => {
  it('should return the expected matrix', () => {
    const result = generatePascalTriangle(5)
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]
    expect(result).toStrictEqual(expected)
  })
})

describe('pascal triangle test case 🥈', () => {
  it('should return the expected matrix', () => {
    const result = generatePascalTriangle(1)
    const expected = [
      [1],
    ]
    expect(result).toStrictEqual(expected)
  })
})

describe('pascal triangle test case 🥉', () => {
  it('should return the expected matrix', () => {
    const result = generatePascalTriangle(6)
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
    ]
    expect(result).toStrictEqual(expected)
  })
})

describe('pascal triangle test case 🏅', () => {
  it('should return the expected matrix', () => {
    const result = generatePascalTriangle(7)
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
    ]
    expect(result).toStrictEqual(expected)
  })
})

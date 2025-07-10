import { describe, expect, it } from 'vitest'
import { squareIsWhite } from '../../code/easy/01812-Determine-Color-of-a-Chessboard-Square'

describe('determine color of a chessboard square test case 🥇', () => {
  it('should return the expected result', () => {
    const coordinates = 'a1'
    const result = squareIsWhite(coordinates)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('determine color of a chessboard square test case 🥈', () => {
  it('should return the expected result', () => {
    const coordinates = 'h3'
    const result = squareIsWhite(coordinates)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('determine color of a chessboard square test case 🥉', () => {
  it('should return the expected result', () => {
    const coordinates = 'c7'
    const result = squareIsWhite(coordinates)
    const expected = false
    expect(result).toBe(expected)
  })
})

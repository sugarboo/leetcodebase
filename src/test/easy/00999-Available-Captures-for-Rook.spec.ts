import { describe, expect, it } from 'vitest'
import { numRookCaptures } from '../../code/easy/00999-Available-Captures-for-Rook'

describe('available captures for rook test case 🥇', () => {
  it('should return the expected result', () => {
    const board = [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', 'R', '.', '.', '.', 'p'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
    ]
    const result = numRookCaptures(board)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('available captures for rook test case 🥈', () => {
  it('should return the expected result', () => {
    const board = [
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
      ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
      ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
      ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
      ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
    ]
    const result = numRookCaptures(board)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('available captures for rook test case 🥉', () => {
  it('should return the expected result', () => {
    const board = [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'B', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
    ]
    const result = numRookCaptures(board)
    const expected = 3
    expect(result).toBe(expected)
  })
})

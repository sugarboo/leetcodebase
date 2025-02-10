import { describe, expect, it } from 'vitest'
import { tictactoe } from './../../code/easy/01275-Find-Winner-on-a-Tic-Tac-Toe-Game'

describe('find winner on a tic tac toe game test case 🥇', () => {
  it('should return the expected result', () => {
    const moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]
    const result = tictactoe(moves)
    const expected = 'A'
    expect(result).toBe(expected)
  })
})

describe('find winner on a tic tac toe game test case 🥈', () => {
  it('should return the expected result', () => {
    const moves = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]
    const result = tictactoe(moves)
    const expected = 'B'
    expect(result).toBe(expected)
  })
})

describe('find winner on a tic tac toe game test case 🥉', () => {
  it('should return the expected result', () => {
    const moves = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]
    const result = tictactoe(moves)
    const expected = 'Draw'
    expect(result).toBe(expected)
  })
})

describe('find winner on a tic tac toe game test case 🏅', () => {
  it('should return the expected result', () => {
    const moves = [[0, 0], [1, 1]]
    const result = tictactoe(moves)
    const expected = 'Pending'
    expect(result).toBe(expected)
  })
})

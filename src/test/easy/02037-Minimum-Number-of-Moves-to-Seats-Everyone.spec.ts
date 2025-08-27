import { describe, expect, it } from 'vitest'
import { minMovesToSeat } from '../../code/easy/02037-Minimum-Number-of-Moves-to-Seats-Everyone'

describe('minimum number of moves to seats everyone test case 🥇', () => {
  it('should return the expected result', () => {
    const seats = [3, 1, 5]
    const students = [2, 7, 4]
    const result = minMovesToSeat(seats, students)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('minimum number of moves to seats everyone test case 🥈', () => {
  it('should return the expected result', () => {
    const seats = [4, 1, 5, 9]
    const students = [1, 3, 2, 6]
    const result = minMovesToSeat(seats, students)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('minimum number of moves to seats everyone test case 🥉', () => {
  it('should return the expected result', () => {
    const seats = [2, 2, 6, 6]
    const students = [1, 3, 2, 6]
    const result = minMovesToSeat(seats, students)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('minimum number of moves to seats everyone test case 🏅', () => {
  it('should return the expected result', () => {
    const seats = [12, 14, 19, 19, 12]
    const students = [19, 20, 12, 14, 19]
    const result = minMovesToSeat(seats, students)
    const expected = 8
    expect(result).toBe(expected)
  })
})

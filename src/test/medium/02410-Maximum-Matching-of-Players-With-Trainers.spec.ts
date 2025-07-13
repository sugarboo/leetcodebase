import { describe, expect, it } from 'vitest'
import { matchPlayersAndTrainers } from '../../code/medium/02410-Maximum-Matching-of-Players-With-Trainers'

describe('maximum matching of players with trainers test case 🥇', () => {
  it('should return the expected result', () => {
    const players = [4, 7, 9]
    const trainers = [8, 2, 5, 8]
    const result = matchPlayersAndTrainers(players, trainers)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('maximum matching of players with trainers test case 🥈', () => {
  it('should return the expected result', () => {
    const players = [1, 1, 1]
    const trainers = [10]
    const result = matchPlayersAndTrainers(players, trainers)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('maximum matching of players with trainers test case 🥉', () => {
  it('should return the expected result', () => {
    const players = [1, 1000000000]
    const trainers = [1000000000, 1]
    const result = matchPlayersAndTrainers(players, trainers)
    const expected = 2
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { furthestDistanceFromOrigin } from '../../code/easy/02833-Furthest-Point-From-Origin'

describe('furthest distance from origin test case 🥇', () => {
  it('should return the expected result', () => {
    const moves = 'L_RL__R'
    const result = furthestDistanceFromOrigin(moves)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('furthest distance from origin test case 🥈', () => {
  it('should return the expected result', () => {
    const moves = '_R__LL_'
    const result = furthestDistanceFromOrigin(moves)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('furthest distance from origin test case 🥉', () => {
  it('should return the expected result', () => {
    const moves = '_______'
    const result = furthestDistanceFromOrigin(moves)
    const expected = 7
    expect(result).toBe(expected)
  })
})

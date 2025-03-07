import { describe, expect, it } from 'vitest'
import { mostVisited } from '../../code/easy/01560-Most-Visited-Sector-in-a-Circular-Track'

describe('thousand separator test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 4
    const rounds = [1, 3, 1, 2]
    const result = mostVisited(n, rounds)
    const expected = [1, 2]
    expect(result).toEqual(expected)
  })
})

describe('thousand separator test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 2
    const rounds = [2, 1, 2, 1, 2, 1, 2, 1, 2]
    const result = mostVisited(n, rounds)
    const expected = [2]
    expect(result).toEqual(expected)
  })
})

describe('thousand separator test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 7
    const rounds = [1, 3, 5, 7]
    const result = mostVisited(n, rounds)
    const expected = [1, 2, 3, 4, 5, 6, 7]
    expect(result).toEqual(expected)
  })
})

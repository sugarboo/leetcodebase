import { describe, expect, it } from 'vitest'
import { numberOfPairs } from '../../code/medium/03025-Find-The-Number-of-Ways-to-Place-People-I'

describe('find the number of ways to place people i test case 🥇', () => {
  it('should return the expected result', async () => {
    const points = [[1, 1], [2, 2], [3, 3]]
    const result = numberOfPairs(points)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('find the number of ways to place people i test case 🥈', () => {
  it('should return the expected result', async () => {
    const points = [[6, 2], [4, 4], [2, 6]]
    const result = numberOfPairs(points)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find the number of ways to place people i test case 🥉', () => {
  it('should return the expected result', async () => {
    const points = [[3, 1], [1, 3], [1, 1]]
    const result = numberOfPairs(points)
    const expected = 2
    expect(result).toBe(expected)
  })
})

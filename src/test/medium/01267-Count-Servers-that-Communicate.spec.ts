import { describe, expect, it } from 'vitest'
import { countServers } from '../../code/medium/01267-Count-Servers-that-Communicate'

describe('count servers that communicate test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[1, 0], [0, 1]]
    const result = countServers(grid)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count servers that communicate test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[1, 0], [1, 1]]
    const result = countServers(grid)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count servers that communicate test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    const result = countServers(grid)
    const expected = 4
    expect(result).toBe(expected)
  })
})

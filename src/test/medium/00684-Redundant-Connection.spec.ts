import { describe, expect, it } from 'vitest'
import { findRedundantConnection } from '../../code/medium/00684-Redundant-Connection'

describe('redundant connection test case 🥇', () => {
  it('should return the expected result', () => {
    const edges = [[1, 2], [1, 3], [2, 3]]
    const result = findRedundantConnection(edges)
    const expected = [2, 3]
    expect(result).toEqual(expected)
  })
})

describe('redundant connection test case 🥈', () => {
  it('should return the expected result', () => {
    const edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
    const result = findRedundantConnection(edges)
    const expected = [1, 4]
    expect(result).toEqual(expected)
  })
})

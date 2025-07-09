import { describe, expect, it } from 'vitest'
import { findCenter } from '../../code/easy/01791-Find-Center-of-Star-Graph'

describe('find center of star graph test case 🥇', () => {
  it('should return the expected result', () => {
    const edges = [[1, 2], [2, 3], [4, 2]]
    const result = findCenter(edges)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find center of star graph test case 🥈', () => {
  it('should return the expected result', () => {
    const edges = [[1, 2], [5, 1], [1, 3], [1, 4]]
    const result = findCenter(edges)
    const expected = 1
    expect(result).toBe(expected)
  })
})

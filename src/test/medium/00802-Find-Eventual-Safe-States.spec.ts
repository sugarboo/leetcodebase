import { describe, expect, it } from 'vitest'
import { eventualSafeNodes } from '../../code/medium/00802-Find-Eventual-Safe-States'

describe('find eventual safe states test case 🥇', () => {
  it('should return the expected result', () => {
    const graph = [[1, 2], [2, 3], [5], [0], [5], [], []]
    const result = eventualSafeNodes(graph)
    const expected = [2, 4, 5, 6]
    expect(result).toEqual(expected)
  })
})

describe('find eventual safe states test case 🥈', () => {
  it('should return the expected result', () => {
    const graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]
    const result = eventualSafeNodes(graph)
    const expected = [4]
    expect(result).toEqual(expected)
  })
})

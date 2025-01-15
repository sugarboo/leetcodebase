import { describe, expect, it } from 'vitest'
import { allCellsDistOrder } from '../../code/easy/01030-Matrix-Cells-in-Distance-Order'

describe('matrix cells in distance order test case 🥇', () => {
  it('should return the expected result', () => {
    const rows = 1
    const cols = 2
    const rCenter = 0
    const cCenter = 0
    const result = allCellsDistOrder(rows, cols, rCenter, cCenter)
    const expected = [[0, 0], [0, 1]]
    expect(result).toEqual(expected)
  })
})

describe('matrix cells in distance order test case 🥈', () => {
  it('should return the expected result', () => {
    const rows = 2
    const cols = 2
    const rCenter = 0
    const cCenter = 1
    const result = allCellsDistOrder(rows, cols, rCenter, cCenter)
    const expected = [[0, 1], [1, 1], [0, 0], [1, 0]]
    expect(result).toEqual(expected)
  })
})

describe('matrix cells in distance order test case 🥉', () => {
  it('should return the expected result', () => {
    const rows = 2
    const cols = 3
    const rCenter = 1
    const cCenter = 2
    const result = allCellsDistOrder(rows, cols, rCenter, cCenter)
    const expected = [[1, 2], [0, 2], [1, 1], [0, 1], [1, 0], [0, 0]]
    expect(result).toEqual(expected)
  })
})

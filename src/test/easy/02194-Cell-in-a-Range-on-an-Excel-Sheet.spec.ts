import { describe, expect, it } from 'vitest'
import { cellsInRange } from '../../code/easy/02194-Cell-in-a-Range-on-an-Excel-Sheet'

describe('cell in a range on an excel sheet test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'K1:L2'
    const result = cellsInRange(s)
    const expected = ['K1', 'K2', 'L1', 'L2']
    expect(result).toStrictEqual(expected)
  })
})

describe('cell in a range on an excel sheet test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'A1:F1'
    const result = cellsInRange(s)
    const expected = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1']
    expect(result).toStrictEqual(expected)
  })
})

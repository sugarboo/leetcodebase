import { describe, expect, it } from 'vitest'
import { NumArray } from '../../code/easy/00303-Range-Sum-Query-Immutable'

describe('range sum query immutable test case 🥇', () => {
  it('should return the expected result', () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
    expect(numArray.sumRange(0, 2)).toBe(1)
    expect(numArray.sumRange(2, 5)).toBe(-1)
    expect(numArray.sumRange(0, 5)).toBe(-3)
  })
})

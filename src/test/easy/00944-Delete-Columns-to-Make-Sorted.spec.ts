import { describe, expect, it } from 'vitest'
import { minDeletionSize } from '../../code/easy/00944-Delete-Columns-to-Make-Sorted'

describe('delete columns to make sorted test case 🥇', () => {
  it('should return the expected result', () => {
    const strs = ['cba', 'daf', 'ghi']
    const result = minDeletionSize(strs)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('delete columns to make sorted test case 🥈', () => {
  it('should return the expected result', () => {
    const strs = ['a', 'b']
    const result = minDeletionSize(strs)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('delete columns to make sorted test case 🥉', () => {
  it('should return the expected result', () => {
    const strs = ['zyx', 'wvu', 'tsr']
    const result = minDeletionSize(strs)
    const expected = 3
    expect(result).toBe(expected)
  })
})

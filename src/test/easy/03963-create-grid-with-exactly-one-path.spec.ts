import { describe, expect, it } from 'vitest'
import { createGrid } from '../../code/easy/03963-create-grid-with-exactly-one-path'

describe('create grid with exactly one path test case 🥇', () => {
  it('should return the expected result', () => {
    const m = 2
    const n = 3
    const result = createGrid(m, n)
    const expected = ['...', '##.']
    expect(result).toStrictEqual(expected)
  })
})

describe('create grid with exactly one path test case 🥈', () => {
  it('should return the expected result', () => {
    const m = 3
    const n = 3
    const result = createGrid(m, n)
    const expected = ['...', '##.', '##.']
    expect(result).toStrictEqual(expected)
  })
})

describe('create grid with exactly one path test case 🥉', () => {
  it('should return the expected result', () => {
    const m = 1
    const n = 4
    const result = createGrid(m, n)
    const expected = ['....']
    expect(result).toStrictEqual(expected)
  })
})

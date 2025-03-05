import { describe, expect, it } from 'vitest'
import { coloredCells } from '../../code/medium/02579-Count-Total-Number-of-Colored-Cells'

describe('count total number of colored cells test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 1
    const result = coloredCells(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count total number of colored cells test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 3
    const result = coloredCells(n)
    const expected = 13
    expect(result).toBe(expected)
  })
})

describe('count total number of colored cells test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 1000
    const result = coloredCells(n)
    const expected = 1998001
    expect(result).toBe(expected)
  })
})

describe('count total number of colored cells test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 9999
    const result = coloredCells(n)
    const expected = 199940005
    expect(result).toBe(expected)
  })
})

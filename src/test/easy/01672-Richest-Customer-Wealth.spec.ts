import { describe, expect, it } from 'vitest'
import { maximumWealth } from '../../code/easy/01672-Richest-Customer-Wealth'

describe('richest customer wealth test case 🥇', () => {
  it('should return the expected result', () => {
    const accounts = [[1, 2, 3], [3, 2, 1]]
    const result = maximumWealth(accounts)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('richest customer wealth test case 🥈', () => {
  it('should return the expected result', () => {
    const accounts = [[1, 5], [7, 3], [3, 5]]
    const result = maximumWealth(accounts)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('richest customer wealth test case 🥉', () => {
  it('should return the expected result', () => {
    const accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]
    const result = maximumWealth(accounts)
    const expected = 17
    expect(result).toBe(expected)
  })
})

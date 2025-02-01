import { describe, expect, it } from 'vitest'
import { minCostToMoveChips } from '../../code/easy/01217-Minimum-Cost-to-Move-Chips-to-The-Same-Position'

describe('minimum cost to move chips to the same position test case 🥇', () => {
  it('should return the expected result', () => {
    const position = [1, 2, 3]
    const result = minCostToMoveChips(position)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum cost to move chips to the same position test case 🥈', () => {
  it('should return the expected result', () => {
    const position = [2, 2, 2, 3, 3]
    const result = minCostToMoveChips(position)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum cost to move chips to the same position test case 🥉', () => {
  it('should return the expected result', () => {
    const position = [1, 1000000000]
    const result = minCostToMoveChips(position)
    const expected = 1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { waysToBuyPensPencils } from '../../code/medium/02240-Number-of-Ways-to-Buy-Pens-and-Pencils'

describe('number of ways to buy pens and pencils test case 🥇', () => {
  it('should return the expected result', () => {
    const total = 20
    const cost1 = 10
    const cost2 = 5
    const result = waysToBuyPensPencils(total, cost1, cost2)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('number of ways to buy pens and pencils test case 🥈', () => {
  it('should return the expected result', () => {
    const total = 5
    const cost1 = 10
    const cost2 = 10
    const result = waysToBuyPensPencils(total, cost1, cost2)
    const expected = 1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { minimumRecolors } from '../../code/easy/02379-Minimum-Recolors-to-Get-K-Consecutive-Black-Blocks'

describe('minimum recolors to get k consecutive black blocks test case 🥇', () => {
  it('should return the expected number', () => {
    const blocks = 'WBBWWBBWBW'
    const k = 7
    const result = minimumRecolors(blocks, k)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum recolors to get k consecutive black blocks test case 🥈', () => {
  it('should return the expected number', () => {
    const blocks = 'WBWBBBW'
    const k = 2
    const result = minimumRecolors(blocks, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

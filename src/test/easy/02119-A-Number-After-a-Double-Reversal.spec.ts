import { describe, expect, it } from 'vitest'
import { isSameAfterReversals } from '../../code/easy/02119-A-Number-After-a-Double-Reversal'

describe('a number after a double reversal test case 🥇', () => {
  it('should return the expected result', () => {
    const num = 526
    const result = isSameAfterReversals(num)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('a number after a double reversal test case 🥈', () => {
  it('should return the expected result', () => {
    const num = 1800
    const result = isSameAfterReversals(num)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('a number after a double reversal test case 🥉', () => {
  it('should return the expected result', () => {
    const num = 0
    const result = isSameAfterReversals(num)
    const expected = true
    expect(result).toBe(expected)
  })
})

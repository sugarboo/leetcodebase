import { describe, expect, it } from 'vitest'
import { minSteps } from '../../code/medium/00650-2-Keys-Keyboard'

describe('2 keys keyboard test case 🥇', () => {
  it('should return the expected steps', () => {
    const n = 3
    const result = minSteps(n)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('2 keys keyboard test case 🥈', () => {
  it('should return the expected steps', () => {
    const n = 1
    const result = minSteps(n)
    const expected = 0
    expect(result).toBe(expected)
  })
})

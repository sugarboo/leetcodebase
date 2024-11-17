import { describe, expect, it } from 'vitest'
import { theMaximumAchievableX } from '../../code/easy/02769-Find-the-Maximum-Achievable-Number'

describe('find the maximum achievable number test case 🥇', () => {
  it('should return the expected result', () => {
    const num = 4
    const t = 1
    const result = theMaximumAchievableX(num, t)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('find the maximum achievable number test case 🥈', () => {
  it('should return the expected result', () => {
    const num = 3
    const t = 2
    const result = theMaximumAchievableX(num, t)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('find the maximum achievable number test case 🥉', () => {
  it('should return the expected result', () => {
    const num = 50
    const t = 50
    const result = theMaximumAchievableX(num, t)
    const expected = 150
    expect(result).toBe(expected)
  })
})

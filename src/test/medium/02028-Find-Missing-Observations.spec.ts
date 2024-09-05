import { describe, expect, it } from 'vitest'
import { missingRolls } from '../../code/medium/02028-Find-Missing-Observations'

describe('find missing observations test case 🥇', () => {
  it('should return the expected array', () => {
    const rolls = [3, 2, 4, 3]
    const mean = 4
    const n = 2
    const result = missingRolls(rolls, mean, n)
    const expected = [6, 6]
    expect(result).toStrictEqual(expected)
  })
})

describe('find missing observations test case 🥈', () => {
  it('should return the expected array', () => {
    const rolls = [1, 5, 6]
    const mean = 3
    const n = 4
    const result = missingRolls(rolls, mean, n)
    const expected = [3, 2, 2, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('find missing observations test case 🥉', () => {
  it('should return the expected array', () => {
    const rolls = [1, 2, 3, 4]
    const mean = 6
    const n = 4
    const result = missingRolls(rolls, mean, n)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { numberOfArrays } from '../../code/medium/02145-Count-the-Hidden-Sequences'

describe('count the hidden sequences test case 🥇', () => {
  it('should return the expected result', () => {
    const differences = [1, -3, 4]
    const lower = 1
    const upper = 6
    const expected = 2
    const result = numberOfArrays(differences, lower, upper)
    expect(result).toBe(expected)
  })
})

describe('count the hidden sequences test case 🥈', () => {
  it('should return the expected result', () => {
    const differences = [3, -4, 5, 1, -2]
    const lower = -4
    const upper = 5
    const expected = 4
    const result = numberOfArrays(differences, lower, upper)
    expect(result).toBe(expected)
  })
})

describe('count the hidden sequences test case 🥉', () => {
  it('should return the expected result', () => {
    const differences = [4, -7, 2]
    const lower = 3
    const upper = 6
    const expected = 0
    const result = numberOfArrays(differences, lower, upper)
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { plusOne } from '../../code/easy/00066-Plus-One'

describe('plus one test case 🥇', () => {
  it('should return the expected array', () => {
    const digits = [1, 2, 3]
    const expected = [1, 2, 4]
    expect(plusOne(digits)).toStrictEqual(expected)
  })
})

describe('plus one test case 🥈', () => {
  it('should return the expected array', () => {
    const digits = [4, 3, 2, 1]
    const expected = [4, 3, 2, 2]
    expect(plusOne(digits)).toStrictEqual(expected)
  })
})

describe('plus one test case 🥉', () => {
  it('should return the expected array', () => {
    const digits = [9]
    const expected = [1, 0]
    expect(plusOne(digits)).toStrictEqual(expected)
  })
})

describe('plus one test case 🏅', () => {
  it('should return the expected array', () => {
    const digits = [1, 2, 3, 9, 9, 9, 9, 9, 9, 9, 9]
    const expected = [1, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0]
    expect(plusOne(digits)).toStrictEqual(expected)
  })
})

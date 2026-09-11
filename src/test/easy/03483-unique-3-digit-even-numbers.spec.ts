import { describe, expect, it } from 'vitest'
import { totalNumbers } from '../../code/easy/03483-unique-3-digit-even-numbers'

describe('unique 3-digit even numbers test case 🥇', () => {
  it('should return the expected result', () => {
    const digits = [1, 2, 3, 4]
    const result = totalNumbers(digits)
    const expected = 12
    expect(result).toBe(expected)
  })
})

describe('unique 3-digit even numbers test case 🥈', () => {
  it('should return the expected result', () => {
    const digits = [0, 2, 2]
    const result = totalNumbers(digits)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('unique 3-digit even numbers test case 🥉', () => {
  it('should return the expected result', () => {
    const digits = [6, 6, 6]
    const result = totalNumbers(digits)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('unique 3-digit even numbers test case 🏅', () => {
  it('should return the expected result', () => {
    const digits = [1, 3, 5]
    const result = totalNumbers(digits)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('unique 3-digit even numbers test case 🏆', () => {
  it('should return the expected result', () => {
    const digits = [0, 0, 0, 0, 0]
    const result = totalNumbers(digits)
    const expected = 0
    expect(result).toBe(expected)
  })
})

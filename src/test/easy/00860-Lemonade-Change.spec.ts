import { describe, expect, it } from 'vitest'
import { lemonadeChange } from '../../code/easy/00860-Lemonade-Change'

describe('lemonade change test case 🥇', () => {
  it('should return the expected result', () => {
    const bills = [5, 5, 5, 10, 20]
    const result = lemonadeChange(bills)
    const expected = true

    expect(result).toBe(expected)
  })
})

describe('lemonade change test case 🥈', () => {
  it('should return the expected result', () => {
    const bills = [5, 5, 10, 10, 20]
    const result = lemonadeChange(bills)
    const expected = false

    expect(result).toBe(expected)
  })
})

describe('lemonade change test case 🥉', () => {
  it('should return the expected result', () => {
    const bills = [5, 5, 10, 5, 20, 5, 5, 5, 20, 5, 10, 10, 5, 20]
    const result = lemonadeChange(bills)
    const expected = true

    expect(result).toBe(expected)
  })
})

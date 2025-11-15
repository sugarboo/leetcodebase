import { describe, expect, it } from 'vitest'
import { countAsterisks } from '../../code/easy/02315-Count-Asterisks'

describe('count asterisks test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'l|*e*et|c**o|*de|'
    const result = countAsterisks(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count asterisks test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'iamprogrammer'
    const result = countAsterisks(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count asterisks test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'yo|uar|e**|b|e***au|tifu|l'
    const result = countAsterisks(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

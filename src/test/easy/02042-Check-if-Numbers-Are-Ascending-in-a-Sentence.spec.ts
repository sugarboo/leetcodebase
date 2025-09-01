import { describe, expect, it } from 'vitest'
import { areNumbersAscending } from '../../code/easy/02042-Check-if-Numbers-Are-Ascending-in-a-Sentence'

describe('check if numbers are ascending in a sentence test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '1 box has 3 blue 4 red 6 green and 12 yellow marbles'
    const result = areNumbersAscending(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if numbers are ascending in a sentence test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'hello world 5 x 5'
    const result = areNumbersAscending(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if numbers are ascending in a sentence test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'sunset is at 7 51 pm overnight lows will be in the low 50s'
    const result = areNumbersAscending(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

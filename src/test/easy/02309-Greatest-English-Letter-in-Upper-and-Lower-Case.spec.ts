import { describe, expect, it } from 'vitest'
import { greatestLetter } from '../../code/easy/02309-Greatest-English-Letter-in-Upper-and-Lower-Case'

describe('greatest english letter in upper and lower case test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'lEeTcOdE'
    const result = greatestLetter(s)
    const expected = 'E'
    expect(result).toBe(expected)
  })
})

describe('greatest english letter in upper and lower case test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'arRAzFif'
    const result = greatestLetter(s)
    const expected = 'R'
    expect(result).toBe(expected)
  })
})

describe('greatest english letter in upper and lower case test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'AbCdEfGhIjK'
    const result = greatestLetter(s)
    const expected = ''
    expect(result).toBe(expected)
  })
})

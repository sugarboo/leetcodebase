import { describe, expect, it } from 'vitest'
import { clearDigits } from '../../code/easy/03174-Clear-Digits'

describe('clear digits test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'a1b2c3d4e5f6g7h8i9j0k'
    const result = clearDigits(s)
    const expected = 'k'
    expect(result).toBe(expected)
  })
})

describe('clear digits test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abc'
    const result = clearDigits(s)
    const expected = 'abc'
    expect(result).toBe(expected)
  })
})

describe('clear digits test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'cb34'
    const result = clearDigits(s)
    const expected = ''
    expect(result).toBe(expected)
  })
})

describe('clear digits test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'abc0123jkl89m'
    const result = clearDigits(s)
    const expected = 'jm'
    expect(result).toBe(expected)
  })
})

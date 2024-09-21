import { describe, expect, it } from 'vitest'
import { canWinNim } from '../../code/easy/00292-Nim-Game'

describe('nim game test case 🥇', () => {
  it('should return the expected result', () => {
    expect(canWinNim(4)).toBe(false)
  })
})

describe('nim game test case 🥈', () => {
  it('should return the expected result', () => {
    expect(canWinNim(5)).toBe(true)
  })
})

describe('nim game test case 🥉', () => {
  it('should return the expected result', () => {
    expect(canWinNim(2)).toBe(true)
  })
})

describe('nim game test case 🏅', () => {
  it('should return the expected result', () => {
    expect(canWinNim(3)).toBe(true)
  })
})

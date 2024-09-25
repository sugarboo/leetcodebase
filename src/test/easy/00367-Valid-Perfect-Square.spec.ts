import { describe, expect, it } from 'vitest'
import { isPerfectSquare } from '../../code/easy/00367-Valid-Perfect-Square'

describe('valid perfect square test case 🥇', () => {
  it('should return the expected result', () => {
    expect(isPerfectSquare(16)).toBe(true)
  })
})

describe('valid perfect square test case 🥈', () => {
  it('should return the expected result', () => {
    expect(isPerfectSquare(14)).toBe(false)
  })
})

describe('valid perfect square test case 🥉', () => {
  it('should return the expected result', () => {
    expect(isPerfectSquare(512)).toBe(false)
  })
})

describe('valid perfect square test case 🏅', () => {
  it('should return the expected result', () => {
    expect(isPerfectSquare(1024)).toBe(true)
  })
})

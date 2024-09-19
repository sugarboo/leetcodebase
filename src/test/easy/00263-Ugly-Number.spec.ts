import { describe, expect, it } from 'vitest'
import { isUgly } from '../../code/easy/00263-Ugly-Number'

describe('ugly number test case 🥇', () => {
  it('should return the expected number', () => {
    expect(isUgly(6)).toBe(true)
  })
})

describe('ugly number test case 🥈', () => {
  it('should return the expected number', () => {
    expect(isUgly(1)).toBe(true)
  })
})

describe('ugly number test case 🥉', () => {
  it('should return the expected number', () => {
    expect(isUgly(14)).toBe(false)
  })
})

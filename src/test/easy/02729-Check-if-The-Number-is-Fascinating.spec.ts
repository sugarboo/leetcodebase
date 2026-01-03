import { describe, expect, it } from 'vitest'
import { isFascinating } from '../../code/easy/02729-Check-if-The-Number-is-Fascinating'

describe('check if the number is fascinating test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 192
    const result = isFascinating(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if the number is fascinating test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 100
    const result = isFascinating(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if the number is fascinating test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 783
    const result = isFascinating(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

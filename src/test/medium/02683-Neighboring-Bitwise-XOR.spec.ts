import { describe, expect, it } from 'vitest'
import { doesValidArrayExist } from '../../code/medium/02683-Neighboring-Bitwise-XOR'

describe('does valid array exist test case 🥇', () => {
  it('should return the expected result', () => {
    const derived = [1, 1, 0]
    const result = doesValidArrayExist(derived)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('does valid array exist test case 🥈', () => {
  it('should return the expected result', () => {
    const derived = [1, 1]
    const result = doesValidArrayExist(derived)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('does valid array exist test case 🥉', () => {
  it('should return the expected result', () => {
    const derived = [1, 0]
    const result = doesValidArrayExist(derived)
    const expected = false
    expect(result).toBe(expected)
  })
})

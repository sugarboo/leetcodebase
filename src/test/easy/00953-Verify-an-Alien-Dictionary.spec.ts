import { describe, expect, it } from 'vitest'
import { isAlienSorted } from '../../code/easy/00953-Verify-an-Alien-Dictionary'

describe('verify an alien dictionary test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['hello', 'leetcode']
    const order = 'hlabcdefgijkmnopqrstuvwxyz'
    const result = isAlienSorted(words, order)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('verify an alien dictionary test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['word', 'world', 'row']
    const order = 'worldabcefghijkmnpqstuvxyz'
    const result = isAlienSorted(words, order)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('verify an alien dictionary test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['apple', 'app']
    const order = 'abcdefghijklmnopqrstuvwxyz'
    const result = isAlienSorted(words, order)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('verify an alien dictionary test case 🏅', () => {
  it('should return the expected result', () => {
    const words = ['hello', 'hello']
    const order = 'abcdefghijklmnopqrstuvwxyz'
    const result = isAlienSorted(words, order)
    const expected = true
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { reverseString } from '../../code/easy/00344-Reverse-String'

describe('reverse string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = ['h', 'e', 'l', 'l', 'o']
    const result = reverseString(s)
    const expected = ['o', 'l', 'l', 'e', 'h']
    expect(result).toStrictEqual(expected)
  })
})

describe('reverse string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = ['H', 'a', 'n', 'n', 'a', 'h']
    const result = reverseString(s)
    const expected = ['h', 'a', 'n', 'n', 'a', 'H']
    expect(result).toStrictEqual(expected)
  })
})

describe('reverse string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = ['r', 'e', 'v', 'e', 'r', 's', 'e']
    const result = reverseString(s)
    const expected = ['e', 's', 'r', 'e', 'v', 'e', 'r']
    expect(result).toStrictEqual(expected)
  })
})

describe('reverse string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = ['S', 'T', 'R', 'I', 'N', 'G']
    const result = reverseString(s)
    const expected = ['G', 'N', 'I', 'R', 'T', 'S']
    expect(result).toStrictEqual(expected)
  })
})

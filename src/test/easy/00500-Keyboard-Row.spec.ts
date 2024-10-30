import { describe, expect, it } from 'vitest'
import { findWords } from '../../code/easy/00500-Keyboard-Row'

describe('keyboard row test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['Hello', 'Alaska', 'Dad', 'Peace']
    const result = findWords(words)
    const expected = ['Alaska', 'Dad']
    expect(result).toStrictEqual(expected)
  })
})

describe('keyboard row test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['omk']
    const result = findWords(words)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

describe('keyboard row test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['adsdf', 'sfd']
    const result = findWords(words)
    const expected = ['adsdf', 'sfd']
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { uniqueMorseRepresentations } from '../../code/easy/00804-Unique-Morse-Code-Words'

describe('unique morse code words test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['gin', 'zen', 'gig', 'msg']
    const result = uniqueMorseRepresentations(words)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('unique morse code words test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['a']
    const result = uniqueMorseRepresentations(words)
    const expected = 1
    expect(result).toBe(expected)
  })
})

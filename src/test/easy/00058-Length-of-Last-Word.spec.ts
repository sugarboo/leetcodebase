import { describe, expect, it } from 'vitest'
import { lengthOfLastWord } from '../../code/easy/00058-Length-of-Last-Word'

describe('length of last word test case 🥇', () => {
  it('should return the expected index', () => {
    const s = 'Hello World'
    const expected = 5
    expect(lengthOfLastWord(s)).toBe(expected)
  })
})

describe('length of last word test case 🥈', () => {
  it('should return the expected index', () => {
    const s = '   fly me   to   the moon  '
    const expected = 4
    expect(lengthOfLastWord(s)).toBe(expected)
  })
})

describe('length of last word test case 🥉', () => {
  it('should return the expected index', () => {
    const s = 'luffy is still joyboy'
    const expected = 6
    expect(lengthOfLastWord(s)).toBe(expected)
  })
})

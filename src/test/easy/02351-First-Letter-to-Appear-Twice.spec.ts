import { describe, expect, it } from 'vitest'
import { repeatedCharacter } from '../../code/easy/02351-First-Letter-to-Appear-Twice'

describe('first letter to appear twice test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abccbaacz'
    const result = repeatedCharacter(s)
    const expected = 'c'
    expect(result).toBe(expected)
  })
})

describe('first letter to appear twice test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abcdd'
    const result = repeatedCharacter(s)
    const expected = 'd'
    expect(result).toBe(expected)
  })
})

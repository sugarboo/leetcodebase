import { describe, expect, it } from 'vitest'
import { doesAliceWin } from '../../code/medium/03227-Vowels-Game-in-a-String'

describe('does Alice win the vowels game in a string test case 🥇', () => {
  it('should return the expected result', async () => {
    const s = 'leetcoder'
    const result = doesAliceWin(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('does Alice win the vowels game in a string test case 🥈', () => {
  it('should return the expected result', async () => {
    const s = 'rhythm'
    const result = doesAliceWin(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('does Alice win the vowels game in a string test case 🥉', () => {
  it('should return the expected result', async () => {
    const s = 'bbcd'
    const result = doesAliceWin(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

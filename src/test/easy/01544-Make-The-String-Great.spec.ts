import { describe, expect, it } from 'vitest'
import { makeGood } from '../../code/easy/01544-Make-The-String-Great'

describe('make the string great test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abBA'
    const result = makeGood(s)
    const expected = ''
    expect(result).toBe(expected)
  })
})

describe('make the string great test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'leEeetcode'
    const result = makeGood(s)
    const expected = 'leetcode'
    expect(result).toBe(expected)
  })
})

describe('make the string great test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'abBAcC'
    const result = makeGood(s)
    const expected = ''
    expect(result).toBe(expected)
  })
})

describe('make the string great test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 's'
    const result = makeGood(s)
    const expected = 's'
    expect(result).toBe(expected)
  })
})

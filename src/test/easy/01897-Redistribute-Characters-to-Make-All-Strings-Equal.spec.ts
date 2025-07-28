import { describe, expect, it } from 'vitest'
import { makeEqual } from '../../code/easy/01897-Redistribute-Characters-to-Make-All-Strings-Equal'

describe('redistribute characters to make all strings equal test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['abc', 'aabc', 'bc']
    const result = makeEqual(words)
    expect(result).toBe(true)
  })
})

describe('redistribute characters to make all strings equal test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['ab', 'a']
    const result = makeEqual(words)
    expect(result).toBe(false)
  })
})

import { describe, expect, it } from 'vitest'
import { minimumLength } from '../../code/medium/03223-Minimum-Length-of-String-After-Operations'

describe('minimum length of string after operations test case 🥇', () => {
  it('should return the expected result', async () => {
    const s = 'abaacbcbb'
    const result = minimumLength(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('minimum length of string after operations test case 🥈', () => {
  it('should return the expected result', async () => {
    const s = 'aa'
    const result = minimumLength(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

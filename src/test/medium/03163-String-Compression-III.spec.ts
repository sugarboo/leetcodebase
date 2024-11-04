import { describe, expect, it } from 'vitest'
import { compressedString } from '../../code/medium/03163-String-Compression-III'

describe('string compression III test case 🥇', () => {
  it('should return the expected result', async () => {
    const word = 'abcde'
    const result = compressedString(word)
    const expected = '1a1b1c1d1e'
    expect(result).toBe(expected)
  })
})

describe('string compression III test case 🥈', () => {
  it('should return the expected result', async () => {
    const word = 'aaaaaaaaaaaaaabb'
    const result = compressedString(word)
    const expected = '9a5a2b'
    expect(result).toBe(expected)
  })
})

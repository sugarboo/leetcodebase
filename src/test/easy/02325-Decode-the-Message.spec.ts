import { describe, expect, it } from 'vitest'
import { decodeMessage } from '../../code/easy/02325-Decode-the-Message'

describe('decode the message test case 🥇', () => {
  it('should return the expected result', () => {
    const key = 'the quick brown fox jumps over the lazy dog'
    const message = 'vkbs bs t suepuv'
    const result = decodeMessage(key, message)
    const expected = 'this is a secret'
    expect(result).toBe(expected)
  })
})

describe('decode the message test case 🥈', () => {
  it('should return the expected result', () => {
    const key = 'eljuxhpwnyrdgtqkviszcfmabo'
    const message = 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'
    const result = decodeMessage(key, message)
    const expected = 'the five boxing wizards jump quickly'
    expect(result).toBe(expected)
  })
})

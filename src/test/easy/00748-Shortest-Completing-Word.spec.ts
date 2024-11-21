import { describe, expect, it } from 'vitest'
import { shortestCompletingWord } from '../../code/easy/00748-Shortest-Completing-Word'

describe('shortest completing word test case 🥇', () => {
  it('should return the expected result', () => {
    const licensePlate = '1s3 PSt'
    const words = ['step', 'steps', 'stripe', 'stepple']
    const result = shortestCompletingWord(licensePlate, words)
    const expected = 'steps'
    expect(result).toBe(expected)
  })
})

describe('shortest completing word test case 🥈', () => {
  it('should return the expected result', () => {
    const licensePlate = '1s3 456'
    const words = ['looks', 'pest', 'stew', 'show']
    const result = shortestCompletingWord(licensePlate, words)
    const expected = 'pest'
    expect(result).toBe(expected)
  })
})

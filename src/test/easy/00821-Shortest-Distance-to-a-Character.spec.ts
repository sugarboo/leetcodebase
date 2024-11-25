import { describe, expect, it } from 'vitest'
import { shortestToChar } from '../../code/easy/00821-Shortest-Distance-to-a-Character'

describe('shortest distance to a character test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'loveleetcode'
    const c = 'e'
    const result = shortestToChar(s, c)
    const expected = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
    expect(result).toStrictEqual(expected)
  })
})

describe('shortest distance to a character test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aaab'
    const c = 'b'
    const result = shortestToChar(s, c)
    const expected = [3, 2, 1, 0]
    expect(result).toStrictEqual(expected)
  })
})

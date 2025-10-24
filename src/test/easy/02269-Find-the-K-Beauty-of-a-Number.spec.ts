import { describe, expect, it } from 'vitest'
import { divisorSubstrings } from '../../code/easy/02269-Find-the-K-Beauty-of-a-Number'

describe('find the k beauty of a number test case 🥇', () => {
  it('should return the expected result', () => {
    const num = 240
    const k = 2
    const result = divisorSubstrings(num, k)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find the k beauty of a number test case 🥈', () => {
  it('should return the expected result', () => {
    const num = 430043
    const k = 2
    const result = divisorSubstrings(num, k)
    const expected = 2
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { smallestNumber } from '../../code/medium/02375-Construct-Smallest-Number-From-DI-String'

describe('construct smallest number from DI string test case 🥇', () => {
  it('should return the expected result', () => {
    const pattern = 'IIIDIDDD'
    const result = smallestNumber(pattern)
    const expected = '123549876'
    expect(result).toBe(expected)
  })
})

describe('construct smallest number from DI string test case 🥈', () => {
  it('should return the expected result', () => {
    const pattern = 'DDD'
    const result = smallestNumber(pattern)
    const expected = '4321'
    expect(result).toBe(expected)
  })
})

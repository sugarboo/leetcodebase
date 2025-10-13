import { describe, expect, it } from 'vitest'
import { largestInteger } from '../../code/easy/02231-Largest-Number-After-Digit-Swaps-by-Parity'

describe('largest number after digit swaps by parity test case 🥇', () => {
  it('should return the expected number', () => {
    const num = 1234
    const result = largestInteger(num)
    const expected = 3412
    expect(result).toBe(expected)
  })
})

describe('largest number after digit swaps by parity test case 🥈', () => {
  it('should return the expected number', () => {
    const num = 65875
    const result = largestInteger(num)
    const expected = 87655
    expect(result).toBe(expected)
  })
})

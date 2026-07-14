import { describe, expect, it } from 'vitest'
import { sequentialDigits } from '../../code/medium/01291-sequential-digits'

describe('sequential digits test case 🥇', () => {
  it('should return the expected result', () => {
    const low = 100
    const high = 300
    const result = sequentialDigits(low, high)
    const expected = [123, 234]
    expect(result).toStrictEqual(expected)
  })
})

describe('sequential digits test case 🥈', () => {
  it('should return the expected result', () => {
    const low = 1000
    const high = 13000
    const result = sequentialDigits(low, high)
    const expected = [1234, 2345, 3456, 4567, 5678, 6789, 12345]
    expect(result).toStrictEqual(expected)
  })
})

describe('sequential digits test case 🥉', () => {
  it('should return the expected result', () => {
    const low = 58023
    const high = 589763
    const result = sequentialDigits(low, high)
    const expected = [123456, 234567, 345678, 456789]
    expect(result).toStrictEqual(expected)
  })
})

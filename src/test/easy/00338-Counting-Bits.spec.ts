import { describe, expect, it } from 'vitest'
import { countBits } from '../../code/easy/00338-Counting-Bits'

describe('counting bits test case 🥇', () => {
  it('should return the expected result', () => {
    const result = countBits(2)
    const expected = [0, 1, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('counting bits test case 🥈', () => {
  it('should return the expected result', () => {
    const result = countBits(5)
    const expected = [0, 1, 1, 2, 1, 2]
    expect(result).toStrictEqual(expected)
  })
})

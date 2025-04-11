import { describe, expect, it } from 'vitest'
import { countSymmetricIntegers } from '../../code/easy/02843-Count-Symmetric-Integers'

describe('count symmetric integers test case 🥇', () => {
  it('should return the expected result', () => {
    const result = countSymmetricIntegers(1, 100)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('count symmetric integers test case 🥈', () => {
  it('should return the expected result', () => {
    const result = countSymmetricIntegers(1200, 1230)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('count symmetric integers test case 🥉', () => {
  it('should return the expected result', () => {
    const result = countSymmetricIntegers(100, 1782)
    const expected = 44
    expect(result).toBe(expected)
  })
})

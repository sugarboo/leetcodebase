import { describe, expect, it } from 'vitest'
import { minLength } from '../../code/easy/02696-Minimum-String-Length-After-Removing-Substrings'

describe('minimum string length after removing substrings test case 🥇', () => {
  it('should return the expected result', () => {
    expect(minLength('ABFCACDB')).toBe(2)
  })
})

describe('minimum string length after removing substrings test case 🥈', () => {
  it('should return the expected result', () => {
    expect(minLength('ACBBD')).toBe(5)
  })
})

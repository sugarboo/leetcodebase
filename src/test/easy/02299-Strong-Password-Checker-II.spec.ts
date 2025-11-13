import { describe, expect, it } from 'vitest'
import { strongPasswordCheckerII } from '../../code/easy/02299-Strong-Password-Checker-II'

describe('strong password checker ii test case 🥇', () => {
  it('should return the expected result', () => {
    const password = 'IloveLe3tcode!'
    const result = strongPasswordCheckerII(password)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('strong password checker ii test case 🥈', () => {
  it('should return the expected result', () => {
    const password = 'Me+You--IsMyDream'
    const result = strongPasswordCheckerII(password)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('strong password checker ii test case 🥉', () => {
  it('should return the expected result', () => {
    const password = '1aB!'
    const result = strongPasswordCheckerII(password)
    const expected = false
    expect(result).toBe(expected)
  })
})

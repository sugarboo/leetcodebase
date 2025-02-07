import { describe, expect, it } from 'vitest'
import { balancedStringSplit } from '../../code/easy/01221-Split-a-Sting-in-Balanced-Strings'

describe('split a string in balanced strings test case 🥇', () => {
  it('should return the expected result', () => {
    const inputString = 'RLRRLLRLRL'
    const result = balancedStringSplit(inputString)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('split a string in balanced strings test case 🥈', () => {
  it('should return the expected result', () => {
    const inputString = 'RLRRRLLRLL'
    const result = balancedStringSplit(inputString)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('split a string in balanced strings test case 🥉', () => {
  it('should return the expected result', () => {
    const inputString = 'LLLLRRRR'
    const result = balancedStringSplit(inputString)
    const expected = 1
    expect(result).toBe(expected)
  })
})

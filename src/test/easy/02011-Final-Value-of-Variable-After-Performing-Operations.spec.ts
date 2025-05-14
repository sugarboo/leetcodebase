import { describe, expect, it } from 'vitest'
import { finalValueAfterOperations } from '../../code/easy/02011-Final-Value-of-Variable-After-Performing-Operations'

describe('final value of variables after performing operations test case 🥇', () => {
  it('should return the expected result', () => {
    const operations = ['--X', 'X++', 'X++']
    const result = finalValueAfterOperations(operations)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('final value of variables after performing operations test case 🥈', () => {
  it('should return the expected result', () => {
    const operations = ['++X', '++X', 'X++']
    const result = finalValueAfterOperations(operations)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('final value of variables after performing operations test case 🥉', () => {
  it('should return the expected result', () => {
    const operations = ['X++', '++X', '--X', 'X--']
    const result = finalValueAfterOperations(operations)
    const expected = 0
    expect(result).toBe(expected)
  })
})

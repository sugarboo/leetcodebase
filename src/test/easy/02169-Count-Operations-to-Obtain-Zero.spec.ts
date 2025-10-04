import { describe, expect, it } from 'vitest'
import { countOperations } from '../../code/easy/02169-Count-Operations-to-Obtain-Zero'

describe('count operations to obtain zero test case 🥇', () => {
  it('should return the expected result', () => {
    const num1 = 2
    const num2 = 3
    const result = countOperations(num1, num2)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count operations to obtain zero test case 🥈', () => {
  it('should return the expected result', () => {
    const num1 = 10
    const num2 = 10
    const result = countOperations(num1, num2)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count operations to obtain zero test case 🥉', () => {
  it('should return the expected result', () => {
    const num1 = 9999
    const num2 = 9998
    const result = countOperations(num1, num2)
    const expected = 9999
    expect(result).toBe(expected)
  })
})

describe('count operations to obtain zero test case 🏅', () => {
  it('should return the expected result', () => {
    const num1 = 9998
    const num2 = 9999
    const result = countOperations(num1, num2)
    const expected = 9999
    expect(result).toBe(expected)
  })
})

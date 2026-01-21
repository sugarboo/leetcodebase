import { describe, expect, it } from 'vitest'
import { numberOfCuts } from '../../code/easy/02481-Minimum-Cuts-to-Divide-a-Circle'

describe('minimum cuts to divide a circle test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = numberOfCuts(n)
    const expected = 2
    expect(result).toStrictEqual(expected)
  })
})

describe('minimum cuts to divide a circle test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 1
    const result = numberOfCuts(n)
    const expected = 0
    expect(result).toStrictEqual(expected)
  })
})

describe('minimum cuts to divide a circle test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 3
    const result = numberOfCuts(n)
    const expected = 3
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { countAndSay } from '../../code/medium/00038-Count-and-Say'

describe('count and say test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 1
    const expected = '1'
    expect(countAndSay(n)).toBe(expected)
  })
})

describe('count and say test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 4
    const expected = '1211'
    expect(countAndSay(n)).toBe(expected)
  })
})

describe('count and say test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 5
    const expected = '111221'
    expect(countAndSay(n)).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { commonChars } from '../../code/easy/01002-Find-Common-Characters'

describe('find common characters test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = ['bella', 'label', 'roller']
    const result = commonChars(arr)
    const expected = ['e', 'l', 'l']
    expect(result).toStrictEqual(expected)
  })
})

describe('find common characters test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = ['cool', 'lock', 'cook']
    const result = commonChars(arr)
    const expected = ['c', 'o']
    expect(result).toStrictEqual(expected)
  })
})

describe('find common characters test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = ['a', 'aa', 'aaa']
    const result = commonChars(arr)
    const expected = ['a']
    expect(result).toStrictEqual(expected)
  })
})

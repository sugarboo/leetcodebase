import { describe, expect, it } from 'vitest'
import { divideString } from '../../code/easy/02138-Divide-a-String-Into-Groups-of-Size-K'

describe('divide string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abcdefghi'
    const k = 3
    const fill = 'x'
    const result = divideString(s, k, fill)
    const expected = ['abc', 'def', 'ghi']
    expect(result).toStrictEqual(expected)
  })
})

describe('divide string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abcdefghij'
    const k = 3
    const fill = 'x'
    const result = divideString(s, k, fill)
    const expected = ['abc', 'def', 'ghi', 'jxx']
    expect(result).toStrictEqual(expected)
  })
})

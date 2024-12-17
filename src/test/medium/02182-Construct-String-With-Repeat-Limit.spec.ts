import { describe, expect, it } from 'vitest'
import { repeatLimitedString } from '../../code/medium/02182-Construct-String-With-Repeat-Limit'

describe('construct string with repeat limit test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'cczazcc'
    const repeatLimit = 3
    const result = repeatLimitedString(s, repeatLimit)
    const expected = 'zzcccac'
    expect(result).toBe(expected)
  })
})

describe('construct string with repeat limit test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aababab'
    const repeatLimit = 2
    const result = repeatLimitedString(s, repeatLimit)
    const expected = 'bbabaa'
    expect(result).toBe(expected)
  })
})

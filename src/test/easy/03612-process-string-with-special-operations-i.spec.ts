import { describe, expect, it } from 'vitest'
import { processStr } from '../../code/easy/03612-process-string-with-special-operations-i'

describe('process string with special operations I test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'a#b%*'
    const result = processStr(s)
    const expected = 'ba'
    expect(result).toBe(expected)
  })
})

describe('process string with special operations I test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'z*#'
    const result = processStr(s)
    const expected = ''
    expect(result).toBe(expected)
  })
})

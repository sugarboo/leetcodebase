import { describe, expect, it } from 'vitest'
import { diStringMatch } from '../../code/easy/00942-DI-String-Match'

describe('di string match test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'IDID'
    const result = diStringMatch(s)
    const expected = [0, 4, 1, 3, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('di string match test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'III'
    const result = diStringMatch(s)
    const expected = [0, 1, 2, 3]
    expect(result).toStrictEqual(expected)
  })
})

describe('di string match test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'DDI'
    const result = diStringMatch(s)
    const expected = [3, 2, 0, 1]
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { countSeniors } from '../../code/easy/02678-Number-of-Senior-Citizens'

describe('number of senior citizens test case 🥇', () => {
  it('should return the expected count', () => {
    const details = ['7868190130M7522', '5303914400F9211', '9273338290F4010']
    const expected = 2
    expect(countSeniors(details)).toBe(expected)
  })
})

describe('number of senior citizens test case 🥈', () => {
  it('should return the expected count', () => {
    const details = ['1313579440F2036', '2921522980M5644']
    const expected = 0
    expect(countSeniors(details)).toBe(expected)
  })
})

describe('number of senior citizens test case 🥉', () => {
  it('should return the expected count', () => {
    const details = ['1313579440F6036', '2921522980M6144']
    const expected = 1
    expect(countSeniors(details)).toBe(expected)
  })
})

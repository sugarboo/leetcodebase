import { describe, expect, it } from 'vitest'
import { capitalizeTitle } from '../../code/easy/02129-Capitalize-the-Title'

describe('capitalize the title test case 🥇', () => {
  it('should return the expected result', () => {
    const title = 'capiTalIze tHe titLe'
    const result = capitalizeTitle(title)
    const expected = 'Capitalize The Title'
    expect(result).toBe(expected)
  })
})

describe('capitalize the title test case 🥈', () => {
  it('should return the expected result', () => {
    const title = 'First leTTeR of EACH Word'
    const result = capitalizeTitle(title)
    const expected = 'First Letter of Each Word'
    expect(result).toBe(expected)
  })
})

describe('capitalize the title test case 🥉', () => {
  it('should return the expected result', () => {
    const title = 'i lOve leetcode'
    const result = capitalizeTitle(title)
    const expected = 'i Love Leetcode'
    expect(result).toBe(expected)
  })
})

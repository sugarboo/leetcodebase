import { describe, expect, it } from 'vitest'
import { maximumLength } from '../../code/medium/02981-Find-Longest-Special-Substring-That-Occurs-Thrice-I'

describe('find longest special substring that occurs thrice I test case 🥇', () => {
  it('should return the expected result', async () => {
    expect(maximumLength('aaaa')).toBe(2)
  })
})

describe('find longest special substring that occurs thrice I test case 🥈', () => {
  it('should return the expected result', async () => {
    expect(maximumLength('abcdef')).toBe(-1)
  })
})

describe('find longest special substring that occurs thrice I test case 🥉', () => {
  it('should return the expected result', async () => {
    expect(maximumLength('abcaba')).toBe(1)
  })
})

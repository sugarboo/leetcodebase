import { describe, expect, it } from 'vitest'
import { reorderSpaces } from '../../code/easy/01592-Rearrange-Space-Between-Words'

describe('rearrange space between words test case 🥇', () => {
  it('should return the expected result', () => {
    const text = '  this   is  a sentence '
    const result = reorderSpaces(text)
    const expected = 'this   is   a   sentence'
    expect(result).toBe(expected)
  })
})

describe('rearrange space between words test case 🥈', () => {
  it('should return the expected result', () => {
    const text = ' practice   makes   perfect'
    const result = reorderSpaces(text)
    const expected = 'practice   makes   perfect '
    expect(result).toBe(expected)
  })
})

describe('rearrange space between words test case 🥉', () => {
  it('should return the expected result', () => {
    const text = '  hello'
    const result = reorderSpaces(text)
    const expected = 'hello  '
    expect(result).toBe(expected)
  })
})

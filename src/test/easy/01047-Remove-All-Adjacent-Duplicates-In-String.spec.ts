import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../../code/easy/01047-Remove-All-Adjacent-Duplicates-In-String'

describe('remove all adjacent duplicates in string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abbaca'
    const result = removeDuplicates(s)
    const expected = 'ca'
    expect(result).toBe(expected)
  })
})

describe('remove all adjacent duplicates in string test case 🥈🥇', () => {
  it('should return the expected result', () => {
    const s = 'azxxzy'
    const result = removeDuplicates(s)
    const expected = 'ay'
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { reformatDate } from '../../code/easy/01507-Reformat-Date'

describe('can make arithmetic progression from sequence test case 🥇', () => {
  it('should return the expected result', () => {
    const date = '20th Oct 2052'
    const result = reformatDate(date)
    const expected = '2052-10-20'
    expect(result).toBe(expected)
  })
})

describe('can make arithmetic progression from sequence test case 🥈', () => {
  it('should return the expected result', () => {
    const date = '6th Jun 1933'
    const result = reformatDate(date)
    const expected = '1933-06-06'
    expect(result).toBe(expected)
  })
})

describe('can make arithmetic progression from sequence test case 🥉', () => {
  it('should return the expected result', () => {
    const date = '26th May 1960'
    const result = reformatDate(date)
    const expected = '1960-05-26'
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { areOccurrencesEqual } from '../../code/easy/01941-Check-if-All-Characters-Have-Equal-Number-of-Occurrences'

describe('check if all characters have equal number of occurrences test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abacbc'
    const expected = true
    const result = areOccurrencesEqual(s)
    expect(result).toBe(expected)
  })
})

describe('check if all characters have equal number of occurrences test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aaabb'
    const expected = false
    const result = areOccurrencesEqual(s)
    expect(result).toBe(expected)
  })
})

describe('check if all characters have equal number of occurrences test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'fhojjkontbncdhwxbnexplclvjyexzsvqyyhpfpnvhdskuhkuoihiqgalklqketjikdlgrawhfo'
    const expected = false
    const result = areOccurrencesEqual(s)
    expect(result).toBe(expected)
  })
})

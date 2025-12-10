import { describe, expect, it } from 'vitest'
import { checkDistances } from '../../code/easy/02399-Check-Distances-Between-Same-Letters'

describe('check distances between same letters test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abaccb'
    const distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const result = checkDistances(s, distance)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check distances between same letters test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aa'
    const distance = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const result = checkDistances(s, distance)
    const expected = false
    expect(result).toBe(expected)
  })
})

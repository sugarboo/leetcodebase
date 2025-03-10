import { describe, expect, it } from 'vitest'
import { numberOfAlternatingGroups } from '../../code/easy/03206-Alternating-Groups-I'

describe('alternating groups I test case 🥇', () => {
  it('should return the expected result', () => {
    const colors = [1, 1, 1]
    const result = numberOfAlternatingGroups(colors)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('alternating groups I test case 🥈', () => {
  it('should return the expected result', () => {
    const colors = [0, 1, 0, 0, 1]
    const result = numberOfAlternatingGroups(colors)
    const expected = 3
    expect(result).toBe(expected)
  })
})

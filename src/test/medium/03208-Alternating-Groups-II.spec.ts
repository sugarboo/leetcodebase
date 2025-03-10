import { describe, expect, it } from 'vitest'
import { numberOfAlternatingGroups } from '../../code/medium/03208-Alternating-Groups-II'

describe('alternating groups II test case 🥇', () => {
  it('should return the expected result', async () => {
    const colors = [0, 1, 0, 1, 0]
    const k = 3
    const result = numberOfAlternatingGroups(colors, k)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('alternating groups II test case 🥈', () => {
  it('should return the expected result', async () => {
    const colors = [0, 1, 0, 0, 1, 0, 1]
    const k = 6
    const result = numberOfAlternatingGroups(colors, k)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('alternating groups II test case 🥉', () => {
  it('should return the expected result', async () => {
    const colors = [1, 1, 0, 1]
    const k = 4
    const result = numberOfAlternatingGroups(colors, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { isPathCrossing } from '../../code/easy/01496-Path-Crossing'

describe('path crossing test case 🥇', () => {
  it('should return the expected result', () => {
    const path = 'NES'
    const result = isPathCrossing(path)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('path crossing test case 🥈', () => {
  it('should return the expected result', () => {
    const path = 'NESWW'
    const result = isPathCrossing(path)
    const expected = true
    expect(result).toBe(expected)
  })
})

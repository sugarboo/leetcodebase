import { describe, expect, it } from 'vitest'
import { passThePillow } from '../../code/easy/02582-Pass-the-Pillow'

describe('pass the pillow test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 4
    const time = 5
    const result = passThePillow(n, time)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('pass the pillow test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 3
    const time = 2
    const result = passThePillow(n, time)
    const expected = 3
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { canMakeArithmeticProgression } from '../../code/easy/01502-Can-Make-Arithmetic-Progression-From-Sequence'

describe('can make arithmetic progression from sequence test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [3, 5, 1]
    const result = canMakeArithmeticProgression(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('can make arithmetic progression from sequence test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 4]
    const result = canMakeArithmeticProgression(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('can make arithmetic progression from sequence test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, 3, 5, 7, 9]
    const result = canMakeArithmeticProgression(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('can make arithmetic progression from sequence test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = [-68, -96, -12, -40, 16]
    const result = canMakeArithmeticProgression(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

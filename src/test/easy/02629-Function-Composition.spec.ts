import { describe, expect, it } from 'vitest'
import { compose } from '../../code/easy/02629-Function-Composition'

describe('function composition test case 🥇', () => {
  it('should return the expected result', () => {
    const functions = [
      x => x + 1,
      x => x * x,
      x => 2 * x,
    ]
    const x = 4
    const expected = 65
    expect(compose(functions)(x)).toBe(expected)
  })
})

describe('function composition test case 🥈', () => {
  it('should return the expected result', () => {
    const functions = [
      x => 10 * x,
      x => 10 * x,
      x => 10 * x,
    ]
    const x = 1
    const expected = 1000
    expect(compose(functions)(x)).toBe(expected)
  })
})

describe('function composition test case 🥉', () => {
  it('should return the expected result', () => {
    const functions = []
    const x = 42
    const expected = 42
    expect(compose(functions)(x)).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { createCounter } from '../../code/easy/02620-Counter'

describe('counter test case 🥇', () => {
  it('should return the expected count', () => {
    const counter = createCounter(10)
    // call counter() 3 times
    counter()
    counter()
    const result = counter()
    const expected = 12
    expect(result).toBe(expected)
  })
})

describe('counter test case 🥈', () => {
  it('should return the expected count', () => {
    const counter = createCounter(-2)
    // call counter() 5 times
    counter()
    counter()
    counter()
    counter()
    const result = counter()
    const expected = 2
    expect(result).toBe(expected)
  })
})

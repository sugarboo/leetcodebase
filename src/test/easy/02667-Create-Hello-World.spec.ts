import { describe, expect, it } from 'vitest'
import { createHelloWorld } from '../../code/easy/02667-Create-Hello-World'

describe('create hello world test case 🥇', () => {
  it('should return the expected string', () => {
    const fn = createHelloWorld()
    const result = fn()
    const expected = 'Hello World'
    expect(result).toBe(expected)
  })
})

describe('create hello world test case 🥈', () => {
  it('should return the expected string', () => {
    const fn = createHelloWorld()
    const result = fn({}, null, 42)
    const expected = 'Hello World'
    expect(result).toBe(expected)
  })
})

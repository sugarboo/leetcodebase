import { describe, expect, it } from 'vitest'
import { createCounter } from '../../code/easy/02665-Counter-II'

describe('counter II test case 🥇', () => {
  it('should return the expected array', () => {
    const counter = createCounter(5)
    const results = [
      counter.increment(),
      counter.reset(),
      counter.decrement(),
    ]
    const expected = [6, 5, 4]
    expect(results).toStrictEqual(expected)
  })
})

describe('counter II test case 🥈', () => {
  it('should return the expected array', () => {
    const counter = createCounter(0)
    const results = [
      counter.increment(),
      counter.increment(),
      counter.decrement(),
      counter.reset(),
      counter.reset(),
    ]
    const expected = [1, 2, 1, 0, 0]
    expect(results).toStrictEqual(expected)
  })
})

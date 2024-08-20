import { describe, expect, it, vi } from 'vitest'
import { TimeLimitedCache } from '../../code/medium/02622-Cache-With-Time-Limit'

describe('cache with time limit test case 🥇', () => {
  it('should return the expected result', () => {
    // enable fake timer
    vi.useFakeTimers()
    const cache = new TimeLimitedCache()

    // Initially setting the key, should return false
    expect(cache.set(1, 42, 1000)).toBe(false)
    // Value should be retrievable
    expect(cache.get(1)).toBe(42)

    // Move time forward by 500ms
    vi.advanceTimersByTime(500)
    // Value should still be retrievable
    expect(cache.get(1)).toBe(42)
    // Count should be 1
    expect(cache.count()).toBe(1)

    // Move time forward by another 600ms (1100ms total)
    vi.advanceTimersByTime(600)
    // Value should have expired
    expect(cache.get(1)).toBe(-1)
  })
})

describe('cache with time limit test case 🥈', () => {
  it('should return the expected result', () => {
    // enable fake timer
    vi.useFakeTimers()
    const cache = new TimeLimitedCache()
    // Initially setting the key, should return false
    expect(cache.set(1, 42, 50)).toBe(false)

    // Move time forward by 40ms
    vi.advanceTimersByTime(40)
    // Resetting the key immediately, should return true
    expect(cache.set(1, 50, 100)).toBe(true)

    // Move time forward by 10ms
    vi.advanceTimersByTime(10)
    // Value should be retrievable
    expect(cache.get(1)).toBe(50)

    // Move time forward by 70ms
    vi.advanceTimersByTime(70)
    // Value should be retrievable
    expect(cache.get(1)).toBe(50)

    // Move time forward by 80ms
    vi.advanceTimersByTime(80)
    // Value should be not retrievable
    expect(cache.get(1)).toBe(-1)

    // Move time forward by another 600ms (1100ms total)
    vi.advanceTimersByTime(600)
    // Value should have expired
    expect(cache.get(1)).toBe(-1)
    // Count should be 0
    expect(cache.count()).toBe(0)
  })
})

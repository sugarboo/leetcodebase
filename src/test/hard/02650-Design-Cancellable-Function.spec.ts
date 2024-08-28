import { describe, expect, it, vi } from 'vitest'
import { cancellable } from '../../code/hard/02650-Design-Cancellable-Function'

describe('design cancellable function test case 🥇', () => {
  it('should resolve the generator when not cancelled', async () => {
    // enable fake timer
    vi.useFakeTimers()

    const generator = function*() {
      return 42
    }
    const [cancel, promise] = cancellable(generator())
    const cancelFn = vi.fn(cancel)
    const result = await promise
    setTimeout(cancel, 100)

    // advance time manually
    vi.advanceTimersByTime(100)

    expect(result).toBe(42)
    expect(cancelFn).not.toBeCalled()

    // reset to real timer
    vi.useRealTimers()
  })
})

describe('design cancellable function test case 🥈', () => {
  it('should reject the generator when cancelled before completion', async () => {
    const generator = function* () {
      yield new Promise(resolve => setTimeout(resolve, 200))
      return 'Success'
    }

    try {
      const [cancel, _promise] = cancellable(generator())
      setTimeout(cancel, 100)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('Cancelled')
    }

    // reset to real timer
    vi.useRealTimers()
  })
})

describe('design cancellable function test case 🥉', () => {
  it('should resolve with 2 when not cancelled', async () => {
    // enable fake timer
    vi.useFakeTimers()

    const generator = function*() {
      let result = 0
      yield new Promise(res => setTimeout(res, 100))
      result += yield new Promise<number>(res => res(1))
      yield new Promise(res => setTimeout(res, 100))
      result += yield new Promise<number>(res => res(1))
      return result
    }

    const [_cancel, promise] = cancellable(generator())

    // advance time manually
    vi.advanceTimersByTimeAsync(200)

    await expect(promise).resolves.toBe(2)

    // reset to real timer
    vi.useRealTimers()
  })
})

describe('design cancellable function test case 🏅', () => {
  it('should resolve with 1 when not cancelled', async () => {
    // enable fake timer
    vi.useFakeTimers()

    const generator = function*() {
      let result = 0
      try {
        yield new Promise(res => setTimeout(res, 100))
        result += yield new Promise(res => res(1))
        yield new Promise(res => setTimeout(res, 100))
        result += yield new Promise(res => res(1))
      } catch (e) {
        return result
        return e
      }
      return result
    }

    try {
      const [cancel, promise] = cancellable(generator())
      // advance time manually
      vi.advanceTimersByTimeAsync(150)
      setTimeout(cancel, 150)
      await expect(promise).resolves.toBe(1)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('Cancelled')
    }

    // reset to real timer
    vi.useRealTimers()
  })
})

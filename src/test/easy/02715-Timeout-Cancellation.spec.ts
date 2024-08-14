import { describe, expect, it, vi } from 'vitest'
import { cancellable } from '../../code/easy/02715-Timeout-Cancellation'

describe('timeout cancellation test case 🥇', () => {
  it('should call the function after the specified time', () => {
    // enable fake timer
    vi.useFakeTimers()

    const fn = vi.fn()
    const delay = 100
    cancellable(fn, [1, 2, 3], delay)

    // advance time manually
    vi.advanceTimersByTime(delay)

    expect(fn).toHaveBeenCalledWith(1, 2, 3)

    // reset to real timer
    vi.useRealTimers()
  })

  it('should not call the function if cancelled', () => {
    // enable fake timer
    vi.useFakeTimers()

    const fn = vi.fn()
    const delay = 100
    const cancel = cancellable(fn, [1, 2, 3], delay)

    // cancel time
    cancel()
    // advance timer manually
    vi.advanceTimersByTime(delay)

    expect(fn).not.toHaveBeenCalled()

    // reset to real timer
    vi.useRealTimers()
  })
})

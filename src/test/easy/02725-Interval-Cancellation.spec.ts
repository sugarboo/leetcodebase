import { describe, expect, it, vi } from 'vitest'
import type { Fn, JSONValue } from '../../code/easy/02725-Interval-Cancellation'
import { cancellable } from '../../code/easy/02725-Interval-Cancellation'

describe('cancellable', () => {
  it('should call the function immediately and repeatedly with the given interval', () => {
    // Create a mock function
    const fn = vi.fn() as Fn

    // Define the function arguments
    const args = [1, 'test', true] as JSONValue[]

    // Call cancellable() with fn, args and 1000ms interval
    const cancelFn = cancellable(fn, args, 1000)

    // Verify the function is called immediately on the first call
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith(...args)

    // Wait for 2.5 seconds to ensure the timer triggers multiple times
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Initial call + 2 interval call
        expect(fn).toHaveBeenCalledTimes(3)
        // Call the cancel function
        cancelFn()

        // Wait for 1 second to ensure the timer is canceled
        setTimeout(() => {
          // Should not increment call count
          expect(fn).toHaveBeenCalledTimes(3)
          resolve()
        }, 1000)
      }, 2500)
    })
  })

  it('should stop calling the function after cancel is called', () => {
    // Create a mock function
    const fn = vi.fn() as Fn

    // Define the function arguments
    const args = [1, 'test', true] as JSONValue[]

    // Call cancellable(), with fn, args and a 1000ms interval
    const cancelFn = cancellable(fn, args, 1000)

    // Verify the function is called immediately on the first call
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith(...args)

    // Call the cancel function to stop the calls
    cancelFn()

    // Wait for 1.5 second to ensure the timer is cancelled
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Should only have the initial call
        expect(fn).toHaveBeenCalledTimes(1)
        resolve()
      }, 1500)
    })
  })
})

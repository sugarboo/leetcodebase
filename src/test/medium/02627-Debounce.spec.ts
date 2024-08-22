import { describe, expect, it, vi } from 'vitest'
import { debounce } from '../../code/medium/02627-Debounce'

describe('debounce test case 🥇', () => {
  it('should return the expected result', () => {
    // enable fake timer
    vi.useFakeTimers()
    const fn = vi.fn()
    const debounceFn = debounce(fn, 50)
    debounceFn('hello')
    debounceFn('world')
    debounceFn('!')

    // Fn should not be called before delay
    expect(fn).not.toHaveBeenCalled()

    // advance time manually
    vi.advanceTimersByTime(50)

    // fn should just be called once
    expect(fn).toHaveBeenCalledTimes(1)
    // fn should just be called with the last arguments
    expect(fn).toHaveBeenCalledWith('!')
  })
})

describe('debounce test case 🥈', () => {
  it('should return the expected result', () => {
    // enable fake timer
    vi.useFakeTimers()
    const fn = vi.fn()
    const debounceFn = debounce(fn, 100)

    debounceFn('hello')
    // advance time manually
    vi.advanceTimersByTime(50)

    debounceFn('world')
    // advance time manually
    vi.advanceTimersByTime(50)

    debounceFn('!')

    // Fn should not be called before 100ms
    expect(fn).not.toHaveBeenCalled()

    // advance time manually
    vi.advanceTimersByTime(100)

    // fn should just be called once
    expect(fn).toHaveBeenCalledTimes(1)
    // fn should just be called with the last arguments
    expect(fn).toHaveBeenCalledWith('!')
  })
})

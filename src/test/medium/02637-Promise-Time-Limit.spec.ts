import { describe, expect, it, vi } from 'vitest'
import { type Fn, timeLimit } from '../../code/medium/02637-Promise-Time-Limit'

describe('timeLimit', () => {
  it('should resolve if function completes within time limit', async () => {
    const mockFn: Fn = vi.fn().mockResolvedValue('Success')
    const limitedFn = timeLimit(mockFn, 1000)

    await expect(limitedFn()).resolves.toBe('Success')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should reject with "Time Limit Exceeded" if function takes too long', async () => {
    const mockFn: Fn = vi.fn().mockImplementation(() => {
      return new Promise(resolve => setTimeout(() => resolve('Success'), 2000))
    })
    const limitedFn = timeLimit(mockFn, 1000)

    await expect(limitedFn()).rejects.toThrow('Time Limit Exceeded')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should pass the correct arguments to the original function', async () => {
    const mockFn: Fn = vi.fn().mockResolvedValue('Success')
    const limitedFn = timeLimit(mockFn, 1000)

    await limitedFn(1, 2, 3)

    expect(mockFn).toHaveBeenCalledWith(1, 2, 3)
  })
})

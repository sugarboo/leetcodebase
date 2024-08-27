import { describe, expect, it, vi } from 'vitest'
import { promiseAll } from '../../code/medium/02721-Execute-Asynchronous-Functions-in-Parallel'

describe('execute asynchronous functions in parallel test case 🥇', () => {
  it('should return the expected result', async () => {
    const promises = promiseAll([
      () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
    ])
    const res = await promises
    const expected = [5]
    expect(res).toStrictEqual(expected)
  })
})

describe('execute asynchronous functions in parallel test case 🥈', () => {
  it('should return the expected result', async () => {
    const promises = vi.fn().mockImplementation(() =>
      promiseAll([
        () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
        () => new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error')), 100)),
      ]),
    )
    await expect(promises()).rejects.toThrow('Error')
  })
})

describe('execute asynchronous functions in parallel test case 🥉', () => {
  it('should return the expected result', async () => {
    const promises = promiseAll([
      () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
      () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
      () => new Promise(resolve => setTimeout(() => resolve(16), 100)),
    ])
    const res = await promises
    expect(res).toStrictEqual([4, 10, 16])
  })
})

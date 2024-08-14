import { describe, expect, it } from 'vitest'
import type { P } from '../../code/easy/02723-Add-Two-Promises'
import { addTwoPromises } from '../../code/easy/02723-Add-Two-Promises'

describe('add two promises test case 🥇', () => {
  it('should return the expected result', () => {
    const promise1: P = new Promise(resolve => setTimeout(() => resolve(2), 20))
    const promise2: P = new Promise(resolve => setTimeout(() => resolve(5), 60))

    const expected = 7
    addTwoPromises(promise1, promise2).then((result) => {
      expect(result).toBe(expected)
    })
  })
})

describe('add two promises test case 🥈', () => {
  it('should return the expected result', () => {
    const promise1: P = new Promise(resolve => setTimeout(() => resolve(10), 50))
    const promise2: P = new Promise(resolve => setTimeout(() => resolve(-12), 30))

    const expected = -2
    addTwoPromises(promise1, promise2).then((result) => {
      expect(result).toBe(expected)
    })
  })
})

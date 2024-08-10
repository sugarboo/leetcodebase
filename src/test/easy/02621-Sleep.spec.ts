import { describe, expect, it } from 'vitest'
import { sleep } from '../../code/easy/02621-Sleep'

describe('sleep test case 🥇', () => {
  it('should return the expected result', () => {
    const t = Date.now()
    const millis = 100
    const expected = 1 + millis
    let result
    sleep(millis).then(() => {
      result = Date.now() - t === expected
      expect(result).toBe(expected)
    })
  })
})

describe('sleep test case 🥈', () => {
  it('should return the expected result', () => {
    const t = Date.now()
    const millis = 200
    const expected = 1 + millis
    let result
    sleep(millis).then(() => {
      result = Date.now() - t === expected
      expect(result).toBe(expected)
    })
  })
})

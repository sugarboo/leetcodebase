import { describe, expect, it } from 'vitest'
import { finalString } from '../../code/easy/02810-faulty-keyboard'

describe('faulty keyboard test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'string'
    const result = finalString(s)
    const expected = 'rtsng'
    expect(result).toBe(expected)
  })
})

describe('faulty keyboard test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'poiinter'
    const result = finalString(s)
    const expected = 'ponter'
    expect(result).toBe(expected)
  })
})


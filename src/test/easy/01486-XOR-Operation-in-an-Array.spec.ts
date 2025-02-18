import { describe, expect, it } from 'vitest'
import { xorOperation } from '../../code/easy/01486-XOR-Operation-in-an-Array'

describe('xor operation in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 5
    const start = 0
    const result = xorOperation(n, start)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('xor operation in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 4
    const start = 3
    const result = xorOperation(n, start)
    const expected = 8
    expect(result).toBe(expected)
  })
})

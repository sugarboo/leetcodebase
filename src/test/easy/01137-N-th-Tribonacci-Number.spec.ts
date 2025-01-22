import { describe, expect, it } from 'vitest'
import { tribonacci } from '../../code/easy/01137-N-th-Tribonacci-Number'

describe('n-th tribonacci number test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = tribonacci(n)
    const expected = 4
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { missingNumber } from '../../code/easy/00268-Missing-Number'

describe('missing number test case 🥇', () => {
  it('should return the expected number', () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
  })
})

describe('missing number test case 🥈', () => {
  it('should return the expected number', () => {
    expect(missingNumber([0, 1])).toBe(2)
  })
})

describe('missing number test case 🥉', () => {
  it('should return the expected number', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
  })
})

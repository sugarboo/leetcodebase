import { describe, expect, it } from 'vitest'
import { validateCoupons } from '../../code/easy/03606-Coupon-Code-Validator'

describe('coupon code validator test case 🥇', () => {
  it('should return the expected result', () => {
    const code = ['SAVE20', '', 'PHARMA5', 'SAVE@20']
    const businessLine = ['restaurant', 'grocery', 'pharmacy', 'restaurant']
    const isActive = [true, true, true, true]
    const result = validateCoupons(code, businessLine, isActive)
    const expected = ['PHARMA5', 'SAVE20']
    expect(result).toStrictEqual(expected)
  })
})

describe('coupon code validator test case 🥈', () => {
  it('should return the expected result', () => {
    const code = ['GROCERY15', 'ELECTRONICS_50', 'DISCOUNT10']
    const businessLine = ['grocery', 'electronics', 'invalid']
    const isActive = [false, true, true]
    const result = validateCoupons(code, businessLine, isActive)
    const expected = ['ELECTRONICS_50']
    expect(result).toStrictEqual(expected)
  })
})

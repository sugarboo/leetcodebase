import { describe, expect, it } from 'vitest'
import { accountBalanceAfterPurchase } from '../../code/easy/02806-account-balance-after-rounded-purchase'

describe('account balance after rounded purchase test case 🥇', () => {
  it('should return the expected result', () => {
    const purchaseAmount = 9
    const result = accountBalanceAfterPurchase(purchaseAmount)
    const expected = 90
    expect(result).toBe(expected)
  })
})

describe('account balance after rounded purchase test case 🥈', () => {
  it('should return the expected result', () => {
    const purchaseAmount = 15
    const result = accountBalanceAfterPurchase(purchaseAmount)
    const expected = 80
    expect(result).toBe(expected)
  })
})

describe('account balance after rounded purchase test case 🥉', () => {
  it('should return the expected result', () => {
    const purchaseAmount = 10
    const result = accountBalanceAfterPurchase(purchaseAmount)
    const expected = 90
    expect(result).toBe(expected)
  })
})

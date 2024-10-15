import { describe, expect, it } from 'vitest'
import { arrangeCoins } from '../../code/easy/00441-Arranging-Coins'

describe('arranging coins test case 🥇', () => {
  it('should return the expected result', () => {
    expect(arrangeCoins(1)).toBe(1)
  })
})

describe('arranging coins test case 🥈', () => {
  it('should return the expected result', () => {
    expect(arrangeCoins(3)).toBe(2)
  })
})

describe('arranging coins test case 🥉', () => {
  it('should return the expected result', () => {
    expect(arrangeCoins(5)).toBe(2)
  })
})

describe('arranging coins test case 🏅', () => {
  it('should return the expected result', () => {
    expect(arrangeCoins(8)).toBe(3)
  })
})

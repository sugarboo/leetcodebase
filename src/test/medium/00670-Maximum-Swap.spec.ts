import { describe, expect, it } from 'vitest'
import { maximumSwap } from '../../code/medium/00670-Maximum-Swap'

describe('maximum swap test case 🥇', () => {
  it('should return the result', () => {
    expect(maximumSwap(2736)).toBe(7236)
  })
})

describe('maximum swap test case 🥈', () => {
  it('should return the result', () => {
    expect(maximumSwap(9973)).toBe(9973)
  })
})

describe('maximum swap test case 🥉', () => {
  it('should return the result', () => {
    expect(maximumSwap(1993)).toBe(9913)
  })
})

describe('maximum swap test case 🏅', () => {
  it('should return the result', () => {
    expect(maximumSwap(98368)).toBe(98863)
  })
})

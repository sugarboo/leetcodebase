import { describe, expect, it } from 'vitest'
import { fairCandySwap } from '../../code/easy/00888-Fair-Candy-Swap'

describe('fair candy swap test case 🥇', () => {
  it('should return the expected result', () => {
    const aliceSizes = [1, 1]
    const bobSizes = [2, 2]
    const result = fairCandySwap(aliceSizes, bobSizes)
    const expected = [1, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('fair candy swap test case 🥈', () => {
  it('should return the expected result', () => {
    const aliceSizes = [1, 2]
    const bobSizes = [2, 3]
    const result = fairCandySwap(aliceSizes, bobSizes)
    const expected = [1, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('fair candy swap test case 🥉', () => {
  it('should return the expected result', () => {
    const aliceSizes = [2]
    const bobSizes = [1, 3]
    const result = fairCandySwap(aliceSizes, bobSizes)
    const expected = [2, 3]
    expect(result).toStrictEqual(expected)
  })
})

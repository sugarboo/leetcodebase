import { describe, expect, it } from 'vitest'
import { canPlaceFlowers } from '../../code/easy/00605-Can-Place-Flowers'

describe('can place flowers test case 🥇', () => {
  it('should return the expected result', () => {
    const flowerbed = [1, 0, 0, 0, 1]
    const n = 1
    const result = canPlaceFlowers(flowerbed, n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('can place flowers test case 🥈', () => {
  it('should return the expected result', () => {
    const flowerbed = [1, 0, 0, 0, 1]
    const n = 2
    const result = canPlaceFlowers(flowerbed, n)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('can place flowers test case 🥉', () => {
  it('should return the expected result', () => {
    const flowerbed = [0, 0, 1, 0, 0]
    const n = 1
    const result = canPlaceFlowers(flowerbed, n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('can place flowers test case 🏅', () => {
  it('should return the expected result', () => {
    const flowerbed = [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0]
    const n = 4
    const result = canPlaceFlowers(flowerbed, n)
    const expected = true
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { flowerGame } from '../../code/medium/03021-Alice-and-Bob-Playing-Flower-Game'

describe('alice and bob playing flower game test case 🥇', () => {
  it('should return the expected result', async () => {
    const n = 3
    const m = 2
    const result = flowerGame(n, m)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('alice and bob playing flower game test case 🥈', () => {
  it('should return the expected result', async () => {
    const n = 1
    const m = 1
    const result = flowerGame(n, m)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('alice and bob playing flower game test case 🥉', () => {
  it('should return the expected result', async () => {
    const n = 968
    const m = 65423
    const result = flowerGame(n, m)
    const expected = 31664732
    expect(result).toBe(expected)
  })
})

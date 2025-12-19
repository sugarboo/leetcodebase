import { describe, expect, it } from 'vitest'
import { countTime } from '../../code/easy/02437-Number-of-Valid-Clock-Times'

describe('number of valid clock times test case 🥇', () => {
  it('should return the expected result', () => {
    const time = '?5:00'
    const result = countTime(time)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('number of valid clock times test case 🥈', () => {
  it('should return the expected result', () => {
    const time = '0?:0?'
    const result = countTime(time)
    const expected = 100
    expect(result).toBe(expected)
  })
})

describe('number of valid clock times test case 🥉', () => {
  it('should return the expected result', () => {
    const time = '??:??'
    const result = countTime(time)
    const expected = 1440
    expect(result).toBe(expected)
  })
})

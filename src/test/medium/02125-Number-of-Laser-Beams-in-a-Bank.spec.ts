import { describe, expect, it } from 'vitest'
import { numberOfBeams } from '../../code/medium/02125-Number-of-Laser-Beams-in-a-Bank'

describe('number of laser beams in a bank test case 🥇', () => {
  it('should return the expected result', () => {
    const bank = ['011001', '000000', '010100', '001000']
    const result = numberOfBeams(bank)
    const expected = 8
    expect(result).toEqual(expected)
  })
})

describe('number of laser beams in a bank test case 🥈', () => {
  it('should return the expected result', () => {
    const bank = ['000', '111', '000']
    const result = numberOfBeams(bank)
    const expected = 0
    expect(result).toEqual(expected)
  })
})

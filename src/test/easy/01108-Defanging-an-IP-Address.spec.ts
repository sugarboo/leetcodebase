import { describe, expect, it } from 'vitest'
import { defangIPaddr } from '../../code/easy/01108-Defanging-an-IP-Address'

describe('defanging an ip address test case 🥇', () => {
  it('should return the expected result', () => {
    const address = '1.1.1.1'
    const result = defangIPaddr(address)
    const expected = '1[.]1[.]1[.]1'
    expect(result).toEqual(expected)
  })
})

describe('defanging an ip address test case 🥈', () => {
  it('should return the expected result', () => {
    const address = '255.100.50.0'
    const result = defangIPaddr(address)
    const expected = '255[.]100[.]50[.]0'
    expect(result).toEqual(expected)
  })
})

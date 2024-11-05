import { describe, expect, it } from 'vitest'
import { minChanges } from '../../code/medium/02914-Minimum-Number-of-Changes-to-Make-Binary-String-Beautiful'

describe('minimum number of changes to make binary string beautiful test case 🥇', () => {
  it('should return the expected result', async () => {
    const s = '1001'
    const result = minChanges(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum number of changes to make binary string beautiful test case 🥈', () => {
  it('should return the expected result', async () => {
    const s = '10'
    const result = minChanges(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum number of changes to make binary string beautiful test case 🥉', () => {
  it('should return the expected result', async () => {
    const s = '0000'
    const result = minChanges(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('minimum number of changes to make binary string beautiful test case 🏅', () => {
  it('should return the expected result', async () => {
    const s = '10010100000111001101011000000010110011'
    const result = minChanges(s)
    const expected = 8
    expect(result).toBe(expected)
  })
})

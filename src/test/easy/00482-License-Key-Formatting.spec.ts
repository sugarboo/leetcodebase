import { describe, expect, it } from 'vitest'
import { licenseKeyFormatting } from '../../code/easy/00482-License-Key-Formatting'

describe('license key formatting test case 🥇', () => {
  it('should return the expected number', () => {
    const s = '5F3Z-2e-9-w'
    const result = licenseKeyFormatting(s, 4)
    const expected = '5F3Z-2E9W'
    expect(result).toBe(expected)
  })
})

describe('license key formatting test case 🥈', () => {
  it('should return the expected number', () => {
    const s = '2-5g-3-J'
    const result = licenseKeyFormatting(s, 2)
    const expected = '2-5G-3J'
    expect(result).toBe(expected)
  })
})

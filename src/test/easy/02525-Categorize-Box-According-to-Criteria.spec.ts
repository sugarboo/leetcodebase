import { describe, expect, it } from 'vitest'
import { categorizeBox } from '../../code/easy/02525-Categorize-Box-According-to-Criteria'

describe('categorize box according to criteria test case 🥇', () => {
  it('should return the expected result', () => {
    const length = 1000
    const width = 35
    const height = 700
    const mass = 300
    const result = categorizeBox(length, width, height, mass)
    const expected = 'Heavy'
    expect(result).toBe(expected)
  })
})

describe('categorize box according to criteria test case 🥈', () => {
  it('should return the expected result', () => {
    const length = 200
    const width = 50
    const height = 800
    const mass = 50
    const result = categorizeBox(length, width, height, mass)
    const expected = 'Neither'
    expect(result).toBe(expected)
  })
})

describe('categorize box according to criteria test case 🥉', () => {
  it('should return the expected result', () => {
    const length = 2909
    const width = 3968
    const height = 3272
    const mass = 727
    const result = categorizeBox(length, width, height, mass)
    const expected = 'Both'
    expect(result).toBe(expected)
  })
})

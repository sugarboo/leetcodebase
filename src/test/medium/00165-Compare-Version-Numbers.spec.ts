import { describe, expect, it } from 'vitest'
import { compareVersion } from '../../code/medium/00165-Compare-Version-Numbers'

describe('compare version numbers test case 🥇', () => {
  it('should return the expected result', () => {
    const version1 = '1.2'
    const version2 = '1.10'
    const result = compareVersion(version1, version2)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('compare version numbers test case 🥈', () => {
  it('should return the expected result', () => {
    const version1 = '1.01'
    const version2 = '1.001'
    const result = compareVersion(version1, version2)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('compare version numbers test case 🥉', () => {
  it('should return the expected result', () => {
    const version1 = '1.0'
    const version2 = '1.0.0.0'
    const result = compareVersion(version1, version2)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('compare version numbers test case 🏅', () => {
  it('should return the expected result', () => {
    const version1 = '1.0.1'
    const version2 = '1'
    const result = compareVersion(version1, version2)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('compare version numbers test case 🏆', () => {
  it('should return the expected result', () => {
    const version1 = '1.0.1'
    const version2 = '1.0.0.1'
    const result = compareVersion(version1, version2)
    const expected = 1
    expect(result).toBe(expected)
  })
})

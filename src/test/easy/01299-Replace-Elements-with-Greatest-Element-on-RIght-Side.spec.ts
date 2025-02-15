import { describe, expect, it } from 'vitest'
import { replaceElements } from './../../code/easy/01299-Replace-Elements-with-Greatest-Element-on-RIght-Side'

describe('replace elements with greatest element on right side test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [17, 18, 5, 4, 6, 1]
    const result = replaceElements(arr)
    const expected = [18, 6, 6, 6, 1, -1]
    expect(result).toStrictEqual(expected)
  })
})

describe('replace elements with greatest element on right side test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [4, 3, 2, 1]
    const result = replaceElements(arr)
    const expected = [3, 2, 1, -1]
    expect(result).toStrictEqual(expected)
  })
})

describe('replace elements with greatest element on right side test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = replaceElements(arr)
    const expected = [5, 5, 5, 5, -1]
    expect(result).toStrictEqual(expected)
  })
})

describe('replace elements with greatest element on right side test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = [100]
    const result = replaceElements(arr)
    const expected = [-1]
    expect(result).toStrictEqual(expected)
  })
})

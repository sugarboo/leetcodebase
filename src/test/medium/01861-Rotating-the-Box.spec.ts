import { describe, expect, it } from 'vitest'
import { rotateTheBox } from '../../code/medium/01861-Rotating-the-Box'

describe('rotating the box test case 🥇', () => {
  it('should return the expected result', () => {
    const box = [['#', '.', '#']]
    const result = rotateTheBox(box)
    const expected = [['.'], ['#'], ['#']]
    expect(result).toStrictEqual(expected)
  })
})

describe('rotating the box test case 🥈', () => {
  it('should return the expected result', () => {
    const box = [['#', '.', '*', '.'], ['#', '#', '*', '.']]
    const result = rotateTheBox(box)
    const expected = [['#', '.'], ['#', '#'], ['*', '*'], ['.', '.']]
    expect(result).toStrictEqual(expected)
  })
})

describe('rotating the box test case 🥉', () => {
  it('should return the expected result', () => {
    const box = [['#', '#', '*', '.', '*', '.'], ['#', '#', '#', '*', '.', '.'], ['#', '#', '#', '.', '#', '.']]
    const result = rotateTheBox(box)
    const expected = [['.', '#', '#'], ['.', '#', '#'], ['#', '#', '*'], ['#', '*', '.'], ['#', '.', '*'], ['#', '.', '.']]
    expect(result).toStrictEqual(expected)
  })
})

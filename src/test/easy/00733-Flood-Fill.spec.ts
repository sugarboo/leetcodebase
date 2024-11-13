import { describe, expect, it } from 'vitest'
import { floodFill } from '../../code/easy/00733-Flood-Fill'

describe('flood fill test case 🥇', () => {
  it('should return the expected result', () => {
    const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
    const sr = 1
    const sc = 1
    const color = 2
    const result = floodFill(image, sr, sc, color)
    const expected = [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
    expect(result).toStrictEqual(expected)
  })
})

describe('flood fill test case 🥈', () => {
  it('should return the expected result', () => {
    const image = [[0, 0, 0], [0, 0, 0]]
    const sr = 0
    const sc = 0
    const color = 0
    const result = floodFill(image, sr, sc, color)
    const expected = [[0, 0, 0], [0, 0, 0]]
    expect(result).toStrictEqual(expected)
  })
})

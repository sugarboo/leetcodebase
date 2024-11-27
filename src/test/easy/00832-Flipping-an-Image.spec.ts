import { describe, expect, it } from 'vitest'
import { flipAndInvertImage } from '../../code/easy/00832-Flipping-an-Image'

describe('flipping an image test case 🥇', () => {
  it('should return the expected result', () => {
    const image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
    const result = flipAndInvertImage(image)
    const expected = [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
    expect(result).toStrictEqual(expected)
  })
})

describe('flipping an image test case 🥈', () => {
  it('should return the expected result', () => {
    const image = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
    const result = flipAndInvertImage(image)
    const expected = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]
    expect(result).toStrictEqual(expected)
  })
})

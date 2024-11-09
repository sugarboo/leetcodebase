import { describe, expect, it } from 'vitest'
import { imageSmoother } from '../../code/easy/00661-Image-Smoother'

describe('image smoother test case 🥇', () => {
  it('should return the expected result', () => {
    const img = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
    const result = imageSmoother(img)
    const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    expect(result).toStrictEqual(expected)
  })
})

describe('image smoother test case 🥈', () => {
  it('should return the expected result', () => {
    const img = [[100, 200, 100], [200, 50, 200], [100, 200, 100]]
    const result = imageSmoother(img)
    const expected = [[137, 141, 137], [141, 138, 141], [137, 141, 137]]
    expect(result).toStrictEqual(expected)
  })
})

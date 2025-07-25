import { describe, expect, it } from 'vitest'
import { findRotation } from '../../code/easy/01886-Determine-Whether-Matrix-Can-Be-Obtained-By-Rotation'

describe('determine whether matrix can be obtained by rotation test case 🥇', () => {
  it('should return the expected result', () => {
    const mat = [
      [0, 1],
      [1, 0],
    ]
    const target = [
      [1, 0],
      [0, 1],
    ]
    const result = findRotation(mat, target)
    const expected = true
    expect(result).toStrictEqual(expected)
  })
})

describe('determine whether matrix can be obtained by rotation test case 🥈', () => {
  it('should return the expected result', () => {
    const mat = [[0, 1], [1, 1]]
    const target = [[1, 0], [0, 1]]
    const result = findRotation(mat, target)
    const expected = false
    expect(result).toStrictEqual(expected)
  })
})

describe('determine whether matrix can be obtained by rotation test case 🥉', () => {
  it('should return the expected result', () => {
    const mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
    const target = [[1, 1, 1], [0, 1, 0], [0, 0, 0]]
    const result = findRotation(mat, target)
    const expected = true
    expect(result).toStrictEqual(expected)
  })
})

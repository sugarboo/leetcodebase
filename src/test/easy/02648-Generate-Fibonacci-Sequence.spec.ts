import { describe, expect, it } from 'vitest'
import { fibGenerator } from '../../code/easy/02648-Generate-Fibonacci-Sequence'

describe('generate fibonacci sequence test case 🥇', () => {
  it('should return the expected array', () => {
    const gen = fibGenerator()
    const result = [
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
    ]
    const expected = [0, 1, 1, 2, 3]
    expect(result).toStrictEqual(expected)
  })
})

describe('generate fibonacci sequence test case 🥈', () => {
  it('should return the expected array', () => {
    const _gen = fibGenerator()
    const result = []
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

describe('generate fibonacci sequence test case 🥉', () => {
  it('should return the expected array', () => {
    const gen = fibGenerator()
    const result = [
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
      gen.next().value,
    ]
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    expect(result).toStrictEqual(expected)
  })
})

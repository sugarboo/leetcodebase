import { describe, expect, it } from 'vitest'
import { groupBy } from '../../code/medium/02631-Group-By'

describe('group by test case 🥇', () => {
  it('should return the expected result', () => {
    const list = [
      { id: '1' },
      { id: '1' },
      { id: '2' },
    ]
    const fn = item => item.id
    const result = groupBy.call(list, fn)
    const expected = {
      1: [{ id: '1' }, { id: '1' }],
      2: [{ id: '2' }],
    }
    expect(result).toStrictEqual(expected)
  })
})

describe('group by test case 🥈', () => {
  it('should return the expected result', () => {
    const list = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9],
    ]
    const fn = list => String(list[0])
    const result = groupBy.call(list, fn)
    const expected = {
      1: [[1, 2, 3], [1, 3, 5], [1, 5, 9]],
    }
    expect(result).toStrictEqual(expected)
  })
})

describe('group by test case 🥉', () => {
  it('should return the expected result', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const fn = n => String(n > 5)
    const result = groupBy.call(list, fn)
    const expected = {
      true: [6, 7, 8, 9, 10],
      false: [1, 2, 3, 4, 5],
    }
    expect(result).toStrictEqual(expected)
  })
})

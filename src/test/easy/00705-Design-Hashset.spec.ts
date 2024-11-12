import { describe, expect, it } from 'vitest'
import { MyHashSet } from '../../code/easy/00705-Design-Hashset'

describe('design hashset test case 🥇', () => {
  it('should return the expected result', () => {
    const set = new MyHashSet()
    set.add(1)
    expect(set.set).toStrictEqual([1])
    set.add(2)
    expect(set.set).toStrictEqual([1, 2])
    expect(set.contains(1)).toBe(true)
    expect(set.contains(3)).toBe(false)
    set.add(2)
    expect(set.set).toStrictEqual([1, 2])
    expect(set.contains(2)).toBe(true)
    set.remove(2)
    expect(set.set).toStrictEqual([1])
    expect(set.contains(2)).toBe(false)
  })
})

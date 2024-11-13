import { describe, expect, it } from 'vitest'
import { MyHashMap } from '../../code/easy/00706-Design-Hashmap'

describe('design hashmap test case 🥇', () => {
  it('should return the expected result', () => {
    const map = new MyHashMap()
    map.put(1, 1)
    map.put(2, 2)
    expect(map.get(1)).toBe(1)
    expect(map.get(3)).toBe(-1)
    map.put(2, 1)
    expect(map.get(2)).toBe(1)
    map.remove(2)
    expect(map.get(2)).toBe(-1)
  })
})

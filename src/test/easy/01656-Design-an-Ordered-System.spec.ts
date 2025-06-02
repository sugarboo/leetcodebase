import { describe, expect, it } from 'vitest'
import { OrderedStream } from '../../code/easy/01656-Design-an-Ordered-System'

describe('design an ordered system test case 🥇', () => {
  it('should return the expected result', () => {
    const os = new OrderedStream(5)
    expect(os.insert(3, 'ccccc')).toEqual([])
    expect(os.insert(1, 'aaaaa')).toEqual(['aaaaa'])
    expect(os.insert(2, 'bbbbb')).toEqual(['bbbbb', 'ccccc'])
    expect(os.insert(5, 'eeeee')).toEqual([])
    expect(os.insert(4, 'ddddd')).toEqual(['ddddd', 'eeeee'])
  })
})

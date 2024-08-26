import { describe, expect, it } from 'vitest'
import { EventEmitter } from '../../code/medium/02694-Event-Emitter'

describe('event emitter test case 🥇', () => {
  it('should return the expected result', () => {
    const emitter = new EventEmitter()
    expect(emitter.emit('firstEvent')).toStrictEqual([])
    emitter.subscribe('firstEvent', () => 5)
    emitter.subscribe('firstEvent', () => 6)
    expect(emitter.emit('firstEvent')).toStrictEqual([5, 6])
  })
})

describe('event emitter test case 🥈', () => {
  it('should return the expected result', () => {
    const emitter = new EventEmitter()
    expect(emitter.emit('firstEvent')).toStrictEqual([])
    emitter.subscribe('firstEvent', (...args) => args.join(','))
    expect(emitter.emit('firstEvent', [1, 2, 3])).toStrictEqual(['1,2,3'])
    expect(emitter.emit('firstEvent', [3, 4, 6])).toStrictEqual(['3,4,6'])
  })
})

describe('event emitter test case 🥉', () => {
  it('should return the expected result', () => {
    const emitter = new EventEmitter()
    expect(emitter.emit('firstEvent')).toStrictEqual([])
    const sub = emitter.subscribe('firstEvent', (...args) => args.join(','))
    expect(emitter.emit('firstEvent', [1, 2, 3])).toStrictEqual(['1,2,3'])
    sub.unsubscribe()
    expect(emitter.emit('firstEvent', [4, 5, 6])).toStrictEqual([])
  })
})

describe('event emitter test case 🏅', () => {
  it('should return the expected result', () => {
    const emitter = new EventEmitter()
    expect(emitter.emit('firstEvent')).toStrictEqual([])
    const sub1 = emitter.subscribe('firstEvent', (x: number) => x + 1)
    const _sub2 = emitter.subscribe('firstEvent', (x: number) => x + 2)
    sub1.unsubscribe()
    expect(emitter.emit('firstEvent', [5])).toStrictEqual([7])
  })
})

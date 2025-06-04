import { describe, expect, it } from 'vitest'
import { interpret } from '../../code/easy/01678-Goal-Parser-Interpretation'

describe('goal parser interpretation test case 🥇', () => {
  it('should return the expected result', () => {
    const command = 'G()(al)'
    const result = interpret(command)
    const expected = 'Goal'
    expect(result).toBe(expected)
  })
})

describe('goal parser interpretation test case 🥈', () => {
  it('should return the expected result', () => {
    const command = 'G()()()()(al)'
    const result = interpret(command)
    const expected = 'Gooooal'
    expect(result).toBe(expected)
  })
})

describe('goal parser interpretation test case 🥉', () => {
  it('should return the expected result', () => {
    const command = '(al)G(al)()()G'
    const result = interpret(command)
    const expected = 'alGalooG'
    expect(result).toBe(expected)
  })
})

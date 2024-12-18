import { describe, expect, it } from 'vitest'
import { reverseOnlyLetters } from '../../code/easy/00917-Reverse-Only-Letters'

describe('reverse only letters test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'ab-cd'
    const result = reverseOnlyLetters(s)
    const expected = 'dc-ba'
    expect(result).toBe(expected)
  })
})

describe('reverse only letters test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'a-bC-dEf-ghIj'
    const result = reverseOnlyLetters(s)
    const expected = 'j-Ih-gfE-dCba'
    expect(result).toBe(expected)
  })
})

describe('reverse only letters test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'Test1ng-Leet=code-Q!'
    const result = reverseOnlyLetters(s)
    const expected = 'Qedo1ct-eeLg=ntse-T!'
    expect(result).toBe(expected)
  })
})

describe('reverse only letters test case 🏅', () => {
  it('should return the expected result', () => {
    const s = '!SFssad-asdKK-dee,Ppq.AA-ntrfnXS!'
    const result = reverseOnlyLetters(s)
    const expected = '!SXnfrt-nAAqp-Pee,dKK.ds-adassFS!'
    expect(result).toBe(expected)
  })
})

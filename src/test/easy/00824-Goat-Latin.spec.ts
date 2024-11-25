import { describe, expect, it } from 'vitest'
import { toGoatLatin } from '../../code/easy/00824-Goat-Latin'

describe('goat latin test case 🥇', () => {
  it('should return the expected result', () => {
    const sentence = 'I speak Goat Latin'
    const result = toGoatLatin(sentence)
    const expected = 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'
    expect(result).toBe(expected)
  })
})

describe('goat latin test case 🥈', () => {
  it('should return the expected result', () => {
    const sentence = 'The quick brown fox jumped over the lazy dog'
    const result = toGoatLatin(sentence)
    const expected = 'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa'
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { twoEditWords } from '../../code/medium/02452-Words-Within-Two-Edits-of-Dictionary'

describe('words within two edits of dictionary test case 🥇', () => {
  it('should return the expected result', () => {
    const queries = ['word', 'note', 'ants', 'wood']
    const dictionary = ['wood', 'joke', 'moat']
    const result = twoEditWords(queries, dictionary)
    expect(result).toStrictEqual(['word', 'note', 'wood'])
  })
})

describe('words within two edits of dictionary test case 🥈', () => {
  it('should return the expected result', () => {
    const queries = ['yes']
    const dictionary = ['not']
    const result = twoEditWords(queries, dictionary)
    expect(result).toStrictEqual([])
  })
})

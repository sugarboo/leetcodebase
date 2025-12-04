import { describe, expect, it } from 'vitest'
import { minNumberOfHours } from '../../code/easy/02383-Minimum-Hours-of-Training-to-Win-a-Competition'

describe('minimum hours of training to win a competition test case 🥇', () => {
  it('should return the expected result', () => {
    const initialEnergy = 5
    const initialExperience = 3
    const energy = [1, 4, 3, 2]
    const experience = [2, 6, 3, 1]
    const result = minNumberOfHours(initialEnergy, initialExperience, energy, experience)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('minimum hours of training to win a competition test case 🥈', () => {
  it('should return the expected result', () => {
    const initialEnergy = 1
    const initialExperience = 1
    const energy = [1, 1, 1, 1]
    const experience = [1, 1, 1, 1]
    const result = minNumberOfHours(initialEnergy, initialExperience, energy, experience)
    const expected = 5
    expect(result).toBe(expected)
  })
})

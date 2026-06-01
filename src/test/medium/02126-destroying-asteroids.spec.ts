import { describe, expect, it } from 'vitest'
import { asteroidsDestroyed } from '../../code/medium/02126-destroying-asteroids'

describe('destroying asteroids test case 🥇', () => {
  it('should return the expected result', () => {
    const mass = 10
    const asteroids = [3, 9, 19, 5, 21]
    const result = asteroidsDestroyed(mass, asteroids)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('destroying asteroids test case 🥈', () => {
  it('should return the expected result', () => {
    const mass = 5
    const asteroids = [4, 9, 23, 4]
    const result = asteroidsDestroyed(mass, asteroids)
    const expected = false
    expect(result).toBe(expected)
  })
})

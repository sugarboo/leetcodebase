import { describe, expect, it } from 'vitest'
import { minPartitions } from '../../code/medium/01689-Partitioning-Into-Minimum-Number-Of-Deci-Binary-Numbers'

describe('partitioning into minimum number of deci-binary numbers test case 🥇', () => {
  it('should return the expected result', () => {
    const n = '32'
    const result = minPartitions(n)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('partitioning into minimum number of deci-binary numbers test case 🥈', () => {
  it('should return the expected result', () => {
    const n = '82734'
    const result = minPartitions(n)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('partitioning into minimum number of deci-binary numbers test case 🥉', () => {
  it('should return the expected result', () => {
    const n = '27346209830709182346'
    const result = minPartitions(n)
    const expected = 9
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { partitionLabels } from '../../code/medium/00763-Partition-Labels'

describe('partition labels test case 🥇', () => {
  it('should return the expected result', () => {
    expect(partitionLabels('ababcbacadefegdehijhklij')).toEqual([9, 7, 8])
  })
})

describe('partition labels test case 🥈', () => {
  it('should return the expected result', () => {
    expect(partitionLabels('eccbbbbdec')).toEqual([10])
  })
})

describe('partition labels test case 🥉', () => {
  it('should return the expected result', () => {
    expect(partitionLabels('abacbadehijhijhklij')).toEqual([6, 1, 1, 11])
  })
})

import { describe, expect, it } from 'vitest'
import { checkTree } from '../../code/easy/02236-Root-Equals-Sum-of-Children'
import { TreeNode } from '../../utils/TreeNode'

describe('root equals sum of children test case 🥇', () => {
  it('should return the expected result', () => {
    const root = new TreeNode(10, new TreeNode(4), new TreeNode(6))
    const result = checkTree(root)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('root equals sum of children test case 🥈', () => {
  it('should return the expected result', () => {
    const root = new TreeNode(5, new TreeNode(3), new TreeNode(1))
    const result = checkTree(root)
    const expected = false
    expect(result).toBe(expected)
  })
})

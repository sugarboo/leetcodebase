import { describe, expect, it } from 'vitest'
import { removeSubfolders } from '../../code/medium/01233-Remove-Sub-Folders-from-the-Filesystem'

describe('remove subfolders from the filesystem test case 🥇', () => {
  it('should return the expected result', () => {
    const folder = ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']
    const result = removeSubfolders(folder)
    const expected = ['/a', '/c/d', '/c/f']
    expect(result).toStrictEqual(expected)
  })
})

describe('remove subfolders from the filesystem test case 🥈', () => {
  it('should return the expected result', () => {
    const folder = ['/a', '/a/b/c', '/a/b/d']
    const result = removeSubfolders(folder)
    const expected = ['/a']
    expect(result).toStrictEqual(expected)
  })
})

describe('remove subfolders from the filesystem test case 🥉', () => {
  it('should return the expected result', () => {
    const folder = ['/a/b/c', '/a/b/ca', '/a/b/d']
    const result = removeSubfolders(folder)
    const expected = ['/a/b/c', '/a/b/ca', '/a/b/d']
    expect(result).toStrictEqual(expected)
  })
})

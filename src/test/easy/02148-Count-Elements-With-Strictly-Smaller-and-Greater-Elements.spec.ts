import { describe, expect, it } from 'vitest'
import { countElements } from '../../code/easy/02148-Count-Elements-With-Strictly-Smaller-and-Greater-Elements'

describe('count elements with strictly smaller and greater elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [11, 7, 2, 15]
    const result = countElements(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count elements with strictly smaller and greater elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [-3, 3, 3, 90]
    const result = countElements(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

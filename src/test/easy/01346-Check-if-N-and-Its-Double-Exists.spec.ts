import { describe, expect, it } from 'vitest'
import { checkIfExist } from '../../code/easy/01346-Check-if-N-and-Its-Double-Exists'

describe('check if N and its double exists test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [10, 2, 5, 3]
    const result = checkIfExist(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if N and its double exists test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [3, 1, 7, 11]
    const result = checkIfExist(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if N and its double exists test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [357, -53, 277, -706, 980, 826, 93, -352, -669, 989, -193, 920, 209, -574, -389, 221, 383, 352, 665, 873, 759, -480, -64, -103, -721, -623, -642, -680, 20, -168, 528, -336, -656, 264, 581, -714, -458, 721, 815, 106, 328, 476, 351, 325, -954, 890, -174, 635, 95, -443, 338, 907, -648, 113, -278, 498, 532, -778, 95, -487, -909, -642, 774, 296, 417, -132, -951, 857, -867, 321, -960, 180, 108, -984, -54, 103, 703, -118, -252, 235, 577, -703, 842, -638, -888, -981, -246, 484, 202, 328, 661, 447, -831, 946, -888, -749, -702]
    const result = checkIfExist(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

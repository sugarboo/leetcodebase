import { describe, expect, it } from 'vitest'
import { maxMoves } from '../../code/medium/02684-Maximum-Number-of-Moves-in-a-Grid'

describe('maximum number of moves in a grid test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]]
    const result = maxMoves(grid)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum number of moves in a grid test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[3, 2, 4], [2, 1, 9], [1, 1, 7]]
    const result = maxMoves(grid)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('maximum number of moves in a grid test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [[56, 137, 288, 177, 252, 297, 63, 107, 252, 37], [102, 89, 50, 276, 41, 176, 105, 242, 282, 259], [276, 187, 262, 117, 92, 57, 13, 224, 80, 167], [246, 263, 277, 223, 115, 156, 231, 294, 8, 253], [70, 195, 78, 101, 136, 256, 59, 213, 120, 42], [186, 74, 265, 258, 285, 181, 21, 193, 53, 278], [132, 283, 229, 154, 183, 299, 6, 16, 144, 61], [186, 99, 123, 245, 41, 140, 295, 111, 289, 230], [285, 242, 278, 146, 286, 128, 180, 54, 245, 239], [281, 166, 159, 51, 148, 113, 287, 44, 133, 214], [112, 74, 149, 67, 167, 232, 5, 115, 279, 27], [16, 288, 77, 159, 288, 62, 4, 71, 221, 195]]
    const result = maxMoves(grid)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('maximum number of moves in a grid test case 🏅', () => {
  it('should return the expected result', () => {
    const grid = [[1000000, 92910, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068], [1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118]]
    const result = maxMoves(grid)
    const expected = 49
    expect(result).toBe(expected)
  })
})

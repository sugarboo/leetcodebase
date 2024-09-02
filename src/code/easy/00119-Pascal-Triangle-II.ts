import { generatePascalTriangle } from './00118-Pascal-Triangle'

export function getRow(rowIndex: number): number[] {
  const matrix = generatePascalTriangle(rowIndex + 1)
  return matrix[rowIndex]
}

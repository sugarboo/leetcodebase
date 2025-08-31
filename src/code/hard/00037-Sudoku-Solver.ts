export function solveSudoku(board: string[][]): void {
  solve(board)
}

function solve(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        for (let k = 1; k <= 9; k++) {
          const char = k.toString()
          if (isSafe(board, i, j, char)) {
            board[i][j] = char
            if (solve(board)) {
              return true
            }
            board[i][j] = '.'
          }
        }
        return false
      }
    }
  }
  return true
}

function isSafe(board: string[][], row: number, col: number, char: string): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === char)
      return false
    if (board[i][col] === char)
      return false
    const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3)
    const boxCol = 3 * Math.floor(col / 3) + i % 3
    if (board[boxRow][boxCol] === char)
      return false
  }
  return true
}

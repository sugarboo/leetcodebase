export function isValidSudoku(board: string[][]): boolean {
  // Frequency array for 9 rows
  const rows = Array(9).fill(0).map(() => Array(9).fill(0))
  // Frequency array for 9 columns
  const columns = Array(9).fill(0).map(() => Array(9).fill(0))
  // Frequency array for 9 3x3 boxes
  const boxes = Array(3).fill(0).map(() => Array(3).fill(0).map(() => Array(9).fill(0)))

  const base = '0'.charCodeAt(0)

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const char = board[i][j]
      if (char !== '.') {
        // Convert character to index (0-8)
        const index = char.charCodeAt(0) - base - 1
        // Increment frequency for the row, column, and box
        rows[i][index]++
        columns[j][index]++
        boxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++
        // If any frequency is greater than 1, return false
        if (rows[i][index] > 1 || columns[j][index] > 1 || boxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false
        }
      }
    }
  }

  return true
}

export function numRookCaptures(board: string[][]): number {
  const rook = board.find(row => row.includes('R')) as string[]
  const rookRow = board.indexOf(rook)
  const rookCol = rook.indexOf('R')

  let num = 0

  // Upward direction
  for (let i = rookRow - 1; i >= 0; i--) {
    if (board[i][rookCol] === 'B') {
      break
    }
    if (board[i][rookCol] === 'p') {
      num++
      break
    }
  }
  // Downward direction
  for (let i = rookRow + 1; i < board.length; i++) {
    if (board[i][rookCol] === 'B') {
      break
    }
    if (board[i][rookCol] === 'p') {
      num++
      break
    }
  }
  // Leftward direction
  for (let j = rookCol - 1; j >= 0; j--) {
    if (board[rookRow][j] === 'B') {
      break
    }
    if (board[rookRow][j] === 'p') {
      num++
      break
    }
  }
  // Rightward direction
  for (let j = rookCol + 1; j < rook.length; j++) {
    if (board[rookRow][j] === 'B') {
      break
    }
    if (board[rookRow][j] === 'p') {
      num++
      break
    }
  }

  return num
}

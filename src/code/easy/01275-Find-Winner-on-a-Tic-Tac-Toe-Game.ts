export function tictactoe(moves: number[][]): string {
  // Create a 3x3 board
  const board: (string | null)[][] = Array.from({ length: 3 }, () => Array(3).fill(null))
  // Fill the board with the moves

  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i]

    board[row][col] = i % 2 === 0 ? 'A' : 'B'
  }

  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== null) {
      return board[i][0]!
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== null) {
      return board[0][i]!
    }
  }

  // Check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) {
    return board[0][0]!
  }

  // Check reverse diagonals
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null) {
    return board[0][2]!
  }

  // If there are no winners, return 'Draw' if there are 9 moves, otherwise return 'Pending'
  return moves.length === 9 ? 'Draw' : 'Pending'
}

export function rotateTheBox(box: string[][]): string[][] {
  const m = box.length
  const n = box[0].length

  // Initialize the rotated box, let each cell to be empty first
  const rotated: string[][] = Array.from({ length: n }, () => Array(m).fill('.'))

  // Rotate the box 90 degrees clockwise
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rotated[i][j] = box[m - 1 - j][i]
    }
  }

  // Loop each column
  for (let col = 0; col < m; col++) {
    // Track the lowest empty space in current column
    let emptyRow = n - 1
    for (let row = n - 1; row >= 0; row--) {
      if (rotated[row][col] === '#') {
        // Move the stone down to the lowest empty position
        rotated[row][col] = '.'
        rotated[emptyRow][col] = '#'
        // Update the next empty space
        emptyRow--
      } else if (rotated[row][col] === '*') {
        // Obstacle resets the empty space tracking
        emptyRow = row - 1
      }
    }
  }

  return rotated
}

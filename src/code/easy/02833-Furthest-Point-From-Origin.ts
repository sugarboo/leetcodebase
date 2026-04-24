export function furthestDistanceFromOrigin(moves: string): number {
  let leftCount = 0
  let rightCount = 0
  let underlineCount = 0

  for (const move of moves) {
    switch (move) {
      case 'L': {
        leftCount++
        break
      }
      case 'R': {
        rightCount++
        break
      }
      case '_': {
        underlineCount++
        break
      }
      default: {
        break
      }
    }
  }

  return Math.abs(leftCount - rightCount) + underlineCount
}
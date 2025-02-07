export function checkStraightLine(coordinates: number[][]): boolean {
  const [x1, y1] = coordinates[0]
  const [x2, y2] = coordinates[1]
  const dx = x2 - x1
  const dy = y2 - y1

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i]
    // If the slope is not the same, return false
    if (dx * (y - y1) !== dy * (x - x1)) {
      return false
    }
  }
  return true
}

export function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  const [x1, y1, x2, y2] = rec1
  const [m1, n1, m2, n2] = rec2

  // Check if either rectangle is actually a line
  if (x1 === x2 || y1 === y2 || m1 === m2 || n1 === n2) {
    return false
  }

  if (x2 <= m1 || y2 <= n1 || x1 >= m2 || y1 >= n2) {
    return false
  }

  return true
}

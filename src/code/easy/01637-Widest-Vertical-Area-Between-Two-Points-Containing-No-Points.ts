export function maxWidthOfVerticalArea(points: number[][]): number {
  const sortedPoints = points.sort((a, b) => a[0] - b[0])
  let maxWidth = 0
  for (let i = 1; i < sortedPoints.length; i++) {
    maxWidth = Math.max(maxWidth, sortedPoints[i][0] - sortedPoints[i - 1][0])
  }
  return maxWidth
}

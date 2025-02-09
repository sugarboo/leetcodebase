export function minTimeToVisitAllPoints(points: number[][]): number {
  let time = 0

  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i]
    const next = points[i + 1]

    // calculate the distance between the current and next point
    const dx = Math.abs(current[0] - next[0])
    const dy = Math.abs(current[1] - next[1])

    // add the maximum of the two distances to the time
    time += Math.max(dx, dy)
  }

  return time
}

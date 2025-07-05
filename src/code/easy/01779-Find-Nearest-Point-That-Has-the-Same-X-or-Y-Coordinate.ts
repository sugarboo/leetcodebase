export function nearestValidPoint(x: number, y: number, points: number[][]) {
  let idx = -1
  let minDistance = Number.MAX_SAFE_INTEGER

  points.forEach(([px, py], i) => {
    if (px === x || py === y) {
      const distance = Math.abs(px - x) + Math.abs(py - y)
      if (distance < minDistance) {
        minDistance = distance
        idx = i
      }
    }
  })

  return idx
}

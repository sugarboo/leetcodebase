export function numberOfPairs(points: number[][]) {
  let ans = 0
  const n = points.length

  for (let i = 0; i < n; i++) {
    const pointA = points[i]

    for (let j = 0; j < n; j++) {
      const pointB = points[j]

      if (i === j || pointA[0] > pointB[0] || pointA[1] < pointB[1]) {
        continue
      }

      if (points.length === 2) {
        ans++
        continue
      }

      let isIllegal = false
      for (const point of points) {
        if (point === pointA || point === pointB) {
          continue
        }

        const isXContained = point[0] >= pointA[0] && point[0] <= pointB[0]
        const isYContained = point[1] <= pointA[1] && point[1] >= pointB[1]

        isIllegal = isXContained && isYContained

        if (isIllegal) {
          break
        }
      }

      if (!isIllegal) {
        ans++
      }
    }
  }

  return ans
}

function maxScoreSightseeingPair1(values: number[]): number {
  let maxScore = 0

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      const score = values[i] + values[j] + i - j
      maxScore = Math.max(maxScore, score)
    }
  }

  return maxScore
}

function maxScoreSightseeingPair2(values: number[]): number {
  const n = values.length
  let maxScore = 0
  let maxValue = 0

  for (let i = 0; i < n; i++) {
    maxScore = Math.max(maxScore, maxValue + values[i] - i)
    maxValue = Math.max(maxValue, values[i] + i)
  }

  return maxScore
}

export function maxScoreSightseeingPair(values: number[]): number {
  return maxScoreSightseeingPair2(values)
}

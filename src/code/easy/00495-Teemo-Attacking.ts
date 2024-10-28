export function findPoisonedDuration(timeSeries: number[], duration: number): number {
  const n = timeSeries.length
  if (n === 0) {
    return 0
  }

  let total = 0

  for (let i = 0; i < n - 1; i++) {
    // At each step add to the total time the minimum between interval length and the poisoning time duration
    total += Math.min(timeSeries[i + 1] - timeSeries[i], duration)
  }

  // Return total + duration to take the last attack into account
  return total + duration
}

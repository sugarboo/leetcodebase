export function largestAltitude(gain: number[]): number {
  let prefixSum = 0

  const altitudes = gain.map(g => (prefixSum += g))

  return Math.max(0, ...altitudes)
}

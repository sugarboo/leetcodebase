export function maxDifference(s: string): number {
  const map = new Map<string, number>()

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  let minEven = Number.MAX_SAFE_INTEGER
  let maxOdd = 0

  for (const count of map.values()) {
    if (count % 2 === 0) {
      minEven = Math.min(minEven, count)
    } else {
      maxOdd = Math.max(maxOdd, count)
    }
  }

  return maxOdd - minEven
}

export function numEquivDominoPairs(dominoes: number[][]): number {
  let ans = 0

  const countMap = new Map<string, number>()

  for (const [a, b] of dominoes) {
    // Sort the pair to ensure [a, b] and [b, a] are considered the same
    const key = a < b ? `${a},${b}` : `${b},${a}`

    // If the pair already exists, increase the answer by the count of the pair
    if (countMap.has(key)) {
      ans += countMap.get(key)!
    }

    // Increment the count for this normalized pair
    countMap.set(key, (countMap.get(key) || 0) + 1)
  }

  return ans
}

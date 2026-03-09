export function closestTarget(words: string[], target: string, startIndex: number): number {
  let ans = Number.MAX_SAFE_INTEGER
  const n = words.length

  for (let i = 0; i < n; i++) {
    const word = words[i]
    if (word === target) {
      ans = Math.min(ans, Math.abs(i - startIndex), n - Math.abs(i - startIndex))
    }
  }

  return ans !== Number.MAX_SAFE_INTEGER ? ans : -1
}
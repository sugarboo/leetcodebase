export function maxChunksToSorted(arr: number[]): number {
  const n = arr.length
  const prefixMax = [...arr]
  const suffixMin = [...arr]

  // Fill the prefixMax array
  for (let i = 1; i < n; i++) {
    prefixMax[i] = Math.max(prefixMax[i - 1], prefixMax[i])
  }

  // Fill the suffixMin array
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(suffixMin[i + 1], suffixMin[i])
  }

  let chunks = 0
  for (let i = 0; i < n; i++) {
    // A new chunk can be created
    if (i === 0 || suffixMin[i] > prefixMax[i - 1]) {
      chunks++
    }
  }

  return chunks
}
